/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ ignore ESLint errors in builds
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ ignore TypeScript errors in builds
  },
};

module.exports = nextConfig;
