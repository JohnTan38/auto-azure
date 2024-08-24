/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['iili.io'],
    unoptimized: true,
  },
  output: 'export', // Add this line
};

module.exports = nextConfig
