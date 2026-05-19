"use client";

import { useState } from "react";
import { useScrollReveal } from "@/components/useScrollReveal";
import {
  PiGear,
  PiArrowRight,
  PiShieldCheck,
  PiCheckCircleFill,
  PiSealCheckFill,
  PiMagnifyingGlass,
  PiHandshake,
  PiClipboardText,
  PiBoat,
  PiFactory
} from "react-icons/pi";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import SectionDecor from "@/components/sectionDecor/SectionDecor";
import Link from "next/link";
import PopUpModal from "@/components/contactForm/PopUpModal";
import "./manufacturing.css";
import SuperRing from "@/components/superRing/SuperRing";

import { 
  servicesList, 
  servicesQC, 
  servicesProcess, 
  serviceHighlights 
} from "@/data";
import Script from "next/script";

const ICON_MAP = {
  factory: <PiFactory weight="duotone" />,
  gear: <PiGear weight="duotone" />,
  shield: <PiShieldCheck weight="duotone" />,
  boat: <PiBoat weight="duotone" />,
  clipboard: <PiClipboardText />,
  magnifying: <PiMagnifyingGlass />,
  seal: <PiSealCheckFill />,
  handshake: <PiHandshake />,
};

export default function ManufacturingClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Scroll reveal — one per section
  const introReveal      = useScrollReveal();
  const cardsReveal      = useScrollReveal();
  const qcReveal         = useScrollReveal();
  const whyReveal        = useScrollReveal();
  const processReveal    = useScrollReveal();
  const facilityReveal   = useScrollReveal();
  const ctaReveal        = useScrollReveal();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "OEM/ODM Energy Manufacturing",
    "provider": {
      "@type": "Organization",
      "name": "JoyHand Energy"
    },
    "areaServed": ["NG", "PK", "BD", "KE", "ZA", "Global"],
    "description": "Direct factory custom manufacturing, white label branding, and container consolidation for LFP batteries and solar inverters in a facility operating under ISO standards.",
    "offers": {
      "@type": "Offer",
      "description": "Factory direct B2B wholesale pricing for energy storage systems and electric mobility solutions tested to international standards."
    }
  };

  return (
    <main className="services-page">
      <Script
        id="manufacturing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title="Direct Factory OEM Production"
        subtitle="From custom battery assembly to container export, we supply energy hardware directly from automated production lines optimized for high-capacity export."
        pageImage="/pageHeadImg/pageheader-services.jpg"
      />

      {/* INTRO */}
      <section ref={introReveal.ref} className={`services-intro reveal ${introReveal.isVisible ? 'is-visible' : ''}`}>
        <SectionDecor type="accent" count={4} />
        <div className="container">
          <div className="services-intro__grid">
            <div className="services-intro__header">
              <SectionHeader
                badge="MANUFACTURING CAPABILITIES"
                title="Scaling Your Wholesale Supply Chain"
              />
            </div>
            <div className="services-intro__content stagger-2">
              <p className="services-intro__desc">
                We manage the entire production lifecycle at our Guangzhou manufacturing hub. Whether you require tailored BMS engineering for hybrid solar setups or white labeled portable power, our automated assembly lines deliver precision at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section ref={cardsReveal.ref} className={`services-grid reveal ${cardsReveal.isVisible ? 'is-visible' : ''}`}>
        <div className="container">
          <div className="grid grid--2 services-grid__wrapper">
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                className={`service-card stagger-${idx % 6 + 1}`}
                style={{ backgroundImage: `url(${service.bgImage})` }}
              >
                <div className="service-card__overlay"></div>
                <div className="service-card__pattern"></div>
                <div className="service-card__badge">{service.tag}</div>
                <div className="service-card__icon-box">{ICON_MAP[service.iconType]}</div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.desc}</p>
                </div>
                <Link href="/contact-us" className="service-card__link">
                  <span>Request Info</span>
                  <PiArrowRight weight="bold" className="service-card__arrow" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY PROTOCOLS */}
      <section ref={qcReveal.ref} className={`qc-protocols reveal ${qcReveal.isVisible ? 'is-visible' : ''}`}>
        <SectionDecor type="primary" count={1} />
        <div className="container">
          <SectionHeader badge="Global Quality Standards" title="Every Product. Every Batch. Verified." align="center" theme="light" />
          <div className="grid grid--4 qc-protocols__grid">
            {servicesQC.map((protocol, idx) => (
              <div key={idx} className={`qc-card stagger-${idx % 6 + 1}`}>
                <div className="qc-card__icon">{ICON_MAP[protocol.iconType]}</div>
                <h4 className="qc-card__title">{protocol.title}</h4>
                <p className="qc-card__desc">{protocol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DISTRIBUTORS */}
      <section ref={whyReveal.ref} className={`why-distributors reveal ${whyReveal.isVisible ? 'is-visible' : ''}`}>
        <SectionDecor type="secondary" count={4} />
        <div className="container">
          <SectionHeader
            badge="Growth Partnership"
            title="Why Partners Work With Us"
            align="center"
          />
          <div className="why-distributors__grid">
            <div className="why-item stagger-1">
              <div className="why-item__number">01</div>
              <h4 className="why-item__title">Factory Direct Pricing</h4>
              <p className="why-item__text">Bypass trading companies. We own the floor, guaranteeing the lowest B2B cost per unit.</p>
            </div>
            <div className="why-item stagger-2">
              <div className="why-item__number">02</div>
              <h4 className="why-item__title">White Label Branding</h4>
              <p className="why-item__text">Build your own regional brand. We apply your logos, packaging, and custom firmwares.</p>
            </div>
            <div className="why-item stagger-3">
              <div className="why-item__number">03</div>
              <h4 className="why-item__title">Container Consolidation</h4>
              <p className="why-item__text">Mix batteries, inverters, and accessories into single freight shipments bound directly for Apapa, Mombasa, or Durban.</p>
            </div>
            <div className="why-item stagger-4">
              <div className="why-item__number">04</div>
              <h4 className="why-item__title">Customs Compliance</h4>
              <p className="why-item__text">We supply CE, UN38.3, and RoHS testing documentation for frictionless import processing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS TICKER */}
      <div className="cred-ticker">
        <div className="cred-ticker__track">
          {serviceHighlights.map((label, i) => (
            <span key={i} className="cred-ticker__item">
              <span className="cred-ticker__dot"></span>
              {label}
            </span>
          ))}
          {/* Duplicate for seamless marquee if needed */}
          {serviceHighlights.map((label, i) => (
            <span key={`dup-${i}`} className="cred-ticker__item">
              <span className="cred-ticker__dot"></span>
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <section ref={processReveal.ref} className={`sourcing-process reveal ${processReveal.isVisible ? 'is-visible' : ''}`}>
        <SectionDecor type="accent" count={4} />
        <SuperRing type="primary" size="1400px" thickness="40px" top="50%" left="50%" translateX="-50%" translateY="-50%" opacity={0.06} />
        <SuperRing type="secondary" size="900px" thickness="40px" top="15%" left="70%" translateX="-50%" translateY="-50%" opacity={0.05} />
        <SuperRing type="accent" size="900px" thickness="40px" top="85%" left="30%" translateX="-50%" translateY="-50%" opacity={0.05} />
        <div className="container">
          <SectionHeader badge="How We Work" title="From Your Specs to Your Warehouse" center />
          <div className="grid grid--3 sourcing-process__grid">
            {servicesProcess.map((item, i) => (
              <div key={i} className={`process-card stagger-${i % 6 + 1}`}>
                <div className="process-card__number">{item.step}</div>
                <div className="process-card__inner">
                  <div className="process-card__icon">{ICON_MAP[item.iconType]}</div>
                  <h4 className="process-card__title">{item.title}</h4>
                  <p className="process-card__text">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY */}
      <section ref={facilityReveal.ref} className={`partner-facilities reveal ${facilityReveal.isVisible ? 'is-visible' : ''}`}>
        <div className="container">
          <div className="partner-facilities__box">
            <div className="partner-facilities__content">
              <SectionHeader badge="Our Production Hub" title="Direct Manufacturing Hub" light />
              <p className="partner-facilities__text">50,000 m² facility optimized for precision engineering and high-volume output. We specialise in:</p>
              <ul className="partner-facilities__list">
                <li><PiCheckCircleFill /> LFP battery assembly (Grade A prismatic cells)</li>
                <li><PiCheckCircleFill /> Solar inverter production (Tier 1 components)</li>
                <li><PiCheckCircleFill /> Phone screen protectors (tempered glass, anti spy, matte)</li>
                <li><PiCheckCircleFill /> Portable power stations & power banks</li>
                <li><PiCheckCircleFill /> Electric motorcycles & electric mobility platforms</li>
              </ul>
              <Link href="/about-us" className="btn btn--outline-light">Explore Our Facility <PiArrowRight /></Link>
            </div>
            <div className="partner-facilities__visual">
              <div className="facility-stats">
                <div className="facility-stats__item"><span className="facility-stats__number">50,000</span><span className="facility-stats__label">m² Facility</span></div>
                <div className="facility-stats__item"><span className="facility-stats__number">100%</span><span className="facility-stats__label">In Process QC</span></div>
                <div className="facility-stats__item"><span className="facility-stats__number">30+</span><span className="facility-stats__label">R&D Engineers</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaReveal.ref} className={`services-cta reveal ${ctaReveal.isVisible ? 'is-visible' : ''}`}>
        <div className="container">
          <div className="services-cta__banner">
            <div className="services-cta__content">
              <div className="services-cta__text">
                <h2 className="services-cta__title">Ready to Supply Your <br /> <span className="title--highlight">Local Market?</span></h2>
                <p className="services-cta__subtitle">
                  Lock in wholesale pricing and start your mass production run. Join the network of professional importers relying on JoyHand's manufacturing expertise.
                </p>
              </div>
              <div className="services-cta__actions">
                <button 
                  onClick={openModal}
                  className="btn btn--primary services-cta__btn"
                >
                  Start Your Project <PiArrowRight weight="bold" />
                </button>
                <Link href="/contact-us" className="btn btn--outline-light services-cta__btn">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PopUpModal isOpen={isModalOpen} onClose={closeModal} mode="quote" />
    </main>
  );
}
