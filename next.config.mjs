/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  /* Image optimization: AVIF/WebP for 50-80% smaller file sizes */
  images: {
    qualities: [75, 85],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // Cache images for 30 days
  },

  /* Security & Performance HTTP Headers */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Cache static assets aggressively (images, fonts, JS, CSS)
        source: "/(.*)\\.(jpg|jpeg|png|webp|avif|gif|svg|ico|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;