/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: isProd ? "/sash/preview" : undefined,
  assetPrefix: isProd ? "https://nextjs.spruko.com/sash/preview/" : undefined,
  images: {
    loader: "akamai",
    path: "",
  },
  compilerOptions: {
    baseUrl: ".",
    removeConsole: false,
  },
};

module.exports = nextConfig;
