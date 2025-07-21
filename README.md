# VitePress Markmap Preview

A VitePress plugin that enables interactive mind map previews in Markdown using markmap.

[English](README.md) | [中文](README.zh-CN.md)

[![npm version](https://img.shields.io/npm/v/vitepress-markmap-preview.svg)](https://www.npmjs.com/package/vitepress-markmap-preview)
[![license](https://img.shields.io/npm/l/vitepress-markmap-preview.svg)](https://github.com/flingyp/vitepress-markmap-preview/blob/main/LICENSE)

## ✨ Features

- 🗺️ **Interactive Mind Maps**: Render markdown content as interactive mind maps
- 📝 **Markdown Support**: Support for various markdown elements including lists, tables, images, and more
- 🎨 **Customizable**: Configurable themes, colors, and layout options
- 🔧 **Easy Integration**: Simple setup with VitePress
- 📁 **File Preview**: Preview markdown files as mind maps using component tags
- 🎯 **Mermaid Syntax**: Support for mermaid code blocks with markmap rendering

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

Add the plugin to your VitePress configuration:

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

In VitePress, configure global components:

```typescript
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { initComponent } from 'vitepress-markmap-preview/component';
import 'vitepress-markmap-preview/dist/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register custom global components
    initComponent(app);
  },
} satisfies Theme;
```

2. **Use in Markdown**

#### Method 1: Mermaid Code Blocks

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
# Your mindmap content
```
````

> **Show Toolbar Option**
>
> You can control whether to display the toolbar by adding a `showToolbar` field in the YAML frontmatter of the code block:
>
> - `showToolbar: true` will show the toolbar, `showToolbar: false` will hide it.

#### Method 2: Component Tags

Preview a specific markdown file:

```markdown
<!-- Support relative path and absolute path -->
<PreviewMarkmapPath path="./path/to/file.md" />
```

> **Show Toolbar Option**
>
> Add the `showToolbar` attribute to the component to display the toolbar:
>
> ```markdown
> <PreviewMarkmapPath path="./path/to/file.md" showToolbar />
> ```
>
> Omit `showToolbar` to hide the toolbar.

Preview current file content:

```markdown
<PreviewMarkmapPath />
```

## 🎛️ Configuration

### Markmap Options

The plugin supports all markmap configuration options:

```typescript
interface IMarkmapOptions {
  autoFit?: boolean;
  color?: (node: INode) => string;
  colorFreezeLevel?: number;
  duration?: number;
  embedGlobalCSS?: boolean;
  maxWidth?: number;
  nodeMinHeight?: number;
  paddingX?: number;
  paddingY?: number;
  renderHtml?: boolean;
  spacingHorizontal?: number;
  spacingVertical?: number;
  style?: (id: string) => string;
  zoom?: boolean;
}
```

### Component Props

#### PreviewMarkmapPath

| Prop   | Type     | Default | Description                                      |
| ------ | -------- | ------- | ------------------------------------------------ |
| `path` | `string` | -       | Path to markdown file (relative to current file) |

## 🛠️ Development

### Prerequisites

- Node.js >= 18
- pnpm >= 8

### Setup

```bash
# Clone the repository
git clone https://github.com/flingyp/vitepress-markmap-preview.git
cd vitepress-markmap-preview

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Start docs development server
pnpm docs:dev
```

### Build

```bash
# Build the plugin
pnpm build

# Build documentation
pnpm docs:build
```

### Testing

```bash
# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix
```

## 📁 Project Structure

```
vitepress-markmap-preview/
├── core/                    # Plugin source code
│   ├── components/         # Vue components
│   │   ├── MindMapRoot.vue
│   │   └── PreviewMarkmapPath.vue
│   ├── utils/             # Utility functions
│   │   ├── parse-code.ts
│   │   └── parse-component.ts
│   └── index.ts           # Plugin entry point
├── docs/                   # Documentation
├── .changeset/            # Version management
└── package.json
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`pnpm commit`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Build process or auxiliary tool changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [markmap](https://github.com/gera2ld/markmap) - The core mind map library
- [VitePress](https://vitepress.dev/) - The static site generator
- [markdown-it](https://github.com/markdown-it/markdown-it) - Markdown parser

## 📞 Support

If you have any questions or need help, please:

- [Open an issue](https://github.com/flingyp/vitepress-markmap-preview/issues)
- [Check the documentation](https://github.com/flingyp/vitepress-markmap-preview/tree/main/docs)

---

Made with ❤️ by [flingyp](https://github.com/flingyp)
