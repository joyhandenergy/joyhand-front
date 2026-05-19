"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { productData, solutionLinks } from "@/data";
import ProductCard from "@/components/productCard/ProductCard";
import Pagination from "@/components/pagination/Pagination";
import { PiPackage } from "react-icons/pi";
import { useScrollReveal } from "@/components/useScrollReveal";
import "./Products.css";

const PRODUCTS_PER_PAGE = 12;

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const paginatedProducts = productData.slice(start, end);
  const totalPages = Math.ceil(productData.length / PRODUCTS_PER_PAGE);

  const sectionReveal = useScrollReveal();
  const gridReveal    = useScrollReveal();

  return (
    <section ref={sectionReveal.ref} className={`products-page__section reveal ${sectionReveal.isVisible ? 'is-visible' : ''}`}>
      <div className="container">

        {/* ── Category Filter Bar ── */}
        <div className="products-page__nav-container">
          <div className="products-page__scroll-hint" aria-hidden="true">
            <span>Swipe categories</span>
            <div className="products-page__scroll-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <nav className="products-page__category-nav" aria-label="Product categories">
            <Link
              href="/products"
              className="products-page__category-link products-page__category-link--active"
            >
              All
            </Link>
            {solutionLinks.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/solutions/${cat.slug}`}
                className="products-page__category-link"
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Results Header ── */}
        <div className="products-page__results-header">
          <p className="products-page__results-count">
            Showing <strong>{paginatedProducts.length}</strong> of{" "}
            <strong>{productData.length}</strong> products
          </p>
        </div>

        {/* ── Products Grid ── */}
        <div className="products-page__grid">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 4} />
            ))
          ) : (
            <div className="products-page__empty">
              <PiPackage size={48} />
              <p>No products found in this category.</p>
              <Link href="/products" className="btn btn--primary">
                View All Products
              </Link>
            </div>
          )}
        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            baseUrl="/products"
          />
        )}
      </div>
    </section>
  );
}