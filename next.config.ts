import type { NextConfig } from "next";

const deploymentTarget = process.env.DEPLOY_TARGET ?? "static";

if (deploymentTarget !== "static" && deploymentTarget !== "server") {
  throw new Error(`Unsupported DEPLOY_TARGET: ${deploymentTarget}`);
}

const isStaticBuild = deploymentTarget === "static";

const nextConfig: NextConfig = {
  output: isStaticBuild ? "export" : "standalone",
  distDir: isStaticBuild ? "dist" : ".next-server",
  trailingSlash: isStaticBuild,
  images: {
    unoptimized: isStaticBuild,
  },
};

export default nextConfig;
