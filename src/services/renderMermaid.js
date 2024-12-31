// renderMermaid.js
import { get } from 'svelte/store';
import { graphData } from '../stores.js'; // Store をインポート
import mermaid from 'mermaid';

let showCode = false;
let isRendering = false;

export function initMermaid() {
  mermaid.initialize({ startOnLoad: false, theme: 'forest' });
}

// 実際にグラフを描画する関数
export function renderGraph() {
  if (isRendering) {
    console.log("Rendering in progress. Skipping...");
    return;
  }

  isRendering = true;

  const currentGraphData = get(graphData); // Store から現在の値を取得
  const graphContainer = document.getElementById('graph');

  // グラフの初期化
  graphContainer.innerHTML = ''; // 古い内容をクリア
  const graphDiv = document.createElement('div');
  graphDiv.className = 'mermaid';
  graphDiv.textContent = currentGraphData;
  graphContainer.appendChild(graphDiv);

  // Mermaid でグラフを描画
  mermaid
    .run({
      nodes: [graphDiv], // 描画対象のノードを指定
    })
    .then(() => {
      console.log("Mermaid graph rendered successfully.");
    })
    .catch((error) => {
      console.error("Mermaid rendering failed:", error);
    })
    .finally(() => {
      isRendering = false;
    });
}

// コードビューと可視化ビューを切り替え
export function toggleMermaidView() {
  showCode = !showCode;
  document.getElementById('graph').style.display = showCode ? 'none' : 'block';
  document.getElementById('graph-code').style.display = showCode ? 'block' : 'none';

  if (!showCode) {
    // コード編集内容を反映
    renderGraph();
  }
}
