"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiBatteryHigh, PiLightning, PiMotorcycle, PiPlug, PiBatteryCharging, PiArrowRight, PiShieldCheck } from "react-icons/pi";

const ProductCard = ({ product, priority = false }) => {
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
      if (!value) return;

      let displayValue = value;

      // Handle JSON strings or objects
      if (typeof value === 'object') {
        const values = Object.values(value).filter(Boolean);
        displayValue = values.length > 0 ? values[0] : "";
      } else if (typeof value === 'string' && value.trim().startsWith('{')) {
        try {
          const parsed = JSON.parse(value);
          const values = Object.values(parsed).filter(Boolean);
          displayValue = values.length > 0 ? values[0] : value;
        } catch (e) {
          // ignore parsing errors
        }
      }

      let strValue = String(displayValue);
      
      // If there are comma-separated values, just take the first one to keep it short
      if (strValue.includes(',')) {
        strValue = strValue.split(',')[0];
      }

      // Final truncate just in case
      if (strValue.length > 25) {
        strValue = strValue.substring(0, 25).trim() + '...';
      }

      if (strValue && previewSpecs.length < 2) {
        previewSpecs.push({ label, value: strValue });
      }
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
      push("Output", specifications.totalOutput || specifications.usbCOutput || specifications.output);
    }
  }

  // Enforce requested warranties and life cycles on card
  let targetWarranty = "";
  let targetLifeCycle = "";

  if (["battery", "portable-power", "power-bank"].includes(category)) {
    targetWarranty = "5 Years";
    if (category === "battery" || category === "portable-power") {
      targetLifeCycle = "6000 Cycles";
    }
  } else if (category === "inverter") {
    targetWarranty = "2 Years";
  } else if (category === "solar-panel" || (name && name.toLowerCase().includes("solar panel"))) {
    targetWarranty = "15 Years";
  }

  return (
    <article className="product-card">
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
            priority={priority}
          />


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
          <h3 className="product-card__title">{name}</h3>

          {/* Description */}
          <p className="product-card__desc">{description}</p>

          {/* Spec Tags */}
          <ul className="product-card__specs">
            {previewSpecs.map((spec, i) => (
              <li key={i} className="product-card__spec">
                <span className="product-card__spec-label">{spec.label}</span>
                <span className="product-card__spec-divider">·</span>
                <span className="product-card__spec-value">{spec.value}</span>
              </li>
            ))}
            {targetLifeCycle && (
              <li className="product-card__spec">
                <span className="product-card__spec-label">Cycle Life</span>
                <span className="product-card__spec-divider">·</span>
                <span className="product-card__spec-value">{targetLifeCycle}</span>
              </li>
            )}
          </ul>
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
          {targetWarranty && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', marginRight: '6px' }}>
              <PiShieldCheck /> {targetWarranty}
            </span>
          )}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
            <PiShieldCheck /> OEM Ready
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;