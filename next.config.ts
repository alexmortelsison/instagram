import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "assets.teenvogue.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn1.gstatic.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn2.gstatic.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
