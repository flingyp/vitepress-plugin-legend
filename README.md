# vitepress-markmap-preview

一个用于在 Vitepress 中预览思维导图（Markmap）的插件，支持 Markdown 文件中的代码块自动渲染为交互式思维导图。

## 特性

- 🧠 支持 Markdown 中的 mermaid 代码块自动渲染为思维导图
- ⚡️ 即插即用，集成简单
- 🎨 支持自适应主题（自动适配明/暗模式）
- �� 兼容 Vitepress 最新版本
- 📄 支持读取指定 Markdown 文件并渲染为思维导图

## 安装

```bash
pnpm add vitepress-markmap-preview -D
# 或者使用 npm
npm install vitepress-markmap-preview -D
# 或者使用 yarn
yarn add vitepress-markmap-preview -D
```

## 使用方法

1. 在你的 Vitepress 配置文件中引入并注册插件：

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress';
import { vitepressMarkmapPreview } from 'vitepress-markmap-preview';

export default defineConfig({
  // ...其他配置
  markdown: {
    config(md) {
      // 使用插件
      md.use(vitepressMarkmapPreview);
    },
  },
});
```

2. 在 Markdown 文件中插入 mermaid 代码块：

````markdown
```mermaid
---
title: markmap
markmap:
  colorFreezeLevel: 2
---
# 思维导图标题
## 一级节点
- 二级节点
  - 三级节点
```
````

3. 或者使用组件读取指定的 Markdown 文件内容并渲染为思维导图：

```markdown
<ReviewMarkmap path="./path/to/your-file.md" />
```

路径可以是相对于当前 Markdown 文件的路径，插件会自动解析文件内容并将其转换为交互式思维导图。

## 支持的语法

插件支持以下方式渲染思维导图：

- **代码块方式**：
  - `mermaid` 或 `mermaid-view`：渲染为思维导图视图
  - `mermaid-render`：将思维导图数据渲染为交互式 HTML

- **组件方式**：
  - `<ReviewMarkmap path="./file.md" />`：读取指定 Markdown 文件内容并渲染为思维导图

## 示例

见 [docs](./docs/) 目录，或访问[在线演示](https://flingyp.github.io/vitepress-markmap-preview)。

## 贡献指南

欢迎提交 issue 和 PR 共同完善本插件！

1. Fork 本仓库
2. 新建分支进行开发
3. 提交 PR

## License

[MIT](LICENSE)
