import React from "react";
import "./index.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const pagesToShow = 1;

  const startPage = Math.max(1, currentPage - pagesToShow);
  const endPage = Math.min(totalPages, currentPage + pagesToShow);

  return (
    <ul className="pagination">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      {startPage > 1 && (
        <li>
          <span>...</span>
        </li>
      )}
      {pageNumbers.slice(startPage - 1, endPage).map((page) => (
        <li key={page} className={page === currentPage ? "active" : ""}>
          <button onClick={() => onPageChange(page)}>{page}</button>
        </li>
      ))}
      {endPage < totalPages && (
        <li>
          <span>...</span>
        </li>
      )}
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
