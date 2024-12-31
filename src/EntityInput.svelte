<script>
  import { createEventDispatcher } from 'svelte';
  import { storedLabels, currentEntityId, currentEntityLabel } from './stores.js';

  const dispatch = createEventDispatcher(); // イベント発火用
  let entityId = '';

  function search() {
    if (entityId.trim()) {
      currentEntityId.set(entityId.trim()); // ストアを更新
      dispatch('search', entityId.trim()); // search イベントを発火
    }
  }
</script>

<h3>Current</h3>

<div id="selected-entity">
  <label>
    <input list="entity-list" bind:value={entityId} placeholder="e.g.: Q12345" />
  </label>
  <datalist id="entity-list">
    {#each Object.entries($storedLabels) as [id, label]}
      <option value={id} label={`${label} (${id})`}></option>
    {/each}
  </datalist>
  <button on:click={search}>Go</button>
</div>

{#if $currentEntityId}
  <div>{$currentEntityLabel} ({$currentEntityId})</div>
{/if}

<style>
  #selected-entity {
    margin: 20px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    flex: 1;
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
</style>
