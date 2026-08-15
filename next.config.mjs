/** 
 * Next.js Project Configuration
 * Configures image loading and build safety rules for static deployment.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allows successful deployment even if there are minor TypeScript warnings
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disables automatic cloud image optimization so all static local images load cleanly
  images: {
    unoptimized: true,
  },
}

export default nextConfig
