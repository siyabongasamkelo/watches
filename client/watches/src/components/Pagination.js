import React, { useState, useEffect } from "react";

function Pagination({ totalItems, itemsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate an array of page numbers for the pagination component
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div>
      <ul className="pagination">
        {currentPage > 1 && (
          <li>
            <button onClick={() => handlePageChange(currentPage - 1)}>
              Previous
            </button>
          </li>
        )}

        {pageNumbers.map((page) => (
          <li key={page} className={page === currentPage ? "active" : ""}>
            <button onClick={() => handlePageChange(page)}>{page}</button>
          </li>
        ))}

        {currentPage < totalPages && (
          <li>
            <button onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
