import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css"; // Importar el CSS modular
import logo from "../../assets/icons/logo-solo.png"; // Importar el logo

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.landing}>
      <img src={logo} alt="Mi Librería Logo" className={styles.logo} />
      <p className={styles.redirectText}>
        Serás redirigido a la página principal en breve
        <span className={styles.ellipsis}></span>
      </p>
    </div>
  );
};

export default Landing;
