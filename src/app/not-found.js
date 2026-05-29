import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Page Not Found | JoyHand Energy",
  robots: { index: false, follow: false },
};

export default function CatchAllNotFound() {
  return (
    <main className="not-found" style={{
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--neutral-light)",
      position: "relative",
      padding: "calc(var(--header-height) + 4rem) 1rem 4rem 1rem",
      zIndex: 2
    }}>
      <div className="not-found__content" style={{
        textAlign: "center",
        maxWidth: "600px",
        background: "var(--neutral-white)",
        padding: "4rem 3rem",
        borderRadius: "24px",
        border: "1px solid rgba(18, 27, 45, 0.05)",
        boxShadow: "0 20px 40px rgba(18, 27, 45, 0.08)"
      }}>
        <h1 className="not-found__title" style={{ fontSize: "8rem", fontWeight: "800", margin: "0 0 1rem 0", color: "var(--primary-color)", lineHeight: 1 }}>404</h1>
        <h2 className="not-found__subtitle" style={{ color: "var(--secondary-color)", fontSize: "2rem", marginBottom: "1rem" }}>Page Not Found</h2>
        <p className="not-found__text" style={{ color: "var(--neutral-medium)", fontSize: "1.1rem", marginBottom: "2.5rem", lineHeight: 1.6 }}>
          The page you are looking for doesn't exist or has been moved. Explore our product catalog or contact our sales team directly.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/products" className="btn btn--primary">
            Browse Products
          </Link>
          <Link href="/contact-us" className="btn btn--secondary">
            Contact Sales
          </Link>
        </div>
      </div>
    </main>
  );
}