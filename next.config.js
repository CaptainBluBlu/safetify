/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: isProd ? '/sash/preview' : undefined,
  assetPrefix : isProd ? 'https://nextjs.spruko.com/sash/preview/' : undefined,
  images: {
    loader:"akamai",
    path:""
  },
  compilerOptions: {
    baseUrl: '.',
  },
}

module.exports = nextConfig
