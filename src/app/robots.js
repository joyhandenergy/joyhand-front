export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/privacy",
          "/terms",
          "/cookie-policy",
        ],
      },
    ],
    sitemap: "https://www.joyhand.com/sitemap.xml",
    host: "https://www.joyhand.com",
  };
}
