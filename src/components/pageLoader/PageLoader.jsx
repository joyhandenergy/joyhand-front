"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./PageLoader.css"

export default function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const minLoadTime = 200; // 0.2s buffer for a deliberate, premium feel
    const startTime = Date.now();
    const safetyTimeout = 600; // Never block the page for more than 0.6s!

    const handleComplete = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);
      
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => setLoading(false), 400); // Wait for CSS transition (speed it up slightly)
      }, remainingTime);
    };

    // Deep Asset Tracking
    const trackAssets = () => {
      const images = Array.from(document.images).filter(img => img.fetchPriority === "high" || img.getAttribute("priority"));
      const totalAssets = images.length;
      let loadedAssets = 0;

      if (totalAssets === 0) {
        handleComplete();
        return;
      }

      images.forEach((img) => {
        if (img.complete) {
          loadedAssets++;
          updateProgress(loadedAssets, totalAssets);
        } else {
          img.addEventListener('load', () => {
            loadedAssets++;
            updateProgress(loadedAssets, totalAssets);
          });
          img.addEventListener('error', () => {
            loadedAssets++; // Skip failed assets but count them as 'handled'
            updateProgress(loadedAssets, totalAssets);
          });
        }
      });
    };

    const updateProgress = (current, total) => {
      const realProgress = Math.round((current / total) * 100);
      // We only use real progress if it's ahead of our simulation
      setProgress(prev => Math.max(prev, realProgress));
      if (current === total) handleComplete();
    };

    // Initial simulation for a smooth start
    const interval = setInterval(() => {
      setProgress(prev => (prev < 90 ? prev + 5 : prev));
    }, 50);

    // Safety fallback
    const timer = setTimeout(handleComplete, safetyTimeout);

    if (document.readyState === "complete") {
      trackAssets();
    } else {
      window.addEventListener("load", trackAssets);
    }

    return () => {
      window.removeEventListener("load", trackAssets);
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className={`page-loader ${progress === 100 ? 'page-loader--hidden' : ''}`}>
          <div className="page-loader__container">
            {/* Animated Logo */}
            <div className="page-loader__logo-wrapper">
              <Image
                src="/images/logos/joyhand-logo.webp"
                alt="JoyHand"
                width={250}
                height={83}
                className="page-loader__logo"
                priority
                fetchPriority="high"
                style={{ width: "auto", height: "auto" }}
              />
            </div>

            {/* Precision Loading Bar */}
            <div className="page-loader__bar-container">
              <div 
                className="page-loader__bar" 
                style={{ transform: `scaleX(${progress / 100})` }}
              ></div>
            </div>

            {/* Professional Status */}
            <div className="page-loader__status">
              <span className="page-loader__text">
                {progress < 100 ? "Loading..." : "Welcome"}
              </span>
              <span className="page-loader__percentage">{progress}%</span>
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  );
}