# vitepress-mermaid-preview

一个用于在 VitePress 中展示 Mermaid 图表的插件。

## 🚀 安装

```bash
npm install vitepress-mermaid-preview
# or
yarn add vitepress-mermaid-preview
# or
pnpm add vitepress-mermaid-preview
```

## ⚙️ 配置

在 `.vitepress/config.ts` 中添加插件：

```typescript
// .vitepress/config.ts
import { defineConfig } from 'vitepress';
import { vitepressMermaidPreview } from 'vitepress-mermaid-preview';

export default defineConfig({
  markdown: {
    config: (md) => {
      vitepressMermaidPreview(md, {
        showToolbar: false, // 全局设置：是否默认显示工具栏
      });
    },
  },
});
```

在 `.vitepress/theme/index.ts` 中注册全局组件：

```typescript
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { initComponent } from 'vitepress-mermaid-preview/component';
import 'vitepress-mermaid-preview/dist/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    initComponent(app);
  },
} satisfies Theme;
```

## 📖 使用方法

### 📝 基本用法

可以直接在 Markdown 中使用 `mermaid` 代码块来创建图表：

```mermaid
gantt
    title A Gantt Diagram
    dateFormat YYYY-MM-DD
    section Section
        A task          :a1, 2014-01-01, 30d
        Another task    :after a1, 20d
    section Another
        Task in Another :2014-01-12, 12d
        another task    :24d
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

### 🔧 工具栏控制

可以在代码块中使用 frontmatter 控制工具栏显示：

```mermaid
---
showToolbar: true
---
sequenceDiagram
    participant A
    participant B
    A->>B: Hello
    B-->>A: Hi
```

### 📂 读取文件

使用 `PreviewMermaidPath` 组件可以读取指定的 Mermaid 文件内容并展示为图表：

```vue
<!-- 基本用法（默认隐藏工具栏） -->
<PreviewMermaidPath path="./other.mmd" />

<!-- 显示工具栏 -->
<PreviewMermaidPath path="./other.mmd" showToolbar />

<!-- 读取当前文件内容 -->
<PreviewMermaidPath showToolbar />
```

## ⚙️ 配置选项

### PreviewMermaidPath 组件属性

| 属性名      | 类型    | 默认值 | 说明                      |
| ----------- | ------- | ------ | ------------------------- |
| path        | string  | -      | 要读取的 Mermaid 文件路径 |
| showToolbar | boolean | false  | 是否显示工具栏            |

## 📄 License

[MIT License](https://github.com/flingyp/vitepress-plugin-legend/blob/main/LICENSE)

## 🙏 致谢

- [mermaid](https://github.com/mermaid-js/mermaid)
- [VitePress](https://vitepress.dev/)
- [markdown-it](https://github.com/markdown-it/markdown-it)

---

Made with ❤️ by [flingyp](https://github.com/flingyp)
