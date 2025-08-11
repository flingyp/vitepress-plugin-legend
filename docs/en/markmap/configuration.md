# Markmap Configuration Guide

This page provides detailed information on how to use markmap configuration options in VitePress to customize the display effects of mind maps.

## Configuration Methods

### 1. Code Block Configuration

Use frontmatter syntax in markmap code blocks:

```markmap
---
showToolbar: true
markmap:
  color: ["#2ecc71", "#3498db", "#9b59b6", "#e67e22", "#e74c3c"]
  initialExpandLevel: 2
  maxWidth: 400
  duration: 300
---

# Your Mind Map Content
## Branch 1
### Sub-branch A
#### Project 1
#### Project 2
```

### 2. Component Configuration

Add configuration in the referenced Markdown file:

```markdown
---
showToolbar: true
markmap:
  color: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6']
  initialExpandLevel: 2
  maxWidth: 450
  duration: 350
---

# Mind Map Content
```

## Configuration Options Details

### Basic Options

| Option               | Type     | Default             | Description                                         |
| -------------------- | -------- | ------------------- | --------------------------------------------------- |
| `showToolbar`        | boolean  | true                | Whether to show the toolbar                         |
| `color`              | string[] | d3.schemeCategory10 | Array of node colors                                |
| `initialExpandLevel` | number   | -1                  | Initial expansion level, -1 means expand all levels |
| `maxWidth`           | number   | 0                   | Maximum width of nodes, 0 means no limit            |
| `duration`           | number   | 500                 | Animation duration (milliseconds)                   |

### Layout Options

| Option              | Type   | Default | Description        |
| ------------------- | ------ | ------- | ------------------ |
| `spacingHorizontal` | number | 80      | Horizontal spacing |
| `spacingVertical`   | number | 5       | Vertical spacing   |
| `paddingX`          | number | 2       | X-axis padding     |

### Interaction Options

| Option     | Type    | Default | Description                                |
| ---------- | ------- | ------- | ------------------------------------------ |
| `zoom`     | boolean | true    | Whether to allow zooming                   |
| `pan`      | boolean | true    | Whether to allow panning                   |
| `autoFit`  | boolean | false   | Whether to automatically fit the container |
| `fitRatio` | number  | 1       | Fit ratio                                  |

### Advanced Options

| Option              | Type    | Default | Description                   |
| ------------------- | ------- | ------- | ----------------------------- |
| `colorFreezeLevel`  | number  | 0       | Color freeze level            |
| `toggleRecursively` | boolean | false   | Whether to toggle recursively |
| `scrollForPan`      | boolean | false   | Whether to scroll for panning |
| `maxInitialScale`   | number  | 1       | Maximum initial scale         |
| `lineWidth`         | number  | 1       | Width of lines between nodes  |

## Configuration Examples

### Basic Configuration Example

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

**Effect Description**:

- Show toolbar
- Use green, blue, and purple color scheme
- Initially expand to level 2
- Limit node maximum width to 400px
- Animation duration of 300ms

### Advanced Configuration Example

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

**Effect Description**:

- Hide toolbar
- Use 5 vibrant colors
- Expand all levels
- Node maximum width of 600px
- Animation duration of 500ms
- Horizontal spacing of 100px, vertical spacing of 10px
- Enable zoom and pan
- Freeze colors after level 2
- Line width of 2px

### Dark Mode Adaptation Configuration

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

**Effect Description**:

- Show toolbar
- Use bright colors suitable for dark mode
- Only expand level 1
- Node maximum width of 500px
- Animation duration of 400ms
- Moderate spacing settings

### Performance Optimization Configuration

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

**Effect Description**:

- Show toolbar
- Use 3 basic colors
- Only expand level 1 to reduce rendering pressure
- Limit node width to 300px
- Fast animation (200ms)
- Disable zoom and pan to improve performance
- Freeze colors after level 1 to reduce calculations

## Usage Tips

### 1. Color Configuration

- Color arrays will cycle if the number of nodes exceeds the number of colors
- Recommend using 4-6 colors to avoid being too flashy
- Consider adaptation for light and dark themes

### 2. Expansion Levels

- `initialExpandLevel: -1` means expand all levels
- `initialExpandLevel: 0` means only expand the root node
- For large mind maps, recommend setting to 1-2 to improve performance

### 3. Performance Optimization

- Too many nodes or complex configurations may affect rendering performance
- Using `colorFreezeLevel` can reduce color calculations
- Appropriately limiting `maxWidth` can control layout complexity

### 4. Responsive Design

- Mind maps automatically adapt to container size
- Using `autoFit: true` can automatically adjust to the best display ratio
- Consider adaptation for different screen sizes

### 5. Theme Adaptation

- Supports VitePress light/dark theme switching
- Color selection should consider readability under both themes
- Can use CSS variables to dynamically adjust colors

## Frequently Asked Questions

### Q: What if the configuration doesn't take effect?

A: Check if the YAML syntax is correct and ensure indentation uses spaces instead of tabs.

### Q: What color formats are supported?

A: Supports hexadecimal color codes (like `#ff0000`), RGB format, color names, etc.

### Q: How to disable all interaction features?

A: Set `zoom: false` and `pan: false`.

### Q: What is the priority of configuration options?

A: User configuration > Global default configuration > Markmap built-in default values.

## Reference Resources

- [Markmap Official Documentation](https://markmap.js.org/docs/json-options)
- [Markmap GitHub Repository](https://github.com/gera2ld/markmap)
- [VitePress Official Documentation](https://vitepress.dev/)
