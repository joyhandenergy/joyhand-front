"use client";

import { useState } from "react";
import { PiLinkedinLogo, PiXLogo, PiLinkSimple } from "react-icons/pi";
import PopUpModal from "@/components/contactForm/PopUpModal";

export function ShareButtons({ title, slug }) {
  const handleShare = (platform) => {
    const url = typeof window !== 'undefined' ? window.location.href : `https://www.joyhand.com/blog/${slug}`;
    if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(url).then(() => {
        alert("Link copied to clipboard!");
      });
    }
  };

  return (
    <div className="sidebar-share__actions">
      <button className="sidebar-share__btn" aria-label="Share on LinkedIn" onClick={() => handleShare('linkedin')}><PiLinkedinLogo /></button>
      <button className="sidebar-share__btn" aria-label="Share on X" onClick={() => handleShare('twitter')}><PiXLogo /></button>
      <button className="sidebar-share__btn" aria-label="Copy Link" onClick={() => handleShare('copy')}><PiLinkSimple /></button>
    </div>
  );
}

export function ScaleBrandButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={(e) => {
          e.preventDefault();
          setIsModalOpen(true);
        }} 
        className="sidebar-card__link-btn" 
        style={{ width: "100%", border: "none", cursor: "pointer", fontFamily: "inherit" }}
      >
        Scale Your ODM Brand
      </button>
      <PopUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} mode="quote" />
    </>
  );
}
