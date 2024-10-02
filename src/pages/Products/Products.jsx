import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

import styles from "./Products.module.scss";
import Form from "../../components/Form/Form";
import TrueFooter from "../../components/TrueFooter/TrueFooter";
import { useMotionValueEvent } from "framer-motion";

const startPosition = 0;
const firstSlideTopStart = startPosition + 0.1;
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
  const navigate = useNavigate();

  const handleClickAllProducts = () => {
    navigate("/product");
  };

  const scrollRef = useRef(null);
  const [visibleScreens, setVisibleScreens] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
  });
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
    zero: useTransform(
      scrollYProgress,
      [firstSlideTopStart, firstSlideTopEnd],
      [1, 0]
    ),
    zeroDisplay: useTransform(
      scrollYProgress,
      [firstSlideTopStart, firstSlideTopEnd - 0.05],
      ["block", "none"]
    ),
    first: useTransform(
      scrollYProgress,
      [firstSlideTopStart, firstSlideTopEnd],
      ["30vh", "15vh"]
    ),
    firstOpacity: useTransform(
      scrollYProgress,
      [
        firstSlideTopStart,
        firstSlideTopEnd,
        secondSlideTopStart,
        secondSlideTopEnd,
      ],
      [0, 1, 1, 0]
    ),
    secondOpacity: useTransform(
      scrollYProgress,
      [
        secondSlideTopStart,
        secondSlideTopEnd,
        thirdSlideTopStart,
        thirdSlideTopEnd,
      ],
      [0, 1, 1, 0]
    ),
    second: useTransform(
      scrollYProgress,
      [secondSlideTopStart, secondSlideTopEnd],
      ["30vh", "15vh"]
    ),
    thirdOpacity: useTransform(
      scrollYProgress,
      [
        thirdSlideTopStart,
        thirdSlideTopEnd,
        fourthSlideTopStart,
        fourthSlideTopEnd,
      ],
      [0, 1, 1, 0]
    ),
    third: useTransform(
      scrollYProgress,
      [thirdSlideTopStart, thirdSlideTopEnd],
      ["30vh", "15vh"]
    ),
    fourthOpacity: useTransform(
      scrollYProgress,
      [
        fourthSlideTopStart,
        fourthSlideTopEnd,
        fifthSlideTopStart,
        fifthSlideTopEnd,
      ],
      [0, 1, 1, 0]
    ),
    fourth: useTransform(
      scrollYProgress,
      [fourthSlideTopStart, fourthSlideTopEnd],
      ["30vh", "13vh"]
    ),
    fifthOpacity: useTransform(
      scrollYProgress,
      [fifthSlideTopStart, fifthSlideTopEnd, sixSlideTopStart, sixSlideTopEnd],
      [0, 1, 1, 0]
    ),
    fifth: useTransform(
      scrollYProgress,
      [fifthSlideTopStart, fifthSlideTopEnd],
      ["30vh", "15vh"]
    ),
    sixthOpacity: useTransform(
      scrollYProgress,
      [sixSlideTopStart, sixSlideTopEnd],
      [0, 1]
    ),
    sixth: useTransform(
      scrollYProgress,
      [sixSlideTopStart, sixSlideTopEnd],
      ["30vh", "15vh"]
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

  // Hook to handle visibility of each screen based on opacity value
  useMotionValueEvent(transforms.firstOpacity, "change", (value) => {
    setVisibleScreens((prev) => ({ ...prev, first: value > 0 }));
  });

  useMotionValueEvent(transforms.secondOpacity, "change", (value) => {
    setVisibleScreens((prev) => ({ ...prev, second: value > 0 }));
  });

  useMotionValueEvent(transforms.thirdOpacity, "change", (value) => {
    setVisibleScreens((prev) => ({ ...prev, third: value > 0 }));
  });

  useMotionValueEvent(transforms.fourthOpacity, "change", (value) => {
    setVisibleScreens((prev) => ({ ...prev, fourth: value > 0 }));
  });

  useMotionValueEvent(transforms.fifthOpacity, "change", (value) => {
    setVisibleScreens((prev) => ({ ...prev, fifth: value > 0 }));
  });

  useMotionValueEvent(transforms.sixthOpacity, "change", (value) => {
    setVisibleScreens((prev) => ({ ...prev, sixth: value > 0 }));
  });

  const screensData = [
    {
      id: 1,
      subtitle: "SECURITY",
      text: `We understand that in times of uncertainty,\n a sense of security is a vital necessity`,
      img: "products2.svg",
      styleTop: transforms.first,
      styleOpacity: transforms.firstOpacity,
      appear: visibleScreens.first,
    },
    {
      id: 2,
      subtitle: "SAFETY",
      text: `The solutions include alarm systems, security\n cameras, access control and more`,
      img: "products3.svg",
      styleTop: transforms.second,
      styleOpacity: transforms.secondOpacity,
      appear: visibleScreens.second,
    },
    {
      id: 3,
      subtitle: "SMART CITIES",
      text: `We provide smart security solutions\n based on data analysis and artificial intelligence,\n suitable for cities and towns of all sizes`,
      img: "products4.svg",
      styleTop: transforms.third,
      styleOpacity: transforms.thirdOpacity,
      appear: visibleScreens.third,
    },
    {
      id: 4,
      subtitle: "LOGISTICS AND INDUSTRY",
      text: `AI-solutions provide our customers with\n strategic insights and real-time monitoring\n of critical logistics data`,
      img: "products6.svg",
      styleTop: transforms.fourth,
      styleOpacity: transforms.fourthOpacity,
      appear: visibleScreens.fourth,
    },
    {
      id: 5,
      subtitle: "PUBLIC TRANSPORTATION",
      text: `The WeSmart system monitors bus and train\n traffic in real time, provides accurate predictions\n of arrival times and analyzes usage patterns`,
      img: "products7.svg",
      styleTop: transforms.fifth,
      styleOpacity: transforms.fifthOpacity,
      appear: visibleScreens.fifth,
    },

    {
      id: 6,
      subtitle: "FULL CONTROL",
      text: ` We understand that in times of uncertainty, \n a sense of security is a vital necessity`,
      img: "products5.svg",
      styleTop: transforms.sixth,
      styleOpacity: transforms.sixthOpacity,
      appear: visibleScreens.sixth,
    },
  ];

  return (
    <div className={styles.bigContainer} data-scroll-container ref={scrollRef}>
      <div className={styles.stickyBlock} data-scroll-section>
        <Footer />

        <motion.div
          className={styles.productsScreenFirst}
          style={{ opacity: transforms.zero }}
        >
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
        </motion.div>
        {visibleScreens.first && (
          <motion.div
            className={styles.productsScreen}
            style={{ top: "15vh", opacity: transforms.firstOpacity }}
          >
            <motion.div
              className={styles.wrapper}
              style={{ top: transforms.first }}
            >
              <div className={styles.cardContent}>
                <div className={styles.pageNum}> /01</div>
                <div className={styles.subtitle}>SECURITY</div>
                <div className={styles.defaultText}>
                  We understand that in times of uncertainty,
                  <br /> a sense of security is a vital necessity
                </div>
                <div className={styles.button} onClick={handleClickAllProducts}>
                  Learn more
                </div>
              </div>
              <img
                className={styles.imgBackground}
                src={`images/products2.svg`}
                alt="no-image"
              ></img>
            </motion.div>
          </motion.div>
        )}
        {screensData.slice(1, 3).map(
          (screen) =>
            screen.appear && (
              <motion.div
                key={screen.id}
                className={styles.productsScreen}
                style={{ top: "15vh", opacity: screen.styleOpacity }}
              >
                <motion.div
                  className={styles.wrapper}
                  style={{ top: screen.styleTop }}
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
                    <div
                      className={styles.button}
                      onClick={handleClickAllProducts}
                    >
                      Learn more
                    </div>
                  </div>
                  <img
                    className={styles.imgBackground}
                    src={`images/${screen.img}`}
                    alt="no-image"
                  ></img>
                </motion.div>
              </motion.div>
            )
        )}

        {screensData.slice(3).map(
          (screen) =>
            screen.appear && (
              <motion.div
                key={screen.id}
                className={styles.productsScreen}
                style={{ top: "15vh", opacity: screen.styleOpacity }}
              >
                <motion.div
                  className={styles.wrapper}
                  style={{ top: screen.styleTop }}
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
                    <div
                      className={styles.button}
                      onClick={handleClickAllProducts}
                    >
                      Learn more
                    </div>
                  </div>
                  <img
                    className={styles.imgBackground}
                    src={`images/${screen.img}`}
                    alt="no-image"
                  ></img>
                </motion.div>
              </motion.div>
            )
        )}
        <Form top={transforms.form} />
        <TrueFooter top={transforms.trueFooter} />
      </div>
    </div>
  );
};

export default Products;
