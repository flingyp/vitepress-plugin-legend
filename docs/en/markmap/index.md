# VitePress Markmap Preview

![npm](https://img.shields.io/npm/v/vitepress-markmap-preview.svg)

A VitePress plugin for previewing Markmap mind maps in Markdown.

## ✨ Features

- 🗺️ **Markmap Integration**: Render interactive mind maps directly in Markdown
- 🎨 **Customizable**: Support all markmap configuration options
- 🔧 **Easy Setup**: One-click installation and quick configuration
- 📁 **Component Support**: Provide Vue components for mind map rendering
- 🚀 **TypeScript**: Complete TypeScript support and type definitions
- ⚙️ **Flexible Configuration**: Support custom configuration via frontmatter syntax

## 📦 Installation

```bash
npm install vitepress-markmap-preview
# or
pnpm add vitepress-markmap-preview
# or
yarn add vitepress-markmap-preview
```

## 🚀 Quick Start

### Step 1: Configure VitePress

Add the plugin to your VitePress configuration:

```typescript
// .vitepress/config.ts
import { defineConfig } from 'vitepress';
import { vitepressMarkmapPreview } from 'vitepress-markmap-preview';

export default defineConfig({
  markdown: {
    config(md) {
      vitepressMarkmapPreview(md);
    },
  },
});
```

### Step 2: Register Components

Register Vue components in your theme:

```typescript
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { initComponent } from 'vitepress-markmap-preview/component';
import 'vitepress-markmap-preview/dist/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    initComponent(app);
  },
} satisfies Theme;
```

## 📖 Usage

### 📝 Basic Usage

You can directly use `markmap` code blocks in Markdown to create mind maps:

```markmap
# Markmap

## Links

- [Website](https://markmap.js.org/)
- [GitHub](https://github.com/gera2ld/markmap)

## Features

- **strong** ~~del~~ *italic* ==highlight==
- `inline code`
- Lists support
- And more...
```

### ⚙️ Custom Configuration

Support custom markmap configuration options via frontmatter syntax:

```markmap
---
showToolbar: true
markmap:
  color: ["#2ecc71", "#3498db", "#9b59b6", "#e67e22", "#e74c3c"]
  initialExpandLevel: 2
  maxWidth: 400
  duration: 300
  zoom: true
  pan: true
---

# Project Structure
## Frontend
### React
#### Components
#### State Management
### Vue
#### Components
#### State Management
## Backend
### Node.js
#### Express
#### Koa
```

### 📂 Reading External Files

Use the `PreviewMarkmapPath` component to read specified Markdown file content and display it as a mind map:

```vue
<PreviewMarkmapPath path="./other.md" showToolbar />
```

> If you don't want to show the toolbar, simply omit the `showToolbar` attribute.

### 📄 Reading Current File

When no path attribute is specified, it will read the current Markdown file content:

```vue
<PreviewMarkmapPath />
```

## ⚙️ Configuration Options

### 🧩 PreviewMarkmapPath Component Properties

| Property    | Type    | Default | Description                       |
| ----------- | ------- | ------- | --------------------------------- |
| path        | string  | -       | Path to the Markdown file to read |
| showToolbar | boolean | false   | Whether to show the toolbar       |

### 🎨 Markmap Configuration Options

Support the following options via the `markmap` field in frontmatter:

#### Basic Options

| Option               | Type     | Default             | Description                                         |
| -------------------- | -------- | ------------------- | --------------------------------------------------- |
| `showToolbar`        | boolean  | true                | Whether to show the toolbar                         |
| `color`              | string[] | d3.schemeCategory10 | Array of node colors                                |
| `initialExpandLevel` | number   | -1                  | Initial expansion level, -1 means expand all levels |
| `maxWidth`           | number   | 0                   | Maximum width of nodes, 0 means no limit            |
| `duration`           | number   | 500                 | Animation duration (milliseconds)                   |

#### Layout Options

| Option              | Type   | Default | Description        |
| ------------------- | ------ | ------- | ------------------ |
| `spacingHorizontal` | number | 80      | Horizontal spacing |
| `spacingVertical`   | number | 5       | Vertical spacing   |
| `paddingX`          | number | 2       | X-axis padding     |

#### Interaction Options

| Option     | Type    | Default | Description                                |
| ---------- | ------- | ------- | ------------------------------------------ |
| `zoom`     | boolean | true    | Whether to allow zooming                   |
| `pan`      | boolean | true    | Whether to allow panning                   |
| `autoFit`  | boolean | false   | Whether to automatically fit the container |
| `fitRatio` | number  | 1       | Fit ratio                                  |

#### Advanced Options

| Option              | Type    | Default | Description                   |
| ------------------- | ------- | ------- | ----------------------------- |
| `colorFreezeLevel`  | number  | 0       | Color freeze level            |
| `toggleRecursively` | boolean | false   | Whether to toggle recursively |
| `scrollForPan`      | boolean | false   | Whether to scroll for panning |
| `maxInitialScale`   | number  | 1       | Maximum initial scale         |
| `lineWidth`         | number  | 1       | Width of lines between nodes  |

### 🔧 Configuration Examples

#### Basic Configuration Example

```yaml
---
showToolbar: true
markmap:
  color: ['#2ecc71', '#3498db', '#9b59b6']
  initialExpandLevel: 2
  maxWidth: 400
  duration: 300
---
```

#### Advanced Configuration Example

```yaml
---
showToolbar: false
markmap:
  color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
  initialExpandLevel: -1
  maxWidth: 600
  duration: 500
  spacingHorizontal: 100
  spacingVertical: 10
  zoom: true
  pan: true
  colorFreezeLevel: 2
  lineWidth: 2
---
```

#### Dark Mode Adaptation Configuration

```yaml
---
showToolbar: true
markmap:
  color: ['#2ecc71', '#3498db', '#9b59b6', '#f39c12', '#e74c3c']
  initialExpandLevel: 1
  maxWidth: 500
  duration: 400
  spacingHorizontal: 80
  spacingVertical: 5
---
```

## 📚 More Examples

Check out the [Configuration Examples](./configuration.md) for more detailed usage examples and configuration instructions.

## 📄 License

[MIT License](https://github.com/flingyp/vitepress-plugin-legend/blob/main/LICENSE)

## 🙏 Acknowledgments

- [markmap](https://github.com/gera2ld/markmap)
- [VitePress](https://vitepress.dev/)
- [markdown-it](https://github.com/markdown-it/markdown-it)

---

Made with ❤️ by [flingyp](https://github.com/flingyp)
