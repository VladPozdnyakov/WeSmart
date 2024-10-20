import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Products.module.scss";
import Form from "../../components/Form/Form";
import TrueFooter from "../../components/TrueFooter/TrueFooter";
import { useMotionValueEvent } from "framer-motion";

const startPosition = 0;
const firstSlideTopStart = startPosition + 0.02;
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
  const { t } = useTranslation();
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
    window.scrollTo(0, 0);
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
      subtitle: t("SECURITY"),
      text: `${t("We_understand")}\n${t("sense_of_security")}`,
      img: "products2.svg",
      styleTop: transforms.first,
      styleOpacity: transforms.firstOpacity,
      appear: visibleScreens.first,
    },
    {
      id: 2,
      subtitle: t("SAFETY"),
      text: `${t("The_solutions")}\n${t("cameras_access_control")}`,
      img: "products3.svg",
      styleTop: transforms.second,
      styleOpacity: transforms.secondOpacity,
      appear: visibleScreens.second,
    },
    {
      id: 3,
      subtitle: t("SMART_CITIES"),
      text: `${t("We_provide")}\n${t("based_on_data")}\n${t(
        "suitable_for_cities"
      )}`,
      img: "products4.svg",
      styleTop: transforms.third,
      styleOpacity: transforms.thirdOpacity,
      appear: visibleScreens.third,
    },
    {
      id: 4,
      subtitle: t("LOGISTICS_AND_INDUSTRY"),
      text: `${t("AI_solutions_provide")}\n${t("strategic_insights")}\n${t(
        "critical_logistics"
      )}`,
      img: "products6.svg",
      styleTop: transforms.fourth,
      styleOpacity: transforms.fourthOpacity,
      appear: visibleScreens.fourth,
    },
    {
      id: 5,
      subtitle: t("PUBLIC_TRANSPORTATION"),
      text: `${t("The_WeSmart_system")}\n${t("traffic_in_real_time")}\n${t(
        "analyzes_usage_patterns"
      )}`,
      img: "products7.svg",
      styleTop: transforms.fifth,
      styleOpacity: transforms.fifthOpacity,
      appear: visibleScreens.fifth,
    },

    {
      id: 6,
      subtitle: t("FULL_CONTROL"),
      text: `${t("We_understand_that_in_times")}\n${t("a_sense_of_security")}`,
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
            {t("EMPOWER_YOURSELF_TO_FOCUS")}
            <br />
            {t("ON_WHAT")}
            <span className={styles.orange}> {t("MATTERS_MOST")}</span>
          </div>
          <div className={styles.defaultText}>
            {t("Explore_our_personalized")} <br />
            {t("your_unique_needs")}
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
                <div className={styles.subtitle}> {t("SECURITY")}</div>
                <div className={styles.defaultText}>
                  {t("We_understand")}
                  <br /> {t("sense_of_security")}
                </div>
                <div className={styles.button} onClick={handleClickAllProducts}>
                  {t("button_home")}
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
                      {t("button_home")}
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
                      {t("button_home")}
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
