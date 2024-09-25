import React,{useRef, useState, useEffect} from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../../components/footer/Footer";
import Form from "../../components/Form/Form";
import TrueFooter from "../../components/TrueFooter/TrueFooter";
import { IoCopy } from "react-icons/io5";

import styles from "./Contacts.module.scss";

export default function Contacts() {
  const copyToClipboard = () => {
    const emailText = document.getElementById("email").textContent;
    navigator.clipboard.writeText(emailText).catch((err) => {
      console.error("Ошибка при копировании текста: ", err);
    });
  };

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      inertia: 0.6,
    });
    scrollYProgress.onChange((latest) => {
      const scrollPercentage = latest * 100;
      console.log(`Page scrolled: ${scrollPercentage}%`);
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  }, [scrollYProgress]);

  return (
    <div className={styles.bigContainer} data-scroll-container ref={scrollRef}>
      <div className={styles.stickyBlock} data-scroll-section>
        <div className={styles.mainContainer}>
          <Footer />
          <div className={styles.contactContainer}>
            <div className={styles.title}>
              Contacts us
              <p className={styles.subtitle}>
                We are looking forward to hearing from you.
                <br />
                Please select how we can help you below.
              </p>
            </div>
            <div className={styles.baseContainer}>
              <div className={styles.topicTitle}>EMAIL</div>
              <div className={styles.buttonContainer}>
                <span className={styles.emailText} id="email">
                  Info@wesmart.co.il
                </span>
                <button className={styles.copyButton} onClick={copyToClipboard}>
                  <IoCopy />
                </button>
              </div>
            </div>
            <div className={styles.baseContainer}>
              <div className={styles.topicTitle}>PHONE</div>
              <div className={styles.phoneText}>+972 50 502 5094</div>
            </div>
            <div className={styles.baseContainer}>
              <div className={styles.topicTitle}>FOLLOW US</div>
              <div className={styles.networkContainer}>
                <img src="/images/facebook.png" alt="no-image" />
                <img src="/images/instagram.png" alt="no-image" />
                <img src="/images/twitter.png" alt="no-image" />
                <img src="/images/linkedin.png" alt="no-image" />
              </div>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.addressContainer}>
            <div className={styles.streetContainer}>
              <div className={styles.topicTitle}>ADDRESS</div>
              <div className={styles.addressText}>
                Gazit 10 St, Karmiel. 2165379
              </div>
            </div>
            <div className={styles.mapImage}>
              <img src="/images/map.png" alt="no-image" />
            </div>
          </div>
          <Form isShadow={false} />
          <TrueFooter />
        </div>
      </div>
    </div>
  );
}
