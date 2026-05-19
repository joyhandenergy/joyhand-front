import { Suspense } from "react";
import PageHeader from "@/components/pageHeader/PageHeader";
import ProductsClient from "./ProductsClient";
import Script from "next/script";
import "./Products.css";

export const metadata = {
  title: "Energy Storage, Inverters & Power Banks | JoyHand",
  description: "Explore factory-direct LFP batteries, hybrid inverters, portable power stations, and power banks – OEM/ODM ready. Export to Nigeria, Kenya, and worldwide.",
  keywords: ["energy storage", "hybrid inverters", "hybrid inverter production", "portable power stations", "wholesale power banks", "B2B energy products"],
  alternates: {
    canonical: '/products',
  }
};

export default function ProductsPage() {
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
        <ProductsClient />
      </Suspense>
    </main>
  );
}