import QuotationBuilder from "./QuotationBuilder";
import { client } from "@/sanity/lib/client";
import "./Quotation.css";

export const revalidate = 60;

export default async function QuotationPage() {
  const products = await client.fetch(`*[_type == "product"]{
    _id,
    name,
    model,
    category,
    "imageUrl": mainImage.asset->url,
    fullSpecs
  } | order(_createdAt asc)`);

  return (
    <main className="qb-page-wrapper">
      <div className="qb-header">
        <h1 className="qb-title">Quotation Builder</h1>
        <p className="qb-subtitle">Select products to build a customized JoyHand quotation sheet.</p>
      </div>
      <QuotationBuilder initialProducts={products} />
    </main>
  );
}
