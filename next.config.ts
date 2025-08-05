/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'aug_29_band';

const nextConfig = {
    output: 'export',
    devIndicators: false,
    trailingSlash: true,
    images: {
        unoptimized: true,
    },

    // 프로덕션에서만 basePath와 assetPrefix 적용
    ...(isProd && {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
    }),

    reactStrictMode: true,

    // 환경변수 설정
    env: {
        ASSET_PREFIX: isProd ? `/${repoName}` : '',
    },
}

module.exports = nextConfig;
