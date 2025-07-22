# Vue.js Framework Overview

## 1. Positioning & Features

- Progressive: Can be used as a view layer library or combined with ecosystem for SPA / SSR / cross-platform
- Reactive: Dependency tracking based on Proxy
- Component-based: Single File Components (\*.vue)
- Lightweight & Efficient: Runtime ~20kB (gzip)
- Developer Experience
  - Single File Components + Vite hot reload
  - Devtools debugging
  - TypeScript first-class citizen

## 2. Core Concepts

- Reactivity System
  - ref / reactive
  - effect / watch / computed
  - Dependency collection & trigger updates
- Component System
  - Props / Emits
  - Slots
  - Provide / Inject
  - Lifecycle
    - Options API: beforeCreate -> destroyed
    - Composition API: onXxx
- Template Syntax
  - Interpolation {{ }}
  - Directives v-if / v-for / v-on / v-bind
  - Modifiers .prevent .sync etc.
- Virtual DOM & Diff
- Event System
- Animation `<Transition>` / `<TransitionGroup>`

## 3. Single File Component (SFC)

- `<template>` Template
- `<script setup>` Composition API syntactic sugar
- `<style scoped>` / CSS Modules
- Preprocessors Sass / Less / Stylus

## 4. Ecosystem

- Official
  - Router: Vue Router
  - State Management: Pinia (Vuex retired)
  - Build Tool: Vite
  - Server-Side Rendering: Nuxt 3
  - Desktop/Mobile: Tauri / NativeScript / uni-app
- Community
  - UI Component Libraries: Element Plus / Ant Design Vue / Naive UI
  - Static Site: VitePress
  - Micro-frontend: qiankun / wujie
  - Testing: Vue Test Utils / Cypress / Vitest

## 5. Version Evolution

- Vue 2.x
  - Reactivity: Object.defineProperty
  - Options API
- Vue 3.x
  - Composition API
  - Proxy reactivity
  - Performance improvement 1.3~2x
  - Tree-shaking
  - Fragment / Teleport / Suspense
- Vue 2.7 "Naruto": Backport some Composition API

## 6. Common Patterns

- Composable functions
- Logic reuse with hooks
- Dependency injection: Provide/Inject
- Higher-order components HOC / Renderless components

## 7. Performance Optimization

- v-memo / v-once
- KeepAlive
- Async components: defineAsyncComponent
- Lazy loading routes
- Virtual lists: vue-virtual-scroller

## 8. Learning Path

- Basics
  - Template syntax
  - Component communication
  - Lifecycle
- Advanced
  - Composition API
  - Custom directives / plugins
  - Unit testing
- Practice
  - Build projects with Vite + Pinia + Vue Router
  - SSR or SSG (Nuxt / VitePress)
  - Full TypeScript workflow
