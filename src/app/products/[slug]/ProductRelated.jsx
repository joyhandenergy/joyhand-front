"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { productData } from "@/data";

export default function ProductRelated({ currentProductId }) {
  const relatedProducts = useMemo(() => {
    // Filter out current product
    const otherProducts = productData.filter(p => p.id !== currentProductId);
    if (otherProducts.length === 0) return [];

    // Create a seeded random function based on currentProductId
    const seededRandom = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    // Shuffle using seeded random (deterministic per product)
    const shuffled = [...otherProducts];
    for (let i = shuffled.length - 1; i > 0; i--) {
      // Use product ID as seed to get consistent order for same product
      const seed = currentProductId.charCodeAt(0) || 1;
      const j = Math.floor(seededRandom(seed + i) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Return first 4 products
    return shuffled.slice(0, 4);
  }, [currentProductId]);

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