import type { NextConfig } from "next";

const figmaPublicUrl = process.env.FIGMA ? process.env.FIGMA_PUBLIC_URL : undefined;
const figmaDevOrigin = figmaPublicUrl ? new URL(figmaPublicUrl).hostname : undefined;

const nextConfig: NextConfig = {
  ...(figmaDevOrigin ? { allowedDevOrigins: [figmaDevOrigin] } : {}),
  output: "standalone",
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
