"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PiPhone, PiEnvelopeSimple, PiList, PiCaretDownBold, PiX, PiArrowRight } from "react-icons/pi";
import PopUpModal from "../contactForm/PopUpModal";
import { links, headerData } from "@/data";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const pathName = usePathname();

  // Scroll effect with passive event listener for sleek transition
  useEffect(() => {
    const handleScroll = () => {
      // Handle header background state
      setScrolled(window.scrollY > 50);

      // Handle scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((window.scrollY / scrollHeight) * 100);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const handleMobileDropdown = useCallback((name, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(prev => (prev === name ? null : name));
  }, []);

  const openModal = useCallback(() => {
    closeMenu();
    setIsModalOpen(true);
  }, [closeMenu]);

  // Accessibility: Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen, closeMenu]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        
        {/* TOP BAR - Desktop only - Dark Navy Background */}
        <div className="header__top">
          <div className="container header__top-container">
            <div className="header__trust-group">
              <div className="header__trust-badge animate-fade-in">
                <span className="header__trust-badge-text">{headerData.trustBadge}</span>
              </div>
            </div>
            <div className="header__contact">
              <a href={`tel:${headerData.phoneRaw}`} className="header__contact-item">
                <PiPhone size={20} />
                <span>{headerData.phone}</span>
              </a>
              <a href={`mailto:${headerData.email}`} className="header__contact-item">
                <PiEnvelopeSimple size={20} />
                <span>{headerData.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <div className="header__main">
          <div className="container header__main-container">
            <Link 
              href="/" 
              className="header__logo" 
              onClick={closeMenu}
              aria-label="JoyHand - Manufacturer"
              prefetch={true}
            >
              <Image
                src="/images/logos/joyhand-logo.png"
                alt="JoyHand"
                width={250}
                height={83}
                className="header__logo-img"
                priority
                style={{ height: "auto" }}
              />
            </Link>

            <nav className="header__nav" aria-label="Desktop navigation">
              {links.map((link, index) => (
                <div key={link.name} className={`header__nav-item stagger-${index + 1} animate-fade-in`}>
                  <Link
                    href={link.href}
                    className={`header__nav-link ${
                      pathName === link.href || (link.subLinks && pathName.startsWith(link.href)) ? "header__nav-link--active" : ""
                    }`}
                    prefetch={true}
                  >
                    {link.name}
                    {link.subLinks && <PiCaretDownBold className="header__nav-icon" />}
                  </Link>

                  {link.subLinks && (
                    <ul className="header__dropdown" aria-label={`${link.name} submenu`}>
                      {link.subLinks.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="header__dropdown-link"
                            prefetch={true}
                          >
                            <span className="header__dropdown-text">{sub.name}</span>
                            <PiArrowRight className="header__dropdown-arrow" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>

            <div className="header__actions">
              <button
                className="btn btn--primary header__cta-desktop animate-scale-in"
                onClick={() => setIsModalOpen(true)}
                aria-label="Get a quote"
              >
                {headerData.ctaText}
              </button>

              <button 
                className="header__mobile-toggle" 
                onClick={() => setIsMenuOpen(prev => !prev)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <PiX size={36} /> : <PiList size={36} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE OVERLAY MENU */}
        <div 
          className={`header__mobile-menu ${isMenuOpen ? "header__mobile-menu--open" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="header__mobile-scroll-area">
            <nav className="header__mobile-nav" aria-label="Mobile navigation">
              {links.map((link) => (
                <div key={link.name} className="header__mobile-item">
                  <div
                    className="header__mobile-link-wrapper"
                    onClick={(e) => link.subLinks ? handleMobileDropdown(link.name, e) : null}
                    role={link.subLinks ? "button" : "none"}
                    tabIndex={link.subLinks ? 0 : -1}
                    onKeyDown={(e) => {
                      if ((e.key === "Enter" || e.key === " ") && link.subLinks) {
                        handleMobileDropdown(link.name, e);
                      }
                    }}
                    aria-expanded={activeDropdown === link.name}
                  >
                    <Link
                      href={link.href}
                      className={`header__mobile-link ${
                        pathName === link.href || (link.subLinks && pathName.startsWith(link.href)) ? "header__mobile-link--active" : ""
                      }`}
                      onClick={() => closeMenu()}
                      prefetch={true}
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <div 
                        className="header__mobile-caret-zone"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleMobileDropdown(link.name, e);
                        }}
                      >
                        <PiCaretDownBold
                          className={`header__mobile-caret ${
                            activeDropdown === link.name ? "header__mobile-caret--open" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </div>
                  {link.subLinks && (
                    <ul 
                      className={`header__mobile-sub ${
                        activeDropdown === link.name ? "header__mobile-sub--open" : ""
                      }`}
                      aria-label={`${link.name} submenu`}
                    >
                      {link.subLinks.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="header__mobile-sub-link"
                            onClick={closeMenu}
                            prefetch={true}
                          >
                            <span className="header__mobile-sub-indicator"></span>
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="header__mobile-bottom">
              <div className="header__mobile-contact">
                <a href={`tel:${headerData.phoneRaw}`} className="header__mobile-contact-item">
                  <div className="header__mobile-contact-icon">
                    <PiPhone size={24} />
                  </div>
                  <div className="header__mobile-contact-text">
                    <span className="header__mobile-contact-label">Call Us</span>
                    <span className="header__mobile-contact-value">{headerData.phone}</span>
                  </div>
                </a>
                <a href={`mailto:${headerData.email}`} className="header__mobile-contact-item">
                  <div className="header__mobile-contact-icon">
                    <PiEnvelopeSimple size={24} />
                  </div>
                  <div className="header__mobile-contact-text">
                    <span className="header__mobile-contact-label">Email Us</span>
                    <span className="header__mobile-contact-value">{headerData.email}</span>
                  </div>
                </a>
              </div>

              <button
                className="btn btn--primary btn--full"
                onClick={openModal}
              >
                {headerData.mobileCtaText} <PiArrowRight />
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Progress Bar */}
        <div 
          className="header__progress-bar" 
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </header>

      <PopUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="quote"
      />
    </>
  );
}