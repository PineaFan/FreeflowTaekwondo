import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["localhost", "reports.pinea.dev"],
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
