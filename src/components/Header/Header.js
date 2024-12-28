// src/components/Header.js
import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext"; // Importar el contexto
import styles from "./Header.module.css"; // Importar estilos
import libraryLogo from "../../assets/icons/library-logo.png";
import cartLogo from "../../assets/icons/cart-logo.png";
import CartResume from "../../components/CartResume/CartResume";

const Header = () => {
  const { cartItems } = useContext(CartContext); // Usar el contexto
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartButtonRef = useRef(null); // Referencia al botón del carrito
  const cartContainerRef = useRef(null); // Referencia al contenedor del carrito

  // Cerrar el dropdown si se hace clic fuera del área del carrito
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartContainerRef.current &&
        !cartContainerRef.current.contains(event.target) &&
        !cartButtonRef.current.contains(event.target)
      ) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link to="/main">
            <img
              src={libraryLogo}
              alt="Logo de la librería"
              className={styles.logo}
            />
          </Link>
        </div>

        {/* Carrito */}
        <div
          ref={cartContainerRef}
          className={styles.cartContainer}
        >
          <button
            ref={cartButtonRef}
            onClick={toggleCartDropdown}
            className={styles.cartButton}
          >
            <img
              src={cartLogo}
              alt="Carrito"
              className={styles.cartIcon}
            />
            {cartItems.length > 0 && (
              <span className={styles.cartBubble}>{cartItems.length}</span>
            )}
          </button>
          <CartResume isOpen={isCartOpen} closeDropdown={() => setIsCartOpen(false)} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
