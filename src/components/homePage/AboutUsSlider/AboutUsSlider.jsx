import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import styles from "../../../pages/HomeV2/HomeV2.module.scss";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const AboutUsSlider = () => {
  const { t } = useTranslation();

  // Массив данных для разных блоков контента
  const contentData = [
    {
      text: (
        <>
          {t("working_with")}
          <br />
          {t("by_or_was")}
          <br />
          {t("process")}
          <br />
          {t("experience")}
          <br />
          {t("improved_the_security")}
          <br />
        </>
      ),
      logoAuthor: (
        <div className={styles.logoAuthor}>
          <img src="/images/homeWrittenAboutUs1.png" alt="no-images" />
          <span>{t("Maariv")}</span>
        </div>
      ),
    },
    {
      text: (
        <>
          {t("the_next_generation")}
          <br />
          {t("fewer_false")}
          <br />
          {t("innovation_solutions")}
          <br />
          {t("delivered")}
          <br />
          {t("of_people_counting")}
          <br />
          {t("identification")}
        </>
      ),
      logoAuthor: (
        <div className={styles.logoAuthor}>
          <img src="/images/homeWrittenAboutUs2.png" alt="no-images" />
          <span>{t("metzuda")}</span>
        </div>
      ),
    },
    {
      text: (
        <>
          {t("working")}
          <br />
          {t("smooth")}
          <br />
          {t("professional")}
          <br />
          {t("in_the_field")}
          <br />
          {t("security_of_the_settlement")}
          <br />
          {t("around_the_clock")}
          <br />
          {t("many_problems")}
        </>
      ),
      logoAuthor: (
        <div className={styles.logoAuthor}>
          <img
            src="/images/homeWrittenAboutUs3.png"
            alt="no-images"
            style={{ width: "5vw" }}
          />
          <span>{t("TechCrunch")}</span>
        </div>
      ),
    },
  ];

  // Состояние для отслеживания текущего индекса
  const [currentIndex, setCurrentIndex] = useState(0);

  // Функция для переключения контента по нажатию на точки
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleRightArrowClick = () => {
    if (currentIndex < contentData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleLeftArrowClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <motion.div className={styles.writtenAboutUs} style={{ top: "314vh" }}>
      <div className={styles.blockName}>{t("written_about_us")}</div>
      <div>
        <div className={styles.blockTitle}>
          {contentData[currentIndex].text}
        </div>

        <div className={styles.blockName}>
          {t("the_availability")}
          <br />
          {t("their_system_solved")}
          <br />
          {t("for_us_without")}
          {contentData[currentIndex].logoAuthor}
        </div>
      </div>{" "}
      {currentIndex < contentData.length - 1 && (
        <div className={styles.rightArrow} onClick={handleRightArrowClick}>
          <GoArrowRight style={{ color: "#363B61" }} size={35} />
        </div>
      )}
      {currentIndex > 0 && (
        <div className={styles.leftArrow}>
          <GoArrowLeft
            style={{ color: "#363B61" }}
            size={35}
            onClick={handleLeftArrowClick}
          />
        </div>
      )}
      <div className={styles.bgImage}>
        <img src="/images/aboutWrittenAboutUs.svg" alt="no-image" />
      </div>
      {/* Навигационные точки */}
      <div className={styles.dotsContainer}>
        {contentData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AboutUsSlider;
