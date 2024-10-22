import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./footer.module.scss";
import Logotype from "../../assets/images/Logotype.png";

const Footer = ({ transparent, color }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    setLanguage(i18n.language);

    const direction = i18n.language === "heb" ? "rtl" : "ltr";
    document.documentElement.dir = direction;
  }, [i18n.language]);

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navigate = useNavigate();

  const handleClickOnHome = () => {
    navigate("/");
  };

  return (
    <div className={transparent ? styles.footerTransparent : styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo} onClick={handleClickOnHome}>
          {transparent ? (
            <img src="/images/logoBlueBG.svg" alt="Company Logo" />
          ) : (
            <img src={Logotype} alt="Company Logo" />
          )}
        </div>
        <nav className={styles.footerNav}>
          <ul className={styles.footerLinks}>
            <li>
              <Link
                to="/"
                className={styles.footerLinksA}
                style={{ color: color }}
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={styles.footerLinksA}
                style={{ color: color }}
              >
                {t("about")}
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={styles.footerLinksA}
                style={{ color: color }}
              >
                {t("products")}
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className={styles.footerLinksA}
                style={{ color: color }}
              >
                {t("contacts")}
              </Link>
            </li>
          </ul>
        </nav>
        <div style={{ flex: "1.5" }}>
          <div className={styles.button}>
            <span className={styles.buttonText}>{t("request_demo")}</span>
          </div>
        </div>
        <div>
          <select
            value={language}
            onChange={(e) => switchLanguage(e.target.value)}
            className={styles.selectLang}
          >
            <option value="en">EN</option>
            <option value="heb">עב</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
