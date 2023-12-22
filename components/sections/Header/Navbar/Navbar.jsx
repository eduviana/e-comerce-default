"use client";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`heading-7 ${styles.logo}`}>
        <span className={styles.normalText}>LA</span>
        <span className={styles.accentText}>CUCHARA</span>
      </div>

      <div className={`heading-6 ${styles.links}`}>
        <Link href="/" className={styles.link}>
          Menu
        </Link>
        <Link href="/" className={styles.link}>
          Acerca de
        </Link>
        <Link href="/" className={styles.link}>
          Galeria
        </Link>
        <Link href="/" className={styles.link}>
          Contacto
        </Link>
      </div>
   
      {isMenuOpen && (
        <div className={styles.menuOpen}>
          <button className={styles.closeMenu} onClick={toggleMenu}>
            X
          </button>
          <span className={styles.menuItem}>Inicio</span>
          <span className={styles.menuItem}>Menú</span>
          <span className={styles.menuItem}>Acerca de</span>
          <span className={styles.menuItem}>Galeria</span>
          <span className={styles.menuItem}>Contacto</span>
        </div>
      )}

      <div className={styles.icons}>
        <Image
          src="/icons/shoppingCart.svg"
          width={20}
          height={23}
          alt="Icono carrito de compras"
          className={styles.shoppingCart}
        />

        <Image
          src="/icons/hamburguer.svg"
          width={22}
          height={24}
          alt="Icono menú"
          className={styles.hamburguer}
          onClick={toggleMenu}
        />

        <Image
          src="/icons/search.svg"
          width={22}
          height={24}
          alt="Icono busqueda"
          className={styles.search}
        />

        <Image
          src="/icons/user.svg"
          width={22}
          height={24}
          alt="Icono menú"
          className={styles.user}
        />
      </div>
    </nav>
  );
};

export default Navbar;
