import AboutClient from "./AboutClient";

export const metadata = {
  title: {
    absolute: "About JoyHand | China Battery & E-Motorcycle Factory",
  },
  description: "Discover JoyHand: a 28-year China factory manufacturing LiFePO4 batteries, electric motorcycles & solar hardware. See our facility, leadership & standards.",
  keywords: [
    "JoyHand factory",
    "JoyHand battery manufacturer",
    "who owns JoyHand",
    "Guangzhou battery factory",
    "28-year manufacturing heritage",
    "e-motorcycle factory China"
  ],
  alternates: {
    canonical: 'https://www.joyhand.com/about-us',
  },
  openGraph: {
    title: "About JoyHand | China Battery & E-Motorcycle Factory",
    description: "Discover JoyHand: a 28-year China factory manufacturing LiFePO4 batteries, electric motorcycles & solar hardware. See our facility, leadership & standards.",
    url: "https://www.joyhand.com/about-us",
    type: "website",
    images: [
      {
        url: "/homeImg/businessModelImage001.jpg", 
        width: 1200,
        height: 630,
        alt: "JoyHand 50,000 m² Manufacturing Facility in Guangzhou",
      },
    ],
  }
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.joyhand.com/about-us#webpage",
        "url": "https://www.joyhand.com/about-us",
        "name": "About JoyHand | China Battery & E-Motorcycle Factory",
        "description": "Discover JoyHand: a 28-year China factory manufacturing LiFePO4 batteries, electric motorcycles & solar hardware. See our facility, leadership & standards.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.joyhand.com/#website",
          "url": "https://www.joyhand.com",
          "name": "JoyHand Energy"
        },
        "mainEntity": {
          "@id": "https://www.joyhand.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.joyhand.com/#organization",
        "name": "JoyHand Energy",
        "legalName": "Guangzhou Joyhand Energy Technology Co., Ltd.",
        "url": "https://www.joyhand.com",
        "logo": "https://www.joyhand.com/logo.png",
        "foundingDate": "1998",
        "description": "JoyHand is a direct manufacturer based in Guangzhou, China. Founded in 1998, we own and operate a 50,000 m² production facility where we build LiFePO4 batteries, electric motorcycles, and solar hardware.",
        "founder": {
          "@type": "Person",
          "name": "Dui Wangpeng (Winper)",
          "jobTitle": "CEO & Founder",
          "description": "Drives global strategy, ensuring direct, high-quality factory output for battery and mobility distributors worldwide."
        },
        "employee": [
          {
            "@type": "Person",
            "name": "Li Ronghua",
            "jobTitle": "Chief Engineer Officer",
            "description": "Manages 30+ engineers to ensure product performance in extreme heat and diverse grid environments globally."
          }
        ],
        "location": [
          {
            "@type": "Place",
            "name": "JoyHand Manufacturing Hub (50,000 m²)",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No. 7, Nansha District",
              "addressLocality": "Guangzhou",
              "addressRegion": "Guangdong",
              "postalCode": "511400",
              "addressCountry": "CN"
            }
          },
          {
            "@type": "Place",
            "name": "JoyHand USA Headquarters",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "445 Dexter Avenue, Suite 4050",
              "addressLocality": "Montgomery",
              "addressRegion": "AL",
              "postalCode": "36104",
              "addressCountry": "US"
            }
          },
          {
            "@type": "Place",
            "name": "JoyHand Australia Pacific Office",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "157 A'Beckett Street",
              "addressLocality": "Melbourne",
              "addressRegion": "VIC",
              "postalCode": "3000",
              "addressCountry": "AU"
            }
          },
          {
            "@type": "Place",
            "name": "JoyHand Nigeria Africa Office",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "New Mandilas International Market, Trade Fair, Ojo",
              "addressLocality": "Lagos",
              "addressCountry": "NG"
            }
          }
        ],
        "knowsAbout": [
          "LiFePO4 Batteries",
          "Electric Motorcycles",
          "Solar Hardware",
          "Hybrid Inverters",
          "B2B OEM ODM Manufacturing"
        ]
      }
    ]
  };

  return (
    <>
      <script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}