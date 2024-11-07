import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
        alt={`${book.title} cover`}
      />
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(", ")}</p>
      <Link to={`/book/${book.key.split("/").pop()}`}>View Details</Link>
    </div>
  );
}

export default BookCard;
