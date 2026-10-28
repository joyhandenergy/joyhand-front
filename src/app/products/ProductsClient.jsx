"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { solutionLinks, productsCatalogData } from "@/data";
import ProductCard from "@/components/productCard/ProductCard";
import Pagination from "@/components/pagination/Pagination";
import { PiPackage } from "react-icons/pi";
import { useScrollReveal } from "@/components/useScrollReveal";
import "./Products.css";

const DESKTOP_PER_PAGE = 24;
const MOBILE_PER_PAGE = 12;

export default function ProductsClient({ initialProducts = [] }) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const navRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(DESKTOP_PER_PAGE);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? MOBILE_PER_PAGE : DESKTOP_PER_PAGE);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onTabClick = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("catalog_tab_clicked", "true");
    }
  };

  useEffect(() => {
    const isTabClick = typeof window !== "undefined" && sessionStorage.getItem("catalog_tab_clicked");
    if (isTabClick) {
      sessionStorage.removeItem("catalog_tab_clicked");
      if (navRef.current) {
        navRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const totalPages = Math.ceil(initialProducts.length / itemsPerPage);
  const currentPage = Math.min(page, Math.max(1, totalPages));
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedProducts = initialProducts.slice(start, end);

  useEffect(() => {
    if (page > 1 && navRef.current) {
      navRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [page]);

  const sectionReveal = useScrollReveal();

  return (
    <section ref={sectionReveal.ref} className={`products-page__section reveal ${sectionReveal.isVisible ? 'is-visible' : ''}`}>
      <div className="container">

        {/* ── Section 1: Intro & Authority (Above Filter Bar) ── */}
        <section className="products-page__intro" aria-labelledby="products-intro-heading">
          <div className="products-page__intro-content">
            <h2 id="products-intro-heading" className="products-page__intro-title">
              {productsCatalogData.intro.heading}
            </h2>
            <p className="products-page__intro-text">
              {productsCatalogData.intro.body}
            </p>
            <div className="products-page__intro-advantages">
              {productsCatalogData.intro.advantages.map((adv, idx) => (
                <div key={idx} className="products-page__intro-advantage-card">
                  <span className="products-page__intro-advantage-bullet" aria-hidden="true" />
                  <div className="products-page__intro-advantage-text">
                    <strong className="products-page__intro-advantage-title">{adv.title}</strong>
                    <p className="products-page__intro-advantage-desc">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Category Filter Bar ── */}
        <div className="products-page__nav-container">
          <nav ref={navRef} className="products-page__category-nav" aria-label="Product categories">
            <Link
              href="/products"
              onClick={onTabClick}
              className="products-page__category-link products-page__category-link--active"
            >
              All
            </Link>
            {solutionLinks.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/category/${cat.slug}`}
                onClick={onTabClick}
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
            <strong>{initialProducts.length}</strong> products
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
            currentPage={currentPage}
            totalPages={totalPages}
            baseUrl="/products"
          />
        )}

        {/* ── Section 4: Bottom CTA (Below Pagination) ── */}
        <section className="products-page__bottom-cta" aria-labelledby="products-cta-heading">
          <div className="products-page__bottom-cta-inner">
            <h2 id="products-cta-heading" className="products-page__bottom-cta-title">
              {productsCatalogData.bottomCta.heading}
            </h2>
            <p className="products-page__bottom-cta-text">
              {productsCatalogData.bottomCta.body}
            </p>
            <div className="products-page__bottom-cta-actions">
              <Link href="/manufacturing" className="btn btn--primary">
                Request Custom Engineering
              </Link>
              <Link href="/contact-us" className="btn btn--outline-light">
                Get a Wholesale Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}