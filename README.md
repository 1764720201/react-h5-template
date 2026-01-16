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
- **[axios](https://axios-http.com/)** - 基于 Promise 的 HTTP 客户端（待安装）

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
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.562.0",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-helmet-async": "^2.0.5",
  "tailwind-merge": "^3.4.0",
  "tailwindcss": "^4.1.18"
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

## 📁 项目结构

```
react-h5-template/
├── public/                 # 静态资源
├── src/
│   ├── assets/            # 资源文件
│   ├── components/         # 组件目录
│   │   └── ui/            # shadcn/ui 组件
│   ├── lib/               # 工具函数
│   │   └── utils.ts       # 通用工具函数
│   ├── utils/             # 其他工具
│   ├── App.tsx            # 根组件
│   ├── App.css            # 应用样式
│   ├── index.css          # 全局样式（Tailwind CSS）
│   └── main.tsx           # 应用入口
├── components.json         # shadcn/ui 配置文件
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目依赖
```

## ⚙️ 配置说明

### 路径别名

已配置路径别名，可在代码中使用：

- `@/` → `src/`
- `@/components` → `src/components`
- `@/components/ui` → `src/components/ui`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`

### shadcn/ui 配置

- **风格**: new-york
- **基础颜色**: neutral
- **CSS 变量**: 已启用
- **图标库**: lucide-react

### React Query 配置

已在 `src/main.tsx` 中配置 QueryClientProvider，可直接使用 React Query hooks。

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
