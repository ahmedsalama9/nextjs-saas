import type { NextConfig } from "next";
import 'dotenv/config';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
