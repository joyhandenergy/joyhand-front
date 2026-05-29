import { blogPosts, productData, solutionConfigs } from "@/data";
import { client } from "@/sanity/lib/client";

export default async function sitemap() {
  const baseUrl = "https://www.joyhand.com";

  // 1. Fetch live slugs from Sanity
  const sanityProducts = await client.fetch(`*[_type == "product"]{ "slug": slug.current, _updatedAt }`);
  const sanityPosts = await client.fetch(`*[_type == "post"]{ "slug": slug.current, _updatedAt }`);

  // Merge products
  const sanityProductSlugs = new Set(sanityProducts.map(p => p.slug));
  const localProducts = productData.filter(p => !sanityProductSlugs.has(p.slug));
  const allProducts = [...sanityProducts, ...localProducts.map(p => ({ slug: p.slug, _updatedAt: new Date().toISOString() }))];

  // Merge posts
  const sanityPostSlugs = new Set(sanityPosts.map(p => p.slug));
  const localPosts = blogPosts.filter(p => !sanityPostSlugs.has(p.slug));
  const allPosts = [...sanityPosts, ...localPosts.map(p => ({ slug: p.slug, _updatedAt: new Date().toISOString() }))];

  // 2. Core Static Pages (Highest Priority)
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

  // 3. Product Category / Solutions Pages
  const solutionRoutes = Object.keys(solutionConfigs).map((slug) => ({
    url: `${baseUrl}/products/solutions/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 4. Individual Product Pages (High Priority for B2B Search)
  const productRoutes = allProducts.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: product._updatedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 5. Individual Blog / Intel Pages
  const blogRoutes = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post._updatedAt, 
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...solutionRoutes, ...productRoutes, ...blogRoutes];
}
