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
      description:
        "We understand that in times of uncertainty, a sense of security is a vital necessity",
      image: "/images/securitySlidegBG.svg",
    },
    {
      title: t("safety"),
      description:
        "The solutions include alarm systems, security cameras, access control and more",
      image: "/images/safetySliderBG.svg",
    },
    {
      title: t("smart_cities"),
      description:
        "We provide smart security solutions based on data analysis and artificial intelligence, suitable for cities and towns of all sizes",
      image: "/images/smartCitiesSliderBG.svg",
    },
    {
      title: t("logistics_and_industries"),
      description:
        "Ai-solutions provide our customers with strategic insights and real-time monitoring of critical logistics data",
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
