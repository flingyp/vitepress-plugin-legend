# VitePress Plugin Legend

![npm](https://img.shields.io/npm/v/vitepress-plugin-legend.svg)

A comprehensive VitePress plugin that integrates Markmap, Mermaid, Infographic, and PlantUML preview, providing enhanced diagram support for Markdown documents.

## ✨ Features

- 🗺️ **Markmap Integration**: Interactive preview of Markdown mind maps
- 🏞️ **Mermaid Integration**: Interactive charts (flowcharts, sequence diagrams, etc.)
- 📊 **Infographic Integration**: AntV infographic templates
- 📐 **PlantUML Integration**: `plantuml` / `puml` fences via PlantUML Server
- 🎨 **Customizable**: Both plugins support flexible configuration options
- 🔧 **Simple Setup**: Single plugin installation with unified configuration
- 📁 **Component Support**: Vue components for Markmap, Mermaid, Infographic, and PlantUML
- 🚀 **TypeScript**: Full TypeScript support and type definitions

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

Register Vue components in your theme:

```typescript
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { initComponent } from 'vitepress-plugin-legend/component';
// Import CSS
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
          // other markmap options
        },
        mermaid: true, // or false to disable
        infographic: { showToolbar: true },
        plantuml: {
          showToolbar: true,
        },
      });
    },
  },
});
```

### Using Plugins Separately

If you prefer to use plugins separately:

```typescript
// .vitepress/config.ts
import { defineConfig } from 'vitepress';
import {
  vitepressMarkmapPreview,
  vitepressMermaidPreview,
  vitepressInfographicPreview,
  vitepressPlantumlPreview,
} from 'vitepress-plugin-legend';

export default defineConfig({
  markdown: {
    config(md) {
      vitepressMarkmapPreview(md, { showToolbar: true });
      vitepressMermaidPreview(md);
      vitepressInfographicPreview(md);
      vitepressPlantumlPreview(md, { showToolbar: true });
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
  initInfographicComponent,
  initPlantumlComponent,
} from 'vitepress-plugin-legend/component';
// Import CSS
import 'vitepress-plugin-legend/dist/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    initMarkmapComponent(app);
    initMermaidComponent(app);
    initInfographicComponent(app);
    initPlantumlComponent(app);
  },
} satisfies Theme;
```

## 📖 Usage in Markdown

### Markmap

Create mind maps from Markdown lists:

````markdown
```markmap
# Root Node
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

Create various types of charts:

````markdown
```mermaid
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
```

<PreviewMermaidPath path="./other.mmd" />
````

### Infographic

````markdown
```infographic
infographic list-row-simple-horizontal-arrow
data
  title Example
  items
    - label Step 1
      desc Start
```

<PreviewInfographicPath path="./chart.igf" showToolbar />
````

### PlantUML

Diagram source is sent to the official PlantUML Server (SVG output):

````markdown
```plantuml
@startuml
Alice -> Bob: hello
@enduml
```
````

## ⚙️ Configuration Options

### Markmap Options

```typescript
interface VitepressMarkmapPreviewOptions {
  showToolbar?: boolean;
  // other markmap configuration options
}
```

### Mermaid Options

```typescript
interface VitepressMermaidPreviewOptions {
  showToolbar?: boolean;
}
```

### Infographic Options

```typescript
interface VitepressInfographicPreviewOptions {
  showToolbar?: boolean;
}
```

### PlantUML Options

```typescript
interface VitepressPlantumlPreviewOptions {
  showToolbar?: boolean; // defaults to true if omitted; use false to hide toolbar globally
}
```

### Plugin Options

```typescript
interface VitepressPluginLegendOptions {
  markmap?: VitepressMarkmapPreviewOptions | false;
  mermaid?: VitepressMermaidPreviewOptions | false;
  infographic?: VitepressInfographicPreviewOptions | false;
  plantuml?: VitepressPlantumlPreviewOptions | false;
}
```

## 📦 Sub-packages

This plugin integrates the following packages:

| Package Name                                      | Description                           | Version                                                                |
| ------------------------------------------------- | ------------------------------------- | ---------------------------------------------------------------------- |
| [vitepress-markmap-preview](/en/markmap/)         | Markdown mind map preview plugin      | ![npm](https://img.shields.io/npm/v/vitepress-markmap-preview.svg)     |
| [vitepress-mermaid-preview](/en/mermaid/)         | Markdown Mermaid chart preview plugin | ![npm](https://img.shields.io/npm/v/vitepress-mermaid-preview.svg)     |
| [vitepress-infographic-preview](/en/infographic/)  | AntV infographic preview plugin       | ![npm](https://img.shields.io/npm/v/vitepress-infographic-preview.svg) |
| [vitepress-plantuml-preview](/en/plantuml/)       | PlantUML / puml preview plugin        | ![npm](https://img.shields.io/npm/v/vitepress-plantuml-preview.svg)    |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[MIT License](https://github.com/flingyp/vitepress-plugin-legend/blob/main/LICENSE)

---

Made with ❤️ by [flingyp](https://github.com/flingyp)
