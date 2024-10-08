import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../../pages/About/About.module.scss";
import { useTranslation } from "react-i18next";

const ValueSection = ({
  top,
  opacity1,
  opacity2,
  opacity3,
  opacity4,
  opacity5,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t } = useTranslation();
  const worths = [
    {
      title: t("INNOVATION"),
      text: t("The_company_aims"),
      opacity: opacity1,
      triangle: "/images/triangles/triangle1.svg",
      id: 0,
    },
    {
      title: t("QUALITY"),
      text: t("THE_COMPANY_UNDERTAKES"),
      opacity: opacity2,
      triangle: "/images/triangles/triangle2.svg",
      id: 1,
    },
    {
      title: t("RELIABILITY"),
      text: t("THE_COMPANY_MUST"),
      opacity: opacity3,
      triangle: "/images/triangles/triangle3.svg",
      id: 2,
    },
    {
      title: t("SERVICE"),
      text: t("THE_COMPANY_AIMS_TO_PROVIDE"),
      opacity: opacity4,
      triangle: "/images/triangles/triangle4.svg",
      id: 3,
    },
    {
      title: t("SOCIAL_RESPONSIBILITY"),
      text: t("The_company_aims_to_give"),
      opacity: opacity5,
      triangle: "/images/triangles/triangle5.svg",
      id: 4,
    },
  ];

  return (
    <motion.div className={styles.theValues} style={{ top }}>
      <div className={styles.title}>
        <span className={styles.orange}>{t("THE_VALUES")},</span>
        {t("THAT_LEAD_US")}
      </div>

      <div className={styles.worthesContainer}>
        {worths.map((worth, index) => (
          <motion.div
            key={index}
            className={styles.worth}
            style={{ opacity: worth.opacity }}
          >
            <div
              className={styles.imageWrapper}
              onMouseEnter={() => setHoveredIndex(index)} // Устанавливаем индекс при наведении
              onMouseLeave={() => setHoveredIndex(null)} // Сбрасываем индекс при убирании курсора
            >
              <motion.img
                className={styles.load}
                src="/images/aboutWorthes0.svg"
                alt="no-image"
                initial={{ opacity: 1 }}
                animate={{
                  rotate: hoveredIndex === index ? 360 : 0, // Вращение при наведении
                  opacity: hoveredIndex === index ? 0 : 1, // Скрытие при наведении
                  transition: {
                    duration: hoveredIndex === index ? 1 : 0.5,
                    ease: "easeInOut",
                    delay: hoveredIndex === index ? 0 : 0.5,
                  },
                }}
              />
              <motion.img
                className={styles.triangle}
                src={worth.triangle}
                alt="no-image"
                initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }} // Изначально скрыта
                animate={{
                  clipPath:
                    hoveredIndex === index
                      ? "circle(150% at 50% 50%)"
                      : "circle(0% at 50% 50%)", // Анимация clip-path
                  opacity: hoveredIndex === index ? 1 : 0, // Появление и исчезновение
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: hoveredIndex === index ? 0 : 0,
                  },
                }}
              />
            </div>
            <div>
              <span className={styles.worthTitle}>{worth.title}</span>
              <div className={styles.worthText}>
                {worth.text.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className={styles.worthTitle}>/{worth.id + 1}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ValueSection;
