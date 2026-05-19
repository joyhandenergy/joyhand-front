import BusinessModel from "@/components/businessModel/BusinessModel";
import CtaBanner from "@/components/ctaBanner/CtaBanner";
import EnergyPlatforms from "@/components/energyPlatform/EnergyPlatforms";
import Hero from "@/components/hero/Hero";
import HomeBlogSection from "@/components/homeBlog/HomeBlogSection";
import InnovationShowcase from "@/components/innovation/InnovationShowcase";
import TrustSignals from "@/components/trustSignals/TrustSignals";
import GlobalNetwork from "@/components/globalNetwork/GlobalNetwork";
import Script from "next/script";

export const metadata = {
  title: "Solar & LFP Battery Factory Direct | JoyHand",
  description: "Direct factory wholesale of LFP batteries, hybrid inverters, and electric motorcycle batteries for unstable grids. Exporting to Nigeria, Bangladesh, and Kenya. OEM/ODM ready.",
  keywords: ["power solutions for unstable grids", "factory direct solar", "OEM battery manufacturer", "Nigeria export", "solar inverters B2B"],
  alternates: {
    canonical: '/',
  }
};

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "JoyHand Energy",
      "url": "https://www.joyhand.com",
      "logo": "https://www.joyhand.com/homeImg/businessModelImage001.jpg",
      "description": "Direct factory manufacturer of premium energy storage systems, solar inverters, and electric mobility solutions operating under ISO 9001:2015 standards.",
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Guangzhou",
          "addressRegion": "Guangdong",
          "addressCountry": "CN"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Lagos",
          "addressCountry": "NG"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+86-186-0202-1144",
        "contactType": "wholesale sales",
        "areaServed": ["NG", "PK", "BD", "KE", "ZA", "US", "AU"],
        "availableLanguage": "en"
      },
      "hasCertification": [
        "Tested for ISO 9001:2015 compliance",
        "Products meet CE requirements",
        "UL tested safety standards",
        "UN38.3 compliant shipping"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "JoyHand Energy",
      "url": "https://www.joyhand.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.joyhand.com/products?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustSignals />
      <BusinessModel />
      <InnovationShowcase />
      <EnergyPlatforms />
      <GlobalNetwork />
      <CtaBanner />     
      <HomeBlogSection />
    </>
  );
}