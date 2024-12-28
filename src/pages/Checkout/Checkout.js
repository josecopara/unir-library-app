// src/pages/Checkout/Checkout.js
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importar useNavigate para la redirección
import CartContext from "../../context/CartContext"; // Importar el contexto
import styles from "./Checkout.module.css"; // Importar los estilos

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext); // Usar el contexto para obtener y vaciar el carrito
  const navigate = useNavigate(); // Hook para redirigir

  // Calcular el total
  const totalPrice = cartItems.reduce((total, book) => total + book.price, 0).toFixed(2);

  // Manejar el pago
  const handlePayment = () => {
    alert("Pago satisfactorio"); // Mostrar alerta de pago satisfactorio
    clearCart(); // Vaciar el carrito

    // Redirigir al usuario a la página principal
    navigate("/main");
  };

  if (cartItems.length === 0) {
    return <div>No hay libros en el carrito.</div>; // Mensaje si el carrito está vacío
  }

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.pageTitle}>Checkout</h1>
      <ul className={styles.cartList}>
        {cartItems.map((book) => (
          <li key={book.id} className={styles.cartItem}>
            <div className={styles.bookDetails}>
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <p className={styles.bookAuthor}><strong>Autor:</strong> {book.author}</p>
              <p className={styles.bookPrice}>
                <strong>Precio:</strong> {`${book.price.toFixed(2)}$`}
              </p>
            </div>
            <hr className={styles.separator} />
          </li>
        ))}
      </ul>
      <div className={styles.totalPrice}>
        <strong>Total:</strong> {totalPrice}$
      </div>
      <div className={styles.buttonsContainer}>
        <button onClick={handlePayment} className={styles.checkoutButton}>Pagar</button>
        <Link to="/main" className={styles.goBackButton}>Regresar</Link>
      </div>
    </div>
  );
};

export default Checkout;
