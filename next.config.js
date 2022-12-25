/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  pageExtensions: ["ts", "tsx", "mdx"],
};

module.exports = [nextConfig ]

module.exports = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};