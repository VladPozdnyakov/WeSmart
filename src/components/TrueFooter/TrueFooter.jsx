// TrueFooter.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./TrueFooter.module.scss";
import { useTranslation } from "react-i18next";

const TrueFooter = ({ top }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClickCareers = () => {
    navigate("/careers");
  };

  return (
    <motion.div className={styles.trueFooter} style={{ top }}>
      <div className={styles.row1}>
        <div className={styles.column}>
          <span className={styles.categoryTitle}>{t("COMPANY")}</span>
          <span className={styles.categoryText}>{t("About_us")}</span>
          <span className={styles.categoryText} onClick={handleClickCareers}>
            {t("Careers")}
          </span>
        </div>
        <div className={styles.column}>
          <span className={styles.categoryTitle}>{t("PRODUCTS")}</span>
          <span className={styles.categoryText}>
            {t("Logistics_and_industry")}
          </span>
          <span className={styles.categoryText}>{t("Smart_cities")}</span>
          <span className={styles.categoryText}>
            {t("Public_Transportation")}
          </span>
          <span className={styles.categoryText}>{t("Safety")}</span>
          <span className={styles.categoryText}>{t("Security")}</span>
        </div>
        <div className={styles.column}>
          <span className={styles.categoryTitle}>{t("CONTACTS")}</span>
          <span className={styles.categoryText}>info@wesmart.co.il</span>
          <span className={styles.categoryText}>+972 50 502 5094</span>
          <span className={styles.categoryText}>
            Gazit 10 St, Karmiel.
            <br /> 2165379
          </span>
        </div>
        <div>
          <div className={styles.categoryTitle}>{t("FOLLOW_US")}</div>
          <div className={styles.iconDiv}>
            <a href="#">
              <img src="/images/socials/Facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/images/socials/Instagram.svg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/images/socials/LinkedIn.svg" alt="LinkedIn" />
            </a>
            <a href="#">
              <img src="/images/socials/Twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.infoDiv}>
          © WESMART COMMUNICATION AB, 2023–2024
        </div>
        <div className={styles.infoDiv}>
          {t("PRIVACY_POLICY")} &ensp;&ensp;&ensp;&ensp; •
          &ensp;&ensp;&ensp;&ensp;
          {t("TERMS_CONDITIONS")}
        </div>
        <div className={styles.infoDiv}>
          <img src="/images/socials/cocki.svg" alt="Cookie Preferences" />
          {t("COOKIE_PREFERENCES")}
        </div>
      </div>
    </motion.div>
  );
};

export default TrueFooter;
