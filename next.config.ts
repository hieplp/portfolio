import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 60 for the 320px about portrait; Next only serves qualities listed here.
  images: { qualities: [60, 75] },
};

export default nextConfig;