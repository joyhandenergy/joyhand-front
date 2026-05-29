import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProductsByCategory, solutionConfigs } from "@/data";
import SolutionClient from "./solutionClient";
import Script from "next/script";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import "../../Products.css";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const config = solutionConfigs[slug];
  if (!config) return { title: "Category Not Found" };
  
  const title = `${config.title} | JoyHand`.substring(0, 60);
  const description = config.description.substring(0, 160);

  return {
    title: title,
    description: description,
    keywords: config.keywords,
    openGraph: {
      title: title,
      description: description,
      type: "website",
      images: [
        {
          url: "/homeImg/businessModelImage001.jpg",
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    alternates: {
      canonical: `/products/solutions/${slug}`,
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
    
    // Map Sanity schema to match local ProductCard expectations
    sanityProducts = rawSanity.map((p) => {
      let image = "/images/placeholder.jpg";
      try {
        if (p.mainImage) image = urlFor(p.mainImage).url();
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

  // 3. Merge products (Sanity takes precedence on slug matches)
  const sanitySlugs = new Set(sanityProducts.map((p) => p.slug));
  const uniqueLocal = localProducts.filter((p) => !sanitySlugs.has(p.slug));

  return [...sanityProducts, ...uniqueLocal];
}

export default async function SolutionsPage({ params }) {
  const { slug } = await params;
  const config = solutionConfigs[slug];
  if (!config) notFound();

  const allProducts = await getProductsForCategory(config.filterCategory);

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
          "url": `https://www.joyhand.com/products/${product.slug}`
        }
      }))
    }
  };

  return (
    <>
      <Script
        id="solution-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<div className="container mt-3">Loading solutions...</div>}>
        <SolutionClient slug={slug} config={config} allProducts={allProducts} />
      </Suspense>
    </>
  );
}