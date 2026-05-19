import Link from "next/link";
import PageHeader from "@/components/pageHeader/PageHeader";
import "../legal.css";

export const metadata = {
  title: "Privacy Policy | JoyHand Energy",
  description: "Learn how JoyHand collects, uses, and protects your personal information when you use our website and manufacturing services.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <PageHeader
        title="Privacy Policy"
        subtitle="Effective Date: March 2025"
        pageImage="/pageHeadImg/pageheader-legal.jpg"
      />
      <div className="container legal__container">
        <div className="legal__content">
          <section className="legal__section">
            <h2>1. Information We Collect</h2>
            <p>
              When you engage with JoyHand Energy—whether by requesting a manufacturing quote, contacting our engineering team, or using our online services—we may collect the following information:
            </p>
            <ul>
              <li><strong>Identification Data:</strong> Full name, professional email address, phone number, and company name.</li>
              <li><strong>Project Specifications:</strong> Required order volume, detailed product specifications, and project-specific engineering requirements.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and navigation patterns collected via cookies for site optimization.</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2>2. How We Use Your Data</h2>
            <p>
              We process your personal information for specific business purposes, including:
            </p>
            <ul>
              <li><strong>Proposal Development:</strong> Evaluating your manufacturing needs and providing detailed quotes.</li>
              <li><strong>Service Fulfillment:</strong> Managing production orders and providing logistics support.</li>
              <li><strong>Communication:</strong> Responding to inquiries and providing technical updates.</li>
              <li><strong>Security:</strong> Protecting our infrastructure and ensuring site integrity.</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2>3. Data Sharing & Global Operations</h2>
            <p>
              JoyHand is a global manufacturer with operations in the USA, China, Australia, and Nigeria. Your data may be shared within our corporate group to facilitate your requests.
            </p>
            <p>
              We do not sell your personal data to third parties. We only share information with trusted service providers who assist in our operations (e.g., shipping partners, payment processors) under strict confidentiality agreements.
            </p>
          </section>

          <section className="legal__section">
            <h2>4. Security Protocols</h2>
            <p>
              We implement robust technical and organizational measures to safeguard your information. This includes enterprise-grade encryption, secure server environments, and restricted access protocols to prevent unauthorized disclosure or data breaches.
            </p>
          </section>

          <section className="legal__section">
            <h2>5. Your Privacy Rights</h2>
            <p>
              Depending on your jurisdiction (such as GDPR or CCPA), you may have the right to access, rectify, or erase your personal data. You may also object to or restrict certain processing activities.
            </p>
            <p>
              To exercise these rights, please contact our Data Protection Officer at the email provided below.
            </p>
          </section>

          <section className="legal__section">
            <h2>6. Cookies & Tracking</h2>
            <p>
              Our website uses cookies to enhance functionality. For detailed information, please refer to our <Link href="/cookie-policy">Cookie Policy</Link>.
            </p>
          </section>

          <section className="legal__section">
            <h2>7. Contact Our Privacy Team</h2>
            <p>
              If you have any questions about this Privacy Policy or our data handling practices, please contact us:
            </p>
            <div className="legal__contact-box">
              <p><strong>JoyHand Energy Compliance</strong></p>
              <p>Email: <a href="mailto:sales@joyhand.com">sales@joyhand.com</a></p>
              <p>Address: 445 Dexter Avenue, Suite 4050, Montgomery, AL 36104, USA</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}