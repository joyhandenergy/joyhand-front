import { Suspense } from "react";
import PageHeader from "@/components/pageHeader/PageHeader";
import ProductsClient from "./ProductsClient";
import Script from "next/script";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { productData } from "@/data";
import "./Products.css";

export const revalidate = 3600;

export const metadata = {
  title: "Wholesale Energy, E-Mobility & Tech Accessories | JoyHand Energy Catalog",
  description: "Explore factory-direct LFP batteries, hybrid inverters, portable power stations, e-mobility, solar panels, and tech accessories. Flexible B2B MOQs and global shipping to ports like Lagos and Dhaka.",
  keywords: ["energy storage", "hybrid inverters", "solar hardware", "solar street lights", "portable power stations", "wholesale power banks", "B2B energy products"],
  alternates: {
    canonical: '/products',
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

  const allMerged = [...sanityProducts, ...uniqueLocal];

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
    "name": "JoyHand Wholesale Product Catalog",
    "description": "Comprehensive catalog of OEM/ODM energy storage systems, hybrid inverters, electric mobility, and mobile accessories manufactured by JoyHand.",
    "publisher": {
      "@type": "Organization",
      "name": "JoyHand Energy Manufacturing"
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
        title="Product We Manufacture"
        subtitle="Energy storage, power conversion, mobile power, and electric mobility solutions – direct from our factory."
        pageImage="/pageHeadImg/pageheader-products.jpg"
      />
      <Suspense fallback={<div className="container mt-3">Loading products...</div>}>
        <ProductsClient initialProducts={allProducts} />
      </Suspense>
    </main>
  );
}