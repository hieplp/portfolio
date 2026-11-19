import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves files only: no server, so no image optimizer either.
  output: "export",
  images: { unoptimized: true },
  // Development is reached over the LAN; without this Next blocks HMR and font requests from it.
  // Hostname only: Next matches the parsed Origin host, not a URL.
  allowedDevOrigins: ["100.79.39.117"],
};

export default nextConfig;