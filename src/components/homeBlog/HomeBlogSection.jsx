"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { blogPosts } from "@/data";
import BlogCard from "@/components/blogCard/BlogCard";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import "./HomeBlog.css";
import SectionDecor from "../sectionDecor/SectionDecor";

const HomeBlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const featuredPosts = blogPosts.slice(0, 5);
  const slideCount = featuredPosts.length;

  // Get the actual width of one slide (including gap)
  const getSlideWidth = useCallback(() => {
    if (!sliderRef.current) return 320;
    const slides = sliderRef.current.children;
    if (slides.length === 0) return 320;
    const firstSlide = slides[0];
    const style = window.getComputedStyle(firstSlide);
    const marginRight = parseFloat(style.marginRight) || 0;
    const width = firstSlide.getBoundingClientRect().width;
    return width + marginRight;
  }, []);

  // Scroll to a specific slide index
  const scrollToIndex = useCallback((index, behavior = "smooth") => {
    if (!sliderRef.current) return;
    const slideWidth = getSlideWidth();
    const targetScroll = index * slideWidth;
    sliderRef.current.scrollTo({
      left: targetScroll,
      behavior,
    });
  }, [getSlideWidth]);

  // Go to next slide (loop back to 0 after last)
  const goToNextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slideCount;
    scrollToIndex(nextIndex, "smooth");
    setCurrentIndex(nextIndex);
  }, [currentIndex, slideCount, scrollToIndex]);

  // Start auto-play
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (!isHovered) {
        goToNextSlide();
      }
    }, 4000); // 4 seconds per slide
  }, [goToNextSlide, isHovered]);

  // Stop auto-play
  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  // Update current index when user manually scrolls
  const handleScroll = useCallback(() => {
    if (!sliderRef.current) return;
    const slideWidth = getSlideWidth();
    const scrollLeft = sliderRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / slideWidth);
    if (newIndex !== currentIndex && newIndex < slideCount) {
      setCurrentIndex(newIndex);
    }
  }, [getSlideWidth, currentIndex, slideCount]);

  // Reset auto-play timer when user stops scrolling
  const handleScrollEnd = useCallback(() => {
    stopAutoPlay();
    startAutoPlay();
  }, [stopAutoPlay, startAutoPlay]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => handleScroll();
    let scrollTimeout;
    const onScrollWithDelay = () => {
      onScroll();
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollEnd, 2000);
    };

    slider.addEventListener("scroll", onScrollWithDelay);
    startAutoPlay();

    return () => {
      slider.removeEventListener("scroll", onScrollWithDelay);
      clearTimeout(scrollTimeout);
      stopAutoPlay();
    };
  }, [handleScroll, handleScrollEnd, startAutoPlay, stopAutoPlay]);

  // Handle dot click
  const handleDotClick = (idx) => {
    stopAutoPlay();
    scrollToIndex(idx, "smooth");
    setCurrentIndex(idx);
    setTimeout(() => {
      startAutoPlay();
    }, 3000);
  };

  return (
    <section className="home-blog">
      <SectionDecor type="primary" count={1} />
      <div className="container">
       <SectionHeader
          badge="Manufacturing Intelligence"
          title="Insights for Energy Distributors"
          subtitle="Factory best practices, market trends, and technical guides – tailored for importers in emerging energy markets."
          center
        />

        <div
          className="home-blog__carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="home-blog__track" ref={sliderRef}>
            {featuredPosts.map((post) => (
              <div key={post.id} className="home-blog__slide">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="home-blog__dots">
          {featuredPosts.map((_, idx) => (
            <button
              key={idx}
              className={`home-blog__dot ${
                currentIndex === idx ? "home-blog__dot--active" : ""
              }`}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="home-blog__footer">
          <Link href="/blog" className="btn btn--primary">
            Browse All Articles <PiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;