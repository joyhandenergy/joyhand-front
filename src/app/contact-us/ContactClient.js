"use client";

import React from "react";
import { useScrollReveal } from "@/components/useScrollReveal";
import Image from "next/image";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import SimpleContactForm from "@/components/contactForm/SimpleContactForm";
import SectionDecor from "@/components/sectionDecor/SectionDecor";
import {
  Phone,
  Mail,
  Clock,
  Zap,
  ShieldCheck,
  Globe,
  Factory,
  Handshake,
  MessageCircle,
  Building2,
  Award,
  CheckCircle
} from "lucide-react";
import "./contact.css";
import SuperRing from "@/components/superRing/SuperRing";

import { 
  contactOffices, 
  contactFeatures, 
  contactFaqs 
} from "@/data";

const globalSupport = {
  icon: <Phone size={22} />,
  title: "Global Support",
  content: "+86 186 0202 1144",
  link: "tel:+8618602021144"
};

const manufacturingInquiries = {
  icon: <Mail size={22} />,
  title: "Manufacturing Inquiries",
  content: "sales@joyhand.com",
  link: "mailto:sales@joyhand.com"
};

const responseHours = {
  icon: <Clock size={22} />,
  title: "Response Hours",
  content: "24/7 Global Support | Office Hours: Mon-Fri 9am-6pm (Local Time)",
  isText: true
};

const ICON_MAP = {
  building: <Building2 size={22} />,
  factory: <Factory size={22} />,
  globe: <Globe size={22} />,
  award: <Award size={22} />,
  shield: <ShieldCheck size={22} />,
  handshake: <Handshake size={22} />,
  check: <CheckCircle size={22} />,
};

export default function ContactClient() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll reveal — one per section
  const formReveal    = useScrollReveal();
  const officesReveal = useScrollReveal();
  const infoReveal    = useScrollReveal();
  const mapReveal     = useScrollReveal();
  const faqReveal     = useScrollReveal();
  const bottomReveal  = useScrollReveal();

  return (
    <main className="contact-page">
      <PageHeader
        title="Direct Factory Quotes & OEM Inquiries"
        subtitle="Connect directly with our Guangzhou manufacturing team. Request wholesale container pricing and custom OEM specifications with a guaranteed 24-hour response."
        pageImage="/pageHeadImg/pageheader-contact01.jpg"
        breadcrumbCurrent="Contact Us"
      />

      {/* ================= SECTION 1: INQUIRY SECTION (TOP PRIORITY) ================= */}
      <section ref={formReveal.ref} className={`contact-form-section reveal ${formReveal.isVisible ? 'is-visible' : ''}`}>
        <SectionDecor type="accent" count={4} />
        <div className="container contact-form-section__grid">
          <div className="contact-form-section__content">
            <SectionHeader
              badge="FACTORY DIRECT ACCESS"
              title="Start Your Wholesale Inquiry"
              subtitle="Share your import volume and technical requirements. Our sales engineers will prepare a direct factory quote within 24 hours."
            />

            <div className="contact-features">
              {contactFeatures.map((feature, idx) => (
                <div key={idx} className="contact-feature-card">
                  <div className="contact-feature-card__icon">{ICON_MAP[feature.iconType]}</div>
                  <div className="contact-feature-card__info">
                    <h5 className="contact-feature-card__label">{feature.label}</h5>
                    <p className="contact-feature-card__subtext">{feature.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="contact-form-section__right">
            <div className="form-terminal">
              <div className="form-terminal__header">
                <div className="form-terminal__status">
                  <span className="form-terminal__dot"></span>
                  MANUFACTURING INTAKE (Priority response for volume inquiries)
                </div>
                <Zap size={16} className="form-terminal__bolt" />
              </div>
              <div className="form-terminal__body">
                <SimpleContactForm mode="contact" />
              </div>
              <div className="form-terminal__footer">
                <p className="form-terminal__footnote">
                  <Zap size={12} /> Priority response for volume inquiries
                </p>
              </div>
            </div>

            {/* DESKTOP ONLY TRUST IMAGE */}
            <div className="contact-trust-image">
              <Image
                src="/contactImg/sales01.jpg"
                alt="JoyHand Global Export Facility"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                priority={false}
              />
              <div className="contact-trust-badge">
                <Handshake size={20} />
                <span>Direct Factory Sales Team.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: GLOBAL OFFICES SECTION ================= */}
      <section ref={officesReveal.ref} className={`global-offices reveal ${officesReveal.isVisible ? 'is-visible' : ''}`}>
        <div className="container">
          <SectionHeader
            badge="OUR GLOBAL PRESENCE"
            title="Offices Around the World"
            subtitle="Serving distributors across four continents with local expertise and global reach."
            align="center"
            theme="light"
          />
          <div className="global-offices__grid">
            {contactOffices.map((office, index) => (
              <div key={index} className={`office-card ${office.featured ? "office-card--featured" : ""}`}>
                <div className="office-card__icon">{ICON_MAP[office.iconType]}</div>
                <h3 className="office-card__title">{office.title}</h3>
                <p className="office-card__location">{office.content}</p>
                <p className="office-card__address">{office.address}</p>
                <span className="office-card__region">{office.region}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: DIRECT CONTACT INFO ================= */}
      <section ref={infoReveal.ref} className={`contact-info reveal ${infoReveal.isVisible ? 'is-visible' : ''}`}>
        <SectionDecor type="primary" count={1} />
        <SuperRing type="primary" size="1400px" thickness="40px" top="50%" left="50%" translateX="-50%" translateY="-50%" opacity={0.06} />
        <SuperRing type="secondary" size="900px" thickness="40px" top="15%" left="70%" translateX="-50%" translateY="-50%" opacity={0.05} />
        <SuperRing type="accent" size="900px" thickness="40px" top="85%" left="30%" translateX="-50%" translateY="-50%" opacity={0.05} />
        <div className="container">
          <SectionHeader
            badge="GET IN TOUCH"
            title="Global Support & Inquiries"
            center
          />
          <div className="contact-info__grid">
            <div className="contact-card contact-card--navy">
              <div className="contact-card__nfc-wrapper">
                <div className="contact-card__ring"></div>
                <div className="contact-card__icon">{globalSupport.icon}</div>
              </div>
              <h4 className="contact-card__title">{globalSupport.title}</h4>
              <a href={globalSupport.link} className="contact-card__link">{globalSupport.content}</a>
            </div>

            <div className="contact-card contact-card--navy">
              <div className="contact-card__nfc-wrapper">
                <div className="contact-card__ring"></div>
                <div className="contact-card__icon">{manufacturingInquiries.icon}</div>
              </div>
              <h4 className="contact-card__title">{manufacturingInquiries.title}</h4>
              <a href={mounted ? manufacturingInquiries.link : "#"} className="contact-card__link">
                {mounted ? manufacturingInquiries.content : "sales@..."}
              </a>
            </div>

            <div className="contact-card contact-card--navy">
              <div className="contact-card__nfc-wrapper">
                <div className="contact-card__ring"></div>
                <div className="contact-card__icon">{responseHours.icon}</div>
              </div>
              <h4 className="contact-card__title">{responseHours.title}</h4>
              <p className="contact-card__content">{responseHours.content}</p>
            </div>
          </div>

          <div className="contact-note">
            <p className="contact-note__text">
              <ShieldCheck size={16} /> All inquiries receive a response within 24 hours. We respect your confidentiality and project timelines.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAP SECTION – China factory only ================= */}
      <section ref={mapReveal.ref} className={`contact-map reveal ${mapReveal.isVisible ? 'is-visible' : ''}`}>
        <div className="contact-map__overlay">
          <div className="contact-map__content">
            <span className="contact-map__badge">Global Manufacturing Network</span>
            <h3 className="contact-map__title">Four Continents. One Factory Partner.</h3>
            <p className="contact-map__text">
              Our headquarters in the USA, manufacturing hub in Guangzhou, and regional offices in Australia and Nigeria
              give you direct access to JoyHand production lines and engineering support worldwide.
            </p>
          </div>
        </div>
        <iframe
          title="JoyHand China Manufacturing Facility"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.481864232149!2d113.5141813150156!3d22.788581985071915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34036d8b5b3f7b9b%3A0x2b4b5c7a6d8e9f0a!2sNansha%20District%2C%20Guangzhou%2C%20Guangdong%2C%20China!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
          width="100%"
          height="500"
          style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(1.2)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* ================= SECTION 4: FAQ (SEO & TRUST) ================= */}
      <section ref={faqReveal.ref} className={`contact-faq reveal ${faqReveal.isVisible ? 'is-visible' : ''}`}>
        <SectionDecor type="accent" count={4} />
        <div className="container">
          <SectionHeader
            badge="FREQUENTLY ASKED QUESTIONS"
            title="Common Inquiries"
            align="center"
          />
          <div className="contact-faq__grid">
            {contactFaqs.map((faq, idx) => (
              <div key={idx} className="contact-faq__item">
                <h4 className="contact-faq__question">{faq.question}</h4>
                <p className="contact-faq__answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: DIRECT PHONE CTA (BOTTOM BANNER) ================= */}
      <section ref={bottomReveal.ref} className={`contact-bottom-cta reveal ${bottomReveal.isVisible ? 'is-visible' : ''}`}>
        <SectionDecor type="primary" count={1} />
        <div className="container">
          <div className="contact-bottom-cta__wrapper">
            <div className="contact-bottom-cta__content">
              <MessageCircle size={32} className="contact-bottom-cta__icon" />
              <h2 className="contact-bottom-cta__title">
                Prefer to <span className="title--highlight">Talk?</span>
              </h2>
              <p className="contact-bottom-cta__text">
                Call our global support line at{" "}
                <a href="tel:+8618602021144" className="contact-bottom-cta__phone">
                  +86 186 0202 1144
                </a>{" "}
                to speak directly with a sales engineer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
