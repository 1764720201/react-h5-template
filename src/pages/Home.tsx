import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  RefreshCw,
  User,
  Settings,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { api } from "@/utils/api";
import { useAppStore } from "@/store";
import { request } from "@/lib/request";

export default function Home() {
  const queryClient = useQueryClient();

  // ========== Zustand 状态管理示例 ==========
  const { user, theme, locale, setUser, setTheme, setLocale, clearUser } =
    useAppStore();

  // ========== React Query - useQuery 示例 ==========
  const {
    data: post,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["post", 1],
    queryFn: () => api.getPost(1),
  });

  // ========== React Query - useMutation 示例 ==========
  const createPostMutation = useMutation({
    mutationFn: (data: { title: string; body: string; userId: number }) =>
      api.createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      alert("文章创建成功！");
    },
    onError: (error) => {
      console.error("创建文章失败:", error);
    },
  });

  // ========== 直接使用 axios request 示例 ==========
  const [userData, setUserData] = useState<any>(null);
  const fetchUserDirectly = async () => {
    try {
      const data = await request.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUserData(data);
    } catch (error) {
      console.error("获取用户失败:", error);
    }
  };

  // ========== 处理函数 ==========
  const handleLogin = () => {
    setUser({
      id: "1",
      name: "示例用户",
      email: "user@example.com",
      avatar: null,
    });
  };

  const handleLogout = () => {
    clearUser();
  };

  const handleCreatePost = () => {
    createPostMutation.mutate({
      title: "新文章标题",
      body: "这是文章内容",
      userId: 1,
    });
  };

  // ========== 渲染 ==========
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">加载中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-destructive mb-4">错误: {error.message}</p>
          <Button onClick={() => refetch()}>重试</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ========== react-helmet-async 示例 ========== */}
      <Helmet>
        <title>React H5 Template - 首页</title>
        <meta
          name="description"
          content="这是一个展示所有第三方库使用的示例页面"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>

      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* 导航栏 */}
          <nav className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">React H5 Template</h1>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link to="/">首页</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/about">
                  关于
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </nav>

          {/* 标题区域 */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">首页</h2>
            <p className="text-muted-foreground">展示所有第三方库的使用示例</p>
          </div>

          {/* Zustand 状态管理示例 */}
          <section className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Zustand 状态管理
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">用户状态:</span>
                {user ? (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{user.name}</span>
                    <Button variant="outline" size="sm" onClick={handleLogout}>
                      退出登录
                    </Button>
                  </div>
                ) : (
                  <Button variant="default" size="sm" onClick={handleLogin}>
                    登录
                  </Button>
                )}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">主题:</span>
                <div className="flex gap-2">
                  {(["light", "dark", "system"] as const).map((t) => (
                    <Button
                      key={t}
                      variant={theme === t ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTheme(t)}
                    >
                      {t}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">语言:</span>
                <div className="flex gap-2">
                  {["zh-CN", "en-US"].map((l) => (
                    <Button
                      key={l}
                      variant={locale === l ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLocale(l)}
                    >
                      <Globe className="w-4 h-4 mr-1" />
                      {l}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* React Query - useQuery 示例 */}
          <section className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <RefreshCw className="w-5 h-5" />
              React Query - useQuery
            </h2>
            {post && (
              <div className="space-y-2">
                <h3 className="font-medium">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.body}</p>
                <Button onClick={() => refetch()} variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  刷新数据
                </Button>
              </div>
            )}
          </section>

          {/* React Query - useMutation 示例 */}
          <section className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Heart className="w-5 h-5" />
              React Query - useMutation
            </h2>
            <Button
              onClick={handleCreatePost}
              disabled={createPostMutation.isPending}
            >
              {createPostMutation.isPending ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  创建中...
                </>
              ) : (
                "创建文章"
              )}
            </Button>
            {createPostMutation.isSuccess && (
              <p className="text-sm text-green-600">文章创建成功！</p>
            )}
            {createPostMutation.isError && (
              <p className="text-sm text-destructive">创建失败，请重试</p>
            )}
          </section>

          {/* Axios request 直接使用示例 */}
          <section className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Axios Request 直接调用</h2>
            <Button onClick={fetchUserDirectly} variant="outline">
              获取用户信息
            </Button>
            {userData && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm">
                  <strong>用户名:</strong> {userData.name}
                </p>
                <p className="text-sm">
                  <strong>邮箱:</strong> {userData.email}
                </p>
              </div>
            )}
          </section>

          {/* shadcn/ui Button 组件示例 */}
          <section className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">shadcn/ui Button 组件</h2>
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button>
                <Heart className="w-4 h-4 mr-2" />
                With Icon
              </Button>
            </div>
          </section>

          {/* Tailwind CSS 样式示例 */}
          <section className="bg-card border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Tailwind CSS 样式</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-primary text-primary-foreground rounded-md">
                Primary 背景
              </div>
              <div className="p-4 bg-secondary text-secondary-foreground rounded-md">
                Secondary 背景
              </div>
              <div className="p-4 bg-muted rounded-md">Muted 背景</div>
              <div className="p-4 border-2 border-dashed rounded-md">
                边框样式
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
