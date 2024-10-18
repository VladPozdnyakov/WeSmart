import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../../pages/HomeV2/HomeV2.module.scss";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import useDeviceDetection from "../../../hooks/useDeviceDetection";

const AboutUsSlider = () => {
  const device = useDeviceDetection()
  // Массив данных для разных блоков контента
  const contentData = [
    {
      text: (
        <>
          WORKING WITH THE WESMART TEAM LED
          <br />
          BY OR WAS A SMOOTH, ENJOYABLE, AND PRODUCTIVE
          <br />
          PROCESS. OR IS A PROFESSIONAL WITH EXTENSIVE
          <br />
          EXPERIENCE IN THE FIELD OF SECURITY, WHO HAS
          <br />
          IMPROVED THE SECURITY OF THE SETTLEMENT.
          <br />
        </>
      ),
      logoAuthor: (
        <div className={styles.logoAuthor}>
          <img src="/images/homeWrittenAboutUs1.png" alt="no-images" />
          <span>Maariv</span>
        </div>
      ),
    },
    {
      text: (
        <>
          THE NEXT GENERATION OF ANALYTICS SYSTEMS - FAR
          <br />
          FEWER FALSE ALERTS WESMART PROVIDED
          <br />
          INNOVATIVE SOLUTIONS AND RAPID DEVELOPMENTS,
          <br />
          DELIVERED OUTSTANDING PERFORMANCE IN THE FIELD
          <br />
          OF PEOPLE COUNTING IN CROWDED AREAS,
          <br />
          IDENTIFICATION AND DIAGNOSIS IN COMPLEX PROJECTS.
        </>
      ),
      logoAuthor: (
        <div className={styles.logoAuthor}>
          <img src="/images/homeWrittenAboutUs2.png" alt="no-images" />
          <span>Metzuda Magazine</span>
        </div>
      ),
    },
    {
      text: (
        <>
          WORKING WITH THE WESMART TEAM LED BY OR WAS
          <br />
          A SMOOTH, ENJOYABLE, AND PRODUCTIVE PROCESS.
          <br />
          OR IS A PROFESSIONAL WITH EXTENSIVE EXPERIENCE
          <br />
          IN THE FIELD OF SECURITY, WHO HAS IMPROVED THE
          <br />
          SECURITY OF THE SETTLEMENT. THE AVAILABILITY WAS
          <br />
          AROUND THE CLOCK, AND THEIR SYSTEM SOLVED
          <br />
          MANY PROBLEMS FOR US WITHOUT FALSE ALARMS.
        </>
      ),
      logoAuthor: (
        <div className={styles.logoAuthor}>
          <img
            src="/images/homeWrittenAboutUs3.png"
            alt="no-images"
            style={{ width: "5vw" }}
          />
          <span>TechCrunch</span>
        </div>
      ),
    },
  ];

  // Состояние для отслеживания текущего индекса
  const [currentIndex, setCurrentIndex] = useState(0);

  // Функция для переключения контента по нажатию на точки
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleRightArrowClick = () => {
    if (currentIndex < contentData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleLeftArrowClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <motion.div className={styles.writtenAboutUs} style={{ top: device==='Mobile'?"190vh":"314vh" }}>
      <div className={styles.blockName}>WRITTEN ABOUT US</div>
      <div>
        <div className={styles.blockTitle}>
          {contentData[currentIndex].text}
        </div>

        <div className={styles.blockName}>
          The availability was around the clock,
          <br />
          and their system solved many problems
          <br />
          for us without false alarms.
          {contentData[currentIndex].logoAuthor}
        </div>
      </div>{" "}
      {currentIndex < contentData.length - 1 && (
        <div className={styles.rightArrow} onClick={handleRightArrowClick}>
          <GoArrowRight style={{ color: "#363B61" }} size={35} />
        </div>
      )}
      {currentIndex > 0 && (
        <div className={styles.leftArrow}>
          <GoArrowLeft
            style={{ color: "#363B61" }}
            size={35}
            onClick={handleLeftArrowClick}
          />
        </div>
      )}
      <div className={styles.bgImage}>
        <img src="/images/aboutWrittenAboutUs.svg" alt="no-image" />
      </div>
      {/* Навигационные точки */}
      <div className={styles.dotsContainer}>
        {contentData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AboutUsSlider;
