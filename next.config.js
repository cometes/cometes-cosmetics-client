/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["storage.googleapis.com", "storage.cloud.google.com"],
    formats: ["image/webp"]
  }
};

module.exports = nextConfig;
