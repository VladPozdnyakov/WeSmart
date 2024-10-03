import { useScroll, motion, useTransform } from "framer-motion";
import styles from "./Careers.module.scss";
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "../../components/footer/Footer";
import TrueFooter from "../../components/TrueFooter/TrueFooter";

const startPosition = 0;
const ourMissionStart = startPosition;
const ourMissionEnd = ourMissionStart + 0.5;
const openPositionsStart = ourMissionEnd;
const openPositionsEnd = openPositionsStart + 0.5;

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    ourMission: useTransform(
      scrollYProgress,
      [ourMissionStart, ourMissionEnd],
      ["100vh", "-185vh"]
    ),
    openPositions: useTransform(
      scrollYProgress,
      [openPositionsStart, openPositionsEnd],
      ["100vh", "-6vh"]
    ),
    footer: useTransform(
      scrollYProgress,
      [openPositionsStart, openPositionsEnd],
      ["157vh", "48.1vh"]
    ),
  };

  return (
    <div className={styles.bigContainer} data-scroll-container ref={scrollRef}>
      <div className={styles.stickyBlock} data-scroll-section>
        <Footer transparent={true} />
        <div className={styles.headSection}>
          <div className={styles.textTitle}>
            Leading the Future
            <br />
            with AI-Powered Solutions
          </div>
          <div className={styles.textContent}>
            Let's make the world a better place with cutting-edge solutions
          </div>
          <div className={styles.button}>Explore all jobs</div>
          <img src="/images/careersBG.svg" alt="no-image" />
          <div className={styles.wrapper}></div>
        </div>
        <motion.div
          className={styles.contentBlock}
          style={{ top: transforms.ourMission }}
        >
          <div className={styles.ourMission}>
            <div className={styles.descText}>OUR MISSION</div>
            <div>
              <div className={styles.titleText}>
                WeSmart provides advanced
                <br />
                analytics solutions using artificial
                <br />
                intelligence, allowing organizations
                <br />
                to utilize their visual data more
                <br />
                intelligently and efficiently.
              </div>
              <div className={styles.textContent}>
                Through innovative technology, we help improve security,
                <br />
                enhance operational performance, and empower quick,
                <br />
                informed responses to critical situations.
              </div>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.benefitsFirst}>
            <div className={styles.descText}>WHY CHOOSE WESMART?</div>
            <div className={styles.flexRowFirstPage}>
              <div className={styles.flexCol}>
                <div className={styles.textBlock}>
                  <div className={styles.circle}></div>
                  <div className={styles.textContent}>
                    Simple and User-Friendly Integration
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.circle}></div>
                  <div className={styles.textContent}>
                    Our systems easily integrate with
                    <br />
                    existing infrastructures, delivering
                    <br />
                    accurate, real-time results without
                    <br />
                    the need for replacing current
                    <br />
                    equipment
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.circle}></div>
                  <div className={styles.textContent}>
                    Advanced AI Technology
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.circle}></div>
                  <div className={styles.textContent}>
                    We provide real-time analysis of vast
                    <br />
                    amounts of data, identifying
                    <br />
                    patterns and critical events tailored
                    <br />
                    to the specific needs of each
                    <br />
                    organization
                  </div>
                </div>
              </div>
              <div className={styles.flexCol}>
                <div className={styles.textBlock}>
                  <div className={styles.circle}></div>
                  <div className={styles.textContent}>
                    Customizable Solutions
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.circle}></div>
                  <div className={styles.textContent}>
                    We adapt our solutions based on the
                    <br />
                    unique requirements of each client,
                    <br />
                    whether it's enhancing operational
                    <br />
                    processes, security, or optimizing
                    <br />
                    business performance
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.circle}></div>
                  <div className={styles.textContent}>
                    Comprehensive Support
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.circle}></div>
                  <div className={styles.textContent}>
                    From implementation to ongoing
                    <br />
                    maintenance, we provide full
                    <br />
                    support to ensure the system
                    <br />
                    operates optimally and delivers
                    <br />
                    maximum value to our clients
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.benefits}>
            <div className={styles.title}>Employee Benefits at WeSmart</div>
            <div className={styles.textContent}>
              At WeSmart, we foster a culture of innovation
              <br />
              and forward-thinking, providing our
              <br />
              employees with benefits designed to support
              <br />
              both personal and professional well-being
            </div>
            <div className={styles.flexRow}>
              <div className={styles.flexColSecondSlide}>
                <div className={styles.textBlock}>
                  <div className={styles.circleSecondPage}></div>
                  <div className={styles.textContent}>
                    Comprehensive Health Coverage
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.circleSecondPage}></div>
                  <div className={styles.textContent}>
                    Full medical, dental, and vision
                    <br />
                    coverage to provide peace of mind
                    <br />
                    for employees and their families
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.circleSecondPage}></div>
                  <div className={styles.textContent}>
                    Flexible Vacation Policies
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.circleSecondPage}></div>
                  <div className={styles.textContent}>
                    Generous vacation days that allow
                    <br /> for a healthy work-life balance
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.circleSecondPage}></div>
                  <div className={styles.textContent}>
                    Options to work from the office,
                    <br /> remotely, or in a hybrid model, based
                    <br /> on personal preferences and needs
                  </div>
                </div>
              </div>
              <div className={styles.flexColSecondSlide}>
                <div className={styles.textBlock}>
                  <div className={styles.circleSecondPage}></div>
                  <div className={styles.textContent}>Retirement Savings</div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.circleSecondPage}></div>
                  <div className={styles.textContent}>
                    401k plans with company matching
                    <br /> contributions to help you save for
                    <br /> the future
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.circleSecondPage}></div>
                  <div className={styles.textContent}>Work Flexibility</div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.circleSecondPage}></div>
                  <div className={styles.textContent}>
                    Opportunity to share in the company’s
                    <br />
                    success through stock options
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.circleSecondPage}></div>
                  <div className={styles.textContent}>Stock Options</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.openPositions}
          style={{ top: transforms.openPositions }}
        >
          <img
            className={styles.bgImg}
            src="/images/careerCube.svg"
            alt="no-image"
          />
          <div className={styles.content}>
            <div className={styles.title}>OPEN POSITIONS</div>
            <div className={styles.text}>
              Stay connected with us on LinkedIn for the
              <br />
              latest job opportunities.
            </div>
            <motion.button
              className={styles.animatedButton}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className={styles.buttonBackground}
                variants={{
                  initial: { x: "-100%", opacity: 0.2 },
                  hover: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
              />
              <span className={styles.buttonText}>Follow us on LinkedIn</span>
              <img
                className={styles.icon}
                src="/images/careerIcon.svg"
                alt="no-image"
              />
            </motion.button>
          </div>
        </motion.div>
        <TrueFooter top={transforms.footer} />
      </div>
    </div>
  );
};

export default Careers;
