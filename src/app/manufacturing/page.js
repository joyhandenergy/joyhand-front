import ManufacturingClient from "./ManufacturingClient";

export const metadata = {
  title: "OEM/ODM Manufacturing & Logistics | JoyHand",
  description: "Professional OEM manufacturing and ODM engineering for energy products. We handle batch testing, customs clearance, and logistics to Lagos and Karachi.",
  keywords: ["OEM manufacturing", "ODM engineering", "LFP cell grading", "battery assembly", "batch testing energy", "customs clearance logistics", "wholesale production China"],
  alternates: {
    canonical: '/manufacturing',
  }
};

export default function ManufacturingPage() {
  return <ManufacturingClient />;
}