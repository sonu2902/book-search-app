import React from "react";
import ReactDOM from "react-dom/client";  // React 18's new API
import { BrowserRouter as Router } from "react-router-dom";  // Import BrowserRouter
import App from "./App";
import { BookProvider } from "./Context/BookContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router> {/* Wrap your app with Router */}
    <BookProvider>
      <App />
    </BookProvider>
  </Router>
);
