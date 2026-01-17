# Infographic 配置

## 插件配置

### vitepressInfographicPreview

在 `.vitepress/config.ts` 中配置插件：

```typescript
import { defineConfig } from 'vitepress';
import { vitepressInfographicPreview } from 'vitepress-infographic-preview';

export default defineConfig({
  markdown: {
    config: (md) => {
      vitepressInfographicPreview(md, {
        showToolbar: false, // 全局设置：是否默认显示工具栏
      });
    },
  },
});
```

### 选项

| 选项        | 类型    | 默认值 | 描述                                                                |
| ----------- | ------- | ------ | ------------------------------------------------------------------- |
| showToolbar | boolean | false  | 全局控制工具栏显示状态，可在单个代码块中通过 frontmatter 覆盖此设置 |

## 组件配置

### PreviewInfographicPath

在 Markdown 中使用 `PreviewInfographicPath` 组件加载外部 `.igf` 文件：

```vue
<PreviewInfographicPath path="./chart.igf" showToolbar />
```

### Props

| 属性        | 类型    | 默认值 | 描述                                   |
| ----------- | ------- | ------ | -------------------------------------- |
| path        | string  | -      | 信息图文件的相对路径（必填）           |
| showToolbar | boolean | false  | 是否显示工具栏，优先级高于全局插件配置 |

## 代码块配置

在 Markdown 代码块中使用frontmatter配置单个图表：

```infographic
---
showToolbar: true
---
infographic list-row-simple-horizontal-arrow
data
  title 示例
  items
    - label 项目1
      desc 描述
```

### Frontmatter 选项

| 选项        | 类型    | 默认值 | 描述                   |
| ----------- | ------- | ------ | ---------------------- |
| showToolbar | boolean | false  | 是否显示此图表的工具栏 |

## 主题配置

插件会自动检测并适应当前主题：

- **亮色模式**：使用亮色主题渲染
- **暗黑模式**：使用暗黑主题渲染
- **系统主题**：跟随系统主题变化

切换主题时会自动重新渲染图表以适配新主题。

## 样式定制

如需自定义样式,可以在 `.vitepress/theme/styles/custom.css` 中覆盖默认样式：

```css
/* 容器样式 */
.infographic {
  /* 自定义容器样式 */
}

/* 工具栏样式 */
.infographic-toolbar {
  /* 自定义工具栏样式 */
}
```

## 响应式配置

图表默认响应式布局，会自动适应容器宽度：

- 默认最小高度：400px
- 默认最大高度：600px
- 宽度：100%

可在组件调用时通过 CSS 覆盖这些值：

```vue
<div style="height: 500px;">
  <InfographicChart :code="..." />
</div>
```
