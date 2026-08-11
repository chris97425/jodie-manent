import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/jodie-manent",
  assetPrefix: "/jodie-manent/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
