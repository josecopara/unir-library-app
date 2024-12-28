// src/components/Cart.js
import React from "react";
import useCart from "../hooks/useCart"; // Importar el hook

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Usar el hook

  return (
    <div>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay libros en el carrito</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - {item.author}
              <button onClick={() => removeFromCart(item.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
