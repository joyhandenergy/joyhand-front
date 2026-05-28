import { blogPosts } from "@/data";
import BlogCard from "@/components/blogCard/BlogCard";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Script from "next/script";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import "./blog.css";

export const metadata = {
  title: "B2B Energy Insights & Manufacturing Blog | JoyHand Energy",
  description: "Deep-dives into global energy storage. Latest: LFP vs Lead-Acid, OEM vs ODM strategies, and container export guides for emerging markets like Nairobi and Karachi. Free B2B downloads.",
  keywords: ["energy storage insights", "grid stability solutions", "manufacturing blog", "Nigeria solar market", "South Asia energy trends"],
  alternates: {
    canonical: '/blog',
  }
};

export default function BlogPage() {
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
        pageImage="/pageHeadImg/pageheader-blog1.jpg"  // update to a factory or lab image
      />

      <ScrollRevealWrapper as="section" className="blog-section">
        <div className="container">
          <SectionHeader
            badge="Engineering Insights"
            title="Professional Energy & Tech Intelligence"
            subtitle="Deep-dives into LFP battery assembly, hybrid inverter engineering, and specialized export compliance for the Africa and South Asia energy sectors."
          />

          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} priority={index < 4} />
            ))}
          </div>
        </div>
      </ScrollRevealWrapper>
    </main>
  );
}