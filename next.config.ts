import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/jodie-manent",
  assetPrefix: "/jodie-manent/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Empêche la génération automatique de AGENTS.md / CLAUDE.md
  agentRules: false,
};

export default nextConfig;
