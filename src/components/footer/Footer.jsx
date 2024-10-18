import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";
import Logotype from "../../assets/images/Logotype.png";
import useDeviceDetection from "../../hooks/useDeviceDetection";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion"; // Добавляем framer-motion

const Footer = ({ transparent, color, isMenuOpen,  setIsMenuOpen }) => {
  const device = useDeviceDetection();
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Меняем состояние меню
  };


  return (
    <div className={transparent ? styles.footerTransparent : styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src={transparent ? '/images/logoBlueBG.svg' : Logotype} alt="Company Logo" />
        </div>
        {device === 'Mobile' ? (
          <div className={styles.burgerMenu}>
            <button onClick={toggleMenu} className={styles.burgerButton}>
              {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
            <motion.nav
              className={styles.mobileNav}
              initial={{ x: "100%" }} // Начальная позиция вне экрана
              animate={{ x: isMenuOpen ? "0%" : "100%" }} // Анимация выезда
              transition={{ type: "spring", stiffness: 300, damping: 30 }} // Плавность движения
            >
              <ul className={styles.mobileLinks}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
                <li><Link to="/contacts" onClick={toggleMenu}>Contacts</Link></li>
              </ul>
            </motion.nav>
          </div>
        ) : (
          <nav className={styles.footerNav}>
            <ul className={styles.footerLinks}>
              <li><Link to="/" className={styles.footerLinksA} style={{ color: color }}>Home</Link></li>
              <li><Link to="/about" className={styles.footerLinksA} style={{ color: color }}>About</Link></li>
              <li><Link to="/products" className={styles.footerLinksA} style={{ color: color }}>Products</Link></li>
              <li><Link to="/contacts" className={styles.footerLinksA} style={{ color: color }}>Contacts</Link></li>
            </ul>
          </nav>
        )}
        {!device === 'Mobile' && (
          <div className={styles.button}>
            <span className={styles.buttonText}>Request a demo</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
