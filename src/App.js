// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import MainPage from "./pages/MainPage/MainPage";
import BookDetails from "./pages/BookDetails/BookDetails";
import Checkout from "./pages/Checkout/Checkout";
import Header from "./components/Header/Header"; // Importar Header
import './styles/globals.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prevItems) => [...prevItems, book]);
  };

  return (
    <Router>
      {/* Usamos useLocation dentro del Router */}
      <LocationWrapper cartItems={cartItems} addToCart={addToCart} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<MainPage />} />
        <Route
          path="/book/:id"
          element={<BookDetails addToCart={addToCart} />} // Asegurarnos de pasar la función correctamente
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

// Componente para manejar la ubicación y mostrar el Header si no estamos en la ruta '/'
const LocationWrapper = ({ cartItems, addToCart }) => {
  const location = useLocation(); // Obtener la ubicación dentro del Router

  return (
    <div>
      {/* Mostrar Header solo si la ruta no es '/' */}
      {location.pathname !== "/" && <Header cartItems={cartItems} />}
    </div>
  );
};

export default App;
