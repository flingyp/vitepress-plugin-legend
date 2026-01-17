# Infographic Configuration

## Plugin Configuration

### vitepressInfographicPreview

Configure the plugin in `.vitepress/config.ts`:

```typescript
import { defineConfig } from 'vitepress';
import { vitepressInfographicPreview } from 'vitepress-infographic-preview';

export default defineConfig({
  markdown: {
    config: (md) => {
      vitepressInfographicPreview(md, {
        showToolbar: false, // Global setting: whether to show toolbar by default
      });
    },
  },
});
```

### Options

| Option      | Type    | Default | Description                                                                      |
| ----------- | ------- | ------- | -------------------------------------------------------------------------------- |
| showToolbar | boolean | false   | Globally control toolbar visibility, can be overridden in individual code blocks |

## Component Configuration

### PreviewInfographicPath

Use the `PreviewInfographicPath` component in Markdown to load external `.igf` files:

```vue
<PreviewInfographicPath path="./chart.igf" showToolbar />
```

### Props

| Prop        | Type    | Default | Description                                               |
| ----------- | ------- | ------- | --------------------------------------------------------- |
| path        | string  | -       | Relative path to infographic file (required)              |
| showToolbar | boolean | false   | Show toolbar, higher priority than global plugin settings |

## Code Block Configuration

Configure individual charts using frontmatter in Markdown code blocks:

```infographic
---
showToolbar: true
---
infographic list-row-simple-horizontal-arrow
data
  title Sample
  items
    - label Item 1
      desc Description
```

### Frontmatter Options

| Option      | Type    | Default | Description                 |
| ----------- | ------- | ------- | --------------------------- |
| showToolbar | boolean | false   | Show toolbar for this chart |

## Theme Configuration

The plugin automatically detects and adapts to the current theme:

- **Light Mode**: Renders with light theme
- **Dark Mode**: Renders with dark theme
- **System Theme**: Follows system theme changes

The chart will automatically re-render when the theme changes.

## Style Customization

To customize styles, override default styles in `.vitepress/theme/styles/custom.css`:

```css
/* Container styles */
.infographic {
  /* Custom container styles */
}

/* Toolbar styles */
.infographic-toolbar {
  /* Custom toolbar styles */
}
```

## Responsive Configuration

Charts use responsive layout by default and automatically adapt to container width:

- Default minimum height: 400px
- Default maximum height: 600px
- Width: 100%

You can override these values with CSS when calling the component:

```vue
<div style="height: 500px;">
  <InfographicChart :code="..." />
</div>
```
