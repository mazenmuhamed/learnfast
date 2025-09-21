import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'fr1dn2z82q.ufs.sh' }],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
