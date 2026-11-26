import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Mematikan Turbopack (Solusi untuk error panic CSS)
  webpack: (config) => {
    return config;
  },
  
  // 2. Mencegah WorkerError (Kehabisan RAM di server Hostinger)
  experimental: {
    cpus: 1,
    workerThreads: false,
  },

  // 3. Meringankan beban pengecekan tipe data agar memori tidak penuh
  // @ts-ignore
  eslint: {
    ignoreDuringBuilds: true,
  },
  // @ts-ignore
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;