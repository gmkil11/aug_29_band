/** @type {import('next').NextConfig} */
const nextConfig = {
    // GitHub Pages 배포를 위한 필수 설정
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },

    // 프로덕션 환경에서 asset prefix 설정
    assetPrefix: process.env.NODE_ENV === 'production'
        ? 'https://gmkil11.github.io/aug_29_band'
        : '',

    // 기본 설정
    reactStrictMode: true,
    devIndicators: false,

    // 컴파일러 설정 (optimizeCss 제거)
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // 실험적 기능 비활성화
    // experimental: {
    //   optimizeCss: true,  // 이 부분 제거
    // },
}

module.exports = nextConfig;