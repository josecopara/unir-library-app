// src/context/CartContext.js
import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
const CartContext = createContext();

// Crear el Provider del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Cargar el carrito desde localStorage al inicio
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  // Actualizar el carrito en localStorage cada vez que se modifique
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems"); // Eliminar el carrito de localStorage si está vacío
    }
  }, [cartItems]);

  // Función para agregar un libro al carrito
  const addToCart = (book) => {
    setCartItems((prevItems) => [...prevItems, book]);
  };

  // Función para eliminar un libro del carrito
  const removeFromCart = (bookId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== bookId));
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCartItems([]); // Vaciar el carrito
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
