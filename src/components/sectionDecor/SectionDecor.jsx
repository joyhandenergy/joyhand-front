"use client";
import React, { memo } from "react";
import "./SectionDecor.css";

const SectionDecor = memo(({ type = "primary", count = 3 }) => {
  return (
    <div
      className={`section-decor section-decor--${type}`}
      aria-hidden="true"
    >
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className="section-decor__shape"
          style={{ "--index": index }}
        />
      ))}
    </div>
  );
});

SectionDecor.displayName = "SectionDecor";

export default SectionDecor;