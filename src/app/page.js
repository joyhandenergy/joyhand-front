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
import { cleanGeoText } from "@/lib/seoSanitizer";

// Static
export const revalidate = 60;

export const metadata = {
  title: {
    absolute: "Solar Battery & Electric Scooter Manufacturer | JoyHand",
  },
  description: "Direct China OEM/ODM factory & wholesale supplier of LiFePO4 solar batteries, electric scooters & motorcycles, hybrid inverters, solar panels & power banks.",
  keywords: [
    "joyhand energy",
    "solar battery electric scooter manufacturer",
    "lifepo4 battery manufacturer china",
    "electric scooter manufacturer china",
    "electric motorcycle factory china",
    "electric dirt bike wholesale china",
    "commercial ess energy storage supplier",
    "hybrid solar inverter manufacturer",
    "portable power station odm manufacturer",
    "custom power bank oem supplier",
    "monocrystalline solar panel wholesale manufacturer"
  ],
  alternates: {
    canonical: 'https://www.joyhand.com/',
  },
  openGraph: {
    title: "Solar Battery & Electric Scooter Manufacturer | JoyHand",
    description: "Direct China OEM/ODM factory & wholesale supplier of LiFePO4 solar batteries, electric scooters & motorcycles, hybrid inverters, solar panels & power banks.",
    url: "https://www.joyhand.com/",
    siteName: "JoyHand",
    type: "website",
    images: [
      {
        url: "/homeImg/businessModelImage001.jpg", 
        width: 1200,
        height: 630,
        alt: "JoyHand ISO 9001:2015 Manufacturing Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Battery & Electric Scooter Manufacturer | JoyHand",
    description: "Direct China OEM/ODM factory & wholesale supplier of LiFePO4 solar batteries, electric scooters & motorcycles, hybrid inverters, solar panels & power banks.",
    images: ["/homeImg/businessModelImage001.jpg"],
  }
};

async function getFeaturedBlogPosts() {
  let sanityPosts = [];
  try {
    const rawSanity = await client.fetch(`*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc)[0...5] {
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
      title: cleanGeoText(p.title),
      slug: p.slug,
      excerpt: cleanGeoText(p.excerpt || ""),
      image: p.mainImage?.asset ? urlFor(p.mainImage).url() : "/images/placeholder.jpg",
      date: p.publishedAt,
      readTime: p.readTime || "6 min read",
      category: cleanGeoText(p.category || "Energy Technology")
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
        "legalName": "Guangzhou Joyhand Energy Technology Co., Ltd.",
        "url": "https://www.joyhand.com",
        "logo": "https://www.joyhand.com/homeImg/businessModelImage001.jpg",
        "image": "https://www.joyhand.com/homeImg/businessModelImage001.jpg",
        "description": "Direct China OEM/ODM factory & wholesale supplier of LiFePO4 solar batteries, electric scooters & motorcycles, hybrid inverters, solar panels & custom power banks.",
        "email": "sales@joyhand.com",
        "foundingDate": "1998",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "No. 7, Nansha District",
            "addressLocality": "Guangzhou",
            "addressRegion": "Guangdong",
            "postalCode": "511400",
            "addressCountry": "CN"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Montgomery",
            "addressRegion": "AL",
            "addressCountry": "US"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Melbourne",
            "addressRegion": "VIC",
            "addressCountry": "AU"
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
          "https://www.linkedin.com/in/joyhand-energy-022aa3451"
        ],
        "knowsAbout": [
          "LiFePO4 Solar Battery Manufacturing",
          "Electric Scooter & Motorcycle OEM Manufacturing",
          "Custom Power Bank OEM & Private Label Manufacturing",
          "B2B Energy Storage Systems (ESS)",
          "Hybrid Solar Inverters",
          "Portable Power Stations & Monocrystalline Solar Panels",
          "Manufacturing to ISO 9001:2015 Standards",
          "Manufacturing to UL 1973, UL 2272, CE & UN38.3 Standards"
        ],
        "areaServed": [
          "Worldwide",
          "North America",
          "Europe",
          "Oceania",
          "Africa",
          "Asia",
          "Latin America"
        ]
      },
      {
        "@type": "WebSite",
        "name": "JoyHand",
        "alternateName": "JoyHand Energy",
        "url": "https://www.joyhand.com"
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