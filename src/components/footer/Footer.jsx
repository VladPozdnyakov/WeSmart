import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Импортируем Link из react-router-dom
import { useTranslation } from "react-i18next"; // Импортируем useTranslation
import styles from "./footer.module.scss";
import Logotype from "../../assets/images/Logotype.png";

const Footer = ({ transparent, color }) => {
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const direction = i18n.language === "heb" ? "rtl" : "ltr";
    document.documentElement.dir = direction;
  }, [i18n.language]);

  const switchLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng); // Переключение языка с помощью i18n
  };

  return (
    <div className={transparent ? styles.footerTransparent : styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
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
            style={{
              border: "none",
              background: "none", // Убираем фон
              fontSize: "16px", // Размер шрифта
              outline: "none", // Убираем активный бордер
              textAlignLast: "right", // Выравниваем текст и стрелку справа
              color: "#363B61", // Цвет текста (белый для темного фона)
              flex: "1.5",
            }}
          >
            <option value="en">EN</option>
            <option value="heb">בקש הדגמה</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
