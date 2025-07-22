# Markmap

## 代码块形式

使用 `markmap` 代码块形式，插入 Markdown 文件内容：

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

- **strong** ~~del~~ *italic* ==highlight==
- `inline code`
- Lists support
- And more...
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
