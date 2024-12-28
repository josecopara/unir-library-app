// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext"; // Importamos el CartProvider
import './styles/variables.css';
import './styles/globals.css';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
