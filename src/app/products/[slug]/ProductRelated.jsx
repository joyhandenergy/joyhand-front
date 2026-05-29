"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { productData } from "@/data";

export default function ProductRelated({ currentProductId, passedProducts = null }) {
  const relatedProducts = useMemo(() => {
    // If Sanity related products are passed from the server component
    if (passedProducts && passedProducts.length > 0) {
      return passedProducts.slice(0, 4);
    }

    // Fallback logic for local development testing
    const otherProducts = productData.filter(p => p.id !== currentProductId);
    if (otherProducts.length === 0) return [];

    const seededRandom = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    const shuffled = [...otherProducts];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const seed = currentProductId.charCodeAt(0) || 1;
      const j = Math.floor(seededRandom(seed + i) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 4);
  }, [currentProductId, passedProducts]);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="product-details__related">
      <h3 className="product-details__related-title">You May Also Like</h3>
      <div className="product-details__related-grid">
        {relatedProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`} className="product-details__related-card">
            <div className="product-details__related-img-wrapper">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                className="product-details__related-img"
              />
            </div>
            <h4 className="product-details__related-name">{product.name}</h4>
            <span className="product-details__related-model">{product.model}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}