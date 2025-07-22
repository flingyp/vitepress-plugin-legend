# Markmap

## Code Block Format

Use `markmap` code block format to insert Markdown file content:

```markmap
---
title: Software Development Lifecycle
markmap:
  colorFreezeLevel: 2
---

## Planning Phase

- Requirements Analysis
  - Functional Requirements
  - Non-functional Requirements
  - User Stories
- Project Planning
  - Timeline Estimation
  - Resource Allocation
  - Risk Assessment

## Development Phase

- Frontend Development
  - UI/UX Design
  - Component Development
  - State Management
- Backend Development
  - API Design
  - Database Schema
  - Business Logic
- Testing
  - Unit Testing
  - Integration Testing
  - End-to-End Testing

## Deployment & Maintenance

- CI/CD Pipeline
  - Automated Testing
  - Build Process
  - Deployment Strategy
- Monitoring
  - Performance Monitoring
  - Error Tracking
  - User Analytics
- Maintenance
  - Bug Fixes
  - Feature Updates
  - Security Patches
```

```text
---
title: Software Development Lifecycle
markmap:
  colorFreezeLevel: 2
---

## Planning Phase

- Requirements Analysis
  - Functional Requirements
  - Non-functional Requirements
  - User Stories
- Project Planning
  - Timeline Estimation
  - Resource Allocation
  - Risk Assessment

## Development Phase

- Frontend Development
  - UI/UX Design
  - Component Development
  - State Management
- Backend Development
  - API Design
  - Database Schema
  - Business Logic
- Testing
  - Unit Testing
  - Integration Testing
  - End-to-End Testing

## Deployment & Maintenance

- CI/CD Pipeline
  - Automated Testing
  - Build Process
  - Deployment Strategy
- Monitoring
  - Performance Monitoring
  - Error Tracking
  - User Analytics
- Maintenance
  - Bug Fixes
  - Feature Updates
  - Security Patches
```

## Component Format

Use component format to specify Markdown file path and read Markdown file content:

> showToolbar is an optional parameter. By default, the toolbar is not displayed. Add the `showToolbar` parameter to display the toolbar.

```vue
<!-- Specify path to read specified file (supports relative and absolute paths) -->
<PreviewMarkmapPath path="./Vue.md" />
```

<PreviewMarkmapPath path="../Vue.md"  />

```vue
<!-- If no path is specified, read the current file -->
<PreviewMarkmapPath showToolbar />
```

<PreviewMarkmapPath showToolbar />
