/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/@:username",
        destination: "/user/:username",
      },
    ];
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
