import React from "react";
import Footer from "../../components/footer/Footer";
import Form from "../../components/Form/Form";
import TrueFooter from "../../components/TrueFooter/TrueFooter";
import styles from "./Home.module.scss";
import { useRef, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import AdvantageBlock from "../../components/Advantages/Advantage";

export default function Home() {
  const startPosition = 0;
  const firstSlideTopStart = startPosition;
  const firstSlideTopEnd = firstSlideTopStart + 0.2;

  const secondSlideTopStart = firstSlideTopStart + 0.1;
  const secondSlideTopEnd = secondSlideTopStart + 0.2;
  const thirdSlideTopStart = secondSlideTopEnd;
  const thirdSlideTopEnd = thirdSlideTopStart + 0.1;
  const fourthSlideTopStart = thirdSlideTopEnd;
  const fourthSlideTopEnd = fourthSlideTopStart + 0.1;

  const formSlideTopStart = thirdSlideTopEnd;
  const formSlideTopEnd = formSlideTopStart + 0.1;
  const footerSlideTopStart = formSlideTopEnd;
  const footerSlideTopEnd = footerSlideTopStart + 0.1;

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

  const transforms = {
    first: useTransform(
      scrollYProgress,
      [firstSlideTopStart, firstSlideTopEnd],
      ["0vh", "-250vh"]
    ),
    second: useTransform(
      scrollYProgress,
      [secondSlideTopStart, secondSlideTopEnd],
      ["0vh", "-250vh"]
    ),
    third: useTransform(
      scrollYProgress,
      [thirdSlideTopStart, thirdSlideTopEnd],
      ["0vh", "-250vh"]
    ),

    trueFooter: useTransform(
      scrollYProgress,
      [footerSlideTopStart, footerSlideTopEnd],
      ["100vh", "46vh"]
    ),
    form: useTransform(
      scrollYProgress,
      [
        formSlideTopStart,
        formSlideTopEnd,
        footerSlideTopStart,
        footerSlideTopEnd,
      ],
      ["100vh", "13vh", "13vh", "-44vh"]
    ),
  };

  return (
    <div className={styles.bigContainer} data-scroll-container ref={scrollRef}>
      <div className={styles.stickyBlock} data-scroll-container>
        <Footer />
        <motion.div className={styles.mainHome}>
          <motion.div
            className={styles.titleBlock}
            style={{ top: transforms.first }}
          >
            <div className={styles.title}>
              Step into a magical world,
              <br />
              where cameras
              <br />
              see beyond the visible
            </div>
            <div className={styles.descriptionBlock}>
              <div className={styles.subtitle}>
                WESMART IS LEADING A QUIET REVOLUTION
                <br />
                IN THE FIELD OF ARTIFICIAL INTELLIGENCE, GIVING
                <br />
                ORDINARY CAMERAS AND SENSORS ADVANCED ANALYSIS,
                <br />
                UNDERSTANDING AND INSIGHT CAPABILITIES.
              </div>
              <div className={styles.text}>
                We provide customized solutions in the fields
                <br />
                of security, safety, logistics, industry and smart
                <br />
                cities, enabling our customers to get the most
                <br />
                out of their video data.
              </div>
            </div>
          </motion.div>
          <motion.div
            className={styles.advantages}
            style={{ top: transforms.second }}
          >
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
          </motion.div>
          <motion.div
            className={styles.writtenAboutUs}
            style={{ top: transforms.third }}
          >
            <div className={styles.blockName}>WRITTEN ABOUT US</div>
            <div>
              <div className={styles.blockTitle}>
                WE BELIEVE THAT EVERY ORGANIZATION
                <br />
                HAS UNIQUE TECHNOLOGICAL NEEDS
                <br />
                AND CHALLENGES. THEREFORE,
                <br />
                OUR APPROACH IS FLEXIBLE AND ADAPTED <br />
                TO EACH CLIENT PERSONALLY
                <br />
              </div>
              <div className={styles.blockName}>
                We build the solutions taking into account <br />
                the existing infrastructures and systems.
                <br />
                <br />
                Our team of experts studies and deeply <br />
                understands the specific challenges, and then <br />
                adapts dedicated solutions to the client. <br />
                The result is an innovative and advanced <br />
                technology that provides an accurate answer <br />
                to the customer's needs.
              </div>
            </div>
          </motion.div>
        </motion.div>
        <Form top={transforms.form} />
        <TrueFooter top={transforms.trueFooter} />
      </div>
    </div>
  );
}
