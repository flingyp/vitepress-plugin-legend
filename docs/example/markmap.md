# Markmap 示例

## 代码块形式

### 基础用法

使用 `markmap` 代码块形式，插入 Markdown 文件内容：

```markmap
# 前端技术栈
## 基础技术
- HTML
  - 语义化标签
  - 表单处理
  - 无障碍访问
- CSS
  - 布局技术
  - 响应式设计
  - 动画效果
- JavaScript
  - ES6+ 语法
  - 异步编程
  - 模块化开发
## 框架与库
- Vue.js
  - 组件化开发
  - 响应式系统
  - 生态系统
- React
  - JSX 语法
  - Hooks
  - 状态管理
- Angular
  - TypeScript
  - 依赖注入
  - 指令系统
## 工程化工具
- 构建工具
  - Webpack
  - Vite
  - Rollup
- 包管理
  - npm
  - yarn
  - pnpm
- 代码质量
  - ESLint
  - Prettier
  - TypeScript
```

### 自定义配置示例

#### 基础配置

```markmap
---
showToolbar: true
markmap:
  color: ["#2ecc71", "#3498db", "#9b59b6", "#e67e22", "#e74c3c"]
  initialExpandLevel: 2
  maxWidth: 400
  duration: 300
---

# 项目结构
## 前端
### React
#### 组件
#### 状态管理
### Vue
#### 组件
#### 状态管理
## 后端
### Node.js
#### Express
#### Koa
### Python
#### Django
#### Flask
```

#### 高级配置

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

# 技术栈概览
## 开发语言
### JavaScript
#### ES6+
#### TypeScript
### Python
#### 3.8+
#### 3.9+
## 框架
### 前端
#### React
#### Vue
#### Angular
### 后端
#### Express
#### FastAPI
#### Django
## 数据库
### SQL
#### PostgreSQL
#### MySQL
### NoSQL
#### MongoDB
#### Redis
```

#### 暗黑模式适配

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

# 学习路径
## 基础知识
### HTML
### CSS
### JavaScript
## 进阶技能
### 框架
#### React
#### Vue
#### Angular
### 工具
#### Webpack
#### Vite
#### Rollup
## 高级主题
### 性能优化
### 安全
### 测试
```

## 组件形式

### 基础用法

使用组件形式，指定 Markdown 文件路径，读取 Markdown 文件内容：

> showToolbar 为可选参数，默认不显示工具栏，添加 `showToolbar` 参数则显示工具栏

```vue
<!-- 指定路径，读取指定文件（支持相对路径、绝对路径） -->
<PreviewMarkmapPath path="./Vue.md" />
```

<PreviewMarkmapPath path="../Vue.md" />

```vue
<!-- 不指定路径，则读取当前文件 -->
<PreviewMarkmapPath showToolbar />
```

<PreviewMarkmapPath showToolbar />

### 带配置的组件用法

你也可以在引用的 Markdown 文件中添加配置：

```markdown
## <!-- 在引用的文件中添加配置 -->

showToolbar: true
markmap:
color: ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f", "#9b59b6"]
initialExpandLevel: 2
maxWidth: 450
duration: 350

---

# 组件测试

## 前端框架

### React

#### Hooks

#### Context

### Vue

#### Composition API

#### Options API

## 构建工具

### Webpack

### Vite

### Rollup

## 数据库

### SQL

#### PostgreSQL

#### MySQL

### NoSQL

#### MongoDB

#### Redis
```

## 配置选项详解

### 基础选项

| 选项                 | 类型     | 默认值              | 说明                          |
| -------------------- | -------- | ------------------- | ----------------------------- |
| `showToolbar`        | boolean  | true                | 是否显示工具栏                |
| `color`              | string[] | d3.schemeCategory10 | 节点颜色数组                  |
| `initialExpandLevel` | number   | -1                  | 初始展开层级，-1 表示全部展开 |
| `maxWidth`           | number   | 0                   | 节点最大宽度，0 表示无限制    |
| `duration`           | number   | 500                 | 动画持续时间（毫秒）          |

### 布局选项

| 选项                | 类型   | 默认值 | 说明      |
| ------------------- | ------ | ------ | --------- |
| `spacingHorizontal` | number | 80     | 水平间距  |
| `spacingVertical`   | number | 5      | 垂直间距  |
| `paddingX`          | number | 2      | X轴内边距 |

### 交互选项

| 选项       | 类型    | 默认值 | 说明             |
| ---------- | ------- | ------ | ---------------- |
| `zoom`     | boolean | true   | 是否允许缩放     |
| `pan`      | boolean | true   | 是否允许平移     |
| `autoFit`  | boolean | false  | 是否自动适应容器 |
| `fitRatio` | number  | 1      | 适应比例         |

### 高级选项

| 选项                | 类型    | 默认值 | 说明             |
| ------------------- | ------- | ------ | ---------------- |
| `colorFreezeLevel`  | number  | 0      | 颜色冻结层级     |
| `toggleRecursively` | boolean | false  | 是否递归切换     |
| `scrollForPan`      | boolean | false  | 是否滚动平移     |
| `maxInitialScale`   | number  | 1      | 最大初始缩放比例 |
| `lineWidth`         | number  | 1      | 节点间连线的宽度 |

## 使用技巧

1. **颜色配置**: 颜色数组会循环使用，如果节点数量超过颜色数量
2. **展开层级**: `initialExpandLevel: -1` 表示全部展开，`0` 表示只展开根节点
3. **性能优化**: 过多的节点或复杂的配置可能影响渲染性能
4. **响应式设计**: 思维导图会自动适应容器大小
5. **主题适配**: 支持 VitePress 的明暗主题切换

更多配置选项请参考 [Markmap 官方文档](https://markmap.js.org/docs/json-options)。
