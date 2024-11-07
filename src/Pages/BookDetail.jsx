import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../Context/BookContext";
import { useParams } from "react-router-dom";

function BookDetail() {
  const { addToFavorites, addToReadingList } = useContext(BookContext);
  const [book, setBook] = useState(null);
  const { bookId } = useParams();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${bookId}.json`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.authors?.map((author) => author.name).join(", ")}</p>
      <p><strong>Published:</strong> {book.first_publish_date}</p>
      <p>{book.description ? book.description : "No description available."}</p>
      <button onClick={() => addToFavorites(book)}>Add to Favorites</button>
      <button onClick={() => addToReadingList(book)}>Add to Reading List</button>
    </div>
  );
}

export default BookDetail;
