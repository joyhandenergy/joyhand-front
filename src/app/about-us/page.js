import AboutClient from "./AboutClient";

export const metadata = {
  title: "JoyHand Energy: 28-Year Manufacturing Heritage | B2B OEM",
  description: "Operating to ISO 9001:2015 standards since 1998. Explore our state-of-the-art facility for energy storage. Trusted B2B supplier for importers globally.",
  keywords: ["manufacturing heritage", "factory direct output", "solar hardware manufacturing", "wholesale solar street lights", "EV battery manufacturing", "electric motorcycle batteries", "Nigeria B2B energy"],
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: "JoyHand Energy: 28-Year Manufacturing Heritage",
    description: "Operating to ISO 9001:2015 standards since 1998. Explore our state-of-the-art facility for energy storage. Trusted B2B supplier for importers globally.",
    url: "https://www.joyhand.com/about-us",
    type: "website",
    images: [
      {
        url: "/homeImg/businessModelImage001.jpg", 
        width: 1200,
        height: 630,
        alt: "JoyHand ISO 9001:2015 Manufacturing Facility",
      },
    ],
  }
};

export default function AboutPage() {
  return <AboutClient />;
}