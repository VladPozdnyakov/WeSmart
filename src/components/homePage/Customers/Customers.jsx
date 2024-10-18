import React, { useState } from "react";
import styles from "./Customers.module.scss";
import useDeviceDetection from "../../../hooks/useDeviceDetection";

const customerLogos = [
  {
    id: 1,
    default: "/images/logo1.png",
    hover: "/images/clientsLogosHover/logo1.svg",
  },
  {
    id: 2,
    default: "/images/logo2.png",
    hover: "/images/clientsLogosHover/logo2.svg",
  },
  {
    id: 3,
    default: "/images/logo3.png",
    hover: "/images/clientsLogosHover/logo3.svg",
  },
  {
    id: 4,
    default: "/images/logo4.png",
    hover: "/images/clientsLogosHover/logo4.svg",
  },
  {
    id: 5,
    default: "/images/logo5.png",
    hover: "/images/clientsLogosHover/logo5.svg",
  },
  {
    id: 6,
    default: "/images/logo6.png",
    hover: "/images/clientsLogosHover/logo7.svg",
  },
  {
    id: 7,
    default: "/images/logo7.png",
    hover: "/images/clientsLogosHover/logo8.svg",
  },
  {
    id: 8,
    default: "/images/logo8.png",
    hover: "/images/clientsLogosHover/logo6.svg",
  },
  {
    id: 9,
    default: "/images/logo9.png",
    hover: "/images/clientsLogosHover/logo9.svg",
  },
  {
    id: 10,
    default: "/images/logo10.png",
    hover: "/images/clientsLogosHover/logo10.svg",
  },
];

const partnerLogos = [
  {
    id: 11,
    default: "/images/logo11.png",
    hover: "/images/clientsLogosHover/logo11.svg",
  },
  {
    id: 12,
    default: "/images/logo12.png",
    hover: "/images/clientsLogosHover/logo12.svg",
  },
  {
    id: 13,
    default: "/images/logo13.png",
    hover: "/images/clientsLogosHover/logo13.svg",
  },
  {
    id: 14,
    default: "/images/logo14.png",
    hover: "/images/clientsLogosHover/logo14.svg",
  },
  {
    id: 15,
    default: "/images/logo15.png",
    hover: "/images/clientsLogosHover/logo15.svg",
  },
];

const Customers = () => {
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const device = useDeviceDetection(); // Определяем устройство

  const handleMouseEnter = (id) => setHoveredLogo(id);
  const handleMouseLeave = () => setHoveredLogo(null);

  // Разделим логотипы на 2 части
  const firstRowLogos = customerLogos.slice(0, 5);
  const secondRowLogos = customerLogos.slice(5, 10);

  // Мобильная версия логотипов
  const mobileFirstRowLogos = firstRowLogos.slice(0, 4);
  const mobilePartnerLogos = partnerLogos.slice(0, 2);

  return (
    <div className={styles.container}>
      {/* Customers Section */}
      <div className={styles.textContainer}>
        <div className={styles.title}>
          Customers
          <span className={styles.orange}>WESMART</span>
        </div>
        <div className={styles.subTitle}>Let's work together</div>
      </div>

      {device === 'Mobile' ? (
        <>
          {/* Одна строка логотипов для мобильных устройств */}
          <div className={styles.logoRow}>
            {mobileFirstRowLogos.map((logo) => (
              <div
                key={logo.id}
                className={styles.logo}
                onMouseEnter={() => handleMouseEnter(logo.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={hoveredLogo === logo.id ? logo.hover : logo.default}
                  alt={`logo-${logo.id}`}
                />
              </div>
            ))}
          </div>

          {/* Логотипы партнеров для мобильных устройств */}
          <div className={styles.titlePartner}>Partners</div>
          <div className={styles.logoContainerPartner}>
            {mobilePartnerLogos.map((logo) => (
              <div
                key={logo.id}
                className={styles.logo}
                onMouseEnter={() => handleMouseEnter(logo.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={hoveredLogo === logo.id ? logo.hover : logo.default}
                  alt={`logo-${logo.id}`}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Полная версия для десктопа */}
          <div className={styles.logoRow}>
            {firstRowLogos.map((logo) => (
              <div
                key={logo.id}
                className={styles.logo}
                onMouseEnter={() => handleMouseEnter(logo.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={hoveredLogo === logo.id ? logo.hover : logo.default}
                  alt={`logo-${logo.id}`}
                />
              </div>
            ))}
          </div>

          <div className={styles.logoRow}>
            {secondRowLogos.map((logo) => (
              <div
                key={logo.id}
                className={styles.logo}
                onMouseEnter={() => handleMouseEnter(logo.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={hoveredLogo === logo.id ? logo.hover : logo.default}
                  alt={`logo-${logo.id}`}
                />
              </div>
            ))}
          </div>

          <div className={styles.titlePartner}>Partners</div>
          <div className={styles.logoContainerPartner}>
            {partnerLogos.map((logo) => (
              <div
                key={logo.id}
                className={styles.logo}
                onMouseEnter={() => handleMouseEnter(logo.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={hoveredLogo === logo.id ? logo.hover : logo.default}
                  alt={`logo-${logo.id}`}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};


export default Customers;
