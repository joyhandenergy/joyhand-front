import AboutClient from "./AboutClient";

export const metadata = {
  title: "Manufacturing Heritage Since 1998 | JoyHand",
  description: "Learn about JoyHand’s 28‑year manufacturing heritage. Direct factory output of energy solutions, including EV and e-mobility batteries, aligned with ISO standards.",
  keywords: ["manufacturing heritage", "factory direct output", "ISO standard energy", "e-mobility solutions", "EV battery manufacturing", "electric motorcycle batteries", "Nigeria B2B energy"],
  alternates: {
    canonical: '/about-us',
  }
};

export default function AboutPage() {
  return <AboutClient />;
}