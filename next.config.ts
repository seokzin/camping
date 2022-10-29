import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
};

export default nextConfig;
