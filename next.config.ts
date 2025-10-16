/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // مهم جدًا عشان يطابق البورت
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
