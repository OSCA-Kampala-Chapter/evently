/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['user-images.githubusercontent.com', "images.unsplash.com"],
  },
}

module.exports = nextConfig
