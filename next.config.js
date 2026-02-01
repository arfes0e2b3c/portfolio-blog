const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/*/*/*',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/slides/frontend-conference-kansai-2025',
        destination: '/slides/frontend-conference-kansai-2025/index.html',
      },
      {
        source: '/slides/25-grad-lt-20260109',
        destination: '/slides/25-grad-lt-20260109/index.html',
      },
    ]
  },
}

module.exports = withVanillaExtract(nextConfig)
