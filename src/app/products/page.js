import { Suspense } from "react";
import PageHeader from "@/components/pageHeader/PageHeader";
import ProductsClient from "./ProductsClient";
import Script from "next/script";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { productData, productsCatalogData } from "@/data";
import "./Products.css";

// Static

export const metadata = {
  title: {
    absolute: "Factory-Direct Wholesale Catalog | JoyHand Energy",
  },
  description: "Direct-from-factory catalog of Grade-A LiFePO4 batteries, electric motorcycles, hybrid inverters, and solar hardware. Flexible MOQs and wholesale container pricing for global B2B buyers.",
  keywords: [
    "wholesale LiFePO4 batteries",
    "wholesale electric motorcycles",
    "factory direct batteries",
    "B2B product catalog",
    "wholesale solar panels",
    "hybrid inverters wholesale"
  ],
  alternates: {
    canonical: 'https://www.joyhand.com/products',
  },
  openGraph: {
    title: "Factory-Direct Wholesale Catalog | JoyHand Energy",
    description: "Direct-from-factory catalog of Grade-A LiFePO4 batteries, electric motorcycles, hybrid inverters, and solar hardware. Flexible MOQs and wholesale container pricing for global B2B buyers.",
    url: "https://www.joyhand.com/products",
    type: "website",
    images: [
      {
        url: "/homeImg/energyPlatformImage01.jpg", 
        width: 1200,
        height: 630,
        alt: "JoyHand Wholesale LiFePO4 Batteries & Electric Scooters",
      },
    ],
  }
};

async function getAllProducts() {
  let sanityProducts = [];
  try {
    const rawSanity = await client.fetch(`*[_type == "product"]`);

    sanityProducts = rawSanity.map((p) => {
      let image = "/images/placeholder.jpg";
      try {
        if (p.mainImage?.asset) image = urlFor(p.mainImage).url();
      } catch (e) {
        console.error("Image urlFor error", e);
      }

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
        type: p.type,
        specifications: specs,
      };
    });
  } catch (error) {
    console.error("Sanity fetch failed", error);
  }

  const sanitySlugs = new Set(sanityProducts.map((p) => p.slug));
  const uniqueLocal = productData.filter((p) => !sanitySlugs.has(p.slug));

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

  const allMerged = [...sanityProducts, ...uniqueLocal].map(p => ({
    ...p,
    description: cleanDescription(p.description)
  }));

  // Group by category to mix them evenly
  const groupedByCategory = {};
  allMerged.forEach(p => {
    const cat = p.category || 'other';
    if (!groupedByCategory[cat]) groupedByCategory[cat] = [];
    groupedByCategory[cat].push(p);
  });

  // Proportional mixing to balance categories based on their size
  const totalProducts = allMerged.length;
  const scoredProducts = [];

  Object.keys(groupedByCategory).forEach(cat => {
    let catItems = groupedByCategory[cat];

    // 1. Mix internally by type or image to avoid similar products clustering together
    const groupedByType = {};
    catItems.forEach(item => {
      // Use type if available, otherwise fallback to image or name to group similar items
      const subKey = item.type || item.image || item.name;
      if (!groupedByType[subKey]) groupedByType[subKey] = [];
      groupedByType[subKey].push(item);
    });

    const mixedCatItems = [];
    let addedSub = true;
    while (addedSub) {
      addedSub = false;
      for (const t in groupedByType) {
        if (groupedByType[t].length > 0) {
          mixedCatItems.push(groupedByType[t].shift());
          addedSub = true;
        }
      }
    }

    catItems = mixedCatItems;
    const catCount = catItems.length;

    // 2. Proportionally spread them across the whole catalog
    catItems.forEach((item, index) => {
      const targetIndex = (index + 0.5) * (totalProducts / catCount);
      scoredProducts.push({ item, targetIndex });
    });
  });

  // Sort by target index to interleave proportionally
  scoredProducts.sort((a, b) => a.targetIndex - b.targetIndex);

  return scoredProducts.map(sp => sp.item);
}

export default async function ProductsPage() {
  const allProducts = await getAllProducts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Wholesale LFP Batteries & Electric Scooters | JoyHand",
    "description": "Comprehensive catalog of wholesale LFP batteries, electric scooters, motorcycles, hybrid inverters, and solar hardware manufactured by JoyHand.",
    "url": "https://www.joyhand.com/products",
    "publisher": {
      "@type": "Organization",
      "name": "JoyHand Energy Manufacturing",
      "url": "https://www.joyhand.com"
    }
  };

  return (
    <main className="products-page">
      <Script
        id="products-catalog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={productsCatalogData.header.title}
        subtitle={productsCatalogData.header.subtitle}
        pageImage={productsCatalogData.header.image}
        breadcrumbCurrent="Products"
      />
      <Suspense fallback={<div className="container mt-3">Loading products...</div>}>
        <ProductsClient initialProducts={allProducts} />
      </Suspense>
    </main>
  );
}