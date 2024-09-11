import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../../components/footer/Footer";
import styles from "./Product.module.scss";
import Form from "../../components/Form/Form";
import TrueFooter from "../../components/TrueFooter/TrueFooter";



const startPosition = 0;
const endPosition = 1;

const Product = () => {
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
    [startPosition,endPosition],
    ['100vh', '-271vh']
  )

  return (
    <div className={styles.bigContainer} data-scroll-container ref={scrollRef}>
      <div className={styles.stickyBlock} data-scroll-section>
        <Footer transparent={true} />
        <div className={styles.headSection}>
          <div className={styles.textTitle}>
            Safety
            <br />
            A real-time fall
            <br />
            detection kit
          </div>
          <div className={styles.textContent}>
            Discover the true power of WeSmart's video analytics
          </div>
          <div className={styles.button}>Request a demo</div>
          <img src="/images/productBG.svg" alt="no-image" />
          <div className={styles.wrapper}></div>
        </div>
        <motion.div className={styles.pageContainer} style={{top: anim}}>
        <motion.div className={styles.contentBlock}>
          <div className={styles.ourMission}>
            <div className={styles.descText} style={{ cursor: "pointer" }}>
              {" "}
              VIEW ALL OTHER PRODUCTS
            </div>
            <div>
              <div className={styles.titleText}>
                THIS SYSTEM PROVIDES ACCURATE
                <br />
                AND FAST PROTECTION, DIFFERENTIATES <br />
                BETWEEN FALLS AND NORMAL ACTIVITIES, <br />
                AND PREVENTS FALSE ALARMS AND WILL <br />
                SIGNIFICANTLY REDUCE THE RISK <br />
                OF WORKERS REAL-TIME ALERT
              </div>
              <div className={styles.textContent}>
                Discover the true power of WeSmart's video analytics
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.safety} style={{top:'62vh'}}>
          <img src="/images/productImg1.svg" alt="no-image" />
          <div>
            <div className={styles.titleText}>SAFETY AT CONSTRUCTION SITES</div>
            <div
              className={styles.textContent}
              style={{ color: "rgba(67, 74, 83, 1)" }}
            >
              The WeSmart system provides immediate <br />
              alerts for emergency incidents and safety issues <br />
              at construction sites, using simple cameras. It helps <br />
              construction companies improve worker safety <br />
              and prevent accidents. The system will alert you <br />
              in real time if a helmet is dropped, a vest is not worn,
              <br />
              and any issue that could harm the worker.
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.safety}
          style={{ backgroundColor: "rgba(255, 255, 255, 1)", top: '147vh' }}
        >
          <div style={{marginLeft: '7vw', marginRight: '10vw'}}>
            <div className={styles.titleText}>Safety in factories</div>
            <div
              className={styles.textContent}
              style={{ color: "rgba(67, 74, 83, 1)" }}
            >
              WeSmart technology detects falls <br />
              and accidents in factories in real time, <br />
              using standard security cameras. <br />
              The system distinguishes between <br />
              normal activity and dangerous events, <br />
              improves response and increases <br />
              safety in the production environment. <br />
              <br />
              The system will warn of any subject <br />
              that an employee crosses the border <br />
              and may harm himself.
            </div>
          </div>
          <img src="/images/productImg2.svg" alt="no-image" />
        </motion.div>
        <motion.div className={styles.safety} style={{top:'233vh'}}>
          <img src="/images/productImg3.svg" alt="no-image" />
          <div>
            <div className={styles.titleText}>
              Advanced fire detection
              <br />
              and prevention
            </div>
            <div
              className={styles.textContent}
              style={{ color: "rgba(67, 74, 83, 1)" }}
            >
              WeSmart offers a smart system for the <br />
              early detection of fires, which integrates with <br />
              existing cameras. The technology includes <br />
              real-time analysis, sends accurate alerts <br />
              and improves safety in a variety of facilities.
            </div>
          </div>
        </motion.div>
        <TrueFooter top={'317vh'}/>
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
