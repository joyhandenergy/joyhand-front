import ContactClient from "./ContactClient";

export const metadata = {
  title: "Manufacturing Inquiry & Support | JoyHand",
  description: "Contact JoyHand for custom manufacturing proposals. Global support for B2B importers in Nigeria, Pakistan, and Bangladesh. Fast response times.",
  keywords: ["manufacturing inquiry", "B2B energy support", "global logistics and support", "custom power proposal", "global export inquiry", "Nigeria distributor support"],
  alternates: {
    canonical: '/contact-us',
  }
};

export default function ContactPage() {
  return <ContactClient />;
}