// src/components/BookCard/BookCard.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./BookCard.module.css"; // Importar estilos

const BookCard = ({ book }) => {
  return (
    <Link to={`/book/${book.id}`} className={styles.card}>  {/* Hacer que toda la tarjeta sea clickeable */}
      <img
        src={book.image}
        alt={`Portada del libro ${book.title}`}
        className={styles.bookImage}
      />
      <h3 className={styles.title}>{book.title}</h3>
      <p className={styles.author}>{book.author}</p>
    </Link>
  );
};

export default BookCard;