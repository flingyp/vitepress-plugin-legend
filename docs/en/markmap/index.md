# VitePress Markmap Preview

![npm](https://img.shields.io/npm/v/vitepress-markmap-preview.svg)

A VitePress plugin for previewing Markmap mind maps in Markdown.

## ✨ Features

- 🗺️ **Markmap Integration**: Directly render interactive mind maps in Markdown
- 🎨 **Customizable**: Support all markmap configuration options
- 🔧 **Easy Setup**: One-click installation, quick configuration
- 📁 **Component Support**: Provide Vue components for mind map rendering
- 🚀 **TypeScript**: Full TypeScript support with type definitions

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
---
title: markmap
markmap:
  colorFreezeLevel: 2
---

## Links

- [Website](https://markmap.js.org/)
- [GitHub](https://github.com/gera2ld/markmap)

## Features

- **strong** ~~del~~ *italic* ==highlight==
- `inline code`
- Lists support
- And more...
```

```text
---
title: markmap
markmap:
  colorFreezeLevel: 2
---

## Links

- [Website](https://markmap.js.org/)
- [GitHub](https://github.com/gera2ld/markmap)

## Features

- **strong** ~~del~~ _italic_ ==highlight==
- `inline code`
- Lists support
- And more...
```

### 📂 Reading External Files

Use the `PreviewMarkmapPath` component to read specified Markdown file content and display it as a mind map:

```vue
<PreviewMarkmapPath path="./other.md" showToolbar />
```

> To hide the toolbar, simply omit the `showToolbar` attribute.

### 📄 Reading Current File

When no path attribute is specified, it will read the content of the current Markdown file:

```vue
<PreviewMarkmapPath />
```

## ⚙️ Configuration Options

### 🧩 PreviewMarkmapPath Component Properties

| Property    | Type    | Default | Description                   |
| ----------- | ------- | ------- | ----------------------------- |
| path        | string  | -       | Path to Markdown file to read |
| showToolbar | boolean | false   | Whether to show toolbar       |

## 📄 License

[MIT License](https://github.com/flingyp/vitepress-plugin-legend/blob/main/LICENSE)

## 🙏 Acknowledgments

- [mermaid](https://github.com/mermaid-js/mermaid)
- [VitePress](https://vitepress.dev/)
- [markdown-it](https://github.com/markdown-it/markdown-it)

---

Made with ❤️ by [flingyp](https://github.com/flingyp)
