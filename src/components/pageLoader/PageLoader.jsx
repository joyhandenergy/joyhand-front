"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./PageLoader.css"

export default function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const minLoadTime = 1500; // Professional buffer
    const startTime = Date.now();
    const safetyTimeout = 8000; // Prevent infinite loading

    const handleComplete = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);
      
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => setLoading(false), 600); // Wait for CSS transition
      }, remainingTime);
    };

    // Deep Asset Tracking
    const trackAssets = () => {
      const images = Array.from(document.images);
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
      setProgress(prev => (prev < 90 ? prev + 2 : prev));
    }, 100);

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
                src="/images/logos/joyhandLogo.png"
                alt="JoyHand Energy"
                width={220}
                height={74}
                className="page-loader__logo"
                priority
              />
            </div>

            {/* Precision Loading Bar */}
            <div className="page-loader__bar-container">
              <div 
                className="page-loader__bar" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Professional Status */}
            <div className="page-loader__status">
              <span className="page-loader__text">
                {progress < 100 ? "Initializing Systems" : "Systems Online"}
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