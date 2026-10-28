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

  // ── Scrub African references for consumer tech categories to focus on US/EU ──
  const replacePatterns = (text) => {
    if (!text || typeof text !== 'string') return text;
    return text
      .replace(/Uganda premium capacity bulk\.,/gi, 'USA/EU premium capacity bulk.')
      .replace(/Uganda no grid needed\.,/gi, 'USA/EU premium tech.')
      .replace(/Uganda off-grid storage\.,/gi, 'USA/EU market.')
      .replace(/Uganda constant connect/gi, 'USA/EU fast connectivity')
      .replace(/South Africa, Uganda/gi, 'USA, Europe')
      .replace(/Nigeria, Kenya/gi, 'USA, Europe')
      .replace(/Lagos and Nairobi/gi, 'New York and London')
      .replace(/African and Asian/gi, 'American and European')
      .replace(/Uganda/gi, 'Europe')
      .replace(/South Africa/gi, 'USA')
      .replace(/Nigeria/gi, 'USA')
      .replace(/Kenya/gi, 'Europe');
  };

  const allMerged = [...sanityProducts, ...uniqueLocal].map(p => {
    if (['accessories'].includes(p.category)) {
      return {
        ...p,
        description: replacePatterns(p.description)
      };
    }
    return p;
  });

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