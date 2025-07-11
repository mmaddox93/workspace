/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Novacore Technologies',
    description: 'The official store for Kasm supported workspaces. By Novacore Technologies',
    icon: '/img/logo.svg',
    listUrl: ' https://mmaddox93.github.io/workspace/ ',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/workspace/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
