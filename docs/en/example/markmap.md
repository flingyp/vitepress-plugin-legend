# Markmap Examples

## Code Block Form

### Basic Usage

Use `markmap` code blocks to insert Markdown file content:

```markmap
# Frontend Technology Stack
## Basic Technologies
- HTML
  - Semantic tags
  - Form handling
  - Accessibility
- CSS
  - Layout techniques
  - Responsive design
  - Animation effects
- JavaScript
  - ES6+ syntax
  - Asynchronous programming
  - Modular development
## Frameworks & Libraries
- Vue.js
  - Component-based development
  - Reactive system
  - Ecosystem
- React
  - JSX syntax
  - Hooks
  - State management
- Angular
  - TypeScript
  - Dependency injection
  - Directive system
## Engineering Tools
- Build tools
  - Webpack
  - Vite
  - Rollup
- Package management
  - npm
  - yarn
  - pnpm
- Code quality
  - ESLint
  - Prettier
  - TypeScript
```

### Custom Configuration Examples

#### Basic Configuration

```markmap
---
showToolbar: true
markmap:
  color: ["#2ecc71", "#3498db", "#9b59b6", "#e67e22", "#e74c3c"]
  initialExpandLevel: 2
  maxWidth: 400
  duration: 300
---

# Project Structure
## Frontend
### React
#### Components
#### State Management
### Vue
#### Components
#### State Management
## Backend
### Node.js
#### Express
#### Koa
### Python
#### Django
#### Flask
```

#### Advanced Configuration

```markmap
---
showToolbar: false
markmap:
  color: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"]
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

# Technology Stack Overview
## Development Languages
### JavaScript
#### ES6+
#### TypeScript
### Python
#### 3.8+
#### 3.9+
## Frameworks
### Frontend
#### React
#### Vue
#### Angular
### Backend
#### Express
#### FastAPI
#### Django
## Databases
### SQL
#### PostgreSQL
#### MySQL
### NoSQL
#### MongoDB
#### Redis
```

#### Dark Mode Adaptation

```markmap
---
showToolbar: true
markmap:
  color: ["#2ecc71", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"]
  initialExpandLevel: 1
  maxWidth: 500
  duration: 400
  spacingHorizontal: 80
  spacingVertical: 5
---

# Learning Path
## Basic Knowledge
### HTML
### CSS
### JavaScript
## Advanced Skills
### Frameworks
#### React
#### Vue
#### Angular
### Tools
#### Webpack
#### Vite
#### Rollup
## Advanced Topics
### Performance Optimization
### Security
### Testing
```

## Component Form

### Basic Usage

Use component form to specify Markdown file path and read Markdown file content:

> `showToolbar` is an optional parameter. By default, the toolbar is not shown. Add the `showToolbar` parameter to display the toolbar.

```vue
<!-- Specify path to read specified file (supports relative and absolute paths) -->
<PreviewMarkmapPath path="./Vue.md" />
```

<PreviewMarkmapPath path="../Vue.md" />

```vue
<!-- No path specified, reads current file -->
<PreviewMarkmapPath showToolbar />
```

<PreviewMarkmapPath showToolbar />

### Component Usage with Configuration

You can also add configuration in the referenced Markdown file:

```markdown
## <!-- Add configuration in the referenced file -->

showToolbar: true
markmap:
color: ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f", "#9b59b6"]
initialExpandLevel: 2
maxWidth: 450
duration: 350

---

# Component Test

## Frontend Frameworks

### React

#### Hooks

#### Context

### Vue

#### Composition API

#### Options API

## Build Tools

### Webpack

### Vite

### Rollup

## Databases

### SQL

#### PostgreSQL

#### MySQL

### NoSQL

#### MongoDB

#### Redis
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

## Usage Tips

1. **Color Configuration**: Color arrays will cycle if the number of nodes exceeds the number of colors
2. **Expansion Levels**: `initialExpandLevel: -1` means expand all levels, `0` means only expand the root node
3. **Performance Optimization**: Too many nodes or complex configurations may affect rendering performance
4. **Responsive Design**: Mind maps automatically adapt to container size
5. **Theme Adaptation**: Supports VitePress light/dark theme switching

For more configuration options, please refer to the [Markmap Official Documentation](https://markmap.js.org/docs/json-options).
