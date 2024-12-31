# Mermaid Surfing on Wikidata

**Mermaid Surfing on Wikidata** is a web-based tool to visualize relationships between Wikidata entities using Mermaid diagrams.

## Features

- **Interactive Graphs**:
  Dynamically visualize relationships between Wikidata entities using Mermaid.

- **Entity Navigation**:
  Explore related entities through clickable buttons.

- **Language Customization**:
  Adjust label languages directly through a simple settings panel.

- **Editable Code View**:
  Switch between graph visualization and Mermaid code editing.

- **Wikidata Integration**:
  Automatically fetch and display related entity and property data from Wikidata.

## How to Use

1. **Select an Entity**:
   - Enter a Wikidata entity ID (e.g., `Q12345`) in the input field and click "Move".
2. **Explore Relationships**:
   - Click on related entities to explore their connections and properties.
3. **Adjust Label Languages**:
   - Open the settings panel to set preferred languages for labels.
4. **Edit Mermaid Code**:
   - Toggle to code view, edit the graph description, and re-render.

## Exporting Mermaid Graphs

For exporting diagrams as PNG or other formats, use the [Mermaid Live Editor](https://mermaid-js.github.io/mermaid-live-editor). This tool focuses on real-time exploration and editing, with limited export functionality.

## Technical Details

- **Libraries**:
  - `mermaid.js` for graph rendering.
  - Fetch API for retrieving Wikidata data.
- **Dynamic Features**:
  - Auto-fetching and rendering of related entities and labels.
  - Dropdown options update based on fetched data.

## Requirements

- A modern web browser with JavaScript enabled.

## License

MIT License
