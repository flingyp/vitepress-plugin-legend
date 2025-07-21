# vitepress-markmap-preview

A plugin for displaying mind maps in VitePress using markmap.

## 🚀 Installation

```bash
npm install vitepress-markmap-preview
# or
yarn add vitepress-markmap-preview
# or
pnpm add vitepress-markmap-preview
```

## ⚙️ Configuration

Add the plugin in `.vitepress/config.ts`:

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

Register the global component in `.vitepress/theme/index.ts`:

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

You can directly use markmap code blocks in Markdown to create mind maps:

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

- **strong** ~~del~~ _italic_ ==highlight==
- `inline code`
- Lists support
- And more...
```

### 📂 Load from External File

Use the `PreviewMarkmapPath` component to load and display mind maps from a specified Markdown file:

```vue
<PreviewMarkmapPath path="./other.md" showToolbar />
```

> If you don't want to show the toolbar, simply omit the `showToolbar` prop.

### 📄 Load Current File

If the `path` prop is not specified, the current Markdown file will be used:

```vue
<PreviewMarkmapPath />
```

## ⚙️ Component Options

### PreviewMarkmapPath Props

| Prop        | Type    | Default | Description                       |
| ----------- | ------- | ------- | --------------------------------- |
| path        | string  | -       | Path to the Markdown file to load |
| showToolbar | boolean | false   | Whether to show the toolbar       |

## 📄 License

- [MIT](https://github.com/flingyp/vitepress-plugin-legend/blob/main/LICENSE)

## 🙏 Acknowledgments

- [markmap](https://github.com/gera2ld/markmap)
- [VitePress](https://vitepress.dev/)
- [markdown-it](https://github.com/markdown-it/markdown-it)

---

Made with ❤️ by [flingyp](https://github.com/flingyp)
