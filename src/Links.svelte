<script>
  import { currentEntityId, links, backwardLinks, backwardProperties } from './stores.js';
  import { fetchBackwardLinks} from './services/wikidataService.js';

  export let onLinkClick; //App.svelte へ接続
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
  }

  button:hover {
    background-color: #0056b3;
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
