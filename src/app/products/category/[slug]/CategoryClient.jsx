"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/productCard/ProductCard";
import Pagination from "@/components/pagination/Pagination";
import { PiPackage, PiArrowRight, PiFilePdf } from "react-icons/pi";
import { useScrollReveal } from "@/components/useScrollReveal";

const PRODUCTS_PER_PAGE = 24;

const solutionLinks = [
  { slug: "storage-batteries",        name: "Battery Storage" },
  { slug: "solar-inverters",          name: "Hybrid Inverters" },
  { slug: "portable-power-stations",  name: "Portable Power Stations" },
  { slug: "electric-mobility",        name: "E‑Mobility" },
  { slug: "power-banks",              name: "Power Banks" },
  { slug: "accessories",              name: "Accessories" },
];

export default function CategoryClient({ slug, config, allProducts }) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const isComingSoon = config.comingSoon === true;

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const paginatedProducts = allProducts.slice(start, end);
  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);

  const handleDownload = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    try {
      // Fetch up-to-date products from our cached internal API
      const res = await fetch(`/api/catalog/${config.filterCategory}`);
      if (!res.ok) throw new Error("Failed to fetch catalog data");
      const products = await res.json();

      const { pdf } = await import('@react-pdf/renderer');
      const CatalogDocument = (await import('@/components/CatalogDocument')).default;
      
      const blob = await pdf(<CatalogDocument category={config.filterCategory} products={products} />).toBlob();
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

  const sectionReveal = useScrollReveal();

  return (
    <>

      <section ref={sectionReveal.ref} className={`products-page__section reveal ${sectionReveal.isVisible ? 'is-visible' : ''}`}>
        <div className="container">

          {/* ── Top-Level Category Navigation ── */}
          <div className="products-page__nav-container">
            <nav className="products-page__category-nav" aria-label="Product categories">
              <Link href="/products" className="products-page__category-link">
                All Products
              </Link>
              {solutionLinks.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/category/${cat.slug}`}
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
          ) : paginatedProducts.length > 0 ? (
            <>
              <div className="products-page__results-header">
                <p className="products-page__results-count">
                  Showing <strong>{paginatedProducts.length}</strong> of{" "}
                  <strong>{allProducts.length}</strong> {config.title.toLowerCase()} products
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
                {paginatedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} priority={index < 4} />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination
                  currentPage={page}
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

          {/* ── SEO Content Block ── */}
          {config.seoContent && (
            <div className="products-page__seo-block">
              <div dangerouslySetInnerHTML={{ __html: config.seoContent }} />
            </div>
          )}

        </div>
      </section>
    </>
  );
}