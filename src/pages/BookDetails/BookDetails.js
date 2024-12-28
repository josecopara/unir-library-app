// src/pages/BookDetails/BookDetails.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Importar Link para la navegación
import books from "../../data/books"; // Importar los datos de libros
import useCart from "../../hooks/useCart"; // Importar el hook
import styles from "./BookDetails.module.css"; // Importar los estilos

const BookDetails = () => {
  const { id } = useParams();
  const { cartItems, addToCart, removeFromCart } = useCart(); // Usar el hook
  const [book, setBook] = useState(null);

  useEffect(() => {
    const selectedBook = books.find((book) => book.id === parseInt(id));
    setBook(selectedBook);
  }, [id]);

  if (!book) return <div>Loading...</div>;

  const isInCart = cartItems.some((item) => item.id === book?.id);

  return (
    <div className={styles.detailsContainer}>
      <h1 className={styles.bookTitle}>{book.title}</h1>
      <img src={book.image} alt={book.title} className={styles.bookImage} />
      <div className={styles.bookInfo}>
        <p><strong>Autor:</strong> {book.author}</p>
        <p><strong>Año:</strong> {book.year}</p>
        <p><strong>Editorial:</strong> {book.publisher}</p>
        <p><strong>País:</strong> {book.country}</p>
        <p><strong>Precio:</strong> ${book.price}</p>
      </div>

      <div className={styles.buttonsContainer}>
        {/* Botón para agregar o quitar del carrito */}
        <button
          className={styles.button}
          onClick={() => isInCart ? removeFromCart(book.id) : addToCart(book)}
        >
          {isInCart ? "Retirar de Carrito" : "Agregar al Carrito"}
        </button>

        {/* Botón para regresar */}
        <Link to="/main" className={`${styles.button} ${styles.buttonLink}`}> {/* Cambia la ruta si necesitas ir a otro lugar */}
          Regresar
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
