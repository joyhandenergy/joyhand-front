"use client";
import Link from "next/link";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, baseUrl }) => {
  const maxVisible = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const getPageHref = (pageNum) => (pageNum <= 1 ? baseUrl : `${baseUrl}?page=${pageNum}`);

  return (
    <nav className="pagination" aria-label="Pagination">
      {currentPage > 1 && (
        <Link href={getPageHref(currentPage - 1)} className="pagination__arrow" aria-label="Previous page">
          <PiCaretLeft size={16} />
        </Link>
      )}
      
      {pages.map((page) => (
        <Link
          key={page}
          href={getPageHref(page)}
          className={`pagination__item ${currentPage === page ? "pagination__item--active" : ""}`}
        >
          {page}
        </Link>
      ))}
      
      {currentPage < totalPages && (
        <Link href={getPageHref(currentPage + 1)} className="pagination__arrow" aria-label="Next page">
          <PiCaretRight size={16} />
        </Link>
      )}
    </nav>
  );
};

export default Pagination;