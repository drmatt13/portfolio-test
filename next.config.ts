import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
