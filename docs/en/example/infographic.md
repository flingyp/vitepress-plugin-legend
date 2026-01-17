# Infographic Examples

This document demonstrates various usage patterns of the Infographic plugin.

## Basic Examples

### List Flowchart

```infographic
infographic list-row-simple-horizontal-arrow
data
  title Development Process
  items
    - label Requirements
      desc Analyze user needs
    - label Design
      desc Design solution
    - label Development
      desc Write code
    - label Testing
      desc Test and fix
    - label Deployment
      desc Deploy to production
```

### Timeline

```infographic
---
showToolbar: true
---
infographic sequence-timeline-simple
data
  title Project Milestones
  lists
    - label 2024 Q1
      desc Requirements Research
    - label 2024 Q2
      desc Prototype Design
    - label 2024 Q3
      desc Development
    - label 2024 Q4
      desc Launch
```

## Advanced Examples

### Binary Comparison

```infographic
infographic compare-binary-pitch
data
  title Solution Comparison
  left
    label Solution A
    desc Traditional Approach
    items
      - label Pros
        items
          - label Mature and stable
          - label Easy to maintain
      - label Cons
        items
          - label Low efficiency
          - label Poor scalability
  right
    label Solution B
    desc Modern Approach
    items
      - label Pros
        items
          - label High efficiency
          - label Strong scalability
      - label Cons
        items
          - label High learning curve
          - label Immature ecosystem
```

### Quadrant Chart

```infographic
infographic quadrant-simple
data
  title Tech Matrix
  items
    - label Q1
      desc Mature Tech
      position: top-right
    - label Q2
      desc Emerging Tech
      position: top-left
    - label Q3
      desc Outdated Tech
      position: bottom-left
    - label Q4
      desc Growing Tech
      position: bottom-right
```

## Loading from External Files

### Basic Usage

```vue
<PreviewInfographicPath path="./product-flow.igf" />
```

### With Toolbar

```vue
<PreviewInfographicPath path="./product-flow.igf" showToolbar />
```

## More Examples

For more templates and examples, please visit:

- [AntV Infographic Gallery](https://infographic.antv.vision/gallery)
- [AntV Infographic Documentation](https://infographic.antv.vision/learn)
