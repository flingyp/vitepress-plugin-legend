# Vue.js 框架全景

## 1. 定位与特点

- 渐进式 : 可只当视图层库，也可配合生态做 SPA / SSR / 跨端
- 响应式 : 基于 Proxy 的依赖追踪
- 组件化 : 单文件组件 SFC（\*.vue）
- 轻量高效 : 运行时 ~20kB(gzip)
- 开发体验
  - 单文件组件 + Vite 热更新
  - Devtools 调试
  - TypeScript 一等公民

## 2. 核心概念

- 响应式系统
  - ref / reactive
  - effect / watch / computed
  - 依赖收集 & 触发更新
- 组件系统
  - Props / Emits
  - Slots
  - Provide / Inject
  - 生命周期
    - Options API: beforeCreate -> destroyed
    - Composition API: onXxx
- 模板语法
  - 插值 {{ }}
  - 指令 v-if / v-for / v-on / v-bind
  - 修饰符 .prevent .sync 等
- 虚拟 DOM & Diff
- 事件系统
- 动画 <Transition> / <TransitionGroup>

## 3. 单文件组件 SFC

- <template> 模板
- <script setup> 组合式语法糖
- <style scoped> / CSS Modules
- 预处理器 Sass / Less / Stylus

## 4. 周边生态

- 官方
  - 路由 Vue Router
  - 状态管理 Pinia（Vuex 退役）
  - 构建工具 Vite
  - 服务端渲染 Nuxt 3
  - 桌面/移动 Tauri / NativeScript / uni-app
- 社区
  - UI 组件库 Element Plus / Ant Design Vue / Naive UI
  - 静态站点 VitePress
  - 微前端 qiankun / wujie
  - 测试 Vue Test Utils / Cypress / Vitest

## 5. 版本演进

- Vue 2.x
  - 响应式 Object.defineProperty
  - 选项式 API
- Vue 3.x
  - Composition API
  - Proxy 响应式
  - 性能提升 1.3~2x
  - Tree-shaking
  - Fragment / Teleport / Suspense
- Vue 2.7 “Naruto” : 向后移植部分 Composition API

## 6. 常见模式

- 组合式函数 Composable
- 逻辑复用 hooks
- 依赖注入 Provide/Inject
- 高阶组件 HOC / Renderless 组件

## 7. 性能优化

- v-memo / v-once
- KeepAlive
- 异步组件 defineAsyncComponent
- 懒加载路由
- 虚拟列表 vue-virtual-scroller

## 8. 学习路线

- 基础
  - 模板语法
  - 组件通信
  - 生命周期
- 进阶
  - 组合式 API
  - 自定义指令 / 插件
  - 单元测试
- 实战
  - 用 Vite + Pinia + Vue Router 搭项目
  - SSR or SSG（Nuxt / VitePress）
  - TypeScript 全流程
