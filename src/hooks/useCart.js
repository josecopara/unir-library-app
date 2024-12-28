// src/hooks/useCart.js
import { useContext } from "react";
import CartContext from "../context/CartContext";

// Hook personalizado para manejar el carrito
const useCart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  return {
    cartItems,
    addToCart,
    removeFromCart,
  };
};

export default useCart;
