"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiArrowRight, PiMouseSimple, PiLightningFill, PiFactory, PiCertificate, PiUsers } from "react-icons/pi";
import PopUpModal from "../contactForm/PopUpModal";
import "./Hero.css";

import { heroStats } from "@/data";

const STAT_ICONS = {
  factory: <PiFactory className="hero__stat-icon" />,
  certificate: <PiCertificate className="hero__stat-icon" />,
  users: <PiUsers className="hero__stat-icon" />
};

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="hero">
        {/* Cinematic Video Background */}
        <div className="hero__background">
          <div className="hero__static-bg" aria-hidden="true">
            <Image
              src="/videos/heroImg/hero-poster.webp"
              alt="JoyHand manufacturing facility Guangzhou China"
              fill
              priority
              fetchPriority="high"
              unoptimized={true}
              sizes="100vw"
              className="hero__static-img"
            />
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero__video hero__video--loaded"
            poster="/videos/heroImg/hero-poster.webp"
          >
            <source src="/videos/heroImg/joyhand-hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero__overlay"></div>
        </div>

        <div className="container hero__container">
          <div className="hero__grid">

            {/* Left Content Column */}
            <div className="hero__content">
              <div className="hero__badge-wrapper">
                <span className="hero__badge">
                  <PiLightningFill className="hero__badge-icon" /> China Factory | OEM & ODM
                </span>
              </div>

              <h1 className="hero__title">
                <span className="hero__title-line">Solar Battery &</span>
                <span className="hero__title-line">
                  Electric{' '}
                  <span className="hero__title-line--highlight">
                    Scooter Manufacturer
                  </span>
                </span>
              </h1>

              <p className="hero__desc">
                From LiFePO4 batteries and solar inverters to electric motorcycles, electric dirt bikes, solar panels, and portable power stations; we are a direct China-based manufacturer and supplier. Operating under ISO 9001:2015 standards, we engineer hardware built to meet CE, UL, and UN38.3 specifications based on your market requirements.
              </p>

              <div className="hero__actions">
                <Link href="/products" className="btn btn--primary">
                  Explore Products <PiArrowRight />
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn--outline-light"
                >
                  Request a Factory Quote
                </button>
              </div>

              <div className="hero__trust">
                <div className="hero__trust-dot"></div>
                <span>Direct Factory Pricing | White-Label OEM/ODM | Certified for US, Africa & Asia</span>
              </div>
            </div>

            {/* Right Stats Column */}
            <div className="hero__stats-grid">
              {heroStats.map((stat, idx) => (
                <div key={stat.id} className={`hero__stat-card hero__stat-card--${idx + 1}`}>
                  <div className="hero__stat-icon-wrapper">
                    {STAT_ICONS[stat.iconType]}
                  </div>
                  <div className="hero__stat-info">
                    <span className="hero__stat-number">{stat.number}</span>
                    <span className="hero__stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="hero__scroll">
          <PiMouseSimple className="hero__scroll-icon" />
          <span className="hero__scroll-text">Scroll</span>
        </div>
      </section>

      <PopUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} mode="quote" />
    </>
  );
}