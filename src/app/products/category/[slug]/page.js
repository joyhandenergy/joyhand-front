import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProductsByCategory, solutionConfigs } from "@/data";
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

  const baseTitle = `${config.title} | JoyHand`;
  const title = baseTitle.length > 60 ? baseTitle.substring(0, 57) + "..." : baseTitle;

  let description = config.description.length > 160 ? config.description.substring(0, 157) + "..." : config.description;
  if (description.length < 70) {
    description += " Request a factory-direct B2B wholesale quote today.";
    if (description.length > 160) description = description.substring(0, 157) + "...";
  }

  return {
    title: title,
    description: description,
    keywords: config.keywords,
    openGraph: {
      title: title,
      description: description,
      url: `https://www.joyhand.com/products/category/${slug}`,
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
      canonical: `/products/category/${slug}`,
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

  // 3. Merge products (Sanity takes precedence on slug matches)
  const sanitySlugs = new Set(sanityProducts.map((p) => p.slug));
  const uniqueLocal = localProducts.filter((p) => !sanitySlugs.has(p.slug));

  return [...sanityProducts, ...uniqueLocal];
}

export default async function SolutionsPage({ params }) {
  const { slug } = await params;
  const config = solutionConfigs[slug];
  if (!config) notFound();

  let allProducts = await getProductsForCategory(config.filterCategory);

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

  allProducts = allProducts.map(p => {
    if (['accessories'].includes(p.category)) {
      return {
        ...p,
        description: replacePatterns(p.description)
      };
    }
    return p;
  });

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
      <Script
        id="solution-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={config.title}
        subtitle={config.description}
        pageImage={config.image}
        parentLink="/products"
        parentLabel="Products"
      />
      <Suspense fallback={<div className="container mt-3">Loading catalog...</div>}>
        <CategoryClient slug={slug} config={config} allProducts={allProducts} />
      </Suspense>
    </main>
  );
}