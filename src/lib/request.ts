import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

// API 响应数据结构
export interface ApiResponse<T = any> {
    code: number;
    message: string;
    data: T;
}

// 扩展请求配置，添加自定义选项
export interface RequestConfig extends AxiosRequestConfig {
    skipErrorHandler?: boolean; // 是否跳过统一错误处理
    skipLoading?: boolean; // 是否跳过 loading
}

// 创建 axios 实例
const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
});

// 请求拦截器
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 从 localStorage 或 sessionStorage 获取 token
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // 可以在这里添加 loading 状态管理
        // 例如：store.dispatch(setLoading(true));

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response: AxiosResponse<ApiResponse | any>) => {
        const { data } = response;

        // 根据后端返回的数据结构处理
        // 如果后端直接返回数据，可以在这里统一处理
        if (data && typeof data === "object" && "code" in data) {
            // 有 code 字段的情况
            const apiResponse = data as ApiResponse;
            if (apiResponse.code === 200 || apiResponse.code === 0) {
                return response;
            } else {
                // 业务错误
                const error = new Error(apiResponse.message || "请求失败");
                return Promise.reject(error);
            }
        }

        // 没有 code 字段，直接返回 response
        return response;
    },
    (error) => {
        // HTTP 错误处理
        if (error.response) {
            const { status, data } = error.response;

            switch (status) {
                case 401:
                    // 未授权，清除 token 并跳转到登录页
                    localStorage.removeItem("token");
                    sessionStorage.removeItem("token");
                    // window.location.href = "/login";
                    break;
                case 403:
                    // 禁止访问
                    console.error("没有权限访问该资源");
                    break;
                case 404:
                    // 资源不存在
                    console.error("请求的资源不存在");
                    break;
                case 500:
                    // 服务器错误
                    console.error("服务器错误，请稍后重试");
                    break;
                default:
                    console.error(data?.message || `请求失败: ${status}`);
            }
        } else if (error.request) {
            // 请求已发出但没有收到响应
            console.error("网络错误，请检查网络连接");
        } else {
            // 其他错误
            console.error("请求配置错误", error.message);
        }

        return Promise.reject(error);
    }
);

// 封装请求方法
export const request = {
    get<T = any>(url: string, config?: RequestConfig): Promise<T> {
        return instance.get<ApiResponse<T> | T>(url, config).then((res) => {
            const data = res.data;
            // 如果返回的是 ApiResponse 格式，提取 data 字段
            if (data && typeof data === "object" && "data" in data && "code" in data) {
                return (data as ApiResponse<T>).data;
            }
            return data as T;
        });
    },

    post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
        return instance.post<ApiResponse<T> | T>(url, data, config).then((res) => {
            const responseData = res.data;
            // 如果返回的是 ApiResponse 格式，提取 data 字段
            if (responseData && typeof responseData === "object" && "data" in responseData && "code" in responseData) {
                return (responseData as ApiResponse<T>).data;
            }
            return responseData as T;
        });
    },

    put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
        return instance.put<ApiResponse<T> | T>(url, data, config).then((res) => {
            const responseData = res.data;
            // 如果返回的是 ApiResponse 格式，提取 data 字段
            if (responseData && typeof responseData === "object" && "data" in responseData && "code" in responseData) {
                return (responseData as ApiResponse<T>).data;
            }
            return responseData as T;
        });
    },

    patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
        return instance.patch<ApiResponse<T> | T>(url, data, config).then((res) => {
            const responseData = res.data;
            // 如果返回的是 ApiResponse 格式，提取 data 字段
            if (responseData && typeof responseData === "object" && "data" in responseData && "code" in responseData) {
                return (responseData as ApiResponse<T>).data;
            }
            return responseData as T;
        });
    },

    delete<T = any>(url: string, config?: RequestConfig): Promise<T> {
        return instance.delete<ApiResponse<T> | T>(url, config).then((res) => {
            const responseData = res.data;
            // 如果返回的是 ApiResponse 格式，提取 data 字段
            if (responseData && typeof responseData === "object" && "data" in responseData && "code" in responseData) {
                return (responseData as ApiResponse<T>).data;
            }
            return responseData as T;
        });
    },
};

// 导出 axios 实例，以便需要时直接使用
export default instance;
