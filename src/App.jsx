import './App.css'
import React from "react";
import SearchBar from "./Components/SearchBar";
import BookList from "./Components/BookList";
import Pagination from "./Components/Pagination";

function App() {
  return (
    <div className="app">
      <h1>Book Search</h1>
      <SearchBar />
      <BookList />
      <Pagination />
    </div>
  );
}

export default App;

