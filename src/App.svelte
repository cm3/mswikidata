<script>
	import EntityInput from './EntityInput.svelte';
	import GraphRenderer from './GraphRenderer.svelte';
	import Links from './Links.svelte';
	import Controller from './Controller.svelte';
	import {processEntity} from './services/wikidataService.js';

	async function onEntitySearch(entityId) {
		try {
			await processEntity(entityId);
		} catch (error) {
			console.error("Failed to process entity:", error);
			alert("エンティティの処理に失敗しました。");
		}
	}
</script>

<main>
	<h1>
		<img src="./smlogo.png" alt="Logo" />
		Mermaid Surfing on Wikidata
	</h1>
	<EntityInput on:search={(event) => onEntitySearch(event.detail)} />
	<Links onLinkClick={onEntitySearch} />
	<Controller />
	<GraphRenderer />
</main>

<style>
	h1 {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	h1 img {
		width: 48px;
		height: 48px;
	}
</style>
