import { blogPosts as localBlogPosts } from "@/data";
import Link from "next/link";
import BlogCard from "@/components/blogCard/BlogCard";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Script from "next/script";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import "./blog.css";

// Static

export const metadata = {
  title: "Manufacturing Intel & Energy Insights | JoyHand Blog",
  description: "Deep-dives into global energy storage. Read about LFP vs Lead-Acid, OEM vs ODM strategies, and container export guides for markets like Nairobi and Karachi.",
  keywords: ["energy manufacturing blog", "LFP battery insights", "OEM manufacturing strategy", "solar export guide", "B2B energy intelligence", "Africa solar logistics"],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "Manufacturing Intel & Energy Insights | JoyHand Blog",
    description: "Deep-dives into global energy storage. Read about LFP vs Lead-Acid, OEM vs ODM strategies, and container export guides for markets like Nairobi and Karachi.",
    url: "https://www.joyhand.com/blog",
    type: "website",
    images: [
      {
        url: "/pageHeadImg/pageheader-blog1.jpg", 
        width: 1200,
        height: 630,
        alt: "JoyHand Manufacturing Insights",
      },
    ],
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
      image: p.mainImage?.asset ? urlFor(p.mainImage).url() : "/images/placeholder.jpg",
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

          <div className="blog-internal-links" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "3rem" }}>
            <Link href="/products" className="btn btn--outline btn--sm">Explore Our Products</Link>
            <Link href="/manufacturing" className="btn btn--outline btn--sm">Our Manufacturing Standards</Link>
            <Link href="/about-us" className="btn btn--outline btn--sm">About JoyHand</Link>
            <Link href="/contact-us" className="btn btn--outline btn--sm">Request a Quote</Link>
          </div>

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