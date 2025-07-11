/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Novacore Technologies',
    description: 'The official store for Kasm supported workspaces. By Novacore Technologies',
    icon: '/img/logo.svg',
    listUrl: 'https://spaces.novanexus.site/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
