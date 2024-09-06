import React from "react";
import { motion } from "framer-motion";
import styles from '../../../pages/About/About.module.scss'

const ValueSection = ({top, opacity1, opacity2,opacity3,opacity4,opacity5}) =>{

    return (
        <motion.div className={styles.theValues} style={{top}}>
              <div className={styles.title}>
                <span className={styles.orange}>THE VALUES</span> THAT LEAD US
              </div>

              <div className={styles.worthesContainer}>
                <motion.div
                  className={styles.worth}
                  style={{ opacity:opacity1 }}
                >
                  <div className={styles.imageWrapper}>
                    <img src="/images/aboutWorthes0.svg" alt="no-image" />
                  </div>
                  <div>
                    <span className={styles.worthTitle}>INNOVATION</span>
                    <div className={styles.worthText}>
                      The company aims to be a leader
                      <br />
                      in the field of technology, and to offer
                      <br />
                      innovative solutions to its customers
                    </div>
                  </div>
                  <div className={styles.worthTitle}>/01</div>
                </motion.div>

                <motion.div
                  className={styles.worth}
                  style={{ opacity: opacity2 }}
                >
                  <div className={styles.imageWrapper}>
                    <img src="/images/aboutWorthes0.svg" alt="no-image" />
                  </div>
                  <div>
                    <span className={styles.worthTitle}>QUALITY</span>
                    <div className={styles.worthText}>
                      THE COMPANY UNDERTAKES TO OFFER
                      <br />
                      HIGH QUALITY PRODUCTS AND SERVICES <br />
                      THAT WILL MEET CUSTOMER EXPECTATIONS <br />
                      AND TO CUSTOMIZE THE PRODUCT
                    </div>
                  </div>
                  <div className={styles.worthTitle}>/02</div>
                </motion.div>

                <motion.div
                  className={styles.worth}
                  style={{ opacity: opacity3 }}
                >
                  <div className={styles.imageWrapper}>
                    <img src="/images/aboutWorthes0.svg" alt="no-image" />
                  </div>
                  <div>
                    <span className={styles.worthTitle}>RELIABILITY</span>
                    <div className={styles.worthText}>
                      THE COMPANY MUST BE A RELIABLE COMPANY <br />
                      THAT CAN BE TRUSTED
                    </div>
                  </div>
                  <div className={styles.worthTitle}>/03</div>
                </motion.div>

                <motion.div
                  className={styles.worth}
                  style={{ opacity:opacity4 }}
                >
                  <div className={styles.imageWrapper}>
                    <img src="/images/aboutWorthes0.svg" alt="no-image" />
                  </div>
                  <div>
                    <span className={styles.worthTitle}>SERVICE</span>
                    <div className={styles.worthText}>
                      THE COMPANY AIMS TO PROVIDE EXCELLENT <br />
                      CUSTOMER SERVICE, WHICH WILL BE AVAILABLE <br />
                      AND HELPFUL
                    </div>
                  </div>
                  <div className={styles.worthTitle}>/04</div>
                </motion.div>

                <motion.div
                  className={styles.worth}
                  style={{ opacity:opacity5 }}
                >
                  <div className={styles.imageWrapper}>
                    <img src="/images/aboutWorthes0.svg" alt="no-image" />
                  </div>
                  <div>
                    <span className={styles.worthTitle}>
                      Social responsibility
                    </span>
                    <div className={styles.worthText}>
                      The company aims to give back <br />
                      to the community, and contribute to a better <br />
                      society by strengthening security
                    </div>
                  </div>
                  <div className={styles.worthTitle}>/05</div>
                </motion.div>
              </div>

            </motion.div>
    )
}

export default ValueSection