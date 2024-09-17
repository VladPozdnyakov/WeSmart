import React from "react";
import { motion } from "framer-motion";
import styles from "./Customers.module.scss";

const Customers = ({ top }) => {
  return (
    <div class={styles.container}>
      <div class={styles.textContainer}>
        <div className={styles.title}>
          Customers
          <span className={styles.orange}>WESMART</span>
        </div>
        <div className={styles.subTitle}>Let's work together</div>
      </div>
      <div className={styles.logoContainerPartner}>
        <div class={styles.logo}>
          <img src="/images/logo1.png" alt="no-image" />
        </div>
        <div class={styles.logo}>
          <img src="/images/logo2.png" alt="no-image" />
        </div>
        <div class={styles.logo}>
          <img src="/images/logo3.png" alt="no-image" />
        </div>
        <div class={styles.logo}>
          <img src="/images/logo4.png" alt="no-image" />
        </div>
        <div class={styles.logo}>
          <img src="/images/logo5.png" alt="no-image" />
        </div>
      </div>
      <div className={styles.logosContainer}>
        <div class={styles.logo}>
          <img src="/images/logo6.png" alt="no-image" />
        </div>
        <div class={styles.logo}>
          <img src="/images/logo7.png" alt="no-image" />
        </div>
        <div class={styles.logo}>
          <img src="/images/logo8.png" alt="no-image" />
        </div>
        <div class={styles.logo}>
          <img src="/images/logo9.png" alt="no-image" />
        </div>
        <div class={styles.logo}>
          <img src="/images/logo10.png" alt="no-image" />
        </div>
      </div>
      <div className={styles.titlePartner}>Partners</div>
      <div className={styles.logoContainerPartner}>
        <div class={styles.logo}>
          <img src="/images/logo11.png" alt="no-image" />
        </div>
        <div class={styles.logo}>
          <img src="/images/logo12.png" alt="no-image" />
        </div>
        <div class={styles.logo}>
          <img src="/images/logo13.png" alt="no-image" />
        </div>
        <div class={styles.logo}>
          <img src="/images/logo14.png" alt="no-image" />
        </div>
        <div class={styles.logo}>
          <img src="/images/logo15.png" alt="no-image" />
        </div>
      </div>
    </div>
  );
};

export default Customers;
