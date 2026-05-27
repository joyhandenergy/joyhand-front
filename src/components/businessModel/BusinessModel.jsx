"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiCube, PiMicroscope, PiBuildings, PiArrowRight } from "react-icons/pi";
import "./BusinessModel.css";
import SuperRing from "../superRing/SuperRing";
import SectionHeader from "../sectionHeader/SectionHeader";

import { businessServices } from "@/data";

const ICON_MAP = {
  oem: <PiCube size={32} />,
  odm: <PiMicroscope size={32} />,
  b2b: <PiBuildings size={32} />
};

export default function BusinessModel() {
  const [activeService, setActiveService] = useState(businessServices[0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      { threshold: 0, rootMargin: "0px 0px 50px 0px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (service) => {
    setActiveService(service);
  };

  return (
    <section 
      ref={sectionRef} 
      className={`businessModel ${isVisible ? 'is-visible' : ''}`} 
      aria-labelledby="business-model-heading"
    >
      {/* Decorative rings */}
      <SuperRing
        type="primary"
        size="1400px"
        thickness="40px"
        top="50%"
        left="50%"
        translateX="-50%"
        translateY="-50%"
        opacity={0.06}
      />
      <SuperRing
        type="secondary"
        size="900px"
        thickness="40px"
        top="15%"
        left="70%"
        translateX="-50%"
        translateY="-50%"
        opacity={0.05}
      />
      <SuperRing
        type="accent"
        size="900px"
        thickness="40px"
        top="85%"
        left="30%"
        translateX="-50%"
        translateY="-50%"
        opacity={0.05}
      />

      <div className="container businessModel__container">
        
        {/* LEFT SIDE – images */}
        <div className="businessModel__images">
          <div className="businessModel__image-card businessModel__image-card--static">
            <Image
              src="/homeImg/businessModelImage001.jpg"
              alt="JoyHand manufacturing facility"
              fill
              className="businessModel__image"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              priority
            />
            <div className="businessModel__image-overlay"></div>
          </div>
          
          <div className="businessModel__image-card businessModel__image-card--dynamic" key={activeService.id}>
            <Image
              src={activeService.image}
              priority={activeService.id === businessServices[0].id}
              alt={activeService.imageAlt || "Manufacturing service"}
              fill
              className="businessModel__image"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
            <div className="businessModel__image-overlay"></div>
          </div>
        </div>

        {/* RIGHT SIDE – content */}
        <div className="businessModel__content">
          <div className="businessModel__service-tabs">
            {businessServices.map((s) => (
              <button
                key={s.id}
                onClick={() => handleTabChange(s)}
                className={`service-tab-btn ${activeService.id === s.id ? 'active' : ''}`}
                aria-label={`Switch to ${s.id.toUpperCase()} services`}
              >
                {s.id.toUpperCase()}
              </button>
            ))}
          </div>

          <SectionHeader 
            badge={activeService.tag}
            title={activeService.title}
            subtitle={activeService.description}
            align="left"
            className="businessModel__section-header"
          />

          <div className="businessModel__text-content" key={activeService.id + "-text"}>
            <p className="businessModel__extra">{activeService.extra}</p>

            <ul className="businessModel__list">
              {activeService.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="businessModel__actions">
            <Link href="/manufacturing" className="btn btn--primary">
              EXPLORE CAPABILITY <PiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}