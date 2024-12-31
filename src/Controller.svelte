<script>
  import { onMount } from 'svelte';
  import { languages } from './stores.js';
  import { generateDefaultLanguages, copyToClipboard } from './services/utils.js';
  import { updateLabelsBasedOnLanguages } from './services/wikidataService.js';
  import { toggleMermaidView } from './services/renderMermaid.js';

  let languageInput = '';

  // 初期化: 初回マウント時にデフォルトの言語を生成し、言語設定を同期
  onMount(() => {
    generateDefaultLanguages();
    languageInput = $languages.join(','); // 初期値を設定
  });

  function saveSettings() {
    const updatedLanguages = languageInput.split(',').map(lang => lang.trim()).filter(lang => lang);
    languages.set(updatedLanguages); // store を更新
    console.log("Updated languages:", updatedLanguages);
    updateLabelsBasedOnLanguages();
    toggleSettings();
  }

  function cancelSettings() {
    toggleSettings(); // 設定オーバーレイを閉じる
  }

  function toggleSettings() {
    const settingsOverlay = document.getElementById('settings-overlay');
    settingsOverlay.style.display =
      settingsOverlay.style.display === 'flex' ? 'none' : 'flex';
  }
</script>

<div>
  <!-- Top action buttons -->
  <hr />
  <div class="actions">
    <button on:click={toggleMermaidView}>Toggle View</button>
    <button on:click={toggleSettings} id="settings-toggle">Languages</button>
    <button on:click={copyToClipboard}>Copy the Code</button>
    <button on:click={() => window.open("https://mermaid.live/edit", "_blank")}>
      Open Mermaid Online Editor
    </button>
  </div>

  <!-- Settings overlay -->
  <div id="settings-overlay">
    <div class="content">
      <h3>Language Settings</h3>
      <label for="language-input">Preferred languages (comma-separated):</label>
      <input bind:value={languageInput} id="language-input" placeholder="e.g., ja,en,fr" />
      <br /><br />
      <button on:click={saveSettings}>Save</button>
      <button on:click={cancelSettings}>Cancel</button>
    </div>
  </div>
</div>

<style>
  /* Action buttons container */
  .actions {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  button {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }

  button:hover {
    background-color: #0056b3;
  }

  #settings-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    display: none; /* Hidden by default */
    align-items: center;
    justify-content: center;
    z-index: 2000;
  }

  .content {
    background: #333;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
  }

  label {
    font-size: 14px;
    color: #ddd;
    display: block;
    margin-bottom: 10px;
  }

  input {
    padding: 8px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>