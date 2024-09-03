import React, { useState, useRef, useEffect } from "react";
import styles from "./footer/footer.module.css";
import Logotype from "./assets/images/Logotype.png";

function App() {
  const [language, setLanguage] = useState("EN");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
    // Здесь можно добавить логику смены языка приложения
  };

  // Закрытие выпадающего меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const otherLanguage = language === "EN" ? "RU" : "EN";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Логотип */}
        <div className={styles.footerLogo}>
          <img src={Logotype} alt="Company Logo" />
        </div>

        {/* Навигация */}
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
          </ul>
        </nav>

        {/* Дополнительные элементы */}
        <div className={styles.footerExtras}>
          <div className={styles.footerRequestDemo}>
            <a href="/request-demo" className={styles.requestDemoButton}>
              Request Demo
            </a>
          </div>
          {/* Переключатель языка */}
          <div className={styles.languageSelector} ref={dropdownRef}>
            <button className={styles.languageButton} onClick={toggleDropdown}>
              {language} <span className={styles.arrow}>▼</span>
            </button>
            {isDropdownOpen && (
              <ul className={styles.languageDropdown}>
                <li
                  className={styles.languageOption}
                  onClick={() => selectLanguage(otherLanguage)}
                >
                  {otherLanguage}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
