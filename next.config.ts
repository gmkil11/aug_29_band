import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // 개발 인디케이터 비활성화 (좌측 하단 버튼 제거)
    devIndicators: false,

    reactStrictMode: true,

    // 기타 최적화 설정
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    experimental: {
        optimizeCss: true,
    }
}
export default nextConfig;
