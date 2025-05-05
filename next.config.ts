import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //output: "export", //isso serve para gerar páginas estáticas
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
