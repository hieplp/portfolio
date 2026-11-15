import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves files only: no server, so no image optimizer either.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;