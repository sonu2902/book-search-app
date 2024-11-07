import React, { useState, useContext, useEffect } from "react";
import { BookContext } from "../Context/BookContext";
function SearchBar() {
  const [query, setQuery] = useState("");
  const { searchBooks, setPage, page, isLoading } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1); // Reset to page 1 when a new search is performed
    searchBooks(query);
  };

  useEffect(() => {
    if (query) {
      searchBooks(query);
    }
  }, [page]);  // Re-run when the page changes

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title, author, or ISBN..."
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default SearchBar;
