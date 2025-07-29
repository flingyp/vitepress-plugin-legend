# VitePress Markmap Preview

![npm](https://img.shields.io/npm/v/vitepress-markmap-preview.svg)

一个 VitePress 插件，用于在 Markdown 中预览 Markmap 思维导图。

## ✨ 特性

- 🗺️ **Markmap 集成**: 在 Markdown 中直接渲染交互式思维导图
- 🎨 **可定制**: 支持 markmap 的所有配置选项
- 🔧 **简单设置**: 一键安装，快速配置
- 📁 **组件支持**: 提供 Vue 组件用于思维导图渲染
- 🚀 **TypeScript**: 完整的 TypeScript 支持和类型定义

## 📦 安装

```bash
npm install vitepress-markmap-preview
# 或
pnpm add vitepress-markmap-preview
# 或
yarn add vitepress-markmap-preview
```

## 🚀 快速开始

### 步骤 1：配置 VitePress

在 VitePress 配置中添加插件：

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

### 步骤 2：注册组件

在主题中注册 Vue 组件：

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

## 📖 使用方法

### 📝 基本用法

可以直接在 Markdown 中使用 `markmap` 代码块来创建思维导图：

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

### 📂 读取外部文件

使用 `PreviewMarkmapPath` 组件可以读取指定的 Markdown 文件内容并展示为思维导图：

```vue
<PreviewMarkmapPath path="./other.md" showToolbar />
```

> 不显示工具栏的话，则不写 `showToolbar` 属性即可。

### 📄 读取当前文件

不指定 path 属性时，将读取当前 Markdown 文件的内容：

```vue
<PreviewMarkmapPath />
```

## ⚙️ 配置选项

### 🧩 PreviewMarkmapPath 组件属性

| 属性名      | 类型    | 默认值 | 说明                       |
| ----------- | ------- | ------ | -------------------------- |
| path        | string  | -      | 要读取的 Markdown 文件路径 |
| showToolbar | boolean | false  | 是否显示工具栏             |

## 📄 License

[MIT License](https://github.com/flingyp/vitepress-plugin-legend/blob/main/LICENSE)

## 🙏 致谢

- [mermaid](https://github.com/mermaid-js/mermaid)
- [VitePress](https://vitepress.dev/)
- [markdown-it](https://github.com/markdown-it/markdown-it)

---

Made with ❤️ by [flingyp](https://github.com/flingyp)
