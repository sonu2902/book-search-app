import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";

const Pagination = () => {
  const { page, setPage, totalPages, isLoading } = useContext(BookContext);

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={isLoading || page === 1}>
        Previous
      </button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={handleNextPage} disabled={isLoading || page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
