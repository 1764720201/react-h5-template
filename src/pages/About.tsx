import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Package, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <>
      <Helmet>
        <title>关于 - React H5 Template</title>
        <meta name="description" content="React H5 Template 项目介绍" />
      </Helmet>

      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* 导航栏 */}
          <nav className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">React H5 Template</h1>
            <Button variant="outline" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回首页
              </Link>
            </Button>
          </nav>

          {/* 内容区域 */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">关于项目</h2>
              <p className="text-muted-foreground text-lg">
                一个现代化的 React H5 应用开发模板
              </p>
            </div>

            {/* 技术栈 */}
            <section className="bg-card border rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Package className="w-5 h-5" />
                技术栈
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">核心框架</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• React 19.2.0</li>
                    <li>• Vite 7.2.5</li>
                    <li>• TypeScript 5.9.3</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">状态管理</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Zustand 5.0.10</li>
                    <li>• TanStack Query 5.90.17</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">UI 组件</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• shadcn/ui</li>
                    <li>• Tailwind CSS 4.1.18</li>
                    <li>• lucide-react</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">工具库</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• axios 1.13.2</li>
                    <li>• react-router-dom 7.12.0</li>
                    <li>• react-helmet-async</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 功能特性 */}
            <section className="bg-card border rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Code className="w-5 h-5" />
                功能特性
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>开箱即用的项目配置</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>完整的 TypeScript 类型支持</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>移动端 H5 优化</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>错误边界处理</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>路由配置</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>环境变量管理</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>代码示例和文档</span>
                </li>
              </ul>
            </section>

            {/* 快速开始 */}
            <section className="bg-card border rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold">快速开始</h3>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  查看{" "}
                  <code className="bg-muted px-2 py-1 rounded">
                    src/App.tsx
                  </code>{" "}
                  和{" "}
                  <code className="bg-muted px-2 py-1 rounded">
                    src/pages/Home.tsx
                  </code>{" "}
                  了解所有库的使用示例。
                </p>
                <p className="text-muted-foreground">
                  查看 README.md 获取完整的文档说明。
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
