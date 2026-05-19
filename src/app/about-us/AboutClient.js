"use client";

import React, { useState } from "react";
import { useScrollReveal } from "@/components/useScrollReveal";
import Image from "next/image";

import {
  PiLinkedinLogo,
  PiArrowRight,
  PiCheckCircleFill,
  PiGear,
  PiShieldCheck,
  PiGlobe,
  PiFactory,
  PiChartLineUp,
  PiQuotesFill,
  PiLightning,
} from "react-icons/pi";

import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import SectionDecor from "@/components/sectionDecor/SectionDecor";
import SuperRing from "@/components/superRing/SuperRing";
import PopUpModal from "@/components/contactForm/PopUpModal";

import "./about.css";

import { 
  aboutTeam, 
  aboutValues, 
  aboutSectors, 
  aboutTimeline, 
  aboutTestimonials 
} from "@/data";
import Script from "next/script";

const ICON_MAP = {
  factory: <PiFactory size={32} />,
  gear: <PiGear size={32} />,
  shield: <PiShieldCheck size={32} />,
  globe: <PiGlobe size={32} />,
  chart: <PiChartLineUp />,
  lightning: <PiLightning />,
};

export default function AboutClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("quote");

  const openModal = (mode = "quote") => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // Scroll reveal refs — one per section
  const introReveal        = useScrollReveal();
  const timelineReveal     = useScrollReveal();
  const valuesReveal       = useScrollReveal();
  const marketsReveal      = useScrollReveal();
  const testimonialsReveal = useScrollReveal();
  const teamReveal         = useScrollReveal();
  const ctaReveal          = useScrollReveal();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "JoyHand Energy",
      "foundingDate": "1998",
      "description": "Direct to distributor factory engineering premium energy storage and off grid solutions from a facility operating under ISO standards.",
      "knowsAbout": ["Lithium Iron Phosphate Batteries", "Hybrid Solar Inverters", "Electric Mobility", "Off grid Energy Systems"]
    }
  };

  return (
    <main className="about-page">
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title="The Factory Behind Resilient Energy"
        subtitle="Since 1998, JoyHand has engineered premium energy storage solutions from precision-engineered production facilities in Guangzhou."
        pageImage="/pageHeadImg/pageheader-about01.jpg"
      />

      {/* ================= INTRO ================= */}
      <section ref={introReveal.ref} className={`about-intro reveal ${introReveal.isVisible ? 'is-visible' : ''}`}>
        <SectionDecor type="accent" count={4} />
        <div className="container about-intro__container">
          <div className="about-intro__content">
            <SectionHeader
              badge="DIRECT MANUFACTURING PARTNERSHIP"
              title="A Factory-First Approach to Uninterrupted Power"
            />
            <div className="about-intro__description">
              <p>
                JoyHand Energy operates at the intersection of advanced manufacturing and practical field resilience. As a <strong>direct manufacturing partner</strong>, we eliminate intermediaries to provide you with high-yield margins and absolute quality control. Our production lines leverage advanced automation and are dedicated to building robust, resilient power electronics and battery systems that withstand power surges, high temperatures, and the extreme demands of low-grid regions across Africa and worldwide.
              </p>
              <div className="mission-statement">
                <h4 className="mission-statement__title">Our Manufacturing Guarantee</h4>
                <p className="mission-statement__text">
                  To secure your supply chain by delivering factory direct, rigorously tested energy hardware from infrastructure optimized for industrial-grade reliability. We empower wholesale distributors with OEM/ODM solutions that guarantee uninterrupted power.
                </p>
              </div>
            </div>
          </div>
          <div className="about-intro__visual stagger-2">
            <div className="about-intro__nfc-wrapper nfc-pulse">
              <div className="about-intro__image-wrapper">
                <Image
                  src="/aboutImg/joyhandBuilding.jpg"
                  alt="JoyHand Owned Factory Building"
                  fill
                  className="about-intro__img"
                  priority
                />
                <div className="nfc-status">
                  <div className="nfc-status__dot"></div>
                  <span>Production Hub Output</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section ref={timelineReveal.ref} className={`timeline-section reveal ${timelineReveal.isVisible ? 'is-visible' : ''}`}>
        <div className="container">
          <SectionHeader
            badge="OUR HERITAGE"
            title="Over 28 Years of Engineering"
            align="center"
            light
          />
          <div className="timeline">
            {aboutTimeline.map((item, index) => (
              <div key={index} className="timeline__item">
                <div className="timeline__icon">{ICON_MAP[item.iconType]}</div>
                <div className="timeline__content">
                  <span className="timeline__year">{item.year}</span>
                  <h4 className="timeline__title">{item.title}</h4>
                  <p className="timeline__description">{item.description}</p>
                </div>
                {index < aboutTimeline.length - 1 && <div className="timeline__connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PILLARS ================= */}
      <section ref={valuesReveal.ref} className={`values-section reveal ${valuesReveal.isVisible ? 'is-visible' : ''}`}>
        <div className="container">
          <SectionHeader
            badge="THE JOYHAND STANDARD"
            title="The 4 Pillars of Production"
            align="center"
            light
          />
          <div className="grid grid--4 values-grid">
            {aboutValues.map((value, index) => (
              <div key={index} className={`card value-card stagger-${index % 6 + 1}`}>
                <div className="value-card__icon">{ICON_MAP[value.iconType]}</div>
                <h4 className="value-card__title">{value.title}</h4>
                <p className="value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENERGY SOLUTIONS ================= */}
      <section ref={marketsReveal.ref} className={`markets-section reveal ${marketsReveal.isVisible ? 'is-visible' : ''}`}>
        <SectionDecor type="accent" count={4} />
        <SuperRing type="primary" size="1400px" thickness="40px" top="50%" left="50%" translateX="-50%" translateY="-50%" opacity={0.06} />
        <SuperRing type="secondary" size="900px" thickness="40px" top="15%" left="70%" translateX="-50%" translateY="-50%" opacity={0.05} />
        <SuperRing type="accent" size="900px" thickness="40px" top="85%" left="30%" translateX="-50%" translateY="-50%" opacity={0.05} />
        <div className="container">
          <SectionHeader
            badge="CORE PRODUCTION"
            title="Energy & Accessories We Manufacture"
            center
          />
          <div className="markets-grid">
            {aboutSectors.map((sector, index) => (
              <div key={index} className={`market-row ${index % 2 !== 0 ? 'market-row--reverse' : ''} stagger-${index % 6 + 1}`}>
                <div className="market-image">
                  <Image src={sector.img} alt={sector.title} fill />
                  <div className="market-badge">{sector.tag}</div>
                </div>
                <div className="market-text">
                  <h3>{sector.title}</h3>
                  <p>{sector.desc}</p>
                  <ul className="market-list">
                    {sector.features.map((feature, i) => (
                      <li key={i}><PiCheckCircleFill /> {feature}</li>
                    ))}
                  </ul>
                  <button
                    className="btn btn--primary"
                    onClick={() => openModal("quote")}
                  >
                    Inquire for Wholesale <PiArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section ref={testimonialsReveal.ref} className={`testimonials-section reveal ${testimonialsReveal.isVisible ? 'is-visible' : ''}`}>
        <div className="container">
          <SectionHeader
            badge="PARTNER SUCCESS"
            title="Trusted by Professional Importers"
            theme="light"
          />
          <div className="testimonials-marquee">
            <div className="testimonials-track">
              {[...aboutTestimonials, ...aboutTestimonials].map((t, index) => (
                <div key={index} className={`card testimonial-card`}>
                  <PiQuotesFill className="testimonial-card__quote-icon" size={40} />
                  <p className="testimonial-card__text">{t.quote}</p>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__author-image">
                      <Image src={t.image} alt={t.author} fill />
                    </div>
                    <div>
                      <h5>{t.author}</h5>
                      <span>{t.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section ref={teamReveal.ref} className={`team-section reveal ${teamReveal.isVisible ? 'is-visible' : ''}`}>
        <SectionDecor type="primary" count={1} />
        <div className="container">
          <SectionHeader
            badge="EXECUTIVE LEADERSHIP"
            title="The Minds Behind Your Supply Chain"
            center
          />
          <div className="team-section__wrapper">
            {aboutTeam.map((member, index) => (
              <div key={index} className={`executive-card stagger-${index % 6 + 1}`}>
                <div className="executive-card__image-box">
                  <Image src={member.image} alt={member.name} fill className="executive-card__img" />
                  <div className="executive-card__experience-badge">{member.experience} Yrs Exp</div>
                </div>
                <div className="executive-card__content">
                  <div className="executive-card__header">
                    <span className="executive-card__role">{member.title}</span>
                    <h4 className="executive-card__name">{member.name}</h4>
                  </div>
                  <p className="executive-card__bio">{member.bio}</p>
                  <div className="executive-card__footer">
                    <div className="executive-card__expert-badge">
                      <PiShieldCheck size={20} />
                      <span>Verified Manufacturing Authority</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <div ref={ctaReveal.ref} className={`abtCta-banner reveal ${ctaReveal.isVisible ? 'is-visible' : ''}`}>
        <div className="container">
          <div className="abtCta-banner__wrapper">
            <div className="abtCta-banner__text">
              <h4 className="abtCta-banner__title">Dominate Your Local Market with a <span className="title--highlight">Direct Factory Partner</span></h4>
              <p className="abtCta-banner__subtitle">
                Unlock Tier 1 OEM/ODM manufacturing, ISO 9001:2015 standard production, and customized engineering support for your energy business.
              </p>
            </div>
            <button
              className="btn abtCta-banner__btn"
              onClick={() => openModal("quote")}
            >
              Apply for Partnership <PiArrowRight />
            </button>
          </div>
        </div>
      </div>

      <PopUpModal
        isOpen={isModalOpen}
        onClose={closeModal}
        mode={modalMode}
      />
    </main>
  );
}
