export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/studio/",
          "/quotation",
          "/quotation/",
          "/catalog/download",
        ],
      },
    ],
    sitemap: "https://www.joyhand.com/sitemap.xml",
    host: "https://www.joyhand.com",
  };
}
