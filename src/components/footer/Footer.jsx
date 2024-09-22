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
              <a href="/" className={styles.footerLinksA}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className={styles.footerLinksA}>
                About
              </a>
            </li>
            <li>
              <a href="/products" className={styles.footerLinksA}>
                Products
              </a>
            </li>
            <li>
              <a href="/contacts" className={styles.footerLinksA}>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.button}>Request a demo</div>
      </div>
    </div>
  );
};

export default Footer;
