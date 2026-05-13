"use client";
import React, { memo } from "react";
import "./SuperRing.css";

const SuperRing = memo(({
  type = "primary",
  size = "1200px",
  thickness = "2px",
  top = "0%",
  left = "50%",
  opacity = 0.05,
  zIndex = 0,
  translateX = "-50%",
  translateY = "0%",
}) => {
  return (
    <div
      className={`super-ring super-ring--${type}`}
      style={{
        width: size,
        height: size,
        borderWidth: thickness,
        top,
        left,
        transform: `translate(${translateX}, ${translateY})`,
        opacity,
        zIndex,
      }}
      aria-hidden="true"
    />
  );
});

SuperRing.displayName = "SuperRing";

export default SuperRing;