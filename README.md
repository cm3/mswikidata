# Mermaid Surfing on Wikidata

**Mermaid Surfing on Wikidata** is a web-based tool to visualize relationships between Wikidata entities using Mermaid diagrams. This tool is hosted online at Vercel: [Mermaid Surfing on Wikidata](https://mswikidata.vercel.app/) ![Vercel](https://vercelbadge.vercel.app/api/cm3/mswikidata). You can try it live without any setup!

## Features

- **Interactive Graphs**:
  Dynamically visualize relationships between Wikidata entities using Mermaid.

- **Entity Navigation**:
  Explore related entities through clickable buttons.

- **Language Customization**:
  Adjust label languages directly through a simple settings panel.

- **Editable Code View**:
  Switch between graph visualization and Mermaid code editing.

## How to Use

1. **Select an Entity**:
   - Enter a Wikidata entity ID (e.g., `Q11603425`) in the input field and click "Move".
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

## Development Setup

To run this project locally, follow these steps:

1. **Clone the Repository**:

```bash
git clone https://github.com/cm3/mswikidata.git
cd mswikidata
```

2. **Install Dependencies**:

  Make sure you have Node.js installed. Then run `npm install`.

3. **Build and Run the Project**:

  Start a development server with `npm run dev`.

4. **Build for Production** (Optional):

  To generate a production-ready build, run `npm run build`.

## License

[MIT License](https://github.com/cm3/mswikidata/blob/main/LICENSE)

## Included Code

This project includes the following third-party code:

- [GitHub Corners](https://github.com/tholman/github-corners) by Tim Holman
  Licensed under the [MIT License](https://github.com/tholman/github-corners/blob/master/license.md).  
  GitHub Corners is used to add a stylish corner link to this project's repository.
