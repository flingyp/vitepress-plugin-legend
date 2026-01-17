# Infographic 示例

本文展示了 Infographic 插件的各种使用方式。

## 基础示例

### 列表流程图

```infographic
infographic list-row-simple-horizontal-arrow
data
  title 开发流程
  items
    - label 需求分析
      desc 了解并分析需求
    - label 方案设计
      desc 设计技术方案
    - label 开发实现
      desc 编写代码实现
    - label 测试验证
      desc 测试和修复
    - label 发布上线
      desc 部署到生产环境
```

### 时间线

```infographic
---
showToolbar: true
---
infographic sequence-timeline-simple
data
  title 项目里程碑
  lists
    - label 2024 Q1
      desc 需求调研
    - label 2024 Q2
      desc 原型设计
    - label 2024 Q3
      desc 开发实施
    - label 2024 Q4
      desc 上线运营
```

## 复杂示例

### 二元对比

```infographic
infographic compare-binary-horizontal-badge-card-vs
data
  title 方案对比
  compares
    - label 方案 A
      desc 传统方式
      children
        - label 优点：成熟稳定、易于维护
        - label 缺点：开发效率低、扩展性差
    - label 方案 B
      desc 现代方式
      children
        - label 优点：开发效率高、扩展性强
        - label 缺点：学习成本高、生态不成熟
```

### 象限图

```infographic
infographic compare-quadrant-quarter-simple-card
data
  title 技术矩阵
  desc 按成熟度和流行度分类
  compares
    - label 第一象限
      desc 成熟技术
      icon star
    - label 第二象限
      desc 新兴技术
      icon rocket
    - label 第三象限
      desc 过时技术
      icon down
    - label 第四象限
      desc 成长技术
      icon diamond
```

## 从外部文件加载

### 基础用法

```vue
<PreviewInfographicPath path="./product-flow.igf" />
```

### 显示工具栏

```vue
<PreviewInfographicPath path="./product-flow.igf" showToolbar />
```

## 更多示例

更多模板和示例请访问：

- [AntV Infographic Gallery](https://infographic.antv.vision/gallery)
- [AntV Infographic 文档](https://infographic.antv.vision/learn)
