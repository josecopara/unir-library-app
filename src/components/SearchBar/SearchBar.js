import React, { useState } from "react";
import styles from './SearchBar.module.css';  // Importa el archivo CSS correctamente

const SearchBar = ({ searchQuery, onSearchChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder={isFocused ? "" : "Buscar por título"}  // Condición para el placeholder
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        onFocus={handleFocus}  // Manejar cuando el campo recibe foco
        onBlur={handleBlur}    // Manejar cuando el campo pierde foco
      />
    </div>
  );
};

export default SearchBar;
