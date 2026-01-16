import { create } from "zustand";
import { persist } from "zustand/middleware";

// 应用状态接口
export interface AppState {
    // 用户信息
    user: {
        id: string | null;
        name: string | null;
        email: string | null;
        avatar: string | null;
    } | null;

    // 主题设置
    theme: "light" | "dark" | "system";

    // 加载状态
    loading: boolean;

    // 语言设置
    locale: string;

    // Actions
    setUser: (user: AppState["user"]) => void;
    clearUser: () => void;
    setTheme: (theme: AppState["theme"]) => void;
    setLoading: (loading: boolean) => void;
    setLocale: (locale: string) => void;
    reset: () => void;
}

// 初始状态
const initialState = {
    user: null,
    theme: "system" as const,
    loading: false,
    locale: "zh-CN",
};

// 创建 store
export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            ...initialState,

            // 设置用户信息
            setUser: (user) => set({ user }),

            // 清除用户信息
            clearUser: () => set({ user: null }),

            // 设置主题
            setTheme: (theme) => set({ theme }),

            // 设置加载状态
            setLoading: (loading) => set({ loading }),

            // 设置语言
            setLocale: (locale) => set({ locale }),

            // 重置所有状态
            reset: () => set(initialState),
        }),
        {
            name: "app-storage", // localStorage 的 key
            partialize: (state) => ({
                // 只持久化部分状态
                user: state.user,
                theme: state.theme,
                locale: state.locale,
            }),
        }
    )
);
