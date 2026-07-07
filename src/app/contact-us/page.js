import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact JoyHand Energy | B2B Manufacturing Inquiry",
  description: "Get a custom OEM/ODM manufacturing proposal in 24h. Call +86 130 6085 0617 or submit a B2B inquiry. Dedicated logistics to Lagos, Karachi & worldwide ports.",
  keywords: ["manufacturing inquiry", "B2B energy support", "global logistics and support", "custom power proposal", "global export inquiry", "Nigeria distributor support"],
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    title: "Contact JoyHand Energy | B2B Manufacturing Inquiry",
    description: "Get a custom OEM/ODM manufacturing proposal in 24h. Call +86 130 6085 0617 or submit a B2B inquiry. Dedicated logistics to Lagos, Karachi & worldwide ports.",
    url: "https://www.joyhand.com/contact-us",
    type: "website",
    images: [
      {
        url: "/pageHeadImg/pageheader-contact01.jpg", 
        width: 1200,
        height: 630,
        alt: "JoyHand Global Export Facility",
      },
    ],
  }
};

export default function ContactPage() {
  return <ContactClient />;
}