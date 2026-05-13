"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiArrowRight, PiFactory } from "react-icons/pi";
import "./EnergyPlatforms.css";

import { featuredCategories } from "@/data";

const EnergyPlatforms = () => {
  const sectionRef = useRef(null);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("energy-platforms--is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="energy-platforms" aria-labelledby="platforms-heading">
      
      <div className="energy-platforms__grid">
        {featuredCategories.map((platform, index) => (
          <article
            key={platform.id}
            className="platform-card"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <Link href={`/products/solutions/${platform.slug}`} className="platform-card__link" aria-label={`View details for ${platform.title}`}>
              <div className="platform-card__image-wrapper">
                <Image
                  src={platform.image}
                  alt={platform.title}
                  fill
                  className="platform-card__image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [platform.id]: true }))}
                />
                <div className="platform-card__overlay"></div>
              </div>

              <div className="platform-card__content">
                <div className="platform-card__center-group">
                  <h3 className="platform-card__title">{platform.title}</h3>
                  
                  {/* These appear only on hover */}
                  <div className="platform-card__reveal-content">
                    <p className="platform-card__description">{platform.desc}</p>
                    <div className="platform-card__button-container">
                      <span className="btn btn--primary btn--sm">
                        Explore <PiArrowRight aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="platform-card__source-tag">
                   <PiFactory size={14} aria-hidden="true" />
                   <span>{platform.sourceNote}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EnergyPlatforms;