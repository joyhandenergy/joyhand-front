"use client";

import React, { useState } from "react";
import { useScrollReveal } from "@/components/useScrollReveal";
import Image from "next/image";
import Link from "next/link";

import { 
  PiArrowRight, 
  PiCheckCircleFill, 
  PiGear, 
  PiShieldCheck, 
  PiGlobe, 
  PiFactory, 
  PiChartLineUp, 
  PiQuotesFill, 
  PiLightning,
  PiXCircle
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

const ICON_MAP = {
  factory: <PiFactory size={32} />,
  gear: <PiGear size={32} />,
  shield: <PiShieldCheck size={32} />,
  globe: <PiGlobe size={32} />,
  chart: <PiChartLineUp />,
  lightning: <PiLightning />,
};

// Real production-floor photos, ordered as the journey an order takes.
// Alt text describes exactly what is in each photo (accuracy matters for image SEO).
const factoryFloorPhotos = [
  {
    image: "/serviceImg/serviceoem.jpg",
    alt: "Automated LiFePO4 battery module assembly line at JoyHand's Guangzhou factory",
    tag: "Assembly",
    title: "Automated Module Assembly",
    caption: "Automated cell stacking and module assembly for our LiFePO4 storage batteries."
  },
  {
    image: "/serviceImg/servicequality1.jpg",
    alt: "Rows of battery aging and burn-in test cabinets with fume extraction at JoyHand's Guangzhou factory",
    tag: "Aging Test",
    title: "Battery Aging & Burn-In",
    caption: "Every pack runs charge–discharge aging cycles to screen out weak cells before shipping."
  },
  {
    image: "/serviceImg/serviceodm.jpg",
    alt: "JoyHand engineer monitoring charge-discharge testing of LiFePO4 battery packs beside an environmental test chamber",
    tag: "Validation",
    title: "Pack Testing & BMS Validation",
    caption: "Engineers verify capacity and BMS protection on finished packs, with environmental chamber testing."
  },
  {
    image: "/serviceImg/servicelogistic.jpg",
    alt: "Finished goods being loaded into an export container at JoyHand's Guangzhou warehouse",
    tag: "Export",
    title: "Warehouse & Container Loading",
    caption: "Finished orders are packed, palletised and loaded into containers at our Guangzhou warehouse."
  }
];

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
  const factoryFloorReveal = useScrollReveal();
  const timelineReveal     = useScrollReveal();
  const valuesReveal       = useScrollReveal();
  const sectorsReveal      = useScrollReveal();
  const testimonialsReveal = useScrollReveal();
  const teamReveal         = useScrollReveal();
  const ctaReveal          = useScrollReveal();

  return (
    <main className="about-page">
      <PageHeader
        title="The Factory Behind Global Power & Mobility Supply"
        subtitle="JoyHand is a direct manufacturer based in Guangzhou, China. Founded in 1998, we own and operate a 50,000 m² production facility where we build LiFePO4 batteries, electric motorcycles, and solar hardware."
        pageImage="/pageHeadImg/pageheader-about01.jpg"
        breadcrumbCurrent="About Us"
      />

      {/* ================= SECTION 1: THE ENTITY DECLARATION (HERO INTRO) ================= */}
      <section ref={introReveal.ref} className={`about-intro reveal ${introReveal.isVisible ? 'is-visible' : ''}`}>
        <SectionDecor type="accent" count={4} />
        <div className="container about-intro__container">
          <div className="about-intro__content">
            <SectionHeader
              badge="DIRECT FACTORY PARTNERSHIP"
              title="A Factory-First Approach to Your Supply Chain"
            />
            <div className="about-intro__description">
              <p className="about-intro__lead">
                JoyHand is a direct manufacturer based in Guangzhou, China. Founded in 1998, we own and operate a 50,000 m² production facility where we build LiFePO4 batteries, electric motorcycles, and solar hardware.
              </p>

              {/* What We Do NOT Do Callout */}
              <div className="about-not-box">
                <div className="about-not-box__header">
                  <PiXCircle className="about-not-box__icon" size={24} />
                  <span className="about-not-box__badge">WHAT WE DO NOT DO</span>
                </div>
                <p className="about-not-box__text">
                  We are not a trading agent and we do not sell to retail consumers. We manufacture hardware for B2B distributors, brands, and fleet operators worldwide, building to CE, UL, and UN38.3 specifications based on your market requirements.
                </p>
              </div>

              <div className="about-intro__actions">
                <Link href="/contact-us" className="btn btn--primary">
                  Request a Factory Quote <PiArrowRight />
                </Link>
              </div>
            </div>
          </div>

          <div className="about-intro__visual stagger-2">
            <div className="about-intro__nfc-wrapper nfc-pulse">
              <div className="about-intro__image-wrapper">
                <Image
                  src="/aboutImg/joyhandBuilding.jpg"
                  alt="50,000 square meter manufacturing facility in Nansha District"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="about-intro__img"
                  priority
                />
                <div className="nfc-status">
                  <div className="nfc-status__dot"></div>
                  <span>50,000 m² Production Facility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: VERIFIABLE PROOF (THE FACTORY FLOOR) ================= */}
      <section ref={factoryFloorReveal.ref} className={`factory-floor reveal ${factoryFloorReveal.isVisible ? 'is-visible' : ''}`}>
        <SectionDecor type="accent" count={4} />
        <SuperRing type="accent" size="900px" thickness="40px" top="50%" left="85%" translateX="-50%" translateY="-50%" opacity={0.05} />
        <div className="container factory-floor__container">
          <SectionHeader
            badge="VERIFIABLE PROOF"
            title="Inside Our Guangzhou Manufacturing Hub"
            align="center"
          />
          <p className="factory-floor__subheading">
            Real photos from our own production floor. Follow the path every order takes, from automated module assembly to aging tests, pack validation, and container loading.
          </p>
          <ol className="factory-floor__grid">
            {factoryFloorPhotos.map((photo, index) => (
              <li key={photo.image} className={`factory-floor__card stagger-${index + 1}`}>
                <div className="factory-floor__image-wrapper">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="factory-floor__img"
                  />
                  <span className="factory-floor__tag">{photo.tag}</span>
                  <span className="factory-floor__step" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="factory-floor__body">
                  <h3 className="factory-floor__title">{photo.title}</h3>
                  <p className="factory-floor__caption">{photo.caption}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= SECTION 3: COMPANY FACT LAYER (THE TIMELINE) ================= */}
      <section ref={timelineReveal.ref} className={`timeline-section reveal ${timelineReveal.isVisible ? 'is-visible' : ''}`}>
        <div className="container">
          <SectionHeader
            badge="OUR HERITAGE"
            title="28 Years of Engineering Evolution"
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

      {/* ================= SECTION 4: THE 4 PILLARS OF PRODUCTION ================= */}
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

      {/* ================= SECTION 5: CORE PRODUCTION ================= */}
      <section ref={sectorsReveal.ref} className={`markets-section reveal ${sectorsReveal.isVisible ? 'is-visible' : ''}`}>
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
                  <Image src={sector.img} alt={sector.title} fill sizes="(max-width: 768px) 100vw, 50vw" />
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

      {/* ================= SECTION 6: LEADERSHIP & E-E-A-T ================= */}
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
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw" 
                    className="executive-card__img" 
                  />
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

      {/* ================= SECTION 7: CLIENT VERIFICATION ================= */}
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
                <div key={index} className="card testimonial-card">
                  <PiQuotesFill className="testimonial-card__quote-icon" size={40} />
                  <p className="testimonial-card__text">{t.quote}</p>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__author-image">
                      <Image src={t.image} alt={t.author} fill sizes="80px" />
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


      {/* ================= CTA BANNER ================= */}
      <div ref={ctaReveal.ref} className={`abtCta-banner reveal ${ctaReveal.isVisible ? 'is-visible' : ''}`}>
        <div className="container">
          <div className="abtCta-banner__wrapper">
            <div className="abtCta-banner__text">
              <h4 className="abtCta-banner__title">Dominate Your Local Market with a <span className="title--highlight">Direct Factory Partner</span></h4>
              <p className="abtCta-banner__subtitle">
                Unlock Tier 1 OEM/ODM manufacturing, ISO 9001:2015 standard production, and customized engineering support for your battery and mobility business.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="btn abtCta-banner__btn"
            >
              Apply for Partnership <PiArrowRight />
            </Link>
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
