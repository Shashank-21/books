import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BookProvider } from "./components/context/BookContext";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <BookProvider>
    <App />
  </BookProvider>
);
