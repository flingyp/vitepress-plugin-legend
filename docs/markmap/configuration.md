# Markmap 配置指南

本页面详细介绍了如何在 VitePress 中使用 markmap 配置选项来自定义思维导图的显示效果。

## 配置方式

### 1. 代码块方式配置

在 markmap 代码块中使用 frontmatter 语法：

```markmap
---
showToolbar: true
markmap:
  color: ["#2ecc71", "#3498db", "#9b59b6", "#e67e22", "#e74c3c"]
  initialExpandLevel: 2
  maxWidth: 400
  duration: 300
---

# 你的思维导图内容
## 分支 1
### 子分支 A
#### 项目 1
#### 项目 2
```

### 2. 组件方式配置

在引用的 Markdown 文件中添加配置：

```markdown
---
showToolbar: true
markmap:
  color: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6']
  initialExpandLevel: 2
  maxWidth: 450
  duration: 350
---

# 思维导图内容
```

## 配置选项详解

### 基础选项

| 选项                 | 类型     | 默认值              | 说明                          |
| -------------------- | -------- | ------------------- | ----------------------------- |
| `showToolbar`        | boolean  | true                | 是否显示工具栏                |
| `color`              | string[] | d3.schemeCategory10 | 节点颜色数组                  |
| `initialExpandLevel` | number   | -1                  | 初始展开层级，-1 表示全部展开 |
| `maxWidth`           | number   | 0                   | 节点最大宽度，0 表示无限制    |
| `duration`           | number   | 500                 | 动画持续时间（毫秒）          |

### 布局选项

| 选项                | 类型   | 默认值 | 说明      |
| ------------------- | ------ | ------ | --------- |
| `spacingHorizontal` | number | 80     | 水平间距  |
| `spacingVertical`   | number | 5      | 垂直间距  |
| `paddingX`          | number | 2      | X轴内边距 |

### 交互选项

| 选项       | 类型    | 默认值 | 说明             |
| ---------- | ------- | ------ | ---------------- |
| `zoom`     | boolean | true   | 是否允许缩放     |
| `pan`      | boolean | true   | 是否允许平移     |
| `autoFit`  | boolean | false  | 是否自动适应容器 |
| `fitRatio` | number  | 1      | 适应比例         |

### 高级选项

| 选项                | 类型    | 默认值 | 说明             |
| ------------------- | ------- | ------ | ---------------- |
| `colorFreezeLevel`  | number  | 0      | 颜色冻结层级     |
| `toggleRecursively` | boolean | false  | 是否递归切换     |
| `scrollForPan`      | boolean | false  | 是否滚动平移     |
| `maxInitialScale`   | number  | 1      | 最大初始缩放比例 |
| `lineWidth`         | number  | 1      | 节点间连线的宽度 |

## 配置示例

### 基础配置示例

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

**效果说明**：

- 显示工具栏
- 使用绿色、蓝色、紫色的配色方案
- 初始展开到第2层
- 节点最大宽度限制为400px
- 动画持续300毫秒

### 高级配置示例

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

**效果说明**：

- 隐藏工具栏
- 使用5种鲜艳的颜色
- 全部展开所有层级
- 节点最大宽度600px
- 动画持续500毫秒
- 水平间距100px，垂直间距10px
- 启用缩放和平移
- 第2层后颜色冻结
- 连线宽度2px

### 暗黑模式适配配置

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

**效果说明**：

- 显示工具栏
- 使用适合暗黑模式的明亮颜色
- 只展开第1层
- 节点最大宽度500px
- 动画持续400毫秒
- 适中的间距设置

### 性能优化配置

```yaml
---
showToolbar: true
markmap:
  color: ['#3498db', '#e74c3c', '#2ecc71']
  initialExpandLevel: 1
  maxWidth: 300
  duration: 200
  zoom: false
  pan: false
  colorFreezeLevel: 1
---
```

**效果说明**：

- 显示工具栏
- 使用3种基础颜色
- 只展开第1层，减少渲染压力
- 限制节点宽度为300px
- 快速动画（200ms）
- 禁用缩放和平移，提升性能
- 第1层后颜色冻结，减少计算

## 使用技巧

### 1. 颜色配置

- 颜色数组会循环使用，如果节点数量超过颜色数量
- 建议使用4-6种颜色，避免过于花哨
- 考虑明暗主题的适配

### 2. 展开层级

- `initialExpandLevel: -1` 表示全部展开
- `initialExpandLevel: 0` 表示只展开根节点
- 对于大型思维导图，建议设置为1-2，提升性能

### 3. 性能优化

- 过多的节点或复杂的配置可能影响渲染性能
- 使用 `colorFreezeLevel` 可以减少颜色计算
- 适当限制 `maxWidth` 可以控制布局复杂度

### 4. 响应式设计

- 思维导图会自动适应容器大小
- 使用 `autoFit: true` 可以自动调整到最佳显示比例
- 考虑不同屏幕尺寸的适配

### 5. 主题适配

- 支持 VitePress 的明暗主题切换
- 颜色选择要考虑两种主题下的可读性
- 可以使用 CSS 变量来动态调整颜色

## 常见问题

### Q: 配置没有生效怎么办？

A: 检查 YAML 语法是否正确，确保缩进使用空格而不是制表符。

### Q: 颜色配置支持哪些格式？

A: 支持十六进制颜色码（如 `#ff0000`）、RGB 格式、颜色名称等。

### Q: 如何禁用所有交互功能？

A: 设置 `zoom: false` 和 `pan: false`。

### Q: 配置选项的优先级是什么？

A: 用户配置 > 全局默认配置 > markmap 内置默认值。

## 参考资源

- [Markmap 官方文档](https://markmap.js.org/docs/json-options)
- [Markmap GitHub 仓库](https://github.com/gera2ld/markmap)
- [VitePress 官方文档](https://vitepress.dev/)
