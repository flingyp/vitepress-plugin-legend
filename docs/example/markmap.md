# Markmap

## 代码块形式

使用 `markmap` 代码块形式，插入 Markdown 文件内容：

```markmap
---
title: 前端技术栈
markmap:
  colorFreezeLevel: 2
---

## 基础技术

- HTML
  - 语义化标签
  - 表单处理
  - 无障碍访问
- CSS
  - 布局技术
  - 响应式设计
  - 动画效果
- JavaScript
  - ES6+ 语法
  - 异步编程
  - 模块化开发

## 框架与库

- Vue.js
  - 组件化开发
  - 响应式系统
  - 生态系统
- React
  - JSX 语法
  - Hooks
  - 状态管理
- Angular
  - TypeScript
  - 依赖注入
  - 指令系统

## 工程化工具

- 构建工具
  - Webpack
  - Vite
  - Rollup
- 包管理
  - npm
  - yarn
  - pnpm
- 代码质量
  - ESLint
  - Prettier
  - TypeScript
```

```text
---
title: 前端技术栈
markmap:
  colorFreezeLevel: 2
---

## 基础技术

- HTML
  - 语义化标签
  - 表单处理
  - 无障碍访问
- CSS
  - 布局技术
  - 响应式设计
  - 动画效果
- JavaScript
  - ES6+ 语法
  - 异步编程
  - 模块化开发

## 框架与库

- Vue.js
  - 组件化开发
  - 响应式系统
  - 生态系统
- React
  - JSX 语法
  - Hooks
  - 状态管理
- Angular
  - TypeScript
  - 依赖注入
  - 指令系统

## 工程化工具

- 构建工具
  - Webpack
  - Vite
  - Rollup
- 包管理
  - npm
  - yarn
  - pnpm
- 代码质量
  - ESLint
  - Prettier
  - TypeScript
```

## 组件形式

使用组件形式，指定 Markdown 文件路径，读取 Markdown 文件内容：

> showToolbar 为可选参数，默认不显示工具栏，添加 `showToolbar` 参数则显示工具栏

```vue
<!-- 指定路径，读取指定文件（支持相对路径、绝对路径） -->
<PreviewMarkmapPath path="./Vue.md" />
```

<PreviewMarkmapPath path="../Vue.md"  />

```vue
<!-- 不指定路径，则读取当前文件 -->
<PreviewMarkmapPath showToolbar />
```

<PreviewMarkmapPath showToolbar />
