# Infographic

AntV Infographic is a library focused on infographic visualization, providing 236+ built-in templates.

## Installation

```bash
npm install vitepress-infographic-preview
# or
yarn add vitepress-infographic-preview
# or
pnpm add vitepress-infographic-preview
```

## Configuration

### 1. Plugin Setup

Add the plugin in `.vitepress/config.ts`:

```typescript
import { defineConfig } from 'vitepress';
import { vitepressInfographicPreview } from 'vitepress-infographic-preview';

export default defineConfig({
  markdown: {
    config: (md) => {
      vitepressInfographicPreview(md);
    },
  },
});
```

### 2. Component Registration

Register the global component in `.vitepress/theme/index.ts`:

```typescript
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { initComponent } from 'vitepress-infographic-preview/component';
import 'vitepress-infographic-preview/dist/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    initComponent(app);
  },
} satisfies Theme;
```

## Usage

### Basic Usage

Create infographics using Markdown code blocks:

```infographic
infographic list-row-simple-horizontal-arrow
data
  title Sample Flow
  items
    - label Step 1
      desc Start
    - label Step 2
      desc In Progress
    - label Step 3
      desc Complete
```

### Show Toolbar

Control toolbar visibility using frontmatter:

```infographic
---
showToolbar: true
---
infographic sequence-horizontal-simple
data
  lists
    - label Phase 1
      desc Initial Phase
    - label Phase 2
      desc Development Phase
    - label Phase 3
      desc Release Phase
```

### Load from External File

Use the `PreviewInfographicPath` component to load an external file:

```vue
<PreviewInfographicPath path="./chart.igf" showToolbar />
```

## Configuration Options

### vitepressInfographicPreview Options

| Option      | Type    | Default | Description             |
| ----------- | ------- | ------- | ----------------------- |
| showToolbar | boolean | false   | Show toolbar by default |

### PreviewInfographicPath Component Props

| Prop        | Type    | Default | Description           |
| ----------- | ------- | ------- | --------------------- |
| path        | string  | -       | Infographic file path |
| showToolbar | boolean | false   | Show toolbar          |

## Toolbar Features

- **Zoom In/Out**: Zoom infographic
- **Fit to Screen**: Reset zoom
- **Copy Code**: Copy infographic syntax to clipboard
- **Download Chart**: Download chart as PNG image
- **Fullscreen**: Fullscreen preview

## Template Types

AntV Infographic supports various template types:

- **Chart**: Bar, Pie, Line, Word Cloud, etc.
- **Comparison**: Binary comparison, Hierarchy comparison, Quadrant, etc.
- **Hierarchy**: Mind Map, Tree structure, etc.
- **List**: List, Grid, Pyramid, etc.
- **Quadrant**: Quadrant charts
- **Relation**: Relation graphs, DAG, etc.
- **Sequence**: Timeline, Steps, Flow, etc.

For more templates, visit [AntV Infographic Gallery](https://infographic.antv.vision/gallery).

## Related Links

- [AntV Infographic Documentation](https://infographic.antv.vision/learn)
- [Gallery](https://infographic.antv.vision/gallery)
- [API Reference](https://infographic.antv.vision/reference)
