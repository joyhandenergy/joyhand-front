"use client";

import { useState } from "react";
import { PiQuestion, PiCaretDown, PiCaretUp } from "react-icons/pi";

export default function ProductFAQ({ product }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer: "MOQ varies by product. Contact our sales team for a custom quote based on your volume requirements."
    },
    {
      question: "Do you offer OEM/ODM services for this product?",
      answer: "Yes, we provide full OEM/ODM services including custom branding, packaging, and firmware modifications."
    },
    {
      question: "What compliance standards are met?",
      answer: `This product meets the following standards: ${product.certifications?.join(", ") || "CE, UL, IEC"}. Complete test records are available upon request.`
    },
    {
      question: "How long is the lead time?",
      answer: "Standard lead time is 15-30 days depending on quantity. Expedited options available."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="product-details__faq">
      <h3 className="product-details__faq-heading">Frequently Asked Questions</h3>
      <div className="product-details__faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="product-details__faq-item">
            <button
              className="product-details__faq-question"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <div className="product-details__faq-question-content">
                <div className="product-details__faq-icon-wrapper">
                  <PiQuestion size={22} className="product-details__faq-icon" />
                </div>
                <span>{faq.question}</span>
              </div>
              {openIndex === idx ? <PiCaretUp size={20} className="product-details__faq-caret" /> : <PiCaretDown size={20} className="product-details__faq-caret" />}
            </button>
            {openIndex === idx && (
              <div className="product-details__faq-answer">
                <p className="product-details__faq-answer-text">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}