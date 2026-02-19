/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
