export default function robots() {
  const disallowedPaths = [
    "/api/",
    "/studio/",
    "/quotation",
    "/quotation/",
    "/catalog/download",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "cohere-ai",
        ],
        allow: "/",
        disallow: disallowedPaths,
      },
    ],
    sitemap: "https://www.joyhand.com/sitemap.xml",
    host: "https://www.joyhand.com",
  };
}
