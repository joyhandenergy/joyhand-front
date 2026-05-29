import { blogPosts as localBlogPosts } from "@/data";
import BlogCard from "@/components/blogCard/BlogCard";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Script from "next/script";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import "./blog.css";

export const revalidate = 3600;

export const metadata = {
  title: "B2B Energy Insights & Manufacturing Blog | JoyHand Energy",
  description: "Deep-dives into global energy storage. Latest: LFP vs Lead-Acid, OEM vs ODM strategies, and container export guides for emerging markets like Nairobi and Karachi. Free B2B downloads.",
  keywords: ["energy storage insights", "grid stability solutions", "manufacturing blog", "Nigeria solar market", "South Asia energy trends"],
  alternates: {
    canonical: '/blog',
  }
};

async function getBlogPosts() {
  let sanityPosts = [];
  try {
    const rawSanity = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      publishedAt,
      readTime,
      "category": categories[0]->title
    }`);

    sanityPosts = rawSanity.map((p) => ({
      id: p._id,
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt || "",
      image: p.mainImage ? urlFor(p.mainImage).url() : "/images/placeholder.jpg",
      date: p.publishedAt,
      readTime: p.readTime || "5 min read",
      category: p.category || "Energy Technology"
    }));
  } catch (error) {
    console.error("Failed to fetch blog posts from Sanity:", error);
  }

  const sanitySlugs = new Set(sanityPosts.map((p) => p.slug));
  const uniqueLocal = localBlogPosts.filter((p) => !sanitySlugs.has(p.slug));

  return [...sanityPosts, ...uniqueLocal];
}

export default async function BlogPage() {
  const allPosts = await getBlogPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "JoyHand Energy Intelligence",
    "description": "Technical engineering reports and manufacturing updates for B2B energy distributors.",
    "publisher": {
      "@type": "Organization",
      "name": "JoyHand Energy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.joyhand.com/homeImg/businessModelImage001.jpg"
      }
    }
  };

  return (
    <main className="blog-page">
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title="Technical Reports & Industry Insights"
        subtitle="Technical engineering reports, manufacturing updates, and global supply chain strategy for energy importers and distributors."
        pageImage="/pageHeadImg/pageheader-blog1.jpg"
      />

      <ScrollRevealWrapper as="section" className="blog-section">
        <div className="container">
          <SectionHeader
            badge="Engineering Insights"
            title="Professional Energy & Tech Intelligence"
            subtitle="Deep-dives into LFP battery assembly, hybrid inverter engineering, and specialized export compliance for the Africa and South Asia energy sectors."
          />

          <div className="blog-grid">
            {allPosts.map((post, index) => (
              <BlogCard key={post.id || post.slug} post={post} priority={index < 4} />
            ))}
          </div>
        </div>
      </ScrollRevealWrapper>
    </main>
  );
}