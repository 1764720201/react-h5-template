import { request } from "@/lib/request";

// API 接口类型定义示例
export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
}

// API 接口封装示例
export const api = {
    // 获取文章列表
    getPosts: () => {
        return request.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
    },

    // 获取单篇文章
    getPost: (id: number) => {
        return request.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    },

    // 创建文章
    createPost: (data: Omit<Post, "id">) => {
        return request.post<Post>("https://jsonplaceholder.typicode.com/posts", data);
    },

    // 更新文章
    updatePost: (id: number, data: Partial<Post>) => {
        return request.put<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
    },

    // 删除文章
    deletePost: (id: number) => {
        return request.delete<void>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    },

    // 获取用户信息
    getUser: (id: number) => {
        return request.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
    },
};
