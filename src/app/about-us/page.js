import AboutClient from "./AboutClient";

export const metadata = {
  title: "Manufacturing Heritage Since 1998 | JoyHand",
  description: "Learn about JoyHand’s 28‑year manufacturing heritage. Direct factory output of ISO‑certified energy solutions for distributors in Nigeria and South Asia.",
  keywords: ["manufacturing heritage", "factory direct output", "ISO certified energy", "ISO quality control standards", "energy storage factory", "Nigeria B2B energy"],
  alternates: {
    canonical: '/about-us',
  }
};

export default function AboutPage() {
  return <AboutClient />;
}