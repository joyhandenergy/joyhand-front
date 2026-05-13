"use client";

import { useState } from "react";
import Image from "next/image";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

export default function ProductGallery({ images, productName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="product-details__viewer">
      <div className="product-details__main-wrapper">
        <Image
          src={images[currentIndex]}
          alt={`${productName} - view ${currentIndex + 1}`}
          fill
          priority
          className="product-details__main-img"
        />
        
        {images.length > 1 && (
          <div className="product-details__arrows">
            <button onClick={handlePrev} className="product-details__arrow-btn" aria-label="Previous image">
              <PiCaretLeft size={24} />
            </button>
            <button onClick={handleNext} className="product-details__arrow-btn" aria-label="Next image">
              <PiCaretRight size={24} />
            </button>
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="product-details__strip">
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`product-details__strip-item ${
                currentIndex === idx ? "product-details__strip-item--active" : ""
              }`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`View image ${idx + 1}`}
            >
              <Image 
                src={img} 
                alt={`Thumbnail ${idx + 1}`} 
                fill 
                className="product-details__strip-img" 
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}