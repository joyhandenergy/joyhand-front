"use client";

import { useState } from "react";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import PopUpModal from "@/components/contactForm/PopUpModal";

export default function ManufacturingCta({ ctaReveal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
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
      
      <PopUpModal isOpen={isModalOpen} onClose={closeModal} mode="quote" />
    </section>
  );
}
