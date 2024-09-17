import React from "react";
import { motion } from "framer-motion";
import styles from "../../../pages/Home/Home.module.scss";

const TitleSection = ({ top }) => {
  return (
    <div className={styles.titleBlock}>
      <div>
        <div className={styles.title}>
          Step into a magical world,
          <br />
          where cameras
          <br />
          see beyond the visible
        </div>
        <div className={styles.bgImage}>
          <img src="/images/back_Home.png" alt="no-image" />
        </div>
      </div>
      <div className={styles.descriptionBlock}>
        <div className={styles.subtitle}>
          WESMART IS LEADING A QUIET REVOLUTION
          <br />
          IN THE FIELD OF ARTIFICIAL INTELLIGENCE, GIVING
          <br />
          ORDINARY CAMERAS AND SENSORS ADVANCED ANALYSIS,
          <br />
          UNDERSTANDING AND INSIGHT CAPABILITIES.
        </div>
        <div className={styles.text}>
          We provide customized solutions in the fields
          <br />
          of security, safety, logistics, industry and smart
          <br />
          cities, enabling our customers to get the most
          <br />
          out of their video data.
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
