# vitepress-markmap-preview

一个用于在 Vitepress 中预览思维导图（Markmap）的插件，支持 Markdown 文件中的代码块自动渲染为交互式思维导图。

## 特性

- 🧠 支持 Markdown 中的 mermaid 代码块自动渲染为思维导图
- ⚡️ 即插即用，集成简单
- 🎨 支持自适应主题（自动适配明/暗模式）
- 🔄 优雅的交互工具栏，支持缩放、适应屏幕和下载图片
- 📸 支持一键下载思维导图为PNG图片
- 📦 兼容 Vitepress 最新版本
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

2. 在你的 Vitepress 配置文件中引入并注册全局组件：

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { initComponent } from 'vitepress-markmap-preview/component';
import 'vitepress-markmap-preview/dist/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    initComponent(app);
  },
} satisfies Theme;
```

3. 在 Markdown 文件中插入 mermaid 代码块：

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

4. 或者使用组件读取指定的 Markdown 文件内容并渲染为思维导图：

```markdown
<!-- 自闭合标签写法 -->
<PreviewMarkmapPath path="./path/to/your-file.md" />

<!-- 或者使用双标签写法 -->

<PreviewMarkmapPath path="./path/to/your-file.md"></PreviewMarkmapPath>
```

路径可以是相对于当前 Markdown 文件的路径，插件会自动读取文件内容并将其转换为交互式思维导图。

## 功能特性

### 自适应主题

思维导图会自动适配 Vitepress 的明暗模式，节点颜色、连接线和文本都会根据当前主题自动调整，提供最佳的视觉体验。

### 交互式工具栏

思维导图右下角提供了美观的交互式工具栏，支持以下功能：

- 🔍 放大 - 增大思维导图的显示比例
- 🔎 缩小 - 减小思维导图的显示比例
- 🔲 适应屏幕 - 自动调整思维导图大小以适应当前视口
- 📥 下载图片 - 将当前思维导图保存为PNG图片

### 图片导出

点击工具栏中的📥图标，可以将思维导图下载为高质量PNG图片，便于分享或在其他文档中使用。导出时会自动隐藏工具栏，确保图片的美观性。

注意：导出图片之前最好先点击 🔲 按钮，确保思维导图已经适应屏幕，以保证下载的图片内容完整。

**注意：**

- 请确保在 Markdown 文件中的 HTML 标签（如 `<tag>`）都已正确转义，以避免构建错误。建议使用反引号(`)包裹HTML标签，如 `` `<tag>` ``。
- 在开发环境中(`pnpm docs:dev`)组件名称为`PreviewMarkmapPath`，但服务端渲染时会查找`<ReviewMarkmap>`标签并处理。
- 组件标签支持两种写法：自闭合标签和双标签，功能完全相同，可以根据个人习惯选择。

## 支持的语法

插件支持以下方式渲染思维导图：

- **代码块方式**：
  - `mermaid` 或 `mermaid-view`：渲染为思维导图视图
  - `mermaid-render`：将思维导图数据渲染为交互式 HTML

- **组件方式**：
  - `<PreviewMarkmapPath path="./file.md" />`：读取指定 Markdown 文件内容并渲染为思维导图
  - `<PreviewMarkmapPath path="./file.md"></PreviewMarkmapPath>`：双标签写法，功能同上

## 示例

见 [docs](./docs/) 目录，或访问[在线演示](https://flingyp.github.io/vitepress-markmap-preview)。

## 贡献指南

欢迎提交 issue 和 PR 共同完善本插件！

1. Fork 本仓库
2. 新建分支进行开发
3. 提交 PR

## License

[MIT](LICENSE)
