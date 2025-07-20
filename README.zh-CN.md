# VitePress Markmap Preview

一个 VitePress 插件，支持在 Markdown 中使用 markmap 渲染交互式思维导图。

[English](README.md) | [中文](README.zh-CN.md)

[![npm version](https://img.shields.io/npm/v/vitepress-markmap-preview.svg)](https://www.npmjs.com/package/vitepress-markmap-preview)
[![license](https://img.shields.io/npm/l/vitepress-markmap-preview.svg)](https://github.com/flingyp/vitepress-markmap-preview/blob/main/LICENSE)

## ✨ 功能特性

- 🗺️ **交互式思维导图**: 将 markdown 内容渲染为交互式思维导图
- 📝 **Markdown 支持**: 支持各种 markdown 元素，包括列表、表格、图片等
- 🎨 **可定制化**: 可配置主题、颜色和布局选项
- 🔧 **易于集成**: 与 VitePress 简单集成
- 📁 **文件预览**: 使用组件标签预览 markdown 文件为思维导图
- 🎯 **Mermaid 语法**: 支持 mermaid 代码块并使用 markmap 渲染

## 🚀 快速开始

### 安装

```bash
npm install vitepress-markmap-preview
# 或
yarn add vitepress-markmap-preview
# 或
pnpm add vitepress-markmap-preview
```

### 使用方法

1. **配置 VitePress**

在 VitePress 配置中添加插件：

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

在 VitePress 中配置全局组件：

```typescript
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

2. **在 Markdown 中使用**

#### 方法一：Mermaid 代码块

````markdown
```mermaid
---
title: 我的思维导图
markmap:
  colorFreezeLevel: 2
showToolbar: true
---

## 主要主题

- **粗体文本** ~~删除线~~ *斜体* ==高亮==
- `行内代码`
- [x] 复选框
- [链接](https://example.com)

### 子主题

1. 有序列表项 1
2. 有序列表项 2

| 表格 | 标题 |
|------|------|
| 数据 | 值   |

![图片](https://example.com/image.png)
```
````

> **显示工具栏选项**
>
> 你可以在代码块的 YAML frontmatter 中添加 `showToolbar` 字段来控制是否显示工具栏：
>
> - `showToolbar: true` 显示工具栏，`showToolbar: false` 隐藏工具栏。

#### 方法二：组件标签

预览指定的 markdown 文件：

```markdown
<!-- 支持相对路径和绝对路径 -->
<PreviewMarkmapPath path="./path/to/file.md" />
```

> **显示工具栏选项**
>
> 在组件标签中添加 `showToolbar` 属性即可显示工具栏：
>
> ```markdown
> <PreviewMarkmapPath path="./path/to/file.md" showToolbar />
> ```
>
> 不加 `showToolbar` 属性则不显示工具栏。

预览当前文件内容：

```markdown
<PreviewMarkmapPath />
```

## 🎛️ 配置

### Markmap 选项

插件支持所有 markmap 配置选项：

```typescript
interface IMarkmapOptions {
  autoFit?: boolean;
  color?: (node: INode) => string;
  colorFreezeLevel?: number;
  duration?: number;
  embedGlobalCSS?: boolean;
  maxWidth?: number;
  nodeMinHeight?: number;
  paddingX?: number;
  paddingY?: number;
  renderHtml?: boolean;
  spacingHorizontal?: number;
  spacingVertical?: number;
  style?: (id: string) => string;
  zoom?: boolean;
}
```

### 组件属性

#### PreviewMarkmapPath

| 属性   | 类型     | 默认值 | 描述                                |
| ------ | -------- | ------ | ----------------------------------- |
| `path` | `string` | -      | markdown 文件路径（相对于当前文件） |

## 🛠️ 开发

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 设置

```bash
# 克隆仓库
git clone https://github.com/flingyp/vitepress-markmap-preview.git
cd vitepress-markmap-preview

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 启动文档开发服务器
pnpm docs:dev
```

### 构建

```bash
# 构建插件
pnpm build

# 构建文档
pnpm docs:build
```

### 测试

```bash
# 运行代码检查
pnpm lint

# 修复代码格式问题
pnpm lint:fix
```

## 📁 项目结构

```
vitepress-markmap-preview/
├── core/                    # 插件源代码
│   ├── components/         # Vue 组件
│   │   ├── MindMapRoot.vue
│   │   └── PreviewMarkmapPath.vue
│   ├── utils/             # 工具函数
│   │   ├── parse-code.ts
│   │   └── parse-component.ts
│   └── index.ts           # 插件入口点
├── docs/                   # 文档
├── .changeset/            # 版本管理
└── package.json
```

## 🤝 贡献

1. Fork 仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`pnpm commit`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

### 提交规范

本项目遵循 [Conventional Commits](https://www.conventionalcommits.org/)：

- `feat:` 新功能
- `fix:` 错误修复
- `docs:` 文档更改
- `style:` 代码样式更改
- `refactor:` 代码重构
- `test:` 测试更改
- `chore:` 构建过程或辅助工具更改

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [markmap](https://github.com/gera2ld/markmap) - 核心思维导图库
- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [markdown-it](https://github.com/markdown-it/markdown-it) - Markdown 解析器

## 📞 支持

如果您有任何问题或需要帮助，请：

- [提交问题](https://github.com/flingyp/vitepress-markmap-preview/issues)
- [查看文档](https://github.com/flingyp/vitepress-markmap-preview/tree/main/docs)

---

由 [flingyp](https://github.com/flingyp) 用 ❤️ 制作
