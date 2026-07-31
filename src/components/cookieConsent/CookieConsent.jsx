"use client";

import React, { useState, useEffect, startTransition } from "react";
import Link from "next/link";
import { PiCookieBold, PiXBold } from "react-icons/pi";
import { cookieData } from "@/data";
import "./CookieConsent.css";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("joyhand_cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => setShow(true), 2000); // Delay for better UX
        return () => clearTimeout(timer);
      }
    } catch (e) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    // 1. Immediate UI update: Remove startTransition to make this high-priority
    setIsClosing(true);
    
    // 2. Yield to main thread for paint, then do non-critical background work
    setTimeout(() => {
      requestIdleCallback(() => {
        try {
          // localStorage is synchronous and can block the main thread; do it idly
          localStorage.setItem("joyhand_cookie_consent", "accepted");
          
          // 3. Analytics initialization or other heavy background tasks would go here
          // ensuring they are delayed until after the UI has responded.
          window.dispatchEvent(new Event('cookie_consent_accepted'));
        } catch (e) { }
      });
    }, 50);

    // 4. Remove component from DOM after CSS transition finishes
    setTimeout(() => {
      setShow(false);
      setIsClosing(false);
    }, 400); // Match CSS transition
  };

  const closeBanner = () => {
    // Immediate UI update
    setIsClosing(true);
    
    setTimeout(() => {
      setShow(false);
      setIsClosing(false);
    }, 400); // Match CSS transition
  };

  if (!show) return null;

  return (
    <div className={`cookie-card ${isClosing ? 'cookie-card--closing' : ''}`}>
      <div className="cookie-card__header">
        <div className="cookie-card__icon-box">
          <PiCookieBold size={24} />
        </div>
        <button className="cookie-card__close" onClick={closeBanner} aria-label="Close">
          <PiXBold />
        </button>
      </div>

      <div className="cookie-card__body">
        <h4 className="cookie-card__title">{cookieData.title}</h4>
        <p className="cookie-card__text">
          {cookieData.description}
        </p>
      </div>

      <div className="cookie-card__footer">
        <Link href="/cookie-policy" className="cookie-card__link">
          {cookieData.policyText}
        </Link>
        <button onClick={handleAccept} className="btn btn--primary btn--sm cookie-card__btn">
          {cookieData.acceptText}
        </button>
      </div>
    </div>
  );
}