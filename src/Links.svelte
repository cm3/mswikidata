<script>
  import { get } from 'svelte/store';
  import { currentEntityId, links, backwardLinks, backwardProperties } from './stores.js';
  import { fetchBackwardLinks } from './services/wikidataService.js';

  export let onLinkClick; //App.svelte へ接続

  // $backwardLinks のすべてのリンクを処理する関数
  const processAllBackwardLinks = function() {
    const links = get(backwardLinks);
    links.forEach(link => {
      onLinkClick(link.id);
    });
  };
</script>

<div id="links">
  <h3>Next</h3>
  {#if $links.length > 0}
    <ul>
      {#each $links as link}
        <li>
          <button on:click={() => onLinkClick(link.id)}>
            {link.label ? `${link.label} (${link.id})` : link.id}
          </button>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No forward candidates available.</p>
  {/if}

  {#if $currentEntityId != ""}
  <hr />

  <h3>Backward</h3>
  <div id="backward-controller">
    <select id="backward-property" on:change={(event) => fetchBackwardLinks(event.target.value)}>
      <option value="" disabled>Select a property</option>
      {#each $backwardProperties as property}
        <option value={property.id}>
          {#if property.count}
          {property.label} ({property.id}) - {property.count}
          {:else}
          {property.label} ({property.id})
          {/if}
        </option>
      {/each}
    </select>
    {#if $backwardLinks.length >= 2}
      <button class="add-all-btn" on:click={processAllBackwardLinks}>Add All</button>
    {/if}
  </div>

  {#if $backwardLinks.length > 0}
    <ul>
      {#each $backwardLinks as link}
        <li>
          <button on:click={() => onLinkClick(link.id)}>
            {link.label ? `${link.label} (${link.id})` : link.id}
          </button>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No backward candidates available.</p>
  {/if} 
  
  {/if}
</div>

<style>
  #links {
    margin-top: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  li {
    margin: 0;
  }

  button {
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    line-height: 1.2;
  }

  button:hover {
    background-color: #0056b3;
  }

  /* Add All ボタンのスタイル */
  button.add-all-btn {
    background-color: #28a745; /* 通常時の背景色 (緑) */
    color: white; /* 文字色 */
  }

  /* Add All ボタンの hover スタイル */
  button.add-all-btn:hover {
    background-color: #218838; /* ホバー時の背景色 (濃い緑) */
  }

  hr {
    margin: 20px 0;
  }

  #backward-controller {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  select {
    padding: 5px;
    border-radius: 4px;
  }
</style>
