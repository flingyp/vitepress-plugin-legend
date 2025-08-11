# VitePress Markmap Preview

![npm](https://img.shields.io/npm/v/vitepress-markmap-preview.svg)

一个 VitePress 插件，用于在 Markdown 中预览 Markmap 思维导图。

## ✨ 特性

- 🗺️ **Markmap 集成**: 在 Markdown 中直接渲染交互式思维导图
- 🎨 **可定制**: 支持 markmap 的所有配置选项
- 🔧 **简单设置**: 一键安装，快速配置
- 📁 **组件支持**: 提供 Vue 组件用于思维导图渲染
- 🚀 **TypeScript**: 完整的 TypeScript 支持和类型定义
- ⚙️ **配置灵活**: 支持通过 frontmatter 语法自定义配置

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
# Markmap

## Links

- [Website](https://markmap.js.org/)
- [GitHub](https://github.com/gera2ld/markmap)

## Features

- **strong** ~~del~~ *italic* ==highlight==
- `inline code`
- Lists support
- And more...
```

### ⚙️ 自定义配置

支持通过 frontmatter 语法自定义 markmap 配置选项：

```markmap
---
showToolbar: true
markmap:
  color: ["#2ecc71", "#3498db", "#9b59b6", "#e67e22", "#e74c3c"]
  initialExpandLevel: 2
  maxWidth: 400
  duration: 300
  zoom: true
  pan: true
---

# 项目结构
## 前端
### React
#### 组件
#### 状态管理
### Vue
#### 组件
#### 状态管理
## 后端
### Node.js
#### Express
#### Koa
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

### 🎨 Markmap 配置选项

支持通过 frontmatter 中的 `markmap` 字段配置以下选项：

#### 基础选项

| 选项                 | 类型     | 默认值              | 说明                          |
| -------------------- | -------- | ------------------- | ----------------------------- |
| `showToolbar`        | boolean  | true                | 是否显示工具栏                |
| `color`              | string[] | d3.schemeCategory10 | 节点颜色数组                  |
| `initialExpandLevel` | number   | -1                  | 初始展开层级，-1 表示全部展开 |
| `maxWidth`           | number   | 0                   | 节点最大宽度，0 表示无限制    |
| `duration`           | number   | 500                 | 动画持续时间（毫秒）          |

#### 布局选项

| 选项                | 类型   | 默认值 | 说明      |
| ------------------- | ------ | ------ | --------- |
| `spacingHorizontal` | number | 80     | 水平间距  |
| `spacingVertical`   | number | 5      | 垂直间距  |
| `paddingX`          | number | 2      | X轴内边距 |

#### 交互选项

| 选项       | 类型    | 默认值 | 说明             |
| ---------- | ------- | ------ | ---------------- |
| `zoom`     | boolean | true   | 是否允许缩放     |
| `pan`      | boolean | true   | 是否允许平移     |
| `autoFit`  | boolean | false  | 是否自动适应容器 |
| `fitRatio` | number  | 1      | 适应比例         |

#### 高级选项

| 选项                | 类型    | 默认值 | 说明             |
| ------------------- | ------- | ------ | ---------------- |
| `colorFreezeLevel`  | number  | 0      | 颜色冻结层级     |
| `toggleRecursively` | boolean | false  | 是否递归切换     |
| `scrollForPan`      | boolean | false  | 是否滚动平移     |
| `maxInitialScale`   | number  | 1      | 最大初始缩放比例 |
| `lineWidth`         | number  | 1      | 节点间连线的宽度 |

### 🔧 配置示例

#### 基础配置示例

```yaml
---
showToolbar: true
markmap:
  color: ['#2ecc71', '#3498db', '#9b59b6']
  initialExpandLevel: 2
  maxWidth: 400
  duration: 300
---
```

#### 高级配置示例

```yaml
---
showToolbar: false
markmap:
  color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
  initialExpandLevel: -1
  maxWidth: 600
  duration: 500
  spacingHorizontal: 100
  spacingVertical: 10
  zoom: true
  pan: true
  colorFreezeLevel: 2
  lineWidth: 2
---
```

#### 暗黑模式适配配置

```yaml
---
showToolbar: true
markmap:
  color: ['#2ecc71', '#3498db', '#9b59b6', '#f39c12', '#e74c3c']
  initialExpandLevel: 1
  maxWidth: 500
  duration: 400
  spacingHorizontal: 80
  spacingVertical: 5
---
```

## 📚 更多示例

查看 [配置示例文档](./configuration.md) 获取更多详细的使用示例和配置说明。

## 📄 License

[MIT License](https://github.com/flingyp/vitepress-plugin-legend/blob/main/LICENSE)

## 🙏 致谢

- [markmap](https://github.com/gera2ld/markmap)
- [VitePress](https://vitepress.dev/)
- [markdown-it](https://github.com/markdown-it/markdown-it)

---

Made with ❤️ by [flingyp](https://github.com/flingyp)
