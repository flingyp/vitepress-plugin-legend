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
infographic compare-binary-horizontal-badge-card-vs
data
  title Solution Comparison
  compares
    - label Solution A
      desc Traditional Approach
      children
        - label Pros: Mature and stable, Easy to maintain
        - label Cons: Low efficiency, Poor scalability
    - label Solution B
      desc Modern Approach
      children
        - label Pros: High efficiency, Strong scalability
        - label Cons: High learning curve, Immature ecosystem
```

### Quadrant Chart

```infographic
infographic compare-quadrant-quarter-simple-card
data
  title Tech Matrix
  desc Classified by maturity and popularity
  compares
    - label Q1
      desc Mature Tech
      icon star
    - label Q2
      desc Emerging Tech
      icon rocket
    - label Q3
      desc Outdated Tech
      icon down
    - label Q4
      desc Growing Tech
      icon diamond
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
