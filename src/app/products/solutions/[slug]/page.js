import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProductsByCategory, solutionConfigs } from "@/data";
import SolutionClient from "./solutionClient";
import Script from "next/script";
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

function getProductsForCategory(filterCategory) {
  if (filterCategory === "battery") return getProductsByCategory("battery");
  if (filterCategory === "inverter") return getProductsByCategory("inverter");
  if (filterCategory === "electric-mobility") return getProductsByCategory("electric-mobility");
  if (filterCategory === "portable-power") return getProductsByCategory("portable-power");
  if (filterCategory === "power-bank") return getProductsByCategory("power-bank");
  if (filterCategory === "phone-screen-protector") return [];
  return [];
}

export default async function SolutionsPage({ params }) {
  const { slug } = await params;
  const config = solutionConfigs[slug];
  if (!config) notFound();

  const allProducts = getProductsForCategory(config.filterCategory);

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