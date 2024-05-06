/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export'
  // Add images configuration to disable image optimization
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
