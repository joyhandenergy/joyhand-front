import ManufacturingClient from "./ManufacturingClient";

export const metadata = {
  title: {
    absolute: "OEM/ODM Manufacturing Facilities & Production Hub | JoyHand",
  },
  description: "Tour JoyHand's 50,000 m² Guangzhou OEM/ODM plant: automated LiFePO4 assembly, EV chassis lines, BMS lab & ISO 9001:2015 export QC testing.",
  keywords: [
    "China OEM ODM manufacturing facility",
    "50000m2 lithium battery production plant",
    "contract energy hardware manufacturing",
    "white label OEM assembly China",
    "automated LiFePO4 cell grading lab",
    "ISO 9001 2015 export quality control",
    "custom BMS battery pack engineering",
    "turnkey EV chassis fabrication"
  ],
  alternates: {
    canonical: 'https://www.joyhand.com/manufacturing',
  },
  openGraph: {
    title: "OEM/ODM Manufacturing Facilities & Production Hub | JoyHand",
    description: "Tour JoyHand's 50,000 m² Guangzhou OEM/ODM plant: automated LiFePO4 assembly, EV chassis lines, BMS lab & ISO 9001:2015 export QC testing.",
    url: "https://www.joyhand.com/manufacturing",
    type: "website",
    images: [
      {
        url: "/serviceImg/serviceoem.jpg", 
        width: 1200,
        height: 630,
        alt: "JoyHand 50,000 m² OEM/ODM Manufacturing Facility in Guangzhou",
      },
    ],
  }
};

export default function ManufacturingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "OEM/ODM Manufacturing Facilities & Production Hub",
    "serviceType": "OEM/ODM Hardware Manufacturing & Facility Production",
    "provider": {
      "@type": "Organization",
      "name": "JoyHand Energy",
      "url": "https://www.joyhand.com"
    },
    "areaServed": ["Americas", "Africa", "Asia", "Europe", "Global"],
    "description": "50,000 m² integrated production facility in Guangzhou, China. Automated LiFePO4 battery assembly, solar inverter lines, EV chassis fabrication, and ISO 9001:2015 QC testing.",
    "offers": {
      "@type": "Offer",
      "description": "Direct factory B2B container supply and custom OEM/ODM production for lithium batteries, e-motorcycles, and solar hardware built to CE, UL, and UN38.3 standards."
    }
  };

  return (
    <>
      <script
        id="manufacturing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ManufacturingClient />
    </>
  );
}