// FormComponent.jsx
import React from "react";
import { motion } from "framer-motion";
import styles from "./Form.module.scss"; // Путь к вашим стилям

const Form = ({ top }) => {
  return (
    <motion.div className={styles.formContainer} style={{ top }}>
      <div className={styles.pageNum}>LET'S TALK</div>
      <div>
        <div className={styles.subtitle}>
          FILL IN THE FORM
          <span className={styles.orange}> AND WE WILL</span>
          <br /> GET BACK TO YOU
        </div>
        <form className={styles.form}>
          <div className={styles.flexRow}>
            <input
              className={styles.input}
              type="text"
              name="firstName"
              placeholder="First name"
            />
            <input
              className={styles.input}
              type="text"
              name="lastName"
              placeholder="Last name"
            />
          </div>
          <div className={styles.flexColumn}>
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
          <div className={styles.flexRow}>
            <div className={styles.button} style={{ margin: "0" }}>
              Submit
            </div>
            <div className={styles.pageNum}>
              SUBMITTED INFORMATION WILL BE USED IN ACCORDANCE
              <br /> WITH OUR PRIVACY POLICY
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;
