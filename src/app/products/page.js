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
        if (p.mainImage) image = urlFor(p.mainImage).url();
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
        specifications: specs,
      };
    });
  } catch (error) {
    console.error("Sanity fetch failed", error);
  }

  const sanitySlugs = new Set(sanityProducts.map((p) => p.slug));
  const uniqueLocal = productData.filter((p) => !sanitySlugs.has(p.slug));

  return [...sanityProducts, ...uniqueLocal];
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