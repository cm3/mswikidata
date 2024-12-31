// wikidataService.js
import { get } from 'svelte/store';
import { currentEntityId, currentEntityLabel, storedLabels, storedPropertyLabels, graphData, languages, links, backwardLinks, backwardProperties } from '../stores.js';
import { renderGraph } from './renderMermaid.js';

// Wikidataのエンティティを取得
export async function fetchEntityData(entityId) {
  const url = `https://www.wikidata.org/wiki/Special:EntityData/${entityId}.json`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data for ${entityId}`);
  }
  return response.json();
}

// プロパティIDのラベルを取得
export async function fetchPropertyLabel(propertyId) {
  const url = `https://www.wikidata.org/wiki/Special:EntityData/${propertyId}.json`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return getLabel(data.entities[propertyId]);
  } catch (error) {
    console.error(`Failed to fetch label for property ${propertyId}`, error);
    return null; // fallback
  }
}

// ラベルのプリロード
export async function preloadLabels(entities) {
  const labels = get(storedLabels);
  for (const entityId of entities) {
    if (!labels[entityId]) {
      try {
        const data = await fetchEntityData(entityId);
        const entity = data.entities[entityId];
        labels[entityId] = getLabel(entity);
      } catch (error) {
        console.error(`Failed to preload label for ${entityId}`, error);
        labels[entityId] = entityId;
      }
    }
  }
  storedLabels.set(labels);
}

// ラベルを追加する
export async function updateLabels() {
  const labels = get(storedLabels);
  console.log(labels);
  let currentGraphData = get(graphData);

  for (const [id, label] of Object.entries(labels)) {
    if (label == null) { // label が null または undefined の場合にスキップ
      continue;
    }
    const nodeRegex = new RegExp(`${id}[\\[]`, 'g');
    if (!currentGraphData.match(nodeRegex)) {
      currentGraphData += `${id}["${label} (${id})"]\n`;
    }
  }
  graphData.set(currentGraphData);
}

// メインのエンティティ処理
export async function processEntity(entityId) {
  // オーバーレイを表示
  const overlay = document.getElementById('rendering-overlay');
  overlay.style.display = 'flex';

  const data = await fetchEntityData(entityId);
  const entity = data.entities[entityId];
  if (!entity) {
    alert(`エンティティ ${entityId} が見つかりませんでした。`);
    return;
  }
  currentEntityId.set(entityId);

  // ラベルを保持
  const labels = get(storedLabels);
  labels[entityId] = getLabel(entity);
  storedLabels.set(labels);
  currentEntityLabel.set(labels[entityId]);

  const relatedEntities = [];
  let currentGraphData = get(graphData);
  const propertyLabels = get(storedPropertyLabels);

  for (const [property, claims] of Object.entries(entity.claims)) {
    const propertyLabel = await fetchPropertyLabel(property);

    for (const claim of claims) {
      if (
        claim.mainsnak?.datatype === 'wikibase-item' &&
        claim.mainsnak?.datavalue?.value?.id
      ) {
        const targetId = claim.mainsnak.datavalue.value.id;
        currentGraphData += `${entityId} -->|"${propertyLabel} (${property})"| ${targetId}\n`;
        if (!propertyLabels[property]) {
          propertyLabels[property] = propertyLabel;
        }
        relatedEntities.push(targetId);
      }
    }
  }

  storedPropertyLabels.set(propertyLabels);
  graphData.set(currentGraphData);
  
  // 関連エンティティのラベルを事前に取得
  await preloadLabels(relatedEntities);

  // プリロード後、リンクデータを作成
  const linksData = relatedEntities.map(targetId => ({
    id: targetId,
    label: get(storedLabels)[targetId] || null,
  }));
  
  links.set(linksData); // ストアにリンクデータを設定

  //await initializeBackwardProperties();
  await fetchFrequentProperties();
  const backwardPropertyElement = document.getElementById("backward-property");
  if (backwardPropertyElement) {
    backwardPropertyElement.value = ""; // 未選択状態に戻す
  }
  backwardLinks.set([]);
  await updateLabels();
  await renderGraph();
  overlay.style.display = 'none'; // オーバーレイを非表示
}

// 言語の変更に応じてラベルを更新する関数
export async function updateLabelsBasedOnLanguages() {
  // オーバーレイを表示
  const overlay = document.getElementById('rendering-overlay');
  overlay.style.display = 'flex';

  const currentLabels = get(storedLabels); // 現在のラベルを取得
  const currentPropertyLabels = get(storedPropertyLabels);
  const currentLanguages = get(languages); // 現在の言語を取得

  console.log("Updating labels based on languages:", currentLanguages);

  for (const id of Object.keys(currentLabels)) {
    try {
      const entityData = await fetchEntityData(id); // エンティティデータを取得
      const label = getLabelFromEntity(entityData.entities[id], null, currentLanguages); // ラベルを取得
      currentLabels[id] = label; // ラベルを更新
    } catch (error) {
      console.error(`Failed to update label for entity ${id}:`, error);
    }
  }

  // プロパティラベルの更新
  for (const id of Object.keys(currentPropertyLabels)) {
    try {
      const label = await fetchPropertyLabel(id); // ラベルを取得
      currentPropertyLabels[id] = label; // ラベルを更新
    } catch (error) {
      console.error(`Failed to update label for property ${id}:`, error);
    }
  }

  storedLabels.set(currentLabels); // ストアに反映
  storedPropertyLabels.set(currentPropertyLabels); // ストアに反映
  currentEntityLabel.set(currentLabels[get(currentEntityId)]);

  await updateGraphLabels(); // グラフデータのラベルを更新
  updateCandidatesLabels(); // 次の候補のラベルを更新
  renderGraph(); // 再描画
  overlay.style.display = 'none'; // オーバーレイを非表示
}

// 言語優先順に従ってラベルを返す（ストアから取得）
function getLabel(entity) {
  const langs = get(languages); // ストアから現在の言語を取得
  return getLabelFromEntity(entity, null, langs); // 内部で統一
}

// ユーティリティ関数: エンティティからラベルを取得
function getLabelFromEntity(entity, fallback, langs) {
  for (const lang of langs) {
    if (entity.labels[lang]?.value) {
      return entity.labels[lang].value;
    }
  }
  return fallback; // 該当するラベルがない場合のフォールバック
}

//言語変換後にグラフのラベルを更新
export async function updateGraphLabels() {
  let currentGraphData = get(graphData);

  // `文字列["文字列"]` の形式の行を削除
  currentGraphData = currentGraphData.replace(/^[QL0-9]+\["[^"]+"\]\n?/gm, '');

  // プロパティラベルの置換
  const propertyLabels = get(storedPropertyLabels); // 現在のプロパティラベルを取得
  currentGraphData = currentGraphData.replace(/"([^"]*?)\s*\((P\d+)\)"/g, (match, label, id) => {
    return `"${propertyLabels[id] || label} (${id})"`;
  });

  graphData.set(currentGraphData); // ストアに反映
  await updateLabels();
}

// 言語変換後にリンクのラベルを更新
export function updateCandidatesLabels() {
  const currentLinks = get(links); // 現在のリンクデータ
  const currentBackwardLinks = get(backwardLinks); // 現在のリンクデータ
  const labels = get(storedLabels); // ラベルデータ

  // リンクのラベルを更新
  const updatedLinks = currentLinks.map(link => ({
    ...link, // 他のプロパティを維持
    label: labels[link.id] || link.label, // 新しいラベルに更新
  }));

  // リンクのラベルを更新
  const updatedBackwardLinks = currentBackwardLinks.map(backwardLink => ({
    ...backwardLink, // 他のプロパティを維持
    label: labels[backwardLink.id] || backwardLink.label, // 新しいラベルに更新
  }));

  links.set(updatedLinks); // ストアに反映
  backwardLinks.set(updatedBackwardLinks); // ストアに反映
}

// SPARQL データを取得する関数
async function fetchSparqlData(query) {
  const languagesList = get(languages).join(',');
  const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(query)}&format=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`SPARQL query failed: ${response.status}`);
    }
    const data = await response.json();
    return data.results.bindings;
  } catch (error) {
    console.error("SPARQL query error:", error);
    return [];
  }
}

// Backward のリンクを設定
export async function fetchBackwardLinks(propertyId) {
  const entityId = get(currentEntityId);
  const languagesList = get(languages).join(',');
  const query = `
    SELECT ?subject ?subjectLabel WHERE {
      ?subject wdt:${propertyId} wd:${entityId} .
      SERVICE wikibase:label { bd:serviceParam wikibase:language "${languagesList},[AUTO_LANGUAGE]". }
    }
    LIMIT 30
  `;

  const results = await fetchSparqlData(query);
  const backwardCandidates = results.map(result => ({
    id: result.subject.value.split('/').pop(),
    label: result.subjectLabel?.value || null,
  }));
  backwardLinks.set(backwardCandidates);
}

// Backward Properties を更新
export async function fetchFrequentProperties() {
  const entityId = get(currentEntityId);
  const languagesList = get(languages).join(',');

  const query = `
    SELECT ?pLabel ?property (COUNT(?property) AS ?count) WHERE {
      ?subject ?property wd:${entityId} .
      ?p wikibase:directClaim ?property .
      SERVICE wikibase:label { bd:serviceParam wikibase:language "${languagesList},[AUTO_LANGUAGE]". }
    }
    GROUP BY ?property ?pLabel
    ORDER BY DESC(?count)
    LIMIT 20
  `;

  const results = await fetchSparqlData(query);

  // プロパティIDを抽出し、ラベルを取得する
  const newProperties = await Promise.all(
    results.map(async result => {
      const id = result.property.value.split('/').pop(); // Pxxx
      const label = result.pLabel?.value || id; // SPARQLのラベルを優先
      return {
        id,
        label,
        count: parseInt(result.count.value, 10),
      };
    })
  );

  // backwardProperties を更新
  backwardProperties.set(newProperties);
}

// プロパティを初期化する関数（現在使われていない、プロパティのfetchが遅ければ使うつもりだった）
export async function initializeBackwardProperties() {
  const predefinedProperties = ['P31', 'P279'];
  const initializedProperties = [];

  for (const propertyId of predefinedProperties) {
    try {
      const label = await fetchPropertyLabel(propertyId);
      initializedProperties.push({
        id: propertyId,
        label: label || propertyId, // ラベルが取得できない場合はIDを使用
      });
    } catch (error) {
      console.error(`Failed to initialize property ${propertyId}:`, error);
      initializedProperties.push({
        id: propertyId,
        label: propertyId, // エラー時はIDを使用
      });
    }
  }

  // backwardProperties にセット
  backwardProperties.set(initializedProperties);
  console.log('Initialized backwardProperties:', initializedProperties);
}