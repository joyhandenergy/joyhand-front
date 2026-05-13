"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/productCard/ProductCard";
import PageHeader from "@/components/pageHeader/PageHeader";
import Pagination from "@/components/pagination/Pagination";
import { PiPackage, PiArrowRight, PiFilePdf } from "react-icons/pi";

const PRODUCTS_PER_PAGE = 12;

const solutionLinks = [
  { slug: "storage-batteries",        name: "Battery Storage" },
  { slug: "solar-inverters",          name: "Hybrid Inverters" },
  { slug: "portable-power-stations",  name: "Portable Power Stations" },
  { slug: "electric-mobility",        name: "E‑Mobility" },
  { slug: "power-banks",              name: "Power Banks" },
  { slug: "phone-screen-protectors",  name: "Phone Screen Protectors" },
];

export default function SolutionClient({ slug, config, allProducts }) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const paginatedProducts = allProducts.slice(start, end);
  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
  const isComingSoon = config.comingSoon === true;

  const downloadCatalog = () => {
    const url = `/api/catalog?category=${config.filterCategory}`;
    window.open(url, '_blank');
  };

  return (
    <main className="products-page">
      <PageHeader
        title={config.title}
        subtitle={config.description}
        pageImage={config.image}
      />

      <section className="products-page__section">
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
              <Link href="/products" className="products-page__category-link">
                All
              </Link>
              {solutionLinks.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/solutions/${cat.slug}`}
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
                  We are currently building our {config.title.toLowerCase()} solutions catalog.
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
                  onClick={downloadCatalog}
                  className="btn btn--outline-primary products-page__catalog-btn"
                  title={`Download PDF Catalog for ${config.title}`}
                >
                  <PiFilePdf size={20} />
                  <span>Download Full Catalog</span>
                </button>
              </div>

              <div className="products-page__grid">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  baseUrl={`/products/solutions/${slug}`}
                />
              )}
            </>
          ) : (
            <div className="products-page__coming-soon">
              <div className="products-page__coming-soon-content">
                <PiPackage size={56} style={{ color: "var(--primary-color)", opacity: 0.4 }} />
                <h3 className="products-page__coming-soon-title">No Products Yet</h3>
                <p className="products-page__coming-soon-text">
                  No products are available in this category yet. Please check back soon.
                </p>
                <Link href="/products" className="btn btn--primary">
                  View All Products <PiArrowRight />
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}