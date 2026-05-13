"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "../sectionHeader/SectionHeader";
import SuperRing from "../superRing/SuperRing";
import "./GlobalNetwork.css";

import { logisticsFeatures } from "@/data";

const GlobalNetwork = () => {
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
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`global-network ${isVisible ? "is-visible" : ""}`}>
      {/* Decorative Blueprint Rings */}
      <SuperRing
        type="primary"
        size="1000px"
        thickness="2px"
        top="50%"
        left="-10%"
        translateX="0"
        translateY="-50%"
        opacity={0.05}
      />
      <SuperRing
        type="secondary"
        size="800px"
        thickness="1px"
        top="50%"
        left="110%"
        translateX="-100%"
        translateY="-50%"
        opacity={0.08}
      />

      <div className="global-network__header-container container">
        <div className="global-network__header">
          <SectionHeader
            badge="Global Logistics"
            title="From Our Factory to Your Port"
            align="left"
          />
        </div>
      </div>

      {/* Background Map Image Layer - Absolute on desktop, relative for edge-to-edge mobile */}
      <div className="global-network__map-wrapper">
        <div className="global-network__bg-map">
          {/* Animated Ping Locations with Primary, Secondary, and Green colors */}
          <div className="ping ping--na ping--secondary"></div>
          <div className="ping ping--sa ping--success"></div>
          <div className="ping ping--europe ping--primary"></div>
          <div className="ping ping--africa ping--primary"></div>
          <div className="ping ping--asia ping--success"></div>
          <div className="ping ping--oceania ping--secondary"></div>
        </div>
      </div>

      <div className="global-network__content-container container">
        <div className="global-network__content">
          <div className="global-network__text-column">
            <div className="global-network__features">
              {logisticsFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="global-network__feature-card"
                  style={{ transitionDelay: `${idx * 0.15}s` }}
                >
                  <div className="feature-card__info">
                    <h3 className="feature-card__title">{feature.title}</h3>
                    <p className="feature-card__desc">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;