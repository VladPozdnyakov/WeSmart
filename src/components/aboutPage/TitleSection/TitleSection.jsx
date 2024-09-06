import React from "react";
import { motion } from "framer-motion";
import styles from '../../../pages/About/About.module.scss'

const TitleSection = ({top}) =>{

    return (
        <motion.div
            className={styles.titleBlock}
            style={{ top: top }}
          >
            <div className={styles.title}>
              WE BELIEVE THAT TECHNOLOGY
              <br />
              IS MEANT TO IMPROVE
              <br />
              <span className={styles.orange}>THE QUALITY OF LIFE</span>
              <br />
              AND STREAMLINE PROCESSES
            </div>
            <div className={styles.descriptionBlock}>
              <div className={styles.subtitle}>ABOUT US</div>
              <div className={styles.text}>
                Our company, founded by experts in the
                <br />
                field of analytics and artificial intelligence,
                <br />
                specializes in the development of smart
                <br />
                and innovative solutions that combine
                <br />
                different visual systems to deal
                <br />
                with challenges in a variety of fields.
                <br />
                <br />
                We are proud to cooperate with leading
                <br />
                customers in the economy and provide
                <br />
                them with advanced tools that lead
                <br />
                to saving time and precious resources.
              </div>
            </div>
            <div className={styles.videoContainer}>
              <img src="/images/aboutVideo.svg" alt="no-image" />
              <div className={styles.wrapper}></div>
              <div className={styles.videoTitle}>
                MAKING THE WORLD A SAFER, MORE RELIABLE
                <br />
                AND MORE EFFICIENT PLACE THROUGH INNOVATIVE
                <br />
                DATA-DRIVEN VIDEO TECHNOLOGY
              </div>
              <div className={styles.videoButton}>Explore our products</div>
              <div className={styles.maskedMan}>
                <div className={styles.naz}>MASKED MAN</div>
              </div>
              <div className={styles.gun}>
                <div className={styles.naz}>GUN</div>
              </div>
            </div>
            
          </motion.div>
    )
}

export default TitleSection