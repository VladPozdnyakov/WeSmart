import Footer from "../../components/footer/Footer";
import Form from "../../components/Form/Form";
import TrueFooter from "../../components/TrueFooter/TrueFooter";
import styles from "./About.module.scss";
import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { useScroll, motion, useTransform } from "framer-motion";

const startPosition = 0;
const firstSlideTopStart = startPosition;
const firstSlideTopEnd = firstSlideTopStart + 0.2;


const firstWorthAppearStart = firstSlideTopEnd - 0.105;
const firstWorthAppearEnd = firstWorthAppearStart + 0.02;
const secondWorthAppearStart = firstWorthAppearEnd;
const secondWorthAppearEnd = secondWorthAppearStart + 0.02;
const thirdWorthAppearStart = secondWorthAppearEnd;
const thirdWorthAppearEnd = thirdWorthAppearStart + 0.02;
const fourthWorthAppearStart = thirdWorthAppearEnd;
const fourthWorthAppearEnd = fourthWorthAppearStart + 0.02;
const fifthWorthAppearStart = fourthWorthAppearEnd;
const fifthWorthAppearEnd = fifthWorthAppearStart + 0.02;




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
      ["0vh", "-400vh"]
    ),


    firstWorth: useTransform(
        scrollYProgress,
        [firstWorthAppearStart, firstWorthAppearEnd],
        [0,1]
    ),
    secondWorth: useTransform(
        scrollYProgress,
        [secondWorthAppearStart, secondWorthAppearEnd],
        [0,1]
    ),
    thirdWorth: useTransform(
        scrollYProgress,
        [thirdWorthAppearStart, thirdWorthAppearEnd],
        [0,1]
    ),
    fourthWorth: useTransform(
        scrollYProgress,
        [fourthWorthAppearStart, fourthWorthAppearEnd],
        [0,1]
    ),
    fifthWorth: useTransform(
        scrollYProgress,
        [fifthWorthAppearStart, fifthWorthAppearEnd],
        [0,1]
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
          <motion.div
            className={styles.titleBlock}
            style={{ top: transforms.first }}
          >
            <div className={styles.title}>
              WE BELIEVE THAT TECHNOLOGY
              <br />
              IS MEANT TO IMPROVE
              <br />
              <span className={styles.orange}>THE QUALITY OF LIFE</span>
              <br />
              AND STREAMLINE PROCESSES
            </div>
            <div className={styles.descriptionBlock}>
              <div className={styles.subtitle}>ABOUT US</div>
              <div className={styles.text}>
                Our company, founded by experts in the
                <br />
                field of analytics and artificial intelligence,
                <br />
                specializes in the development of smart
                <br />
                and innovative solutions that combine
                <br />
                different visual systems to deal
                <br />
                with challenges in a variety of fields.
                <br />
                <br />
                We are proud to cooperate with leading
                <br />
                customers in the economy and provide
                <br />
                them with advanced tools that lead
                <br />
                to saving time and precious resources.
              </div>
            </div>
            <div className={styles.videoContainer}>
              <img src="/images/aboutVideo.svg" alt="no-image" />
              <div className={styles.wrapper}></div>
              <div className={styles.videoTitle}>
                MAKING THE WORLD A SAFER, MORE RELIABLE
                <br />
                AND MORE EFFICIENT PLACE THROUGH INNOVATIVE
                <br />
                DATA-DRIVEN VIDEO TECHNOLOGY
              </div>
              <div className={styles.videoButton}>Explore our products</div>
              <div className={styles.maskedMan}>
                <div className={styles.naz}>MASKED MAN</div>
              </div>
              <div className={styles.gun}>
                <div className={styles.naz}>GUN</div>
              </div>
            </div>
            <div className={styles.theValues}>
              <div className={styles.title}>
                <span className={styles.orange}>THE VALUES</span> THAT LEAD US
              </div>



              <div className={styles.worthesContainer}>

                <motion.div className={styles.worth} style={{opacity: transforms.firstWorth}}>
                  <div className={styles.imageWrapper}>
                    <img src="/images/aboutWorthes0.svg" alt="no-image" />
                  </div>
                  <div>
                    <span className={styles.worthTitle}>INNOVATION</span>
                    <div className={styles.worthText}>
                      The company aims to be a leader
                      <br />
                      in the field of technology, and to offer
                      <br />
                      innovative solutions to its customers
                    </div>         
                  </div>
                  <div className={styles.worthTitle}>/01</div>
                </motion.div>

                <motion.div className={styles.worth} style={{opacity: transforms.secondWorth}}>
                  <div className={styles.imageWrapper}>
                    <img src="/images/aboutWorthes0.svg" alt="no-image" />
                  </div>
                  <div>
                    <span className={styles.worthTitle}>QUALITY</span>
                    <div className={styles.worthText}>
                    THE COMPANY UNDERTAKES TO OFFER<br/> 
HIGH QUALITY PRODUCTS AND SERVICES <br/>
THAT WILL  MEET CUSTOMER EXPECTATIONS <br/>
AND TO  CUSTOMIZE THE PRODUCT
                    </div>         
                  </div>
                  <div className={styles.worthTitle}>/02</div>
                </motion.div>

                <motion.div className={styles.worth} style={{opacity: transforms.thirdWorth}}>
                  <div className={styles.imageWrapper}>
                    <img src="/images/aboutWorthes0.svg" alt="no-image" />
                  </div>
                  <div>
                    <span className={styles.worthTitle}>RELIABILITY</span>
                    <div className={styles.worthText}>
                    THE COMPANY MUST BE A RELIABLE  COMPANY <br/>
                    THAT CAN BE TRUSTED
                    </div>         
                  </div>
                  <div className={styles.worthTitle}>/03</div>
                </motion.div>

                <motion.div className={styles.worth} style={{opacity: transforms.fourthWorth}}>
                  <div className={styles.imageWrapper}>
                    <img src="/images/aboutWorthes0.svg" alt="no-image" />
                  </div>
                  <div>
                    <span className={styles.worthTitle}>SERVICE</span>
                    <div className={styles.worthText}>
                    THE COMPANY AIMS TO PROVIDE EXCELLENT <br/>
CUSTOMER SERVICE, WHICH WILL BE AVAILABLE  <br/>
AND HELPFUL
                    </div>         
                  </div>
                  <div className={styles.worthTitle}>/04</div>
                </motion.div>

                <motion.div className={styles.worth} style={{opacity: transforms.fifthWorth}}>
                  <div className={styles.imageWrapper}>
                    <img src="/images/aboutWorthes0.svg" alt="no-image" />
                  </div>
                  <div>
                    <span className={styles.worthTitle}>Social responsibility</span>
                    <div className={styles.worthText}>
                    The company aims to give back  <br/>
to the community, and contribute  to a better <br/>
society by strengthening  security
                    </div>         
                  </div>
                  <div className={styles.worthTitle}>/05</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <div className={styles.littleCircle} />
          <div className={styles.midCircle} />
          <div className={styles.bigCircle} />
          <motion.div
            className={styles.littleStar}
            animate={{ scale: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          >
            <img src="/images/aboutStar.svg" alt="no-image" />
          </motion.div>

          <motion.div
            className={styles.bigStar}
            animate={{ scale: [1, 0.12, 1] }}
            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          >
            <img src="/images/aboutStar.svg" alt="no-image" />
          </motion.div>
        </motion.div>
        <Form top={transforms.form} />
        <TrueFooter top={transforms.trueFooter} />
      </div>
    </div>
  );
};

export default About;
