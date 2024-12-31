// utils.js
import { get } from 'svelte/store';
import { languages, graphData } from '../stores.js';

export const overlay = document.getElementById('rendering-overlay') || { style: {} };

// ドロップダウンのオプション更新
export function updateDropdownOptions(storedLabels) {
  const dataList = document.getElementById('entity-list');
  if (!dataList) return;
  dataList.innerHTML = '';
  for (const [id, label] of Object.entries(storedLabels)) {
    const option = document.createElement('option');
    option.value = id;
    option.label = `${label} (${id})`;
    dataList.appendChild(option);
  }
}

// デフォルトの言語リストを生成する関数
export function generateDefaultLanguages() {
  const uniqueLanguages = [];
  const navigatorLanguages = window.navigator.languages || ['en']; // デフォルトは英語
  navigatorLanguages.map(lang => lang.slice(0, 2)).forEach(lang => {
    if (!uniqueLanguages.includes(lang)) {
      uniqueLanguages.push(lang);
    }
  });
  console.log("Generated default languages:", uniqueLanguages);
  languages.set(uniqueLanguages); // ストアに初期値を設定
}

// Copy the graph data to the clipboard
export function copyToClipboard() {
  const text = get(graphData); // Get the current graph data
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert('Mermaid code has been copied!');
    })
    .catch(err => {
      console.error('Failed to copy the code:', err);
    });
}
