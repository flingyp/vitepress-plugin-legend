# vitepress-markmap-preview

一个用于在 Vitepress 中预览思维导图（Markmap）的插件，支持 Markdown 文件中的代码块自动渲染为交互式思维导图。

## 特性

- 🧠 支持 Markdown 中的 markmap 代码块自动渲染为思维导图
- ⚡️ 即插即用，集成简单
- 🎨 支持自定义样式和主题
- 📦 兼容 Vitepress 最新版本

## 安装

```bash
pnpm add vitepress-markmap-preview -D
# 或者使用 npm
yarn add vitepress-markmap-preview -D
```

## 使用方法

1. 在你的 Vitepress 配置文件中引入并注册插件：

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress';
import { markmapPreview } from 'vitepress-markmap-preview';

export default defineConfig({
  // ...其他配置
  vite: {
    plugins: [markmapPreview()],
  },
});
```

2. 在 Markdown 文件中插入 markmap 代码块：

````markdown
```markmap
# 思维导图标题
- 一级节点
  - 二级节点
    - 三级节点
```
````

保存后即可在页面中看到交互式思维导图。

## 配置说明

插件支持以下可选配置：

```ts
markmapPreview({
  // theme: 'dark' | 'light', // 主题模式
  // customCss: '',           // 自定义样式
});
```

## 示例

见 [docs](./docs/) 目录，或在你的 Vitepress 项目中参考上述用法。

## 贡献指南

欢迎提交 issue 和 PR 共同完善本插件！

1. Fork 本仓库
2. 新建分支进行开发
3. 提交 PR

## License

[MIT](LICENSE)
