/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Mohamed Repo Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://mohamedbenhariz.github.io/',
    contactUrl: 'https://github.com/mohamedbenhariz',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
