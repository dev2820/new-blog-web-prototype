/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/@:slug*",
        destination: "/user/:slug*",
      },
    ];
  },
  reactStrictMode: false,
  images: {
    domains: ["lh3.googleusercontent.com", "s3.us-west-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
