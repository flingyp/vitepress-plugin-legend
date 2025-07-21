# vitepress-markmap-preview

A VitePress plugin that enables interactive mind map previews in Markdown using markmap.

[![npm version](https://img.shields.io/npm/v/vitepress-markmap-preview.svg)](https://www.npmjs.com/package/vitepress-markmap-preview)
[![license](https://img.shields.io/npm/l/vitepress-markmap-preview.svg)](https://github.com/flingyp/vitepress-markmap-preview/blob/main/LICENSE)

## ✨ Features

- 🗺️ Interactive mind map preview for Markdown
- 📝 Supports lists, tables, images, and more
- 🎨 Customizable themes and layout
- 🔧 Easy integration with VitePress
- 📁 File preview via component tag

## 🚀 Quick Start

### Installation

```bash
npm install vitepress-markmap-preview
# or
yarn add vitepress-markmap-preview
# or
pnpm add vitepress-markmap-preview
```

### Usage

1. **Configure VitePress**

```typescript
// .vitepress/config.ts
import { defineConfig } from 'vitepress';
import { vitepressMarkmapPreview } from 'vitepress-markmap-preview';

export default defineConfig({
  markdown: {
    config: (md) => {
      vitepressMarkmapPreview(md);
    },
  },
});
```

Register global components:

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

2. **Use in Markdown**

#### Method 1: Markmap Code Block

````markdown
```markmap
---
title: My Mind Map
markmap:
  colorFreezeLevel: 2
showToolbar: true
---

## Main Topic

- **Bold Text** ~~Strikethrough~~ *Italic* ==Highlight==
- `inline code`
- [x] checkbox
- [Link](https://example.com)

### Sub Topic

1. Ordered list item 1
2. Ordered list item 2

| Table | Header |
|-------|--------|
| Data  | Value  |

![Image](https://example.com/image.png)
```
````

#### Method 2: Component Tag

```markdown
<PreviewMarkmapPath path="./path/to/file.md" />
<PreviewMarkmapPath path="./path/to/file.md" showToolbar />
<PreviewMarkmapPath />
```

### Component Props

| Prop   | Type     | Default | Description                                      |
| ------ | -------- | ------- | ------------------------------------------------ |
| `path` | `string` | -       | Path to markdown file (relative to current file) |

## 📄 License

MIT

## 🙏 Acknowledgments

- [markmap](https://github.com/gera2ld/markmap)
- [VitePress](https://vitepress.dev/)
- [markdown-it](https://github.com/markdown-it/markdown-it)

---

Made with ❤️ by [flingyp](https://github.com/flingyp)
