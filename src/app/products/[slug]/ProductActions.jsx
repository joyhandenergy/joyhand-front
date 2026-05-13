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

  const downloadCatalog = () => {
    const url = `/api/catalog?category=${category}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <div className="product-details__actions">
        <button onClick={downloadCatalog} className="btn btn--primary product-details__cta">
          <PiFileText size={20} /> Request Datasheet
        </button>
        <button onClick={() => openModal("quote")} className="btn btn--secondary product-details__cta">
          <PiChatCenteredDots size={20} /> Bulk Inquiry
        </button>
      </div>
      <PopUpModal isOpen={isModalOpen} onClose={closeModal} mode={modalMode} />
    </>
  );
}