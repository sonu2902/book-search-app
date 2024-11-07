import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [readingList, setReadingList] = useState([]);
  const [page, setPage] = useState(1);  // Current page
  const [totalPages, setTotalPages] = useState(0);  // Total pages for pagination
  const [isLoading, setIsLoading] = useState(false);

  const booksPerPage = 10; // Number of books per page

  const searchBooks = async (title) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${title}&page=${page}&limit=${booksPerPage}`
      );
      const data = await response.json();
      setBooks(data.docs);
      setTotalPages(Math.ceil(data.num_found / booksPerPage)); // Calculate total pages
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToFavorites = (book) => setFavorites((prev) => [...prev, book]);
  const addToReadingList = (book) => setReadingList((prev) => [...prev, book]);

  return (
    <BookContext.Provider
      value={{
        books,
        searchBooks,
        favorites,
        addToFavorites,
        readingList,
        addToReadingList,
        page,
        setPage, // Provide setPage for pagination
        isLoading,
        totalPages,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
