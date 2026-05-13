import { blogPosts, productData, solutionConfigs } from "@/data";

export default async function sitemap() {
  const baseUrl = "https://www.joyhand.com"; // Change this to your actual live domain

  // 1. Core Static Pages (Highest Priority)
  const staticRoutes = [
    "",
    "/about-us",
    "/manufacturing",
    "/contact-us",
    "/blog",
    "/products",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.9,
  }));

  // 2. Product Category / Solutions Pages
  const solutionRoutes = Object.keys(solutionConfigs).map((slug) => ({
    url: `${baseUrl}/products/solutions/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 3. Individual Product Pages (High Priority for B2B Search)
  const productRoutes = productData.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 4. Individual Blog / Intel Pages
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(), // Ideally replace with post date if available
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  // Note: We intentionally DO NOT include /privacy, /terms, or /cookie-policy here!

  return [...staticRoutes, ...solutionRoutes, ...productRoutes, ...blogRoutes];
}
