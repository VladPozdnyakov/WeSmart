import Footer from "../../components/footer/Footer";
import Form from "../../components/Form/Form";
import TrueFooter from "../../components/TrueFooter/TrueFooter";
import styles from "./About.module.scss";
import { useRef, useEffect } from "react";
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
            <div className={styles.blockName}>Customized solutions</div>
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
            <div className={styles.bgImage}>
              <img src="/images/aboutWrittenAboutUs.svg" alt="no-image" />
            </div>
          </motion.div>
          <motion.div
            className={styles.ourTeam}
            style={{ top: transforms.fourth }}
          >
            <div className={styles.blockName}>OUR TEAM</div>
            <div>
              <div className={styles.blockTitle}>
                WE BELIEVE THAT THE MOST
                <br />
                IMPORTANT ASSET IS HUMAN CAPITAL,
                <br />
                THE PROFESSIONAL TEAM THAT LEADS
                <br />
                TECHNOLOGICAL INNOVATION
                <br />
                IN THE ORGANIZATION
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
                <span className={styles.orange}>LEARN MORE </span>
                <br />
                ABOUT OUR PRODUCTS <br />
                AND SERVICES
              </div>
              <div className={styles.textContent}>
                WeSmart's advanced technologies are already
                <br />
                successfully implemented by hundreds <br />
                of customers around the world and contribute <br />
                real value to businesses in a variety of fields. <br />
                <br />
                If you are interested in learning more about <br />
                the unique products and solutions we offer <br />
                and how they can help you, contact us
                <br />
              </div>
              <div className={styles.button}>EXPLORE OUR PRODUCTS</div>
            </div>
            <div className={styles.bgImage}>
              <img src="/images/aboutLearnMoreBG.svg" alt="no-image" />
            </div>
          </motion.div>
        </motion.div>
        <motion.div className={styles.weInvite} style={{ top: transforms.six }}>
          <div className={styles.textBlock}>
            <div className={styles.textTitle}>
              WE INVITE YOU
              <br /> TO TALK TO US!
            </div>
            <div className={styles.textContent}>
              At WeSmart we are always available to answer
              <br />
              your questions and help realize your technological
              <br />
              vision. If you are interested in learning how our
              <br />
              advanced video analytics solutions can accelerate
              <br />
              your organization's growth, contact us today.
              <br />
              <br />
              Our team of experts is here for you — to listen,
              <br />
              understand your unique challenges and provide
              <br />
              customized technological solutions.
              <br />
              <br />
              Together we will lead the digital revolution!
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
