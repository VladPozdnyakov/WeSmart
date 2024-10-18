import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../../components/footer/Footer";
import styles from "./HomeV2.module.scss";
import Form from "../../components/Form/Form";
import TrueFooter from "../../components/TrueFooter/TrueFooter";
import { GoArrowDown } from "react-icons/go";

import Customers from "../../components/homePage/Customers/Customers";
import Modal from "../../components/homePage/ModalForm/ModalForm";
import Map from "../../components/Map/Map";
import AdvantagesSlider from "../../components/homePage/AdvantagesSlider/AdvantagesSlider";
import AboutUsSlider from "../../components/homePage/AboutUsSlider/AboutUsSlider";
import useDeviceDetection from "../../hooks/useDeviceDetection";

const startPosition = 0;
const slideStart = startPosition+0.32;
const slideEnd = slideStart + 0.08;
const rotateStart = startPosition;
const rotateEnd = rotateStart + 0.11;
const endPosition = 1;

const HomeV2 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const device = useDeviceDetection();

  const handleModalOpen = () => {
    console.log("Click");
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleClickAllProducts = () => {
    navigate("/products");
  };
  const [scrollInstance, setScrollInstance] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Контроль состояния меню
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      inertia: 0.8,
    });
    setScrollInstance(scroll);
    window.scrollTo(0, 0);
    scrollYProgress.onChange((latest) => {
      const scrollPercentage = latest * 100;
      console.log(`Page scrolled: ${scrollPercentage}%`);
      
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  }, [scrollYProgress, device]);
  useEffect(() => {
    if (scrollInstance) {
      if (isMenuOpen) {
        scrollInstance.stop(); // Останавливаем скролл при открытом меню
      } else {
        scrollInstance.start(); // Включаем скролл при закрытом меню
      }
    }
  }, [isMenuOpen, scrollInstance]);

  const anim = useTransform(
    scrollYProgress,
    [rotateEnd + 0.02,slideStart, slideEnd, endPosition],
    device==='Mobile'?["100vh","0vh","0vh", "-315vh"]:["100vh","-20vh","-20vh", "-444vh"]
  );

  const rotate = useTransform(
    scrollYProgress,
    [rotateStart, rotateEnd], 
    [0, 360]
  );
  const circleOpacity = useTransform(scrollYProgress, [0, 0.11], [1, 0]);

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["circle(0% at 62.5vw 48vh)", "circle(150% at 62.5vw 48vh)"]
  );

  const slideLeft = useTransform(
    scrollYProgress,
    [0.32, 0.4],
    device === 'Mobile' ? ['0vw', "-270vw"] : ['0vw', "-80vw"]
  )

  return (
    <div className={styles.bigContainer} data-scroll-container ref={scrollRef}>
      {console.log(device)}
      <div className={styles.stickyBlock} data-scroll-section>
        <Footer transparent={false} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className={styles.headSection} style={{ zIndex: 1 }}>
          <div className={styles.bigCircle} />
          <div className={styles.midCircle}>
            <motion.img
              style={{ rotate, opacity: circleOpacity }}
              className={styles.midCircleImage}
              src="/images/loader.svg"
              alt="no-image"
            />
          </div>
          <div className={styles.smallCircle} />
          <div
            className={styles.textTitle}
            style={{ color: "rgba(54, 59, 97, 1)" }}
          >
            Step into a magical world,
            <br />
            where cameras
            <br />
            see beyond the visible
          </div>
          <div
            className={styles.textContent}
            style={{ color: "rgba(54, 59, 97, 1)" }}
          >
            Discover the true power of WeSmart's video analytics
          </div>
          <div
            className={styles.button}
            onClick={handleModalOpen}
            onClose={handleModalClose}
          >
            <span className={styles.buttonText}>Learn more</span>
          </div>
          <div className={styles.arrow}>
            <GoArrowDown style={{ color: "#363B61" }} size={20} />
          </div>
        </div>

        <motion.div
          className={styles.headSection}
          style={{ zIndex: 2, clipPath }}
        >
          <div className={styles.whiteCircle}>
            <motion.img
              style={{ rotate, opacity: circleOpacity }}
              className={styles.midCircleImage}
              src="/images/loader.svg"
              alt="no-image"
            />
          </div>
          <div className={styles.textTitle}>
            Step into a magical world,
            <br />
            where cameras
            <br />
            see beyond the visible
          </div>
          <div className={styles.textContent}>
            Discover the true power of WeSmart's video analytics
          </div>
          <div
            className={styles.button}
            onClick={handleModalOpen}
            onClose={handleModalClose}
          >
            <span className={styles.buttonText}>Learn more</span>
          </div>

          <img
            className={styles.homeBG}
            src="/images/homeBG.svg"
            alt="no-image"
          />
          <div className={styles.wrapper}></div>
        </motion.div>

        <motion.div className={styles.pageContainer} style={{ top: anim }}>
          <motion.div className={styles.contentBlock}>
            <div className={styles.ourMission}>
              <div>
                <div className={styles.titleText}>
                  WESMART IS LEADING A QUIET REVOLUTION
                  <br />
                  IN THE FIELD OF ARTIFICIAL INTELLIGENCE, GIVING
                  <br />
                  ORDINARY CAMERAS AND SENSORS ADVANCED ANALYSIS,
                  <br />
                  UNDERSTANDING AND INSIGHT CAPABILITIES.
                </div>
                <div className={styles.textContent}>
                  We provide customized solutions in the fields
                  <br />
                  of security, safety, logistics, industry and smart
                  <br />
                  cities, enabling our customers to get the most
                  <br />
                  out of their video data.
                </div>
              </div>
            </div>
          </motion.div>

          <AdvantagesSlider left={slideLeft}/>
          <Map />
          <motion.div
            className={styles.safety}
            style={{ backgroundColor: "rgba(255, 255, 255, 1)", top:device==='Mobile' ? "131vh" : "222vh"  }}
          >
            <Customers />
          </motion.div>
          <AboutUsSlider />

          <Form top={device==='Mobile'?"280vh":"400vh"} />
          <TrueFooter top={device==='Mobile'?"378vh":"490vh"} />
        </motion.div>
      </div>
      <Modal isVisible={isModalVisible} onClose={handleModalClose} />
    </div>
  );
};

export default HomeV2;
