import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Some versions accept it outside, but let's test according to standard Next.js documentation format
    // or provide it globally as suggested by the error output.
  },
  // La documentazione nel log suggerisce di inserirlo direttamente nell'oggetto di export
  allowedDevOrigins: ["172.20.10.10", "172.29.14.159"],
} as any; // Cast per Next.js mismatch type eventuali

export default nextConfig;
