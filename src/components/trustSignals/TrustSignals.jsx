"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";
import { partners } from "@/data";
import SectionHeader from "../sectionHeader/SectionHeader";
import SectionDecor from "../sectionDecor/SectionDecor";
import "./TrustSignals.css";

const TrustSignals = () => {
  const scrollingPartners = [...partners, ...partners];
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`trust ${isVisible ? 'is-visible' : ''}`}>
      <div className="trust__energy-glow"></div>
      <div className="trust__energy-waves"></div>

      <div className="container trust__container">
        <SectionDecor type="accent" count={4} />
        <SectionHeader 
          badge="Our Partners"
          title="Built With China's Best"
          subtitle="JoyHand manufactures alongside trusted partner factories. You work directly with us — one point of contact, unified quality standards, seamless export."
          align="center"
          className="trust__section-header"
        />

        {/* Partner logos */}
        <div className="trust__marquee">
          <div className="trust__track">
            {scrollingPartners.map((partner, idx) => (
              <div key={`${partner.id}-${idx}`} className="trust__logo-item">
                <div className="trust__logo-wrapper">
                  <Image
                    src={partner.logo}
                    alt={partner.alt || "Partner logo"}
                    fill
                    sizes="120px"
                    className="trust__logo"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="trust__logos-note">Strategic manufacturing partners across China</p>

        <div className="trust__footer">
          <a href="/about-us" className="btn btn--outline trust__btn-desktop">
            How we partner <PiArrowRight />
          </a>
          <a href="/about-us" className="trust__link-mobile">
            How we partner <PiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;