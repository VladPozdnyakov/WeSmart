import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../../components/footer/Footer";
import styles from "./Products.module.scss";
import Form from "../../components/Form/Form";
import TrueFooter from "../../components/TrueFooter/TrueFooter";

const startPosition = 0;
const firstSlideTopStart = startPosition;
const firstSlideTopEnd = firstSlideTopStart + 0.1;
const secondSlideTopStart = firstSlideTopEnd;
const secondSlideTopEnd = secondSlideTopStart + 0.1;
const thirdSlideTopStart = secondSlideTopEnd;
const thirdSlideTopEnd = thirdSlideTopStart + 0.1;
const fourthSlideTopStart = thirdSlideTopEnd;
const fourthSlideTopEnd = fourthSlideTopStart + 0.1;
const fifthSlideTopStart = fourthSlideTopEnd;
const fifthSlideTopEnd = fifthSlideTopStart + 0.1;
const sixSlideTopStart = fifthSlideTopEnd;
const sixSlideTopEnd = sixSlideTopStart + 0.1;
const formSlideTopStart = sixSlideTopEnd;
const formSlideTopEnd = formSlideTopStart + 0.1;
const footerSlideTopStart = formSlideTopEnd;
const footerSlideTopEnd = footerSlideTopStart + 0.1;

const Products = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      inertia: 0.8,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll();

  const transforms = {
    first: useTransform(
      scrollYProgress,
      [firstSlideTopStart, firstSlideTopEnd],
      ["100vh", "15vh"]
    ),
    second: useTransform(
      scrollYProgress,
      [secondSlideTopStart, secondSlideTopEnd],
      ["100vh", "15vh"]
    ),
    third: useTransform(
      scrollYProgress,
      [
        thirdSlideTopStart,
        thirdSlideTopEnd,
        fourthSlideTopStart,
        fourthSlideTopEnd,
      ],
      ["100vh", "15vh", "15vh", "-64vh"]
    ),
    fourth: useTransform(
      scrollYProgress,
      [fourthSlideTopStart, fourthSlideTopEnd],
      ["100vh", "12vh"]
    ),
    fifth: useTransform(
      scrollYProgress,
      [fifthSlideTopStart, fifthSlideTopEnd],
      ["100vh", "15vh"]
    ),
    sixth: useTransform(
      scrollYProgress,
      [sixSlideTopStart, sixSlideTopEnd],
      ["100vh", "15vh"]
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
    trueFooter: useTransform(
      scrollYProgress,
      [footerSlideTopStart, footerSlideTopEnd],
      ["100vh", "46vh"]
    ),
  };

  const screensData = [
    {
      id: 1,
      subtitle: "SECURITY",
      text: `We understand that in times of uncertainty,\n a sense of security is a vital necessity`,
      img: "products2.svg",
      style: transforms.first,
    },
    {
      id: 2,
      subtitle: "SAFETY",
      text: `The solutions include alarm systems, security\n cameras, access control and more`,
      img: "products3.svg",
      style: transforms.second,
    },
    {
      id: 3,
      subtitle: "SMART CITIES",
      text: `We provide smart security solutions\n based on data analysis and artificial intelligence,\n suitable for cities and towns of all sizes`,
      img: "products4.svg",
      style: transforms.third,
    },
    {
      id: 5,
      subtitle: "LOGISTICS AND INDUSTRY",
      text: `AI-solutions provide our customers with\n strategic insights and real-time monitoring\n of critical logistics data`,
      img: "products6.svg",
      style: transforms.fifth,
    },
    {
      id: 6,
      subtitle: "PUBLIC TRANSPORTATION",
      text: `The WeSmart system monitors bus and train\n traffic in real time, provides accurate predictions\n of arrival times and analyzes usage patterns`,
      img: "products7.svg",
      style: transforms.sixth,
    },
  ];

  return (
    <div className={styles.bigContainer} data-scroll-container ref={scrollRef}>
      <div className={styles.stickyBlock} data-scroll-section>
        <Footer />

        <div className={styles.productsScreenFirst}>
          <div className={styles.titleText}>
            EMPOWER YOURSELF TO FOCUS
            <br />
            ON WHAT <span className={styles.orange}>MATTERS MOST</span>
          </div>
          <div className={styles.defaultText}>
            Explore our personalized solutions designed to address <br />
            your unique needs and bring you peace of mind
          </div>
          <div className={styles.imgBackgroundFirst}></div>
        </div>

        {screensData.slice(0, 3).map((screen) => (
          <motion.div
            key={screen.id}
            className={styles.productsScreen}
            style={{ top: screen.style }}
          >
            <div className={styles.cardContent}>
              <div className={styles.pageNum}> /0{screen.id}</div>
              <div className={styles.subtitle}>{screen.subtitle}</div>
              <div className={styles.defaultText}>
                {screen.text.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
              <div className={styles.button}>Learn more</div>
            </div>
            <img
              className={styles.imgBackground}
              src={`images/${screen.img}`}
              alt="no-image"
            ></img>
          </motion.div>
        ))}

        <motion.div
          className={styles.productsScreenFirst}
          style={{ top: transforms.fourth }}
        >
          <div className={styles.cardContent}>
            <div className={styles.subtitle}>FULL CONTROL</div>
            <div className={styles.defaultText}>
              We understand that in times of uncertainty,
              <br /> a sense of security is a vital necessity
            </div>
            <div className={styles.button}>Request a demo</div>
          </div>
          <img
            className={styles.imgBackground}
            src="images/products5.svg"
            alt="no-image"
          ></img>
        </motion.div>

        {screensData.slice(3).map((screen) => (
          <motion.div
            key={screen.id}
            className={styles.productsScreen}
            style={{ top: screen.style }}
          >
            <div className={styles.cardContent}>
              <div className={styles.pageNum}> /0{screen.id}</div>
              <div className={styles.subtitle}>{screen.subtitle}</div>
              <div className={styles.defaultText}>
                {screen.text.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
              <div className={styles.button}>Learn more</div>
            </div>
            <img
              className={styles.imgBackground}
              src={`images/${screen.img}`}
              alt="no-image"
            ></img>
          </motion.div>
        ))}
        <Form top={transforms.form} />
        <TrueFooter top={transforms.trueFooter} />
      </div>
    </div>
  );
};

export default Products;
