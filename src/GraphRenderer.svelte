<script>
  import { graphData } from './stores.js';
</script>

<div>
  <div id="graph-container">
    <div id="rendering-overlay">Processing...</div>
    <div id="graph"></div>
    <textarea id="graph-code" bind:value={$graphData}></textarea>
  </div>
</div>

<style>
  #graph-container {
    border: 1px solid #ccc;
    margin-top: 20px;
    overflow: auto;
    height: 400px;
    position: relative;
  }

  #graph {
    margin: 10px;
  }

  #graph-code {
    display: none;
    width: 100%;
    height: 100%;
  }

  #rendering-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    z-index: 1000;
    display: none;
  }
</style>
