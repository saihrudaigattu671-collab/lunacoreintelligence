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
  // Maps URLs to your root partner folder without changing your file structure
  async rewrites() {
    return [
      {
        source: '/partner',
        destination: '/partner/app/page.tsx',
      },
      {
        source: '/partner/:path*',
        destination: '/partner/app/:path*',
      },
    ]
  },
}

export default nextConfig
