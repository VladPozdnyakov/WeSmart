import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../../components/footer/Footer";
import styles from "./HomeV2.module.scss";
import Form from "../../components/Form/Form";
import TrueFooter from "../../components/TrueFooter/TrueFooter";
import { GoArrowLeft } from "react-icons/go";
import AdvantageBlock from "../../components/homePage/Advantages/Advantage";
import Customers from "../../components/homePage/Customers/Customers";
import Modal from "../../components/homePage/ModalForm/ModalForm";

const startPosition = 0;
const endPosition = 1;

const HomeV2 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    [startPosition, endPosition],
    ["100vh", "-444vh"]
  );

  return (
    <div className={styles.bigContainer} data-scroll-container ref={scrollRef}>
      <div className={styles.stickyBlock} data-scroll-section>
        <Footer transparent={true} />
        <div className={styles.headSection}>
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
            Learn more
          </div>

          <img src="/images/homeBG.svg" alt="no-image" />
          <div className={styles.wrapper}></div>
        </div>
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
          <motion.div
            className={styles.advantagesBlock}
            style={{ top: "66vh" }}
          >
            <div className={styles.advantages}>
              <AdvantageBlock
                description="We understand that in times of uncertainty, a sense of security is a vital necessity"
                title="SECURITY"
              />
              <AdvantageBlock
                description="The solutions include alarm systems, security cameras, access control and more"
                title="SAFETY"
              />
              <AdvantageBlock
                description="We provide smart security solutions based on data analysis and artificial intelligence, suitable for cities and towns of all sizes"
                title="SMART CITIES"
              />
              <AdvantageBlock
                description="Ai-solutions provide our customers  with strategic insights and real-time monitoring of critical logistics data"
                title="LOGISTICS AND INDUSTRIES"
              />
            </div>
          </motion.div>
          <motion.div className={styles.mapContainer} style={{ top: "129vh" }}>
            <img src="/images/mapHome.png" alt="no-image" width="auto" />
            {/* ОФК это все должно отрефакториться в отденые компоненты без дублирвония */}
            {/* Точка для Америки */}
            <div
              style={{
                position: "absolute",
                top: "35%",
                left: "17%",
                width: "10px",
                height: "10px",
                backgroundColor: "#F77F1E",
                borderRadius: "50%",
              }}
            >
              <span
                style={{
                  color: "#F77F1E",
                  fontSize: "1.5vw",
                  fontFamily: "Bebas Neue Cyrillic",
                  fontWeight: "400",
                  marginLeft: "15px",
                }}
              >
                USA
              </span>
            </div>

            {/* Точка для Европы */}
            <div
              style={{
                position: "absolute",
                top: "25%",
                left: "55%",
                width: "10px",
                height: "10px",
                backgroundColor: "#F77F1E",
                borderRadius: "50%",
              }}
            >
              <span
                style={{
                  color: "#F77F1E",
                  fontSize: "1.5vw",
                  fontFamily: "Bebas Neue Cyrillic",
                  fontWeight: "400",
                  marginLeft: "15px",
                }}
              >
                EUROPE
              </span>
            </div>

            {/* Точка для Азии */}
            <div
              style={{
                position: "absolute",
                top: "35%",
                left: "73%",
                width: "10px",
                height: "10px",
                backgroundColor: "#F77F1E",
                borderRadius: "50%",
              }}
            >
              <span
                style={{
                  color: "#F77F1E",
                  fontSize: "1.5vw",
                  fontFamily: "Bebas Neue Cyrillic",
                  fontWeight: "400",
                  marginLeft: "15px",
                }}
              >
                ASIA
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                top: "47%",
                left: "55%",
                width: "10px",
                height: "10px",
                backgroundColor: "#F77F1E",
                borderRadius: "50%",
              }}
            >
              <span
                style={{
                  color: "#F77F1E",
                  fontSize: "1.5vw",
                  fontFamily: "Bebas Neue Cyrillic",
                  fontWeight: "400",
                  marginLeft: "15px",
                }}
              >
                ISRAEL
              </span>
            </div>

            {/* Точка для Африки */}
            <div
              style={{
                position: "absolute",
                top: "58%",
                left: "53%",
                width: "10px",
                height: "10px",
                backgroundColor: "#F77F1E",
                borderRadius: "50%",
              }}
            >
              <span
                style={{
                  color: "#F77F1E",
                  fontSize: "1.5vw",
                  fontFamily: "Bebas Neue Cyrillic",
                  fontWeight: "400",
                  marginLeft: "15px",
                }}
              >
                AFRICA
              </span>
            </div>

            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "55%",
                transform: "translateX(-50%)",
                padding: "10px",
                backgroundColor: "white",
                border: "1px solid #2222221F",
                borderRadius: "16px 0px 16px 0px",
              }}
            >
              <p style={{ margin: 0, fontSize: "1.2vw", color: "#363B61" }}>
                Germany
              </p>
              <p style={{ margin: 0, fontSize: "1.2vw", color: "#363B61" }}>
                Portugal
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "73%",
                transform: "translateX(-50%)",
                padding: "10px",
                backgroundColor: "white",
                border: "1px solid #2222221F",
                borderRadius: "16px 0px 16px 0px",
              }}
            >
              <p style={{ margin: 0, fontSize: "1.2vw", color: "#363B61" }}>
                Vietnam
              </p>
              <p style={{ margin: 0, fontSize: "1.2vw", color: "#363B61" }}>
                Cambodia
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "18%",
                left: "18%",
                transform: "translateX(-50%)",
                padding: "10px",
                backgroundColor: "white",
                border: "1px solid #2222221F",
                borderRadius: "16px 0px 16px 0px",
              }}
            >
              <p style={{ margin: 0, fontSize: "1.2vw", color: "#363B61" }}>
                New york
              </p>
              <p style={{ margin: 0, fontSize: "1.2vw", color: "#363B61" }}>
                Los angeles
              </p>
              <p style={{ margin: 0, fontSize: "1.2vw", color: "#363B61" }}>
                Florida
              </p>
              <p style={{ margin: 0, fontSize: "1.2vw", color: "#363B61" }}>
                California
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "65%",
                left: "55%",
                transform: "translateX(-50%)",
                padding: "10px",
                backgroundColor: "white",
                border: "1px solid #2222221F",
                borderRadius: "16px 0px 16px 0px",
              }}
            >
              <p style={{ margin: 0, fontSize: "1.2vw", color: "#363B61" }}>
                Senegal
              </p>
              <p style={{ margin: 0, fontSize: "1.2vw", color: "#363B61" }}>
                Congo
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "18%",
                left: "55.3%",
                width: "1px",
                height: "3.5vw",
                backgroundColor: "#F77F1E",
              }}
            ></div>
          </motion.div>
          <motion.div
            className={styles.safety}
            style={{ backgroundColor: "rgba(255, 255, 255, 1)", top: "222vh" }}
          >
            <Customers />
          </motion.div>
          <motion.div
            className={styles.aboutUsContainer}
            style={{ top: "314vh" }}
          >
            <div className={styles.contentContainer}>
              <div className={styles.blockName}>Written About Us</div>
              <div>
                <div className={styles.blockTitle}>
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
                </div>
                <div className={styles.blockName}>
                  The availability was around the clock,
                  <br />
                  and their system solved many problems
                  <br />
                  for us without false alarms.
                </div>
              </div>
            </div>
          </motion.div>
          <Form top={"402vh"} />
          <TrueFooter top={"490vh"} />
        </motion.div>
      </div>
      <Modal isVisible={isModalVisible} onClose={handleModalClose} />
    </div>
  );
};

export default HomeV2;
