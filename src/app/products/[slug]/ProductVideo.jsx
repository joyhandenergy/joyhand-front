"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  PiPlayCircle, 
  PiYoutubeLogo, 
  PiArrowRight, 
  PiShieldCheck, 
  PiSealCheck, 
  PiGear, 
  PiGauge 
} from "react-icons/pi";

export default function ProductVideo({ videoId, productName = "this product" }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // If no video ID provided, show Technical Excellence block
  if (!videoId) {
    return (
      <div className="product-details__tech-fallback">
        <div className="product-details__tech-fallback-bg">
          <div className="product-details__tech-fallback-content">
            <div className="product-details__tech-badge">
              <PiShieldCheck size={24} />
              <span>Technical Excellence</span>
            </div>
            
            <h4 className="product-details__tech-title">Engineering Perfection</h4>

            <Link
              href="https://www.youtube.com/@JoyHandEnergy"
              target="_blank"
              rel="noopener noreferrer"
              className="product-details__tech-link"
            >
              <PiYoutubeLogo size={20} />
              <span>View YouTube Channel</span>
            </Link>
            
            <p className="product-details__tech-text">
              This {productName} model is engineered with industrial-grade precision and undergoes 
              rigorous multi-stage quality control.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="product-details__video-container">
      {!isPlaying ? (
        <div
          className="product-details__video-thumbnail"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src={thumbnailUrl}
            alt={`${productName} video thumbnail`}
            fill
            className="product-details__video-thumb-img"
            unoptimized
          />
          <div className="product-details__video-play">
            <PiPlayCircle size={48} />
          </div>
        </div>
      ) : (
        <div className="product-details__video-embed">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={`${productName} product video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}