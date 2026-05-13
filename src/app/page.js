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
  title: "Reliable OEM Solar & LFP Battery Manufacturer",
  description: "JoyHand is an ISO 9001:2025 certified direct factory. We manufacture and export wholesale LFP batteries, hybrid inverters, and e-mobility solutions directly to Nigeria, Kenya, Pakistan, and Bangladesh.",
  keywords: ["solar battery manufacturer Nigeria", "wholesale hybrid inverters Pakistan", "OEM LFP batteries Africa", "direct solar factory", "B2B energy storage"],
  alternates: {
    canonical: '/',
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JoyHand Energy",
    "url": "https://www.joyhand.com",
    "logo": "https://www.joyhand.com/homeImg/businessModelImage001.jpg",
    "description": "ISO 9001:2025 certified manufacturer of premium energy storage systems, solar inverters, and electric mobility solutions.",
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
      "telephone": "+86-130-6085-0617",
      "contactType": "wholesale sales",
      "areaServed": ["NG", "PK", "BD", "KE", "ZA"],
      "availableLanguage": "en"
    }
  };

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