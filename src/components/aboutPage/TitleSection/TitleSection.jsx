import React from "react";
import { motion } from "framer-motion";
import styles from "../../../pages/About/About.module.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TitleSection = ({ top }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClickAllProducts = () => {
    navigate("/products");
  };
  return (
    <motion.div className={styles.titleBlock} style={{ top: top }}>
      <div className={styles.title}>
        {t("WE_BELIEVE_THAT_TECHNOLOGY")}
        <br />
        {t("IS_MEANT_TO_IMPROVE")}
        <br />
        <span className={styles.orange}>{t("THE_QUALITY_OF_LIFE")}</span>
        <br />
        {t("AND_STREAMLINE_PROCESSES")}
      </div>
      <div className={styles.descriptionBlock}>
        <div className={styles.subtitle}>{t("ABOUT_US")}</div>
        <div className={styles.text}>
          {t("Our_company")}
          <br />
          {t("field_of_analytics")}
          <br />
          {t("specializes_in_the_development")}
          <br />
          {t("and_innovative_solutions_that _combine")}
          <br />
          {t("different_visual_systems")}
          <br />
          {t("with_challenges")}
          <br />
          <br />
          {t("We_are_proud")}
          <br />
          {t("customers_in_the_economy")}
          <br />
          {t("them_with_advanced")}
          <br />
          {t("to_saving_time")}
        </div>
      </div>
      <div className={styles.videoContainer}>
        <img src="/images/aboutVideo.svg" alt="no-image" />
        <div className={styles.wrapper}></div>
        <div className={styles.videoTitle}>
          {t("MAKING_THE_WORLD_A_SAFER")}
          <br />
          {t("AND_MORE_EFFICIENT")}
          <br />
          {t("DATA-DRIVEN_VIDEO_TECHNOLOGY")}
        </div>
        <div className={styles.videoButton} onClick={handleClickAllProducts}>
          {t("Explore_our_products")}
        </div>
        <div className={styles.maskedMan}>
          <div className={styles.naz}>{t("MASKED_MAN")}</div>
        </div>
        <div className={styles.gun}>
          <div className={styles.naz}>{t("GUN")}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TitleSection;
