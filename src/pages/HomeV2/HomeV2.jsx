import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../../components/footer/Footer";
import styles from "./HomeV2.module.scss";
import Form from "../../components/Form/Form";
import TrueFooter from "../../components/TrueFooter/TrueFooter";

import Customers from "../../components/homePage/Customers/Customers";
import Modal from "../../components/homePage/ModalForm/ModalForm";
import Map from "../../components/Map/Map";
import AdvantagesSlider from "../../components/homePage/AdvantagesSlider/AdvantagesSlider";
import AboutUsSlider from "../../components/homePage/AboutUsSlider/AboutUsSlider";

const startPosition = 0;
const rotateStart = startPosition;
const rotateEnd = rotateStart + 0.11;
const endPosition = 1;

const HomeV2 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [color, setColor] = useState("white");
  const handleModalOpen = () => {
    console.log("Click");
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  const navigate = useNavigate();

  const handleClickAllProducts = () => {
    navigate("/products");
  };

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      inertia: 0.8,
    });
    scrollYProgress.onChange((latest) => {
      const scrollPercentage = latest * 100;
      console.log(`Page scrolled: ${scrollPercentage}%`);
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  }, [scrollYProgress]);

  const anim = useTransform(
    scrollYProgress,
    [rotateEnd + 0.02, endPosition],
    ["100vh", "-444vh"]
  );

  const rotate = useTransform(
    scrollYProgress,
    [rotateStart, rotateEnd],
    [0, 360]
  );
  const circleOpacity = useTransform(scrollYProgress, [0.09, 0.11], [1, 0]);

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["circle(0% at 62.5% 34%)", "circle(150% at 62.5% 34%)"]
  );

  return (
    <div className={styles.bigContainer} data-scroll-container ref={scrollRef}>
      <div className={styles.stickyBlock} data-scroll-section>
        <Footer transparent={false}  />
        <div className={styles.headSection} style={{ zIndex: 1 }}>
          <div className={styles.bigCircle} />
          <div className={styles.midCircle}>
            <motion.img
              style={{ rotate }}
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

          <AdvantagesSlider />
          <Map />
          <motion.div
            className={styles.safety}
            style={{ backgroundColor: "rgba(255, 255, 255, 1)", top: "222vh" }}
          >
            <Customers />
          </motion.div>
          <AboutUsSlider />

          <Form top={"408vh"} />
          <TrueFooter top={"496vh"} />
        </motion.div>
      </div>
      <Modal isVisible={isModalVisible} onClose={handleModalClose} />
    </div>
  );
};

export default HomeV2;
