import React from "react";
import { GoArrowRight } from "react-icons/go";

import styles from "./Advantage.module.scss";

const AdvantageBlock = ({ description, title }) => {
  return (
    <div className={styles.block}>
      <div className={styles.descriptionAdvantage}>{description}</div>
      <div className={styles.titleAdvantage}>{title}</div>
      <div className={styles.circle}>
        <GoArrowRight style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default AdvantageBlock;
