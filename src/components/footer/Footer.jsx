import React from "react";
import styles from "./footer.module.scss";
import Logotype from "../../assets/images/Logotype.png";

const Footer = ({ transparent }) => {
  return (
    <div className={transparent ? styles.footerTransparent : styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src={Logotype} alt="Company Logo" />
        </div>
        <nav className={styles.footerNav}>
          <ul className={styles.footerLinks}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
            <li>
              <a href="/request-demo">Request Demo</a>
            </li>
          </ul>
        </nav>
        <div className={styles.footerLanguage}>
          <span>Language: English</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
