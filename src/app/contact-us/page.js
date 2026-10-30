import ContactClient from "./ContactClient";

export const metadata = {
  title: {
    absolute: "Direct Factory Quotes & OEM Inquiries | JoyHand",
  },
  description: "Connect directly with our Guangzhou factory. Request wholesale container pricing and custom OEM specifications with a guaranteed 24-hour response.",
  keywords: [
    "LiFePO4 battery factory quote",
    "electric motorcycle OEM inquiry",
    "wholesale battery container pricing",
    "China factory direct inquiry",
    "B2B energy hardware supplier",
    "sales@joyhand.com"
  ],
  alternates: {
    canonical: 'https://www.joyhand.com/contact-us',
  },
  openGraph: {
    title: "Direct Factory Quotes & OEM Inquiries | JoyHand",
    description: "Connect directly with our Guangzhou factory. Request wholesale container pricing and custom OEM specifications with a guaranteed 24-hour response.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.joyhand.com/contact-us#webpage",
        "url": "https://www.joyhand.com/contact-us",
        "name": "Direct Factory Quotes & OEM Inquiries | JoyHand",
        "description": "Connect directly with our Guangzhou manufacturing facility. Request wholesale container pricing and custom OEM specifications with a guaranteed 24-hour response.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.joyhand.com/#website",
          "url": "https://www.joyhand.com",
          "name": "JoyHand Energy"
        },
        "mainEntity": {
          "@type": "Organization",
          "@id": "https://www.joyhand.com/#organization",
          "name": "JoyHand Energy",
          "legalName": "Guangzhou Joyhand Energy Technology Co., Ltd.",
          "url": "https://www.joyhand.com",
          "logo": "https://www.joyhand.com/logo.png",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+86-186-0202-1144",
              "contactType": "sales",
              "email": "sales@joyhand.com",
              "areaServed": "Global",
              "availableLanguage": ["en", "zh"]
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.joyhand.com/contact-us#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the response time for inquiries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our team reviews manufacturing requirements within 24 hours. We will contact you from the nearest office to provide a custom proposal."
            }
          },
          {
            "@type": "Question",
            "name": "Do you supply B2B distributors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we exclusively partner with importers, distributors, and brands. MOQs vary by product; we will help find a solution that fits your business."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure export quality?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We control production according to ISO 9001:2015 standards. Every shipment undergoes full audit and documentation before leaving the port."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}