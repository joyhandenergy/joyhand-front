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
    default: "Factory Direct Solar & Batteries | JoyHand",
    template: "%s | JoyHand",
  },
  description: "Direct OEM/ODM manufacturer of LiFePO4 batteries, hybrid inverters, solar panels, and e-motorcycles. ISO 9001, CE & UL certified for global wholesale.",
  keywords: [
    "joyhand energy",
    "lifepo4 battery manufacturer china",
    "solar battery factory china",
    "oem solar battery manufacturer",
    "wholesale lifepo4 supplier",
    "hybrid solar inverter manufacturer",
    "electric motorcycle factory china",
    "electric dirt bike wholesale china",
    "electric scooter manufacturer china",
    "portable power station odm manufacturer",
    "solar panel wholesale manufacturer",
    "solar battery",
    "solar inverter",
    "portable power station"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "JoyHand Energy | Direct Factory Partnership",
    description: "Direct factory manufacturing of LiFePO4 batteries, hybrid inverters, solar panels & e-motorcycles. ISO 9001, CE & UL certified for global B2B supply chains.",
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
    icon: "/images/logos/joyhand.icon.png",
  },
  verification: {
    other: {
      "p:domain_verify": "8e1200b137daa101c7a4206dca83a8a8",
    },
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
      <head>
        <link rel="alternate" type="text/markdown" title="LLMs.txt" href="/llms.txt" />
      </head>
      <body suppressHydrationWarning={true} className="antialiased">
        {/* Google Analytics 4 - loads completely idly */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        
        {/* Ahrefs Web Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="ZyFJuWwL2y8wD47Zr+Zddg"
          strategy="afterInteractive"
        />

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