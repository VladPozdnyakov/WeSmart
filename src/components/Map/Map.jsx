import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Map.module.scss';

const MapPoint = ({ top, left, name, delay }) => (
  <motion.div
    className={styles.point}
    style={{ top, left }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
  >
    <span className={styles.pointLabel}>{name}</span>
  </motion.div>
);

const CountryList = ({ top, left, countries, delay }) => (
  <motion.div
    className={styles.countryList}
    style={{ top, left }}
    initial={{ opacity: 0, translateY: 20 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
  >
    {countries.map((country, index) => (
      <p key={index} className={styles.country}>{country}</p>
    ))}
  </motion.div>
);

const NewOffice = ({top, left, places, delay}) =>(
  <motion.div
  className={styles.newOffice}
  style={{ top, left }}
  initial={{ opacity: 0, translateY: 20 }}
  animate={{ opacity: 1, translateY: 0 }}
  transition={{ delay, duration: 0.5, ease: "easeOut" }}
  >
    <p className={styles.soon}>SOON</p>
      {places.map((country, index) => (
      <p key={index} className={styles.place}>{country}</p>
    ))}
  </motion.div>
)

const Map = () => {
  // Используем Intersection Observer, чтобы отслеживать видимость карты
  const { ref, inView } = useInView({
    threshold: 0.2, // Процент видимости карты в viewport
    triggerOnce: false, // Анимация сработает только один раз
  });

  return (
    <motion.div
      className={styles.mapContainer}
      ref={ref}
    >
      <img src="/images/mapHome.png" alt="Map" className={styles.mapImage} />

      {/* Точки появляются с задержкой после карты */}
      {inView && (
        <>
          <MapPoint top="35%" left="17%" name="USA" delay={0.5} />
          <MapPoint top="25%" left="55%" name="EUROPE" delay={0.7} />
          <MapPoint top="35%" left="73%" name="ASIA" delay={0.9} />
          <MapPoint top="47%" left="55%" name="ISRAEL" delay={1.1} />
          <MapPoint top="58%" left="53%" name="AFRICA" delay={1.3} />

          {/* Списки стран появляются после точек */}
          <CountryList top="10%" left="55%" countries={['Germany', 'Portugal']} delay={1.5} />
          <CountryList top="20%" left="73%" countries={['Vietnam', 'Cambodia']} delay={1.7} />
          <CountryList top="18%" left="18%" countries={['New York', 'Los Angeles', 'Florida', 'California']} delay={1.9} />
          <CountryList top="65%" left="55%" countries={['Senegal', 'Congo']} delay={2.1} />

          <NewOffice top='40%' left='50%' places={['CYPRUS', 'GREECE']} delay={2.3}/>
          <div className={styles.button}><span className={styles.buttonText}>Request a demo</span></div>
        </>
      )}
    </motion.div>
  );
};

export default Map;
