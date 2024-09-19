// FormComponent.jsx
import React from "react";
import { motion } from "framer-motion";
import styles from "./Form.module.scss"; // Путь к вашим стилям

const Form = ({ top, isShadow = true }) => {
  return (
    <motion.div
      className={
        isShadow ? styles.formContainerWithShadow : styles.formContainer
      }
      style={{ top }}
    >
      <div className={styles.pageNum}>LET'S TALK</div>
      <div>
        <div className={styles.subtitle}>
          FILL IN THE FORM
          <span className={styles.blue}> AND WE WILL</span>
          <br />
          <span className={styles.blue}> GET BACK TO YOU</span>
        </div>
        <form className={styles.form}>
          <div className={styles.flexColumn}>
            <input
              className={styles.input}
              type="text"
              name="firstName"
              placeholder="Name"
            />
            <input
              className={styles.input}
              type="text"
              name="company"
              placeholder="Company"
            />
            <input
              className={styles.input}
              type="text"
              name="jobTitle"
              placeholder="Job title"
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className={styles.checkBoxContainer}>
            <input type="checkbox" />
            <p className={styles.checkBoxText}>
              I HAVE READ AND AGREE TO THE TERMS OF USE AND PRIVACY POLICY
            </p>
          </div>
          <div className={styles.button}>
            <p className={styles.buttonText}>Submit</p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;
