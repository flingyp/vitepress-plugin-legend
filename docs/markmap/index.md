# vitepress-markmap-preview

一个用于在 VitePress 中展示思维导图的插件。

## 安装

```bash
npm install vitepress-markmap-preview
```

## 使用方法

### 基本用法

可以直接在 Markdown 中使用 markmap 代码块来创建思维导图：

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

### 读取外部文件

使用 `PreviewMarkmapPath` 组件可以读取指定的 Markdown 文件内容并展示为思维导图：

```vue
<PreviewMarkmapPath path="./other.md" showToolbar />
```

> 不显示工具栏的话，则不写 `showToolbar` 属性即可。

### 读取当前文件

不指定 path 属性时，将读取当前 Markdown 文件的内容：

```vue
<PreviewMarkmapPath />
```

## 配置选项

### PreviewMarkmapPath 组件属性

| 属性名      | 类型    | 默认值 | 说明                       |
| ----------- | ------- | ------ | -------------------------- |
| path        | string  | -      | 要读取的 Markdown 文件路径 |
| showToolbar | boolean | false  | 是否显示工具栏             |
