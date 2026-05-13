"use client";

import React, { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { PiArrowUpBold } from "react-icons/pi";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  // Reset scroll position when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  const handleScroll = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    setScrollProgress(progress);
    setIsVisible(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? "scroll-to-top--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      type="button"
    >
      <svg className="scroll-to-top__ring" width="56" height="56" viewBox="0 0 100 100">
        <circle 
          className="scroll-to-top__ring-bg" 
          cx="50" cy="50" r="45" 
          fill="transparent" 
          strokeWidth="6" 
        />
        <circle 
          className="scroll-to-top__ring-progress" 
          cx="50" cy="50" r="45" 
          fill="transparent" 
          strokeWidth="6"
          strokeDasharray="283"
          strokeDashoffset={283 - (283 * scrollProgress) / 100}
          strokeLinecap="round"
        />
      </svg>
      <div className="scroll-to-top__icon-box">
        <PiArrowUpBold className="scroll-to-top__icon" />
      </div>
    </button>
  );
};

export default ScrollToTop;