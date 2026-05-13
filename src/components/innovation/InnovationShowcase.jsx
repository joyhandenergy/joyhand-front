"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  PiCertificate,
  PiShieldCheck,
  PiTestTube,
  PiGlobe,
  PiArrowRight,
} from "react-icons/pi";
import "./InnovationShowcase.css";
import SectionHeader from "../sectionHeader/SectionHeader";
import SuperRing from "../superRing/SuperRing";

import { innovationPillars } from "@/data";

const PILLAR_ICONS = {
  iso: <PiCertificate />,
  "ce-ul": <PiShieldCheck />,
  un383: <PiTestTube />,
  docs: <PiGlobe />,
};

const InnovationShowcase = () => {
  const sectionRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
        } else {
          section.classList.remove("is-visible");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.unobserve(section);
  }, []);

  return (
    <section ref={sectionRef} className="innovation-section">
      <div className="innovation-section__hero">
        <div 
          className={`innovation-section__poster ${videoLoaded ? 'innovation-section__poster--hidden' : ''}`}
          style={{
            backgroundImage: "url('/videos/heroImg/factory-poster.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`innovation-section__video ${videoLoaded ? 'innovation-section__video--loaded' : ''}`}
          poster="/videos/heroImg/factory-poster.png"
          onCanPlayThrough={() => setVideoLoaded(true)}
        >
          <source
            src="/videos/heroImg/factory3.mp4"
            type="video/mp4"
          />
        </video>
        
        <div className="innovation-section__overlay">
          <SuperRing
            type="primary"
            size="800px"
            thickness="2px"
            top="50%"
            left="50%"
            translateX="-50%"
            translateY="-50%"
            opacity={0.15}
          />

          <div className="container innovation-section__hero-content">
            <SectionHeader 
              badge="Certified Quality"
              title="Standards That Open Borders"
              subtitle="Every product is tested and certified to ISO, CE, UL, and UN38.3. Full documentation included with every shipment."
              align="center"
              light
            />
          </div>
        </div>
      </div>

      <div className="innovation-section__container container">
        <div className="innovation-grid">
          {innovationPillars.map((item, index) => (
            <div
              key={index}
              className="innovation-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="innovation-card__main">
                <div className="innovation-card__icon">{PILLAR_ICONS[item.id]}</div>
                <h3 className="innovation-card__title">{item.title}</h3>
              </div>

              <div className="innovation-card__preview">
                <p className="innovation-card__preview-text">{item.preview}</p>
              </div>

              <div className="innovation-card__description">
                <p className="innovation-card__description-text">{item.description}</p>
              </div>

              <div className="innovation-card__glow"></div>
              <div className="innovation-card__pattern"></div>
            </div>
          ))}
        </div>

        <div className="innovation-section__footer">
          <p className="innovation-section__footer-text">
            Need certified products for your market?
            <Link href="/contact-us" className="innovation-section__footer-link">
              Request test reports <PiArrowRight />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase;