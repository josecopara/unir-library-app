// src/components/CartResume.js
import React from "react";
import { Link } from "react-router-dom"; // Importar Link para la navegación
import useCart from "../../hooks/useCart"; // Importar el hook para obtener el carrito
import styles from "./CartResume.module.css"; // Importar los estilos
import garbageIcon from "../../assets/icons/garbage-icon.png"; // Importar el ícono de basura

const CartResume = ({ isOpen, closeDropdown }) => {
  const { cartItems, removeFromCart } = useCart(); // Obtener los ítems del carrito y la función para eliminar un libro

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  // Calcular el total
  const totalPrice = cartItems.reduce((total, book) => total + book.price, 0).toFixed(2);

  return (
    <div
      className={`${styles.cartResume} ${isOpen ? styles.open : ""}`}
      onClick={closeDropdown} // Cerrar el dropdown al hacer clic
    >
      <div className={styles.cartList}>
        {cartItems.length > 0 ? (
          cartItems.map((book) => (
            <div key={book.id} className={styles.cartItem}>
              <div className={styles.bookDetails}>
                <span className={styles.bookTitle}>
                  {book.title.length > 25
                    ? `${book.title.substring(0, 25)}...`
                    : book.title}
                </span>
                <div className={styles.bookInfo}>
                  <span className={styles.bookAuthor}>{book.author}</span>
                  <span className={styles.bookPrice}>{book.price.toFixed(2)}$</span>
                </div>
              </div>
              <img
                src={garbageIcon}
                alt="Eliminar"
                className={styles.garbageIcon}
                onClick={(e) => {
                  e.stopPropagation(); // Evitar que el clic cierre el dropdown
                  handleRemove(book.id);
                }}
              />
            </div>
          ))
        ) : (
          <p className={styles.emptyCart}>Tu carrito está vacío.</p>
        )}
      </div>
      {/* Mostrar el total */}
      {cartItems.length > 0 && (
        <div className={styles.totalPrice}>
          <span>Total:</span>
          <span>{totalPrice}$</span>
        </div>
      )}
      {/* Botón "Ir a pagar" */}
      {cartItems.length > 0 && (
        <div className={styles.checkoutButtonContainer}>
          <Link to="/checkout" className={styles.checkoutButton}>
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartResume;
