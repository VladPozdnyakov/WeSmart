import React from "react";
import styles from "./footer.module.scss";
import Logotype from "../../assets/images/Logotype.png";

const Footer = ({ transparent, color  }) => {
  return (
    <div className={transparent ? styles.footerTransparent : styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          {transparent ? (<img src='/images/logoBlueBG.svg' alt="Company Logo" />) : (<img src={Logotype} alt="Company Logo" />) }
        </div>
        <nav className={styles.footerNav}>
          <ul className={styles.footerLinks}>
            <li>
              <a href="/" className={styles.footerLinksA} style={{color: color}}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className={styles.footerLinksA} style={{color: color}}>
                About
              </a>
            </li>
            <li>
              <a href="/products" className={styles.footerLinksA} style={{color: color}}>
                Products
              </a>
            </li>
            <li>
              <a href="/contacts" className={styles.footerLinksA} style={{color: color}}>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.button}><span className={styles.buttonText}>Request a demo</span></div>
      </div>
    </div>
  );
};

export default Footer;
