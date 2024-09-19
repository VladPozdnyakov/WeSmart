import React from "react";
import styles from "./MolalForm.module.scss";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.contentContainer}>
          <div className={styles.subtitle}>Contacts us</div>
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
            <div className={styles.button} onClick={onClose}>
              <p className={styles.buttonText}>Submit</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
