"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PiBatteryHigh,
  PiLightning,
  PiMotorcycle,
  PiPlug,
  PiBatteryCharging,
  PiArrowRight,
  PiShieldCheck,
} from "react-icons/pi";

const ProductCard = ({ product }) => {
  const { name, slug, description, image, category, specifications } = product;

  const categoryMap = {
    battery:            { label: "Storage Battery",       icon: <PiBatteryHigh /> },
    inverter:           { label: "Solar Inverter",        icon: <PiLightning /> },
    "electric-mobility":{ label: "Electric Mobility",    icon: <PiMotorcycle /> },
    "portable-power":   { label: "Portable Power",       icon: <PiPlug /> },
    "power-bank":       { label: "Power Bank",           icon: <PiBatteryCharging /> },
  };

  const catInfo = categoryMap[category] || { label: category, icon: <PiLightning /> };

  // Build up to 2 preview specs (max 2 for layout consistency)
  const previewSpecs = [];
  if (specifications) {
    const push = (label, value) => {
      if (value && previewSpecs.length < 2) previewSpecs.push({ label, value });
    };

    if (category === "battery") {
      push("Capacity", specifications.power || specifications.energy || specifications.capacity);
      push("Voltage", specifications.nominalVoltage);
    } else if (category === "inverter") {
      push("Power", specifications.power || specifications.capacity);
      push("Efficiency", specifications.efficiency);
    } else if (category === "electric-mobility") {
      push("Motor", specifications.motor || specifications.power);
      push("Top Speed", specifications.maxSpeed || specifications.topSpeed);
    } else if (category === "portable-power") {
      push("Power", specifications.ratedPower || specifications.power);
      push("Capacity", specifications.batteryCapacity || specifications.capacity);
    } else if (category === "power-bank") {
      push("Capacity", specifications.capacity || specifications.batteryCapacity);
      push("Output", specifications.totalOutput || specifications.usbCOutput);
    }
  }

  return (
    <article className="product-card" itemScope itemType="https://schema.org/Product">
      <Link
        href={`/products/${slug}`}
        className="product-card__inner"
        aria-label={`View ${name} details`}
      >
        {/* ── Image Zone ── */}
        <div className="product-card__visual">
          <Image
            src={image || "/images/placeholder.jpg"}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="product-card__img"
            loading="lazy"
          />
          <meta itemProp="image" content={image} />

          {/* Hover overlay */}
          <div className="product-card__overlay">
            <span className="product-card__overlay-cta">
              View Details <PiArrowRight />
            </span>
          </div>

          {/* Category badge */}
          <div className="product-card__cat-badge">
            <span className="product-card__cat-icon">{catInfo.icon}</span>
            <span>{catInfo.label}</span>
          </div>
        </div>

        {/* ── Content Zone ── */}
        <div className="product-card__content">
          {/* Title */}
          <h3 className="product-card__title" itemProp="name">{name}</h3>

          {/* Description */}
          <p className="product-card__desc" itemProp="description">{description}</p>

          {/* Spec Tags */}
          {previewSpecs.length > 0 && (
            <ul className="product-card__specs">
              {previewSpecs.map((spec, i) => (
                <li key={i} className="product-card__spec">
                  <span className="product-card__spec-label">{spec.label}</span>
                  <span className="product-card__spec-divider">·</span>
                  <span className="product-card__spec-value">{spec.value}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>

      {/* ── Footer CTA ── */}
      <div className="product-card__footer">
        <Link
          href={`/products/${slug}`}
          className="product-card__btn"
          aria-label={`View details for ${name}`}
        >
          <span>View Product</span>
          <PiArrowRight className="product-card__btn-arrow" />
        </Link>
        <div className="product-card__trust">
          <PiShieldCheck />
          <span>OEM Ready</span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;