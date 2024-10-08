import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from '../../../pages/About/About.module.scss'
import useDeviceDetection from "../../../hooks/useDeviceDetection";

const ValueSection = ({ top, opacity1, opacity2, opacity3, opacity4, opacity5 }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Хранит индекс карточки, на которую наведена мышь
  const device = useDeviceDetection()
  const worths = [
    {
      title: "INNOVATION",
      text: "The company aims to be a leader in the field of technology, and to offer innovative solutions to its customers",
      opacity: opacity1,
      triangle: '/images/triangles/triangle1.svg',
      id: 0,
    },
    {
      title: "QUALITY",
      text: "THE COMPANY UNDERTAKES TO OFFER HIGH QUALITY PRODUCTS AND SERVICES THAT WILL MEET CUSTOMER EXPECTATIONS AND TO CUSTOMIZE THE PRODUCT",
      opacity: opacity2,
      triangle: '/images/triangles/triangle2.svg',
      id: 1,
    },
    {
      title: "RELIABILITY",
      text: "THE COMPANY MUST BE A RELIABLE COMPANY THAT CAN BE TRUSTED",
      opacity: opacity3,
      triangle: '/images/triangles/triangle3.svg',
      id: 2,
    },
    {
      title: "SERVICE",
      text: "THE COMPANY AIMS TO PROVIDE EXCELLENT CUSTOMER SERVICE, WHICH WILL BE AVAILABLE AND HELPFUL",
      opacity: opacity4,
      triangle: '/images/triangles/triangle4.svg',
      id: 3,
    },
    {
      title: "SOCIAL RESPONSIBILITY",
      text: "The company aims to give back to the community, and contribute to a better society by strengthening security",
      opacity: opacity5,
      triangle: '/images/triangles/triangle5.svg',
      id: 4,
    },
  ];

  return (
    <motion.div className={styles.theValues} style={{ top }}>
      <div className={styles.title}>
        <span className={styles.orange}>THE VALUES</span> THAT LEAD US
      </div>

      <div className={styles.worthesContainer}>
        {worths.map((worth, index) => (
          <motion.div
            key={index}
            className={styles.worth}
            style={{ opacity: worth.opacity }}
          >
            <div
              className={styles.imageWrapper}
              onMouseEnter={() => setHoveredIndex(index)} // Устанавливаем индекс при наведении
              onMouseLeave={() => setHoveredIndex(null)} // Сбрасываем индекс при убирании курсора
            >
              <motion.img
                className={styles.load}
                src="/images/aboutWorthes0.svg"
                alt="no-image"
                initial={{ opacity: 1 }}
                animate={{
                  rotate: hoveredIndex === index ? 360 : 0, // Вращение при наведении
                  opacity: hoveredIndex === index ? 0 : 1, // Скрытие при наведении
                  transition: {
                    duration: hoveredIndex === index ? 1 : 0.5,
                    ease: "easeInOut",
                    delay: hoveredIndex === index ? 0 : 0.5,
                  },
                }}
              />
              <motion.img
                className={styles.triangle}
                src={worth.triangle}
                alt="no-image"
                initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }} // Изначально скрыта
                animate={{
                  clipPath: hoveredIndex === index ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)", // Анимация clip-path
                  opacity: hoveredIndex === index ? 1 : 0, // Появление и исчезновение
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: hoveredIndex === index ? 0 : 0,
                  },
                }}
              />
            </div>
            <div>
              {device ==='Mobile' ? (
                <div className={styles.worthTitleMobile}>
                  <span className={styles.worthTitle}>{worth.title}</span>
                  <span className={styles.worthTitle}>/{worth.id + 1}</span>
                </div>
              ):(
                <span className={styles.worthTitle}>{worth.title}</span>
              )}
              
              <div className={styles.worthText}>
                {worth.text.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className={styles.worthTitle} style={device==='Mobile' ? {display: 'none'}:{}}>/{worth.id + 1}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ValueSection;
