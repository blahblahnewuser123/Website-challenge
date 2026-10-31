import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Website-challenge',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
