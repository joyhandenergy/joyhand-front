import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProductsByCategory, solutionConfigs, isRedirectedSlug } from "@/data";
import CategoryClient from "./CategoryClient";
import PageHeader from "@/components/pageHeader/PageHeader";
import Script from "next/script";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { cleanGeoText, formatSeoTitle, formatSeoDescription } from "@/lib/seoSanitizer";
import "../../Products.css";

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const config = solutionConfigs[slug];
  if (!config) return { title: { absolute: "Category Not Found | JoyHand" } };

  const title = formatSeoTitle(config.pageTitle || config.title);
  const description = formatSeoDescription(config.metaDescription || config.description);
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

  allProducts = allProducts.map(p => ({
    ...p,
    name: cleanGeoText(p.name),
    description: cleanGeoText(p.description),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": cleanGeoText(config.title),
    "description": cleanGeoText(config.description),
    "publisher": {
      "@type": "Organization",
      "name": "JoyHand"
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