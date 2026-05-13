"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { PiCaretRight } from "react-icons/pi";
import SectionDecor from "../sectionDecor/SectionDecor";
import SuperRing from "../superRing/SuperRing";
import "./PageHeader.css";

const PageHeader = ({ title, pageImage, subtitle, hideBreadcrumb = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Fallback: If the image takes too long, show it anyway
  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`page-header ${hideBreadcrumb ? "page-header--no-breadcrumb" : ""}`}>
      {/* Background Image Layer */}
      <div className="page-header__bg-wrapper">
        <Image
          src={pageImage}
          alt={`${title} - JOYHAND Energy`}
          fill
          priority
          quality={90}
          sizes="100vw"
          onLoad={() => setImageLoaded(true)}
          className={`page-header__bg ${imageLoaded ? "page-header__bg--loaded" : ""}`}
        />
      </div>

      {/* Cinematic Overlays (Navy + Orange + Teal) */}
      <div className="page-header__overlay"></div>
      <div className="page-header__glow-orange"></div>
      <div className="page-header__glow-teal"></div>

      {/* Global Brand Accents for Consistency */}
      <div className="page-header__decor-layer">
        <SectionDecor type="accent" count={4} />
        <SuperRing 
          type="primary" 
          size="800px" 
          opacity={0.03} 
          top="-20%" 
          left="80%" 
        />
      </div>

      {/* Decorative Bottom Gradient Border */}
      <div className="page-header__bottom-bar"></div>

      <div className="container page-header__container">
        <div className="page-header__content">
          {!hideBreadcrumb && (
            <nav className="page-header__breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="page-header__breadcrumb-link">
                Home
              </Link>
              <PiCaretRight className="page-header__breadcrumb-icon" />
              <span className="page-header__breadcrumb-current" aria-current="page">
                {title}
              </span>
            </nav>
          )}

          <h1 className="page-header__title">
            <span className="page-header__title-text">{title}</span>
            <span className="page-header__title-accent">.</span>
          </h1>

          {subtitle && <p className="page-header__description">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;