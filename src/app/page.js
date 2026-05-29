import BusinessModel from "@/components/businessModel/BusinessModel";
import CtaBanner from "@/components/ctaBanner/CtaBanner";
import EnergyPlatforms from "@/components/energyPlatform/EnergyPlatforms";
import Hero from "@/components/hero/Hero";
import HomeBlogSection from "@/components/homeBlog/HomeBlogSection";
import InnovationShowcase from "@/components/innovation/InnovationShowcase";
import TrustSignals from "@/components/trustSignals/TrustSignals";
import GlobalNetwork from "@/components/globalNetwork/GlobalNetwork";
import Script from "next/script";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { blogPosts as localBlogPosts } from "@/data";

export const revalidate = 3600;

export const metadata = {
  title: "JoyHand Energy: Global OEM/ODM Manufacturer | Energy & E-Mobility",
  description: "Competitive factory-direct pricing on LFP batteries, inverters, e-mobility, solar panels, and tech accessories. Direct export to emerging markets, including Lagos, Nairobi, and Dhaka. Get a quote in 24h.",
  keywords: ["power solutions for unstable grids", "factory direct solar", "OEM battery manufacturer", "solar panels wholesale", "solar street lights", "solar inverters B2B"],
  alternates: {
    canonical: '/',
  }
};

async function getFeaturedBlogPosts() {
  let sanityPosts = [];
  try {
    const rawSanity = await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...5] {
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

  return [...sanityPosts, ...uniqueLocal].slice(0, 5);
}

export default async function Home() {
  const featuredPosts = await getFeaturedBlogPosts();
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "JoyHand Energy",
      "url": "https://www.joyhand.com",
      "logo": "https://www.joyhand.com/homeImg/businessModelImage001.jpg",
      "description": "Direct factory manufacturer of premium energy storage systems, solar inverters, and electric mobility solutions operating under ISO 9001:2015 standards.",
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Guangzhou",
          "addressRegion": "Guangdong",
          "addressCountry": "CN"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Lagos",
          "addressCountry": "NG"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+86-186-0202-1144",
        "contactType": "wholesale sales",
        "areaServed": ["NG", "PK", "BD", "KE", "ZA", "US", "AU"],
        "availableLanguage": "en"
      },
      "hasCertification": [
        "Tested for ISO 9001:2015 compliance",
        "Products meet CE requirements",
        "UL tested safety standards",
        "UN38.3 compliant shipping"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "JoyHand Energy",
      "url": "https://www.joyhand.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.joyhand.com/products?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustSignals />
      <BusinessModel />
      <InnovationShowcase />
      <EnergyPlatforms />
      <GlobalNetwork />
      <CtaBanner />     
      <HomeBlogSection posts={featuredPosts} />
    </>
  );
}