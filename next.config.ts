import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        scrollRestoration: true, // Включает сохранение и восстановление прокрутки
    },
    /* другие параметры конфигурации */
};

export default nextConfig;
