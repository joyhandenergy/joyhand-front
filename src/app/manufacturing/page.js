import ManufacturingClient from "./ManufacturingClient";

export const metadata = {
  title: {
    absolute: "OEM/ODM Manufacturing Facilities & Production Hub | JoyHand",
  },
  description: "Explore JoyHand's 50,000 m² Guangzhou production facility. Automated LiFePO4 battery assembly, solar inverter lines, EV chassis fabrication, and ISO 9001:2015 QC testing.",
  keywords: [
    "OEM ODM manufacturing facility",
    "lithium battery production plant",
    "electric motorcycle assembly factory",
    "ISO 9001 production line",
    "custom hardware engineering China",
    "B2B manufacturing hub"
  ],
  alternates: {
    canonical: 'https://www.joyhand.com/manufacturing',
  },
  openGraph: {
    title: "OEM/ODM Manufacturing Facilities & Production Hub | JoyHand",
    description: "Explore JoyHand's 50,000 m² Guangzhou production facility. Automated LiFePO4 battery assembly, solar inverter lines, EV chassis fabrication, and ISO 9001:2015 QC testing.",
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
  return <ManufacturingClient />;
}