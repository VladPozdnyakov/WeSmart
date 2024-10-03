import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link из react-router-dom
import styles from "./footer.module.scss";
import Logotype from "../../assets/images/Logotype.png";

const Footer = ({ transparent, color }) => {
  return (
    <div className={transparent ? styles.footerTransparent : styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          {transparent ? (
            <img src='/images/logoBlueBG.svg' alt="Company Logo" />
          ) : (
            <img src={Logotype} alt="Company Logo" />
          )}
        </div>
        <nav className={styles.footerNav}>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="/" className={styles.footerLinksA} style={{ color: color }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.footerLinksA} style={{ color: color }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className={styles.footerLinksA} style={{ color: color }}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/contacts" className={styles.footerLinksA} style={{ color: color }}>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.button}>
          <span className={styles.buttonText}>Request a demo</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
