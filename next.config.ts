import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  images: { qualities: [70, 75] },
};

export default nextConfig;
