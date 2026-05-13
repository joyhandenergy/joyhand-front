import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/scrollTotop/ScrollToTop";
import PageLoader from "@/components/pageLoader/PageLoader";
import CookieConsent from "@/components/cookieConsent/CookieConsent";
import Script from "next/script";

// ⚠️ Replace "G-XXXXXXXXXX" with your real GA4 Measurement ID from Google Analytics
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

// SEO Metadata - Direct Factory & B2B Wholesale Optimized
export const metadata = {
  metadataBase: new URL("https://www.joyhand.com"),
  title: {
    default: "JoyHand Energy | ISO Certified OEM Solar & Battery Manufacturer",
    template: "%s | JoyHand Manufacturing",
  },
  description: "Direct factory wholesale supply of Grade-A LFP batteries, hybrid inverters, and e-mobility solutions. Engineering excellence for off-grid and unstable grid markets in Africa and South Asia.",
  keywords: ["OEM solar manufacturer", "wholesale LFP batteries", "solar factory China", "energy storage distributor supply", "B2B energy supplier"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "JoyHand Energy | Direct Factory Partnership",
    description: "Bypass middlemen. Scale your energy brand with our ISO 9001:2025 certified production lines in Guangzhou.",
    type: "website",
    siteName: "JoyHand Energy",
    locale: "en_US",
    images: [
      {
        url: "/homeImg/businessModelImage001.jpg", 
        width: 1200,
        height: 630,
        alt: "JoyHand ISO 9001:2025 Certified Export Facility",
      },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#121b2d',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body suppressHydrationWarning={true} className="antialiased">
        {/* Google Analytics 4 - loads after page is interactive */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <PageLoader>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </PageLoader>
        {/* Cookie consent banner appears after everything, fixed at bottom */}
        <CookieConsent />
      </body>
    </html>
  );
}