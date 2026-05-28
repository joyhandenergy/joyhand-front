"use client";
import Image from "next/image";
import Link from "next/link";
import { PiYoutubeLogo, PiTiktokLogo, PiInstagramLogo, PiFacebookLogo, PiPinterestLogo, PiGlobe, PiFactory, PiBuilding } from "react-icons/pi";
import { footerData } from "@/data";
import "./Footer.css";

// Helper to render the correct social icon based on string identifier
const renderSocialIcon = (iconStr, size = 24) => {
  switch(iconStr) {
    case 'youtube': return <PiYoutubeLogo size={size} />;
    case 'tiktok': return <PiTiktokLogo size={size} />;
    case 'facebook': return <PiFacebookLogo size={size} />;
    case 'instagram': return <PiInstagramLogo size={size} />;
    case 'pinterest': return <PiPinterestLogo size={size} />;
    default: return <PiGlobe size={size} />;
  }
};

// Helper to render the correct office icon
const renderOfficeIcon = (iconStr, size = 20) => {
  switch(iconStr) {
    case 'building': return <PiBuilding size={size} />;
    case 'factory': return <PiFactory size={size} />;
    case 'globe': return <PiGlobe size={size} />;
    default: return <PiGlobe size={size} />;
  }
};

export default function Footer() {
  const {
    brandDescription,
    socialLinks,
    solutions,
    company,
    globalOffices,
    legal,
    copyrightYear,
    credits
  } = footerData;

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* BRAND SECTION */}
        <div className="footer__brand">
          <Link href="/" className="footer__logo" aria-label="JoyHand – Manufacturer">
            <Image 
              src="/images/logos/joyhand-logo.png" 
              className="footer__logo-img"
              alt="JoyHand – Premium Battery & E‑Mobility Manufacturer"
              width={250} 
              height={83} 
              priority 
              style={{ 
                filter: "brightness(0) invert(1)", 
                display: "block",
                height: "auto"
              }}
            />
          </Link>
          <p className="footer__description">
            {brandDescription}
          </p>
          <div className="footer__social">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx}
                href={social.url} 
                className="footer__social-link" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.name}
              >
                {renderSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* SOLUTIONS COLUMN */}
        <div className="footer__column">
          <h4 className="footer__title">Solutions</h4>
          <ul className="footer__list">
            {solutions.map((item, idx) => (
              <li key={idx}>
                <Link href={item.path} className="footer__link">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY COLUMN */}
        <div className="footer__column">
          <h4 className="footer__title">Company</h4>
          <ul className="footer__list">
            {company.map((item, idx) => (
              <li key={idx}>
                <Link href={item.path} className="footer__link">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* GLOBAL OFFICES COLUMN */}
        <div className="footer__column">
          <h4 className="footer__title">Global Presence</h4>
          <ul className="footer__list">
            {globalOffices.map((office, idx) => (
              <li key={idx} className="footer__global-office">
                <a 
                  href={office.link} 
                  className="footer__global-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${office.name} - ${office.address}`}
                >
                  <span className="footer__global-icon">
                    {renderOfficeIcon(office.icon)}
                  </span>
                  <div>
                    <strong className="footer__global-name">{office.name}</strong>
                    <span className="footer__global-location">{office.location}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer__bottom">
        <div className="container footer__bottom-container">
          <div className="footer__legal-links">
            {legal.map((item, idx) => (
              <Link key={idx} href={item.path}>{item.name}</Link>
            ))}
          </div>
          <p className="footer__copyright">© {copyrightYear} JoyHand Energy. All Rights Reserved.</p>
          <p className="footer__credit">{credits}</p>
        </div>
      </div>
    </footer>
  );
}