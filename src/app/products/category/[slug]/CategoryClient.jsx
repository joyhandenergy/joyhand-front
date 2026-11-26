"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/productCard/ProductCard";
import Pagination from "@/components/pagination/Pagination";
import { PiPackage, PiArrowRight, PiFilePdf } from "react-icons/pi";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import { solutionLinks } from "@/data";

export default function CategoryClient({
  slug,
  config,
  products = [],
  totalCount = 0,
  totalPages = 1,
  currentPage = 1,
}) {
  const isComingSoon = config.comingSoon === true;

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const navRef = useRef(null);

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
    } else if (currentPage > 1 && navRef.current) {
      navRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [slug, currentPage]);

  const handleDownload = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    try {
      // Fetch up-to-date products from our cached internal API
      const res = await fetch(`/api/catalog/${config.filterCategory}`);
      if (!res.ok) throw new Error("Failed to fetch catalog data");
      const catalogProducts = await res.json();

      const { pdf } = await import('@react-pdf/renderer');
      const CatalogDocument = (await import('@/components/CatalogDocument')).default;
      
      const blob = await pdf(<CatalogDocument category={config.filterCategory} products={catalogProducts} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `joyhand-${config.filterCategory}-catalog.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to generate PDF:", err);
      alert("Failed to generate catalog PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const introData = config.intro || (config.topContent ? null : {
    heading: config.h1Title || config.title,
    body: config.description || config.heroSubtitle,
    advantages: []
  });

  return (
    <>
      <ScrollRevealWrapper as="section" className="products-page__section">
        <div className="container">

          {/* ── Section 1: Intro & Authority (Above Filter Bar) ── */}
          {introData ? (
            <section className="products-page__intro" aria-labelledby="category-intro-heading">
              <div className="products-page__intro-content">
                <h2 id="category-intro-heading" className="products-page__intro-title">
                  {introData.heading}
                </h2>
                <p className="products-page__intro-text">
                  {introData.body}
                </p>
                {introData.advantages && introData.advantages.length > 0 && (
                  <div className="products-page__intro-advantages">
                    {introData.advantages.map((adv, idx) => (
                      <div key={idx} className="products-page__intro-advantage-card">
                        <span className="products-page__intro-advantage-bullet" aria-hidden="true" />
                        <div className="products-page__intro-advantage-text">
                          <strong className="products-page__intro-advantage-title">{adv.title}</strong>
                          <p className="products-page__intro-advantage-desc">{adv.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ) : config.topContent ? (
            <div className="products-page__top-content">
              <div dangerouslySetInnerHTML={{ __html: config.topContent }} />
            </div>
          ) : null}

          {/* ── Category Filter Bar (Directly Above Product Cards) ── */}
          <div className="products-page__nav-container">
            <nav ref={navRef} className="products-page__category-nav" aria-label="Product categories">
              <Link href="/products" onClick={onTabClick} className="products-page__category-link">
                All
              </Link>
              {solutionLinks.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/category/${cat.slug}`}
                  onClick={onTabClick}
                  className={`products-page__category-link ${
                    slug === cat.slug ? "products-page__category-link--active" : ""
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Grid / Coming Soon ── */}
          {isComingSoon ? (
            <div className="products-page__coming-soon">
              <div className="products-page__coming-soon-content">
                <PiPackage size={56} style={{ color: "var(--primary-color)", opacity: 0.4 }} />
                <h3 className="products-page__coming-soon-title">Coming Soon</h3>
                <p className="products-page__coming-soon-text">
                  We are currently building our {config.title.toLowerCase()} catalog.
                  Check back soon or contact our sourcing team for early access.
                </p>
                <Link href="/contact-us" className="btn btn--primary">
                  Contact Sourcing Team <PiArrowRight />
                </Link>
              </div>
            </div>
          ) : products.length > 0 ? (
            <>
              <div className="products-page__results-header">
                <p className="products-page__results-count">
                  Showing <strong>{products.length}</strong> of{" "}
                  <strong>{totalCount}</strong> {config.title.toLowerCase()} products
                </p>
                <button 
                  onClick={handleDownload}
                  className="btn btn--outline-primary products-page__catalog-btn"
                  title={`Download PDF Catalog for ${config.title}`}
                  disabled={isGeneratingPDF}
                >
                  <PiFilePdf size={20} />
                  <span>{isGeneratingPDF ? "Generating..." : "Download Full Catalog"}</span>
                </button>
              </div>

              <div className="products-page__grid">
                {products.map((product, index) => (
                  <ProductCard key={product.id} product={product} priority={index < 4} />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  baseUrl={`/products/category/${slug}`}
                />
              )}
            </>
          ) : (
            <div className="products-page__coming-soon">
              <div className="products-page__coming-soon-content">
                <PiPackage size={56} style={{ color: "var(--primary-color)", opacity: 0.4 }} />
                <h3 className="products-page__coming-soon-title">No Products Found</h3>
                <p className="products-page__coming-soon-text">
                  No products are available in this category yet. Please check back soon.
                </p>
                <Link href="/products" className="btn btn--primary">
                  View All Products <PiArrowRight />
                </Link>
              </div>
            </div>
          )}

          {/* ── Bottom Content Block (Below Cards) ── */}
          {(config.bottomContent || config.seoContent) && (
            <div className="products-page__seo-block">
              <div dangerouslySetInnerHTML={{ __html: config.bottomContent || config.seoContent }} />
            </div>
          )}

        </div>
      </ScrollRevealWrapper>
    </>
  );
}