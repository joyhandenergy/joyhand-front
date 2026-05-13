import { Suspense } from "react";
import PageHeader from "@/components/pageHeader/PageHeader";
import ProductsClient from "./ProductsClient";
import Script from "next/script";
import "./Products.css";

export const metadata = {
  title: "Energy Storage, Inverters, Power Banks & E‑Mobility | JoyHand Manufacturer",
  description: "Explore JoyHand's product range: LFP batteries, hybrid inverters, portable power stations, power banks, electric motorcycles, and accessories. OEM/ODM ready – ISO 9001:2025 certified factory in China. Export to Nigeria, Kenya, Pakistan, and worldwide.",
  keywords: ["energy storage systems", "solar hybrid inverters", "portable power stations", "power bank wholesale", "electric motorcycle manufacturer", "OEM energy products", "ODM battery packs"],
  alternates: {
    canonical: '/products',
  }
};

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "JoyHand Wholesale Product Catalog",
    "description": "Comprehensive catalog of OEM/ODM energy storage systems, hybrid inverters, e-mobility, and mobile accessories manufactured by JoyHand.",
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
        subtitle="Energy storage, power conversion, mobile power, and e‑mobility solutions – direct from our factory."
        pageImage="/pageHeadImg/pageheader-products.jpg"
      />
      <Suspense fallback={<div className="container mt-3">Loading products...</div>}>
        <ProductsClient />
      </Suspense>
    </main>
  );
}