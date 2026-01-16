# React H5 Template

一个现代化的 React H5 应用开发模板，基于最新的技术栈构建，开箱即用。

## ✨ 技术栈

### 核心框架

- **[React 19.2.0](https://react.dev/)** - 最新的 React 框架，提供更好的性能和开发体验
- **[Vite 7.2.5](https://vite.dev/)** - 基于 Rolldown 的下一代前端构建工具，极速的开发和构建体验
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - 类型安全的 JavaScript 超集

### UI 组件库

- **[shadcn/ui](https://ui.shadcn.com/)** - 基于 Radix UI 和 Tailwind CSS 的高质量组件库
  - 使用 `new-york` 风格
  - 图标库：[lucide-react](https://lucide.dev/)
  - 已配置路径别名：`@/components`, `@/components/ui`, `@/lib`, `@/hooks`

### 样式方案

- **[Tailwind CSS 4.1.18](https://tailwindcss.com/)** - 实用优先的 CSS 框架
  - 使用最新的 Vite 插件 `@tailwindcss/vite`
  - 支持 CSS 变量主题配置
  - 基础颜色：neutral

### 数据请求与状态管理

- **[TanStack Query (React Query) 5.90.17](https://tanstack.com/query/latest)** - 强大的数据同步库
  - 已配置 QueryClient 和 QueryClientProvider
  - 提供数据缓存、同步、更新等功能
- **[Zustand 5.0.10](https://zustand-demo.pmnd.rs/)** - 轻量级状态管理库
  - 简单易用的 API，无需 Provider
  - 支持中间件（persist、devtools 等）
  - 已配置基础的 appStore，包含用户信息、主题、语言等状态
- **[axios 1.13.2](https://axios-http.com/)** - 基于 Promise 的 HTTP 客户端
  - 已封装请求拦截器和响应拦截器
  - 支持统一错误处理和 token 管理
- **[react-router-dom 7.12.0](https://reactrouter.com/)** - 官方路由库
  - 已配置 BrowserRouter
  - 包含路由示例（首页、关于页、404 页面）

### 开发工具

- **[ESLint 9.39.1](https://eslint.org/)** - 代码质量检查工具
  - 使用 TypeScript ESLint
  - 支持 React Hooks 规则
- **[React Compiler](https://react.dev/learn/react-compiler)** - React 官方编译器
  - 自动优化组件渲染性能
  - 注意：会影响 Vite 开发和构建性能

### 其他工具

- **[react-helmet-async](https://github.com/staylor/react-helmet-async)** - 管理 HTML head 标签，用于 SEO 和页面元数据
- **[class-variance-authority](https://cva.style/)** - 组件变体管理工具
- **[clsx](https://github.com/lukeed/clsx)** + **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - 类名合并工具

## 📦 已安装的依赖

### 生产依赖

```json
{
  "@radix-ui/react-slot": "^1.2.4",
  "@tailwindcss/vite": "^4.1.18",
  "@tanstack/react-query": "^5.90.17",
  "axios": "^1.13.2",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.562.0",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-helmet-async": "^2.0.5",
  "react-router-dom": "^7.12.0",
  "tailwind-merge": "^3.4.0",
  "tailwindcss": "^4.1.18",
  "zustand": "^5.0.10"
}
```

### 开发依赖

```json
{
  "@eslint/js": "^9.39.1",
  "@types/node": "^25.0.9",
  "@types/react": "^19.2.5",
  "@types/react-dom": "^19.2.3",
  "@vitejs/plugin-react": "^5.1.1",
  "babel-plugin-react-compiler": "^1.0.0",
  "eslint": "^9.39.1",
  "eslint-plugin-react-hooks": "^7.0.1",
  "eslint-plugin-react-refresh": "^0.4.24",
  "globals": "^16.5.0",
  "tw-animate-css": "^1.4.0",
  "typescript": "~5.9.3",
  "typescript-eslint": "^8.46.4",
  "vite": "npm:rolldown-vite@7.2.5"
}
```

## 🚀 快速开始

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install

# 使用 bun
bun install
```

### 开发

```bash
npm run dev
```

### 构建

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

### 测试环境构建

使用测试环境变量构建项目：

```bash
# 使用 bun（推荐）
bun test

# 或使用 npm/yarn/pnpm
npm run test
```

测试环境构建会：

- 自动加载 `.env.test` 文件中的环境变量
- 输出到 `dist-test` 目录
- 使用测试环境的 API 地址等配置

## 📁 项目结构

```
react-h5-template/
├── public/                 # 静态资源
├── src/
│   ├── assets/            # 资源文件
│   ├── components/         # 组件目录
│   │   ├── ui/            # shadcn/ui 组件
│   │   └── ErrorBoundary.tsx  # 错误边界组件
│   ├── hooks/             # 自定义 Hooks
│   │   ├── useDebounce.ts # 防抖 Hook
│   │   └── index.ts       # Hooks 导出
│   ├── lib/               # 工具函数
│   │   ├── request.ts     # axios 请求封装
│   │   └── utils.ts       # 通用工具函数
│   ├── pages/             # 页面组件
│   │   ├── Home.tsx       # 首页（包含所有库的使用示例）
│   │   ├── About.tsx      # 关于页
│   │   └── NotFound.tsx   # 404 页面
│   ├── router/            # 路由配置
│   │   └── index.tsx      # 路由定义
│   ├── store/             # 状态管理
│   │   ├── appStore.ts    # 应用状态 store
│   │   └── index.ts       # Store 导出
│   ├── utils/             # 其他工具
│   │   └── api.ts         # API 接口封装
│   ├── App.tsx            # 根组件（已迁移到路由系统）
│   ├── App.css            # 应用样式
│   ├── index.css          # 全局样式（Tailwind CSS）
│   └── main.tsx           # 应用入口
├── components.json         # shadcn/ui 配置文件
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
├── .env.example           # 环境变量示例文件
├── .env.test              # 测试环境变量（需要创建）
└── package.json           # 项目依赖
```

## ⚙️ 配置说明

### 路径别名

已配置路径别名，可在代码中使用：

- `@/` → `src/`
- `@/components` → `src/components`
- `@/components/ui` → `src/components/ui`
- `@/lib` → `src/lib`
- `@/store` → `src/store`
- `@/utils` → `src/utils`
- `@/hooks` → `src/hooks`

### shadcn/ui 配置

- **风格**: new-york
- **基础颜色**: neutral
- **CSS 变量**: 已启用
- **图标库**: lucide-react

### React Query 配置

已在 `src/main.tsx` 中配置 QueryClientProvider，可直接使用 React Query hooks。

### Zustand 状态管理

已创建基础的 `appStore`，包含以下功能：

- **用户信息管理**: `user`、`setUser`、`clearUser`
- **主题设置**: `theme`、`setTheme`（支持 light/dark/system）
- **加载状态**: `loading`、`setLoading`
- **语言设置**: `locale`、`setLocale`
- **状态重置**: `reset`

使用示例：

```typescript
import { useAppStore } from "@/store";

function MyComponent() {
  // 获取状态和 actions
  const { user, theme, setUser, setTheme } = useAppStore();

  // 或者只订阅需要的部分（性能优化）
  const user = useAppStore((state) => state.user);
  const setUser = useAppStore((state) => state.setUser);

  return (
    <div>
      <p>当前用户: {user?.name}</p>
      <button onClick={() => setTheme("dark")}>切换主题</button>
    </div>
  );
}
```

**持久化**: appStore 已配置 `persist` 中间件，用户信息、主题和语言设置会自动保存到 localStorage。

### 环境变量配置

项目支持多环境配置，通过 `.env` 文件管理：

- `.env` - 本地开发环境（会被 git 忽略）
- `.env.test` - 测试环境
- `.env.production` - 生产环境（会被 git 忽略）
- `.env.example` - 环境变量示例文件

环境变量必须以 `VITE_` 开头才能在代码中访问：

```typescript
// 在代码中使用
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

### H5 移动端优化

模板已针对移动端 H5 应用进行了优化：

- **Viewport 配置**: 已优化移动端视口设置，禁用缩放
- **错误边界**: 已添加 `ErrorBoundary` 组件，捕获并优雅处理错误
- **自定义 Hooks**: 提供了常用 Hooks（如 `useDebounce`）
- **响应式设计**: 使用 Tailwind CSS 实现移动端适配

### 路由配置

项目使用 `react-router-dom` 进行路由管理，路由配置在 `src/router/index.tsx`：

```typescript
import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
```

**已包含的页面**：

- `/` - 首页（包含所有库的使用示例）
- `/about` - 关于页
- `*` - 404 页面

**添加新路由**：

1. 在 `src/pages/` 创建新页面组件
2. 在 `src/router/index.tsx` 中添加路由配置

### 页面示例

`src/pages/Home.tsx` 包含了所有第三方库的完整使用示例，包括：

- ✅ React Router (路由导航)
- ✅ React Query (useQuery, useMutation)
- ✅ Zustand 状态管理
- ✅ Axios 请求封装
- ✅ react-helmet-async SEO 管理
- ✅ lucide-react 图标使用
- ✅ shadcn/ui 组件展示
- ✅ Tailwind CSS 样式示例

可以直接参考 `src/pages/Home.tsx` 了解如何使用各个库。

## 🔧 React Compiler

本模板已启用 React Compiler，它会自动优化组件渲染性能。更多信息请查看 [React Compiler 文档](https://react.dev/learn/react-compiler)。

**注意**: React Compiler 会影响 Vite 开发和构建性能。

## 📝 扩展 ESLint 配置

如果你正在开发生产应用，建议更新配置以启用类型感知的 lint 规则：

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

你也可以安装 [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) 和 [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) 来启用 React 特定的 lint 规则：

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## 📄 License

MIT

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
