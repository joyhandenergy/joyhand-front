import { Suspense } from "react";
import PageHeader from "@/components/pageHeader/PageHeader";
import ProductsClient from "./ProductsClient";
import Script from "next/script";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { productData, productsCatalogData, isRedirectedSlug } from "@/data";
import { cleanGeoText } from "@/lib/seoSanitizer";
import "./Products.css";

// Static

export const metadata = {
  title: {
    absolute: "Factory-Direct Wholesale Catalog | JoyHand Energy",
  },
  description: "Factory-direct catalog of Grade-A LiFePO4 batteries, electric motorcycles, hybrid inverters & solar hardware. Wholesale container pricing for B2B buyers.",
  keywords: [
    "wholesale lifepo4 supplier",
    "lifepo4 battery manufacturer china",
    "solar battery factory china",
    "oem solar battery manufacturer",
    "hybrid solar inverter manufacturer",
    "electric motorcycle factory china",
    "electric dirt bike wholesale china",
    "electric scooter manufacturer china",
    "portable power station odm manufacturer",
    "solar panel wholesale manufacturer"
  ],
  alternates: {
    canonical: 'https://www.joyhand.com/products',
  },
  openGraph: {
    title: "Factory-Direct Wholesale Catalog | JoyHand Energy",
    description: "Factory-direct catalog of Grade-A LiFePO4 batteries, electric motorcycles, hybrid inverters & solar hardware. Wholesale container pricing for B2B buyers.",
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
  const uniqueLocal = productData.filter((p) => !sanitySlugs.has(p.slug) && !isRedirectedSlug(p.slug));

  const allMerged = [...sanityProducts, ...uniqueLocal].map(p => ({
    ...p,
    name: cleanGeoText(p.name),
    description: cleanGeoText(p.description),
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
    "name": "Factory-Direct Wholesale Catalog | JoyHand Energy",
    "description": "Direct-from-factory catalog of Grade-A LiFePO4 batteries, electric motorcycles, hybrid inverters & solar hardware. Wholesale container pricing for B2B buyers.",
    "url": "https://www.joyhand.com/products",
    "publisher": {
      "@type": "Organization",
      "name": "JoyHand Energy",
      "url": "https://www.joyhand.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": allProducts.length,
      "itemListElement": allProducts.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "url": `https://www.joyhand.com/products/${product.slug}`,
          "image": product.image?.startsWith('http') ? product.image : `https://www.joyhand.com${product.image || "/images/placeholder.jpg"}`,
          "description": (product.description || "").slice(0, 160)
        }
      }))
    }
  };

  return (
    <main className="products-page">
      <script
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