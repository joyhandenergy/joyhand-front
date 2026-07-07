import ManufacturingClient from "./ManufacturingClient";

export const metadata = {
  title: "OEM & ODM Energy Manufacturing | JoyHand Factory",
  description: "End-to-end OEM/ODM production for energy storage & solar hardware. We handle batch testing, customs, and direct shipping to Lagos & Karachi. Get a sample.",
  keywords: ["OEM energy storage", "ODM solar manufacturer", "custom battery assembly", "LFP cell grading", "ISO standard energy factory", "B2B container export"],
  alternates: {
    canonical: '/manufacturing',
  },
  openGraph: {
    title: "OEM & ODM Energy Manufacturing | JoyHand Factory",
    description: "End-to-end OEM/ODM production for energy storage & solar hardware. We handle batch testing, customs, and direct shipping to Lagos & Karachi. Get a sample.",
    url: "https://www.joyhand.com/manufacturing",
    type: "website",
    images: [
      {
        url: "/serviceImg/serviceoem.jpg", 
        width: 1200,
        height: 630,
        alt: "JoyHand Factory OEM Line",
      },
    ],
  }
};

export default function ManufacturingPage() {
  return <ManufacturingClient />;
}