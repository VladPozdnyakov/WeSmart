// FormComponent.jsx
import React from "react";
import { motion } from "framer-motion";
import styles from "./Form.module.scss"; // Путь к вашим стилям
import { useTranslation } from "react-i18next";

const Form = ({ top, isShadow = true }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className={
        isShadow ? styles.formContainerWithShadow : styles.formContainer
      }
      style={{ top }}
    >
      <div className={styles.pageNum}>{t("LET'S_ALK")}</div>
      <div>
        <div className={styles.subtitle}>
          {t("FILL_IN_THE_FORM")}
          <span className={styles.blue}> {t("AND_WE_WILL")}</span>
          <br />
          <span className={styles.blue}> {t("GET_BACK_TO_YOU")}</span>
        </div>
        <form className={styles.form}>
          <div className={styles.flexColumn}>
            <input
              className={styles.input}
              type="text"
              name="firstName"
              placeholder={t("Name")}
            />
            <input
              className={styles.input}
              type="text"
              name="company"
              placeholder={t("Company")}
            />
            <input
              className={styles.input}
              type="text"
              name="jobTitle"
              placeholder={t("Job_title")}
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder={t("Email")}
            />
          </div>
          <div className={styles.checkBoxContainer}>
            <input type="checkbox" />
            <p className={styles.checkBoxText}>{t("I_HAVE_READ_AND_AGREE")}</p>
          </div>
          <div className={styles.button}>
            <p className={styles.buttonText}>{t("submit")}</p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;
