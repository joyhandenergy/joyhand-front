import ManufacturingClient from "./ManufacturingClient";

export const metadata = {
  title: "OEM/ODM Energy Manufacturing & Global Logistics | JoyHand Energy",
  description: "End-to-end OEM/ODM production for energy storage. We manage strict batch testing, customs clearance, and direct shipping to Lagos & Karachi. Request a sample.",
  keywords: ["OEM manufacturing", "ODM engineering", "LFP cell grading", "battery assembly", "batch testing energy", "customs clearance logistics", "wholesale production China"],
  alternates: {
    canonical: '/manufacturing',
  }
};

export default function ManufacturingPage() {
  return <ManufacturingClient />;
}