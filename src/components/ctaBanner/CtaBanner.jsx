"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import PopUpModal from "@/components/contactForm/PopUpModal";
import SuperRing from "../superRing/SuperRing";
import "./CtaBanner.css";

import { ctaData } from "@/data";

const CtaBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className={`cta-section ${isVisible ? 'is-visible' : ''}`}>
        {/* Subtle dynamic background elements */}
        <div className="cta-section__bg-glow cta-section__bg-glow--primary"></div>
        <div className="cta-section__bg-glow cta-section__bg-glow--accent"></div>

        <SuperRing
          type="primary"
          size="1200px"
          thickness="1px"
          top="50%"
          left="50%"
          translateX="-50%"
          translateY="-50%"
          opacity={0.05}
        />

        <div className="container cta-section__container">
          <div className="cta-content">
            <div className="cta-text">
              <h2 className="cta-title">
                Ready to Supply Your <br />
                <span className="cta-title--highlight">Market with Reliable Energy?</span>
              </h2>

             <p className="cta-description">
              {ctaData.description}
            </p>
           </div>

            <div className="cta-actions">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn--primary"
              >
                Start Your Project <PiArrowRight weight="bold" />
              </button>
              <Link
                href="/contact-us"
                className="btn btn--outline-light"
              >
                Talk to an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PopUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="quote"
      />
    </>
  );
};

export default CtaBanner;