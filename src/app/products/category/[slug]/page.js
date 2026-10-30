import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProductsByCategory, solutionConfigs, isRedirectedSlug } from "@/data";
import CategoryClient from "./CategoryClient";
import PageHeader from "@/components/pageHeader/PageHeader";
import Script from "next/script";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import "../../Products.css";

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const config = solutionConfigs[slug];
  if (!config) return { title: "Category Not Found" };

  const title = config.pageTitle || `${config.title} | JoyHand`;
  const description = config.metaDescription || config.description;
  const canonical = config.canonicalUrl || `https://www.joyhand.com/products/category/${slug}`;
  const keywords = config.metaKeywords || config.keywords;

  return {
    title: {
      absolute: title,
    },
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      url: canonical,
      type: "website",
      images: [
        {
          url: config.image || "/homeImg/businessModelImage001.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    alternates: {
      canonical: canonical,
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(solutionConfigs).map((slug) => ({ slug }));
}

async function getProductsForCategory(filterCategory) {
  // 1. Fetch products from Sanity
  let sanityProducts = [];
  try {
    const rawSanity = await client.fetch(
      `*[_type == "product" && category == $filterCategory]`,
      { filterCategory }
    );

    // Map Sanity schema to match local ProductCard expectations, excluding 301 redirected slugs
    sanityProducts = rawSanity
      .filter((p) => {
        const s = p.slug?.current || p.slug;
        return s && !isRedirectedSlug(s);
      })
      .map((p) => {
      let image = "/images/placeholder.jpg";
      try {
        if (p.mainImage?.asset) image = urlFor(p.mainImage).url();
      } catch (e) {
        console.error("Image urlFor error", e);
      }

      // Map keySpecs to specifications object
      const specs = {};
      if (p.keySpecs && Array.isArray(p.keySpecs)) {
        p.keySpecs.forEach((s) => {
          const specName = s.specName?.toLowerCase() || "";
          if (specName.includes("capacity") || specName.includes("power") || specName.includes("energy")) {
            specs.capacity = s.specValue;
          }
          if (specName.includes("voltage")) specs.nominalVoltage = s.specValue;
          if (specName.includes("output")) specs.totalOutput = s.specValue;
          if (specName.includes("speed")) specs.topSpeed = s.specValue;
        });
      }

      return {
        id: p._id,
        name: p.name,
        slug: p.slug?.current || p.slug,
        description: p.shortDescription || p.seoDescription || "",
        image: image,
        category: p.category,
        specifications: specs,
      };
    });
  } catch (error) {
    console.error("Sanity fetch failed", error);
  }

  // 2. Fetch local products
  let localProducts = getProductsByCategory(filterCategory) || [];

  // 3. Merge products (Sanity takes precedence on slug matches, excluding redirected slugs)
  const sanitySlugs = new Set(sanityProducts.map((p) => p.slug));
  const uniqueLocal = localProducts.filter((p) => !sanitySlugs.has(p.slug) && !isRedirectedSlug(p.slug));

  return [...sanityProducts, ...uniqueLocal];
}

export default async function SolutionsPage({ params }) {
  const { slug } = await params;
  const config = solutionConfigs[slug];
  if (!config) notFound();

  let allProducts = await getProductsForCategory(config.filterCategory);

  // ── Clean isolated country mentions to professional B2B fleet applications ──
  const cleanDescription = (text) => {
    if (!text || typeof text !== 'string') return text;
    return text
      .replace(/in South African,?\s+Morocco/gi, 'across urban passenger fleets')
      .replace(/in Kenya and Tanzania/gi, 'across commercial and municipal fleets')
      .replace(/in Bangladesh and Ghana/gi, 'across last-mile logistics fleets')
      .replace(/in Nigeria and Pakistan/gi, 'across commercial and industrial fleets')
      .replace(/in Nigeria and Kenya/gi, 'for commercial and residential transport')
      .replace(/in Kenya and Pakistan/gi, 'across commercial fleets and campus transit')
      .replace(/in Ghana and Tanzania/gi, 'across passenger transit and taxi fleets')
      .replace(/in Bangladesh and Nepal/gi, 'across urban logistics and transit fleets')
      .replace(/in Pakistan and Bangladesh/gi, 'across urban commuter and commercial fleets')
      .replace(/in Nigeria,?\s*Kenya,?\s*and Pakistan/gi, 'across municipal and emergency response fleets')
      .replace(/(?:for|in)\s+(?:Nigerian|Pakistani|Ghanaian|Kenyan|Tanzanian|Ugandan|Moroccan)\s+(?:and\s+(?:Pakistani|Ghanaian|Kenyan|Tanzanian|Ugandan|Moroccan)\s+)?(?:riders|roads|highways|enthusiasts|delivery fleets)/gi, 'for urban commuter and commercial delivery fleets')
      .replace(/(?:in|for)\s+(?:Nigeria|Pakistan|Kenya|Ghana|Tanzania|Uganda|Bangladesh|Nepal|Morocco)\s+and\s+(?:Nigeria|Pakistan|Kenya|Ghana|Tanzania|Uganda|Bangladesh|Nepal|Morocco)/gi, 'for commercial and municipal fleets')
      .replace(/,\s*[A-Za-z ]+\s+fuel saver\.,?/gi, '.')
      .replace(/[A-Za-z ]+\s+fuel saver\.,?/gi, '')
      .replace(/,\s*delivery scooter\s*$/gi, '')
      .replace(/Uganda premium capacity bulk\.,/gi, 'Premium capacity wholesale.')
      .replace(/Uganda no grid needed\.,/gi, 'Premium off-grid hardware.')
      .replace(/Uganda off-grid storage\.,/gi, 'High-reliability storage.')
      .replace(/Uganda constant connect/gi, 'Fast connectivity')
      .replace(/South Africa, Uganda/gi, 'Americas, Europe & Africa')
      .replace(/Nigeria, Kenya/gi, 'Americas, Europe & Africa')
      .replace(/Lagos and Nairobi/gi, 'regional commercial hubs')
      .replace(/Lagos to Dhaka/gi, 'Urban Commuter & Delivery')
      .replace(/Karachi and Dhaka/gi, 'commercial logistics fleets')
      .replace(/\b(?:Nigerian|Kenyan|Pakistani|Ghanaian|Ugandan|Tanzanian)\b/gi, 'fleet')
      .replace(/\b(?:Nigeria|Kenya|Pakistan|Ghana|Uganda|Tanzania)\b/gi, 'global markets')
      .replace(/\s+/g, ' ')
      .trim();
  };

  allProducts = allProducts.map(p => ({
    ...p,
    description: cleanDescription(p.description)
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": config.title,
    "description": config.description,
    "publisher": {
      "@type": "Organization",
      "name": "JoyHand Energy Manufacturing"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": allProducts.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "url": `https://www.joyhand.com/products/${product.slug}`,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "89"
          }
        }
      }))
    }
  };

  return (
    <main className="products-page">
      <script
        id="solution-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={config.h1Title || config.title}
        subtitle={config.heroSubtitle || config.description}
        pageImage={config.image}
        parentLink="/products"
        parentLabel="Products"
        breadcrumbCurrent={config.breadcrumbBadge || config.title}
      />
      <Suspense fallback={<div className="container mt-3">Loading catalog...</div>}>
        <CategoryClient slug={slug} config={config} allProducts={allProducts} />
      </Suspense>
    </main>
  );
}