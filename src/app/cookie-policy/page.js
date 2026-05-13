import PageHeader from "@/components/pageHeader/PageHeader";
import "../legal.css";

export const metadata = {
  title: "Cookie Policy | JoyHand Energy",
  description: "Understand how JoyHand uses cookies to improve your browsing experience and analyse site traffic.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function CookiePolicyPage() {
  return (
    <main className="legal-page">
      <PageHeader
        title="Cookie Policy"
        subtitle="Effective Date: March 2025"
        pageImage="/pageHeadImg/pageheader-legal.jpg"
      />
      <div className="container legal__container">
        <div className="legal__content">
          <section className="legal__section">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They help the website recognize your device and remember your preferences, ensuring a smoother and more personalized browsing experience.
            </p>
          </section>

          <section className="legal__section">
            <h2>2. How We Use Cookies</h2>
            <p>
              JoyHand uses cookies to optimize site performance and understand user interaction. We categorize our cookies as follows:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for basic site functionality, such as secure logins and form submissions.</li>
              <li><strong>Analytics Cookies:</strong> Help us measure site traffic and improve our content based on user behavior.</li>
              <li><strong>Functional Cookies:</strong> Allow us to remember your settings, such as language preferences or region selection.</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2>3. Third-Party Integration</h2>
            <p>
              We utilize trusted third-party services like Google Analytics to monitor and analyze the use of our Service. These third parties may set their own cookies to track your activity across different platforms.
            </p>
          </section>

          <section className="legal__section">
            <h2>4. Your Choices & Control</h2>
            <p>
              Most web browsers allow you to manage cookies through their settings. You can choose to block or delete cookies, but please be aware that this may impact the availability and functionality of some features on our website.
            </p>
            <p>
              For more detailed information on managing cookies, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">allaboutcookies.org</a>.
            </p>
          </section>

          <section className="legal__section">
            <h2>5. Policy Updates</h2>
            <p>
              We may periodically update this Cookie Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page regularly.
            </p>
          </section>

          <section className="legal__section">
            <h2>6. Contact & Inquiries</h2>
            <p>
              If you have any questions regarding our cookie practices or your privacy rights, please reach out to our compliance team:
            </p>
            <div className="legal__contact-box">
              <p>Email: <a href="mailto:privacy@joyhand.com">privacy@joyhand.com</a></p>
              <p>Subject: Cookie Policy Inquiry</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}