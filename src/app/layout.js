import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/scrollTotop/ScrollToTop";
import PageLoader from "@/components/pageLoader/PageLoader";
import CookieConsent from "@/components/cookieConsent/CookieConsent";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = "G-NPVW8QGRQT";

// SEO Metadata - Direct Factory & B2B Wholesale Optimized
export const metadata = {
  metadataBase: new URL("https://www.joyhand.com"),
  title: {
    default: "Factory Direct Solar & Batteries | JoyHand Manufacturer",
    template: "%s | JoyHand Manufacturer",
  },
  description: "Direct factory wholesale of LFP batteries, hybrid inverters, e-mobility solutions, portable power stations, and tempered glass screen protectors. Reliable power solutions for unstable grids in Nigeria and beyond.",
  keywords: ["solar factory China", "OEM energy manufacturer", "wholesale LFP batteries", "ISO standard production", "B2B energy supplier", "portable power stations", "tempered glass screen protector"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "JoyHand Energy | Direct Factory Partnership",
    description: "Bypass middlemen. Scale your energy brand with industrial-grade production of solar solutions, portable power stations, and tempered glass screen protectors for Nigeria, Bangladesh, and South Asia.",
    type: "website",
    siteName: "JoyHand Energy",
    locale: "en_US",
    images: [
      {
        url: "/homeImg/businessModelImage001.jpg", 
        width: 1200,
        height: 630,
        alt: "JoyHand ISO 9001:2015 Manufacturing Facility",
      },
    ],
  },
  icons: {
    icon: "/icon.svg",
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
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable}`}>
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