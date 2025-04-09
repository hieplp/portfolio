import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add the output export option here
  output: "export",

  // If you are using the default '/_next/image' optimization,
  // you might need to disable it for static export or configure a loader.
  // For simple static hosting, disabling might be easiest:
  images: {
    unoptimized: true,
  },

  // Any other existing configurations you have...
  reactStrictMode: true,
};

export default nextConfig;
