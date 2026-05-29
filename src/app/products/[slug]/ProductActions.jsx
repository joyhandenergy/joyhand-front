"use client";

import { useState } from "react";
import { PiFileText, PiChatCenteredDots } from "react-icons/pi";
import PopUpModal from "@/components/contactForm/PopUpModal";

export default function ProductActions({ category }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("quote");

  const openModal = (mode = "quote") => {
    setModalMode(mode);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const [isGenerating, setIsGenerating] = useState(false);

  const downloadCatalog = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    
    try {
      // Fetch up-to-date products from our cached internal API
      const res = await fetch(`/api/catalog/${category}`);
      if (!res.ok) throw new Error("Failed to fetch catalog data");
      const products = await res.json();

      // Dynamically import the PDF tools so they don't block initial page load
      const { pdf } = await import('@react-pdf/renderer');
      const CatalogDocument = (await import('@/components/CatalogDocument')).default;
      
      const blob = await pdf(<CatalogDocument category={category} products={products} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `joyhand-${category}-catalog.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to generate PDF locally:", error);
      alert("Failed to generate catalog. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <div className="product-details__actions">
        <button onClick={downloadCatalog} className="btn btn--primary product-details__cta" disabled={isGenerating}>
          <PiFileText size={20} /> {isGenerating ? "Generating..." : "Request Datasheet"}
        </button>
        <button onClick={() => openModal("quote")} className="btn btn--secondary product-details__cta">
          <PiChatCenteredDots size={20} /> Bulk Inquiry
        </button>
      </div>
      <PopUpModal isOpen={isModalOpen} onClose={closeModal} mode={modalMode} />
    </>
  );
}