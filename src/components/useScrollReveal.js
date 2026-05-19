"use client";

import { useRef, useEffect, useState } from "react";

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to `ref` and returns `isVisible`.
 * When the element enters the viewport, `isVisible` becomes true (one-shot).
 *
 * @param {object} options
 * @param {number} [options.threshold=0.1]  - 0–1, how much of the element must be visible
 * @param {string} [options.rootMargin="0px 0px -60px 0px"] - shrinks the viewport bottom so
 *   the animation fires slightly before the element reaches the very bottom edge.
 */
export function useScrollReveal({ threshold = 0.1, rootMargin = "0px 0px -60px 0px" } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // fire once, then stop watching
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
