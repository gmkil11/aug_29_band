/** @type {import('next').NextConfig} */
const nextConfig = {
    // 개발 인디케이터 비활성화
    devIndicators: false,
    reactStrictMode: true,

    // GitHub Pages 배포를 위한 설정
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },

    // 프로덕션 환경에서 asset prefix 설정
    assetPrefix: process.env.NODE_ENV === 'production'
        ? 'https://gmkil11.github.io/aug_29_band'
        : '',

    // 기타 최적화 설정
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    experimental: {
        optimizeCss: true,
    },
}

module.exports = nextConfig;
