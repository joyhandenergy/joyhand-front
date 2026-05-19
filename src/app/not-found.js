import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Page Not Found | JoyHand Energy",
  robots: { index: false, follow: false },
};

export default function CatchAllNotFound() {
  return (
    <main className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Page Not Found</h2>
        <p className="not-found__text">
          The page you are looking for doesn't exist or has been moved. Explore our product catalog or contact our sales team directly.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "1.5rem" }}>
          <Link href="/products" className="btn btn--primary">
            Browse Products
          </Link>
          <Link href="/contact-us" className="btn btn--outline-light">
            Contact Sales
          </Link>
        </div>
      </div>
    </main>
  );
}