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

// Static
export const revalidate = 60;

export const metadata = {
  title: {
    absolute: "LiFePO4 Battery, E-Scooter & Solar OEM Manufacturer | JoyHand",
  },
  description: "China-based factory & supplier of LiFePO4 batteries, electric motorcycles, solar panels & inverters. We offer OEM/ODM manufacturing to global standards.",
  keywords: [
    "joyhand energy",
    "lifepo4 battery manufacturer china",
    "solar battery factory china",
    "oem solar battery manufacturer",
    "wholesale lifepo4 supplier",
    "hybrid solar inverter manufacturer",
    "electric motorcycle factory china",
    "electric dirt bike wholesale china",
    "electric scooter manufacturer china",
    "portable power station odm manufacturer",
    "solar panel wholesale manufacturer"
  ],
  alternates: {
    canonical: 'https://www.joyhand.com/',
  },
  openGraph: {
    title: "LiFePO4 Battery, E-Scooter & Solar OEM Manufacturer | JoyHand",
    description: "China-based factory & supplier of LiFePO4 batteries, electric motorcycles, solar panels & inverters. We offer OEM/ODM manufacturing to global standards.",
    url: "https://www.joyhand.com/",
    type: "website",
    images: [
      {
        url: "/homeImg/businessModelImage001.jpg", 
        width: 1200,
        height: 630,
        alt: "JoyHand ISO 9001:2015 Manufacturing Facility",
      },
    ],
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

  return [...sanityPosts, ...uniqueLocal].slice(0, 5);
}

export default async function Home() {
  const featuredPosts = await getFeaturedBlogPosts();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "JoyHand Energy",
        "legalName": "Guangzhou Joyhand Technology Co., Ltd.",
        "url": "https://www.joyhand.com",
        "logo": "https://www.joyhand.com/homeImg/businessModelImage001.jpg",
        "image": "https://www.joyhand.com/homeImg/businessModelImage001.jpg",
        "description": "China-based factory and supplier of LiFePO4 batteries, electric motorcycles, solar panels, and inverters offering OEM and ODM manufacturing to global standards.",
        "email": "sales@joyhand.com",
        "foundingDate": "1998",
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
          "email": "sales@joyhand.com",
          "availableLanguage": ["en", "zh"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/joyhand"
        ],
        "hasCertification": [
          "ISO 9001:2015",
          "CE",
          "UL",
          "UN38.3"
        ]
      },
      {
        "@type": "WebSite",
        "name": "JoyHand Energy",
        "url": "https://www.joyhand.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.joyhand.com/products?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <>
      <script
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