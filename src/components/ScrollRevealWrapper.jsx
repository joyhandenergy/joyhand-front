"use client";

import { useScrollReveal } from "./useScrollReveal";

export default function ScrollRevealWrapper({ children, className = "", as: Component = "div" }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <Component ref={ref} className={`${className} reveal ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </Component>
  );
}
