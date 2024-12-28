// src/pages/MainPage/MainPage.js
import React, { useState, useEffect, useRef } from "react";
import books from "../../data/books";
import BookCard from "../../components/BookCard/BookCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import Slider from "react-slick";
import styles from "./MainPage.module.css"; // Importar estilos
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [slidesToShow, setSlidesToShow] = useState(6); // Estado para controlar cuántos libros mostrar
  const sliderRef = useRef(null); // Referencia al componente Slider para controlarlo con botones

  // Detectar el tamaño de la ventana y ajustar el número de slides
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1700) {
        setSlidesToShow(6); // Mostrar 6 libros en pantallas grandes
      } else if (width >= 1600) {
        setSlidesToShow(5); // Mostrar 5 libros en pantallas medianas
      }  else if (width >= 1300) {
        setSlidesToShow(4); // Mostrar 4 libros en pantallas medianas
      } else if (width >= 980) {
        setSlidesToShow(3); // Mostrar 3 libros en pantallas medianas
      } else if (width >= 480) {
        setSlidesToShow(2); // Mostrar 2 libros en pantallas pequeñas
      } else {
        setSlidesToShow(1); // Mostrar 1 libro en pantallas muy pequeñas
      }
    };

    handleResize(); // Ejecutar al cargar la página
    window.addEventListener("resize", handleResize); // Añadir el listener al cambiar el tamaño

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el listener
    };
  }, []); // Solo ejecutar al inicio

  const normalizeText = (text) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filteredBooks = books.filter((book) => {
    return normalizeText(book.title).includes(normalizeText(searchQuery));
  });

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Usar el estado dinámico de slidesToShow
    slidesToScroll: 1,
    centerMode: true,  // Activar modo centrado
    centerPadding: "0", // No dejar espacio en los lados
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Para pantallas pequeñas siempre mostrar solo 1
          centerMode: true, // Activar modo centrado en móvil
        },
      },
    ],
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Colección de libros</h1>
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />

      {/* Solo mostrar el carrusel si no hay una búsqueda activa */}
      {searchQuery === "" ? (
        <div className={styles.carouselWrapper}>
          {/* Botón de flecha izquierda */}
          <button
            className={`${styles.arrowButton} ${styles.arrowLeft}`}
            onClick={() => sliderRef.current.slickPrev()} // Desplaza al libro anterior
          >
            ←
          </button>
          <Slider {...settings} ref={sliderRef} className={styles.carousel}>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))
            ) : (
              <p className={styles.noResults}>No se encontraron libros.</p>
            )}
          </Slider>
          {/* Botón de flecha derecha */}
          <button
            className={`${styles.arrowButton} ${styles.arrowRight}`}
            onClick={() => sliderRef.current.slickNext()} // Desplaza al siguiente libro
          >
            →
          </button>
        </div>
      ) : (
        // Si hay una búsqueda activa, solo mostramos los resultados
        <div className={styles.filteredBooks}>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))
          ) : (
            <p className={styles.noResults}>No se encontraron libros.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MainPage;
