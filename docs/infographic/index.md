# Infographic

AntV Infographic 是一个专注于信息图可视化的库，提供了 236+ 内置模板。

## 安装

```bash
npm install vitepress-infographic-preview
# or
yarn add vitepress-infographic-preview
# or
pnpm add vitepress-infographic-preview
```

## 配置

### 1. 插件配置

在 `.vitepress/config.ts` 中添加插件：

```typescript
import { defineConfig } from 'vitepress';
import { vitepressInfographicPreview } from 'vitepress-infographic-preview';

export default defineConfig({
  markdown: {
    config: (md) => {
      vitepressInfographicPreview(md);
    },
  },
});
```

### 2. 组件注册

在 `.vitepress/theme/index.ts` 中注册全局组件：

```typescript
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { initComponent } from 'vitepress-infographic-preview/component';
import 'vitepress-infographic-preview/dist/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    initComponent(app);
  },
} satisfies Theme;
```

## 使用方式

### 基础用法

使用 Markdown 代码块创建信息图：

```infographic
infographic list-row-simple-horizontal-arrow
data
  title 示例流程
  items
    - label 步骤 1
      desc 开始
    - label 步骤 2
      desc 进行中
    - label 步骤 3
      desc 完成
```

### 显示工具栏

通过 frontmatter 控制工具栏：

```infographic
---
showToolbar: true
---
infographic compare-swot
data
  title SWOT分析
  desc 通过全面分析内外部因素，指导企业战略制定与调整
  compares
    - label Strengths
      children
        - label 领先的技术研发能力
        - label 完善的供应链体系
        - label 高效的客户服务机制
        - label 成熟的管理团队
        - label 良好的用户口碑
        - label 稳定的产品质量
    - label Weaknesses
      children
        - label 品牌曝光度不足
        - label 产品线更新缓慢
        - label 市场渠道单一
        - label 运营成本较高
        - label 组织决策效率偏低
        - label 用户增长放缓
    - label Opportunities
      children
        - label 数字化转型趋势加速
        - label 新兴市场持续扩展
        - label 政策利好推动行业发展
        - label 智能化应用场景增加
        - label 跨界合作机会增多
        - label 用户消费升级趋势
    - label Threats
      children
        - label 行业竞争日益激烈
        - label 用户需求快速变化
        - label 市场进入门槛降低
        - label 供应链风险上升
        - label 数据与安全挑战加剧
        - label 宏观经济不确定性
theme light
  palette antv
```

### 从外部文件加载

使用 `PreviewInfographicPath` 组件加载外部文件：

<PreviewInfographicPath path="./chart.igf" showToolbar />

```vue
<PreviewInfographicPath path="./chart.igf" showToolbar />
```

## 配置选项

### vitepressInfographicPreview 选项

| 选项        | 类型    | 默认值 | 描述               |
| ----------- | ------- | ------ | ------------------ |
| showToolbar | boolean | false  | 是否默认显示工具栏 |

### PreviewInfographicPath 组件属性

| 属性        | 类型    | 默认值 | 描述           |
| ----------- | ------- | ------ | -------------- |
| path        | string  | -      | 信息图文件路径 |
| showToolbar | boolean | false  | 是否显示工具栏 |

## 工具栏功能

- **放大/缩小**：缩放信息图
- **适应屏幕**：重置缩放
- **复制代码**：复制信息图语法到剪贴板
- **下载图表**：将图表下载为 PNG 图片
- **全屏**：全屏预览图表

## 模板类型

AntV Infographic 支持多种模板类型：

- **Chart（图表）**：柱状图、饼图、折线图、词云等
- **Comparison（对比）**：二元对比、层次对比、象限对比等
- **Hierarchy（层次）**：思维导图、树形结构等
- **List（列表）**：列表、网格、金字塔等
- **Quadrant（象限）**：四象限图等
- **Relation（关系）**：关系图、有向无环图等
- **Sequence（序列）**：时间线、步骤、流程等

更多模板请参考 [AntV Infographic Gallery](https://infographic.antv.vision/gallery)。

## 相关链接

- [AntV Infographic 官方文档](https://infographic.antv.vision/learn)
- [Gallery 模板库](https://infographic.antv.vision/gallery)
- [API 参考](https://infographic.antv.vision/reference)
