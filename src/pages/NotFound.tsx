import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - 页面未找到</title>
        <meta name="description" content="页面未找到" />
      </Helmet>

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="text-center space-y-6 max-w-md">
          <AlertCircle className="w-24 h-24 text-muted-foreground mx-auto" />
          <div className="space-y-2">
            <h1 className="text-6xl font-bold">404</h1>
            <h2 className="text-2xl font-semibold">页面未找到</h2>
            <p className="text-muted-foreground">
              抱歉，您访问的页面不存在或已被移除。
            </p>
          </div>
          <Button asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              返回首页
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
