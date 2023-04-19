/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fptshop.com.vn',
        port: '',
        pathname: '/Uploads/**',
      }
    ]
  },
}

module.exports = nextConfig
