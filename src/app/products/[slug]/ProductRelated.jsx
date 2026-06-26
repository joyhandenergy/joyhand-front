"use client";

import { useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { productData } from "@/data";

export default function ProductRelated({ currentProductId, passedProducts = null }) {
  const scrollRef = useRef(null);

  const relatedProducts = useMemo(() => {
    if (passedProducts && passedProducts.length > 0) {
      return passedProducts;
    }

    // Fallback for purely local testing without Sanity
    const otherProducts = productData.filter(p => p.id !== currentProductId);
    if (otherProducts.length === 0) return [];
    
    // Fallback is static to prevent hydration issues
    return otherProducts.slice(0, 12);
  }, [currentProductId, passedProducts]);

  if (relatedProducts.length === 0) return null;

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.75;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="related-section">
      <div className="related-section__header">
        <h3 className="related-section__title">You May Also Like</h3>
        <div className="related-section__arrows">
          <button
            className="related-section__arrow"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            ‹
          </button>
          <button
            className="related-section__arrow"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>

      <div className="related-section__track-wrapper">
        <div className="related-section__track" ref={scrollRef}>
          {relatedProducts.map((product) => (
            <Link
              key={product.id || product.slug}
              href={`/products/${product.slug}`}
              className="related-section__card"
            >
              <div className="related-section__img-wrapper">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="220px"
                  className="related-section__img"
                />
              </div>
              <div className="related-section__card-body">
                <h4 className="related-section__card-name">{product.name}</h4>
                <span className="related-section__card-model">{product.model}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}