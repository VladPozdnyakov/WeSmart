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
        ["100vh", "-68vh"]
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
    )
  }


  return (
    <div className={styles.bigContainer} data-scroll-container ref={scrollRef}>
      <div className={styles.stickyBlock} data-scroll-section>
        <Footer transparent={true} />
        <div className={styles.headSection}>
          <div className={styles.textTitle}>
            EMPOWER THE WORLD
            <br />
            WITH AI PHYSICAL SECURITY
            <br />
            AND SAFETY
          </div>
          <div className={styles.textContent}>
            Let's make the world a better place with cutting-edge AI solutions
          </div>
          <div className={styles.button}>Explore all jobs</div>
          <img src="/images/careersBG.svg" alt="no-image" />
          <div className={styles.wrapper}></div>
        </div>
        <motion.div className={styles.contentBlock} style={{top: transforms.ourMission}}>
          <div className={styles.ourMission}>
            <div className={styles.descText}>OUR MISSION</div>
            <div>
              <div className={styles.titleText}>
                EMPOWER ORGANIZATIONS
                <br />
                BY UNLOCKING THE VALUE OF THEIR
                <br />
                VISUAL DATA TO ENHANCE SECURITY
                <br />
                AND SAFETY, STREAMLINE OPERATIONS,
                <br />
                AND ENABLE IMMEDIATE RESPONSE
                <br />
                WHEN IT MATTERS MOST
              </div>
              <div className={styles.textContent}>
                Empower organizations by unlocking the value
                <br />
                of their visual data to enhance security and safety,
                <br />
                streamline operations, and enable immediate
                <br />
                response when it matters most.
              </div>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.benefits}>
            <div className={styles.textBlock}>
                <div className={styles.title}>BENEFITS</div>
                <div className={styles.textContent}>Join a culture of innovation, team up with<br/>
                forward-thinkers, and enjoy benefits designed<br/>
                to support your health and wellbeing.</div>
            </div>
            <div className={styles.flexRow}>
              <div className={styles.flexCol}>
                <div className={styles.textBlock}>
                  <div className={styles.subtitle}>HEALTH COVERAGE</div>
                  <div className={styles.textContent}>
                    Full benefits coverage for medical,
                    <br /> dental, and vision.
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.subtitle}>STOCK OPTIONS</div>
                  <div className={styles.textContent}>
                    Own part of the company, and when
                    <br /> the company succeeds, you do as wel
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.subtitle}>WORK FROM HOME</div>
                  <div className={styles.textContent}>
                    Do your best work, whether that’s<br/> at home, in-office, or
                    hybrid.
                  </div>
                </div>
              </div>
              <div className={styles.flexCol}>
                <div className={styles.textBlock}>
                  <div className={styles.subtitle}>FLEXIBLE PTO</div>
                  <div className={styles.textContent}>
                    Recharge when you need it with
                    <br /> generous vacation days
                  </div>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.subtitle}>401K</div>
                  <div className={styles.textContent}>
                    Easily save for retirement with 401k
                    <br /> plans with generous company match
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className={styles.openPositions} style={{top: transforms.openPositions}}>
            <img className={styles.bgImg} src="/images/careerCube.svg" alt="no-image"/>
            <div className={styles.content}>
                <div className={styles.title}>OPEN POSITIONS</div>
                <div className={styles.text}>Stay connected with us on LinkedIn for the<br/> 
                latest job opportunities.</div>
                <div className={styles.button}>Follow us on LinkedIn<img className={styles.icon} src="/images/careerIcon.svg" alt="no-image"/></div>
            </div>
        </motion.div>
        <TrueFooter top={transforms.footer}/>
      </div>
    </div>
  );
};

export default Careers;
