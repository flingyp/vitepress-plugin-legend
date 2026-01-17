# vitepress-infographic-preview

A VitePress plugin for previewing AntV Infographic charts.

## 🚀 Installation

```bash
npm install vitepress-infographic-preview
# or
yarn add vitepress-infographic-preview
# or
pnpm add vitepress-infographic-preview
```

## ⚙️ Configuration

Add the plugin in `.vitepress/config.ts`:

```typescript
import { defineConfig } from 'vitepress';
import { vitepressInfographicPreview } from 'vitepress-infographic-preview';

export default defineConfig({
  markdown: {
    config: (md) => {
      vitepressInfographicPreview(md, {
        showToolbar: false, // Global setting: whether to show toolbar by default
      });
    },
  },
});
```

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

## 📖 Usage

### 📝 Basic Usage

You can directly use infographic code blocks in Markdown to create charts:

```infographic
infographic list-row-simple-horizontal-arrow
data
  title 示例流程
  items
    - label 步骤 1
      desc 开始
    - label 步骤 2
      desc 进行中
    - label 步骤 3
      desc 完成
```

### 🔧 Toolbar Control

You can control toolbar visibility using frontmatter in code blocks:

```infographic
---
showToolbar: true
---
infographic sequence-horizontal-simple
data
  lists
    - label 阶段一
      desc 初始阶段
    - label 阶段二
      desc 开发阶段
    - label 阶段三
      desc 发布阶段
```

### 📂 Load from File

Use the `PreviewInfographicPath` component to load and display charts from a specified file:

```vue
<PreviewInfographicPath path="./chart.igf" />

<!-- Show toolbar -->
<PreviewInfographicPath path="./chart.igf" showToolbar />
```

## ⚙️ Component Options

### PreviewInfographicPath Props

| Prop        | Type    | Default | Description                  |
| ----------- | ------- | ------- | ---------------------------- |
| path        | string  | -       | Path to the infographic file |
| showToolbar | boolean | false   | Whether to show the toolbar  |

## 📄 License

- [MIT](https://github.com/flingyp/vitepress-plugin-legend/blob/main/LICENSE)

## 🙏 Acknowledgments

- [AntV Infographic](https://infographic.antv.vision/)
- [VitePress](https://vitepress.dev/)
- [markdown-it](https://github.com/markdown-it/markdown-it)

---

Made with ❤️ by [flingyp](https://github.com/flingyp)
