import React from "react";
import styles from "./AdvantagesSlider.module.scss";
import AdvantageBlock from "../Advantages/Advantage";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AdvantagesSlider = ({ left }) => {
  const { t } = useTranslation();
  const slides = [
    {
      title: t("security"),
      description: t("security_description"),
      image: "/images/securitySlidegBG.svg",
    },
    {
      title: t("safety"),
      description: t("safety_security_description"),
      image: "/images/safetySliderBG.svg",
    },
    {
      title: t("smart_cities"),
      description: t("smart_cities_description"),
      image: "/images/smartCitiesSliderBG.svg",
    },
    {
      title: t("logistics_and_industries"),
      description: t("logistics_and_industries__description"),
      image: "/images/logisticSliderBG.svg",
    },
    {
      title: t("public_transportation"),
      description:
        "The WeSmart system monitors bus and train traffic in real time, provides accurate predictions of arrival times and analyzes usage patterns",
      image: "/images/publickTransportationSliderBG.svg",
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      <motion.div className={styles.sliderWrapper} style={{ left }}>
        {slides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <AdvantageBlock
              title={slide.title}
              description={slide.description}
              backgroundImage={slide.image}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdvantagesSlider;
