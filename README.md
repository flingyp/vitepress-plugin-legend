# VitePress Plugin Legend

![npm](https://img.shields.io/npm/v/vitepress-plugin-legend.svg)

A comprehensive VitePress plugin that integrates both Markmap and Mermaid diagram preview functionality for enhanced Markdown documentation.

[English](README.md) | [中文](README.zh-CN.md)

## ✨ Features

- 🗺️ **Markmap Integration**: Interactive mind map preview for Markdown
- 🏞️ **Mermaid Integration**: Interactive diagrams (flowcharts, sequence diagrams, etc.)
- 🎨 **Customizable**: Flexible configuration options for both plugins
- 🔧 **Easy Setup**: Single plugin installation with unified configuration
- 📁 **Component Support**: Vue components for both Markmap and Mermaid
- 🚀 **TypeScript**: Full TypeScript support with type definitions

## 📦 Installation

```bash
npm install vitepress-plugin-legend
# or
pnpm add vitepress-plugin-legend
# or
yarn add vitepress-plugin-legend
```

## 🚀 Quick Start

### Step 1: Configure VitePress

Add the plugin to your VitePress configuration:

```typescript
// .vitepress/config.ts
import { defineConfig } from 'vitepress';
import { vitepressPluginLegend } from 'vitepress-plugin-legend';

export default defineConfig({
  markdown: {
    config(md) {
      vitepressPluginLegend(md);
    },
  },
});
```

### Step 2: Register Components

Register the Vue components in your theme:

```typescript
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { initComponent } from 'vitepress-plugin-legend/component';
import 'vitepress-plugin-legend/dist/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    initComponent(app);
  },
} satisfies Theme;
```

### Advanced Configuration

```typescript
// .vitepress/config.ts
import { defineConfig } from 'vitepress';
import { vitepressPluginLegend } from 'vitepress-plugin-legend';

export default defineConfig({
  markdown: {
    config(md) {
      vitepressPluginLegend(md, {
        markmap: {
          showToolbar: true,
          // Other markmap options
        },
        mermaid: true, // or false to disable
      });
    },
  },
});
```

### Using Individual Plugins

If you prefer to use plugins separately:

```typescript
// .vitepress/config.ts
import { defineConfig } from 'vitepress';
import {
  vitepressMarkmapPreview,
  vitepressMermaidPreview,
} from 'vitepress-plugin-legend';

export default defineConfig({
  markdown: {
    config(md) {
      vitepressMarkmapPreview(md, { showToolbar: true });
      vitepressMermaidPreview(md);
    },
  },
});
```

```typescript
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import {
  initMarkmapComponent,
  initMermaidComponent,
} from 'vitepress-plugin-legend/component';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    initMarkmapComponent(app);
    initMermaidComponent(app);
  },
} satisfies Theme;
```

## 📖 Usage in Markdown

### Markmap

Create mind maps from Markdown lists:

````markdown
```markmap
# Root
## Branch 1
- Item 1
- Item 2
## Branch 2
- Item A
- Item B
```

<PreviewMarkmapPath path="./other.md" showToolbar />
<PreviewMarkmapPath />
````

### Mermaid

Create various diagrams:

````markdown
```mermaid
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
```

<PreviewMermaidPath path="./other.mmd" />
````

## ⚙️ Configuration Options

### Markmap Options

```typescript
interface VitepressMarkmapPreviewOptions {
  showToolbar?: boolean;
  // Additional markmap configuration options
}
```

### Plugin Options

```typescript
interface VitepressPluginLegendOptions {
  markmap?: VitepressMarkmapPreviewOptions | false;
  mermaid?: boolean;
}
```

## 📦 Sub-packages

This plugin integrates the following packages:

| Package                                                           | Description                             | Version                                                            |
| ----------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------ |
| [vitepress-markmap-preview](./packages/vitepress-markmap-preview) | Markdown mind map preview plugin        | ![npm](https://img.shields.io/npm/v/vitepress-markmap-preview.svg) |
| [vitepress-mermaid-preview](./packages/vitepress-mermaid-preview) | Markdown Mermaid diagram preview plugin | ![npm](https://img.shields.io/npm/v/vitepress-mermaid-preview.svg) |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[MIT License](https://github.com/flingyp/vitepress-plugin-legend/blob/main/LICENSE)

---

Made with ❤️ by [flingyp](https://github.com/flingyp)
