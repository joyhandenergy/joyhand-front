import { blogPosts as localBlogPosts } from "@/data";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import BlogCard from "@/components/blogCard/BlogCard";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import "./blog.css";

// Static ISR revalidation
export const revalidate = 60;

export const metadata = {
  title: {
    absolute: "Factory Engineering & B2B Sourcing Guides | JoyHand",
  },
  description: "Factory engineering reports, quality benchmarks, and technical sourcing guides for LiFePO4 batteries, electric motorcycles, inverters, and solar systems.",
  keywords: [
    "B2B manufacturing blog",
    "LiFePO4 battery sourcing guide",
    "factory engineering reports",
    "e-motorcycle production news",
    "OEM vs ODM guide",
    "solar inverter benchmarks",
    "hardware supply chain intelligence"
  ],
  alternates: {
    canonical: 'https://www.joyhand.com/blog',
  },
  openGraph: {
    title: "Factory Engineering & B2B Sourcing Guides | JoyHand",
    description: "Factory engineering reports, quality benchmarks, and technical sourcing guides for LiFePO4 batteries, electric motorcycles, inverters, and solar systems.",
    url: "https://www.joyhand.com/blog",
    type: "website",
    images: [
      {
        url: "/pageHeadImg/pageheader-blog1.jpg", 
        width: 1200,
        height: 630,
        alt: "JoyHand Factory Engineering & Sourcing Guides",
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
    "@id": "https://www.joyhand.com/blog#blog",
    "name": "Factory Engineering & B2B Sourcing Guides | JoyHand",
    "description": "Direct-from-factory engineering reports, quality benchmarks, and technical sourcing guides for LiFePO4 batteries, electric motorcycles, hybrid inverters, and solar energy systems.",
    "url": "https://www.joyhand.com/blog",
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.joyhand.com/#organization",
      "name": "JoyHand Energy",
      "legalName": "Guangzhou Joyhand Energy Technology Co., Ltd.",
      "url": "https://www.joyhand.com",
      "logo": "https://www.joyhand.com/logo.png"
    }
  };

  return (
    <main className="blog-page">
      <script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ================= HEADER (HERO SECTION) ================= */}
      <PageHeader
        title="Factory Engineering & B2B Sourcing Guides"
        subtitle="Direct-from-factory engineering reports, quality benchmarks, and practical sourcing guides covering LiFePO4 batteries, electric motorcycles, hybrid inverters, and solar energy systems."
        pageImage="/pageHeadImg/pageheader-blog1.jpg"
        breadcrumbCurrent="Blog"
      />

      {/* ================= SECTION 1: INTRO & QUICK NAVIGATION & SECTION 2: ARTICLES GRID ================= */}
      <ScrollRevealWrapper as="section" className="blog-section">
        <div className="container">
          <SectionHeader
            badge="PRODUCT & ENGINEERING INSIGHTS"
            title="Technical Insights for Our Energy & Mobility Products"
            subtitle="Deep-dive into the engineering, assembly, and real-world performance of JoyHand's product portfolio. From Grade-A LiFePO4 battery storage packs and intelligent BMS integration to electric motorcycles, hybrid solar inverters, and portable power stations, our factory engineering team shares the technical benchmarks, compliance data, and product specifications you need to make confident B2B sourcing decisions."
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

      {/* ================= SECTION 3: BOTTOM CTA ================= */}
      <ScrollRevealWrapper as="section" className="blog-cta-section">
        <div className="container">
          <div className="blog-cta-banner">
            <div className="blog-cta-content">
              <h2 className="blog-cta-title">
                Have a Technical Question About Our Products?
              </h2>
              <p className="blog-cta-description">
                Whether you need custom cell configurations for our LiFePO4 batteries, motor and frame specifications for our e-motorcycles, or wholesale container pricing, our engineering and sales teams are here to help.
              </p>
              <div className="blog-cta-actions">
                <Link href="/contact-us" className="btn btn--primary">
                  Contact Our Engineers <PiArrowRight weight="bold" />
                </Link>
                <Link href="/contact-us" className="btn btn--outline-light">
                  Request a Factory Quote <PiArrowRight weight="bold" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealWrapper>
    </main>
  );
}