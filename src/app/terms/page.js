import PageHeader from "@/components/pageHeader/PageHeader";
import "../legal.css";

export const metadata = {
  title: "Terms of Service | JoyHand Energy",
  description: "Read the terms and conditions governing the use of JoyHand’s website and manufacturing services.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <PageHeader
        title="Terms of Service"
        subtitle="Effective Date: March 2025"
        pageImage="/pageHeadImg/pageheader-legal.jpg"
      />
      <div className="container legal__container">
        <div className="legal__content">
          <section className="legal__section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the JoyHand Energy website (joyhand.com), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of our site immediately.
            </p>
          </section>

          <section className="legal__section">
            <h2>2. Manufacturing & OEM/ODM Services</h2>
            <p>
              JoyHand provides detailed information regarding our industrial manufacturing capabilities and professional OEM/ODM services. Any quotation, technical proposal, or engineering advice provided through this website is an invitation to treat and does not constitute a binding contract until a formal written agreement is executed by authorized representatives of both parties.
            </p>
          </section>

          <section className="legal__section">
            <h2>3. Intellectual Property Rights</h2>
            <p>
              All materials on this website—including technical drawings, product descriptions, proprietary software architectures, logos, and industrial designs—are the exclusive property of JoyHand Energy or its licensors. Unauthorized reproduction, distribution, or commercial exploitation of this content is strictly prohibited.
            </p>
          </section>

          <section className="legal__section">
            <h2>4. Professional Conduct</h2>
            <p>
              When interacting with our platform, you agree to:
            </p>
            <ul>
              <li>Provide accurate and verifiable professional information in all quote requests.</li>
              <li>Refrain from any activity that disrupts the site's operational integrity.</li>
              <li>Respect all export control regulations and international trade laws relevant to energy infrastructure.</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2>5. Disclaimer & Limitation of Liability</h2>
            <p>
              The information on this site is provided for general guidance only. While we strive for technical accuracy, JoyHand Energy makes no warranties regarding the completeness or real-time precision of site data. JoyHand shall not be held liable for any indirect or consequential damages resulting from the use of our digital platform.
            </p>
          </section>

          <section className="legal__section">
            <h2>6. Governing Jurisdiction</h2>
            <p>
              These Terms and any dispute arising from the use of this website shall be governed by and construed in accordance with the laws of the State of Alabama, USA, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="legal__section">
            <h2>7. Amendments</h2>
            <p>
              JoyHand reserves the right to modify these Terms of Service at any time to reflect technical updates or regulatory changes. Your continued use of the platform following such modifications signifies your acceptance of the updated terms.
            </p>
          </section>

          <section className="legal__section">
            <h2>8. Legal Inquiries</h2>
            <p>
              If you have any questions concerning our Terms of Service or require formal legal documentation, please contact our legal department:
            </p>
            <div className="legal__contact-box">
              <p><strong>JoyHand Energy Legal Department</strong></p>
              <p>Email: <a href="mailto:sales@joyhand.com">sales@joyhand.com</a></p>
              <p>Subject: Terms of Service Inquiry</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}