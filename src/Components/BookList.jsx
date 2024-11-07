import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import BookCard from "./BookCard";

const BookList = () => {
  const { books, isLoading } = useContext(BookContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>No books found. Please try another search.</p>
      ) : (
        books.map((book) => <BookCard key={book.key} book={book} />)
      )}
    </div>
  );
};

export default BookList;
