import Footer from "../../components/footer/Footer";
import Form from "../../components/Form/Form";
import TrueFooter from "../../components/TrueFooter/TrueFooter";
import styles from "./About.module.scss";
import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import LocomotiveScroll from "locomotive-scroll";
import { useScroll, motion, useTransform } from "framer-motion";
import TitleSection from "../../components/aboutPage/TitleSection/TitleSection";
import ValueSection from "../../components/aboutPage/ValuesSection/ValuesSection";
import BackgroundAnimation from "../../components/aboutPage/BackgroundAnimation/BackgroundAnimation";
import TeamCarousel from "../../components/aboutPage/TeamCarousel/TeamCarousel";

const startPosition = 0;
const firstSlideTopStart = startPosition;
const firstSlideTopEnd = firstSlideTopStart + 0.2;

const secondSlideTopStart = firstSlideTopStart + 0.1;
const secondSlideTopEnd = secondSlideTopStart + 0.2;
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

const firstWorthAppearStart = secondSlideTopStart + 0.05;
const firstWorthAppearEnd = firstWorthAppearStart + 0.04;
const secondWorthAppearStart = firstWorthAppearEnd;
const secondWorthAppearEnd = secondWorthAppearStart + 0.03;
const thirdWorthAppearStart = secondWorthAppearEnd;
const thirdWorthAppearEnd = thirdWorthAppearStart + 0.03;
const fourthWorthAppearStart = thirdWorthAppearEnd;
const fourthWorthAppearEnd = fourthWorthAppearStart + 0.03;
const fifthWorthAppearStart = fourthWorthAppearEnd;
const fifthWorthAppearEnd = fifthWorthAppearStart + 0.03;

const About = () => {
  const { t } = useTranslation();
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      inertia: 0.8,
    });
    window.scrollTo(0, 0);
    scrollYProgress.onChange((latest) => {
      const scrollPercentage = latest * 100; // Преобразуем в проценты
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
      [
        secondSlideTopStart,
        secondSlideTopEnd,
        thirdSlideTopStart,
        thirdSlideTopEnd,
      ],
      ["100vh", "-150vh", "-150vh", "-250vh"]
    ),
    third: useTransform(
      scrollYProgress,
      [
        thirdSlideTopStart,
        thirdSlideTopEnd,
        fourthSlideTopStart,
        fifthSlideTopEnd,
      ],
      ["100vh", "0vh", "0vh", "-100vh"]
    ),
    fourth: useTransform(
      scrollYProgress,
      [
        fourthSlideTopStart,
        fourthSlideTopEnd,
        fifthSlideTopStart,
        fifthSlideTopEnd,
      ],
      ["100vh", "-50vh", "-50vh", "-150vh"]
    ),
    fifth: useTransform(
      scrollYProgress,
      [fourthSlideTopStart, fifthSlideTopEnd],
      ["100vh", "0vh"]
    ),
    six: useTransform(
      scrollYProgress,
      [
        sixSlideTopStart,
        sixSlideTopEnd,
        formSlideTopStart,
        formSlideTopEnd,
        footerSlideTopStart,
        footerSlideTopEnd,
      ],
      ["100vh", "0vh", "0vh", "-84vh", "-84vh", "-150vh"]
    ),
    backgroundOpacity: useTransform(
      scrollYProgress,
      [secondSlideTopStart, secondSlideTopStart + 0.02],
      [1, 0]
    ),
    firstWorth: useTransform(
      scrollYProgress,
      [firstWorthAppearStart, firstWorthAppearEnd],
      [0, 1]
    ),
    secondWorth: useTransform(
      scrollYProgress,
      [secondWorthAppearStart, secondWorthAppearEnd],
      [0, 1]
    ),
    thirdWorth: useTransform(
      scrollYProgress,
      [thirdWorthAppearStart, thirdWorthAppearEnd],
      [0, 1]
    ),
    fourthWorth: useTransform(
      scrollYProgress,
      [fourthWorthAppearStart, fourthWorthAppearEnd],
      [0, 1]
    ),
    fifthWorth: useTransform(
      scrollYProgress,
      [fifthWorthAppearStart, fifthWorthAppearEnd],
      [0, 1]
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

  return (
    <div className={styles.bigContainer} data-scroll-container ref={scrollRef}>
      <div className={styles.stickyBlock} data-scroll-section>
        <Footer />
        <motion.div className={styles.mainAbout}>
          <TitleSection top={transforms.first} />
          <ValueSection
            top={transforms.second}
            opacity1={transforms.firstWorth}
            opacity2={transforms.secondWorth}
            opacity3={transforms.thirdWorth}
            opacity4={transforms.fourthWorth}
            opacity5={transforms.fifthWorth}
          />
          <BackgroundAnimation
            backgroundOpacity={transforms.backgroundOpacity}
          />
          <motion.div
            className={styles.writtenAboutUs}
            style={{ top: transforms.third }}
          >
            <div className={styles.blockName}>{t("Customized_solutions")}</div>
            <div>
              <div className={styles.blockTitle}>
                {t("WE_BELIEVE_THAT_EVERY_ORGANIZATION")}
                <br />
                {t("HAS_UNIQUE_TECHNOLOGICAL_NEEDS")}
                <br />
                {t("AND_CHALLENGES_THEREFORE")}
                <br />
                {t("OUR_APPROACH_IS_FLEXIBLE_AND_ADAPTED")} <br />
                {t("TO_EACH_CLIENT_PERSONALLY")}
                <br />
              </div>
              <div className={styles.blockName}>
                {t("We_build_the_solutions")} <br />
                {t("the_existing_infrastructures")}
                <br />
                <br />
                {t("Our_team_of_experts")} <br />
                {t("understands_the_specific")}
                <br />
                {t("adapts_dedicated")} <br />
                {t("The_result_is_an_innovative")} <br />
                {t("technology_that_provides")}
                <br />
                {t("to_the_customer's_needs")}
              </div>
            </div>
            <div className={styles.bgImage}>
              <img src="/images/aboutWrittenAboutUs.svg" alt="no-image" />
            </div>
          </motion.div>
          <motion.div
            className={styles.ourTeam}
            style={{ top: transforms.fourth }}
          >
            <div className={styles.blockName}>{t("OUR_TEAM")}</div>
            <div>
              <div className={styles.blockTitle}>
                {t("WE_BELIEVE_THAT_THE_MOST")}
                <br />
                {t("IMPORTANT_ASSET_IS_HUMAN_CAPITAL")}
                <br />
                {t("THE_PROFESSIONAL_TEAM_THAT_LEADS")}
                <br />
                {t("TECHNOLOGICAL_INNOVATION")}
                <br />
                {t("IN_THE_ORGANIZATION")}
              </div>
              <TeamCarousel />
            </div>
          </motion.div>
          <motion.div
            className={styles.learnMore}
            style={{ top: transforms.fifth }}
          >
            <div className={styles.textContainer}>
              <div className={styles.textTitle}>
                <span className={styles.orange}>{t("LEARN_MORE")} </span>
                <br />
                {t("ABOUT_OUR_PRODUCTS")} <br />
                {t("AND_SERVICES")}
              </div>
              <div className={styles.textContent}>
                {t("WeSmart's_advanced")}
                <br />
                {t("successfully_implemented")} <br />
                {t("of_customers_around")} <br />
                {t("real_value_to_businesses")} <br />
                <br />
                {t("If_you_are_interested")} <br />
                {t("the_unique_products")} <br />
                {t("and_how_they_can_help")}
                <br />
              </div>
              <div className={styles.button}>{t("EXPLORE_OUR_PRODUCTS")}</div>
            </div>
            <div className={styles.bgImage}>
              <img src="/images/aboutLearnMoreBG.svg" alt="no-image" />
            </div>
          </motion.div>
        </motion.div>
        <motion.div className={styles.weInvite} style={{ top: transforms.six }}>
          <div className={styles.textBlock}>
            <div className={styles.textTitle}>
              {t("WE_INVITE_YOU")}
              <br /> {t("TO_TALK_TO_US")}!
            </div>
            <div className={styles.textContent}>
              {t("At_WeSmart")}
              <br />
              {t("your_questions")}
              <br />
              {t("vision")}
              <br />
              {t("advanced_video_analytics")}
              <br />
              {t("your_organization's_growth")}
              <br />
              <br />
              {t("Our_team_of")}
              <br />
              {t("understand_your_unique")}
              <br />
              {t("customized_technological")}
              <br />
              <br />
              {t("Together_we_will")}
            </div>
          </div>
        </motion.div>
        <Form top={transforms.form} />
        <TrueFooter top={transforms.trueFooter} />
      </div>
    </div>
  );
};

export default About;
