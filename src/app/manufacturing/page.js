import ManufacturingClient from "./ManufacturingClient";

export const metadata = {
  title: {
    absolute: "Custom Lithium Battery & E-Motorcycle OEM | JoyHand",
  },
  description: "End-to-end OEM/ODM production for custom lithium batteries, e-motorcycles & solar hardware. We handle custom engineering, batch testing & global export.",
  keywords: [
    "custom lithium battery OEM",
    "custom e-motorcycle production",
    "custom solar assembly",
    "battery cell grading",
    "ISO 9001 production line",
    "B2B factory export"
  ],
  alternates: {
    canonical: 'https://www.joyhand.com/manufacturing',
  },
  openGraph: {
    title: "Custom Lithium Battery & E-Motorcycle OEM | JoyHand",
    description: "End-to-end OEM/ODM production for custom lithium batteries, e-motorcycles & solar hardware. We handle custom engineering, batch testing & global export.",
    url: "https://www.joyhand.com/manufacturing",
    type: "website",
    images: [
      {
        url: "/serviceImg/serviceoem.jpg", 
        width: 1200,
        height: 630,
        alt: "JoyHand Custom Lithium Battery & E-Motorcycle OEM Line",
      },
    ],
  }
};

export default function ManufacturingPage() {
  return <ManufacturingClient />;
}