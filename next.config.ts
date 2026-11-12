import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["localhost", "related-sphere-dome-below.trycloudflare.com"],
    cacheComponents: true,
    partialPrefetching: true,
    reactCompiler: true,
    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css"
            }
        }
    }
};

export default nextConfig;
