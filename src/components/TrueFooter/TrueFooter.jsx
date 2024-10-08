// TrueFooter.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./TrueFooter.module.scss";
import useDeviceDetection from "../../hooks/useDeviceDetection";

const TrueFooter = ({ top }) => {
  const navigate = useNavigate();
  const device = useDeviceDetection();
  const handleClickCareers = () => {
    navigate("/careers");
  };

  return (
    <motion.div className={styles.trueFooter} style={{ top }}>
      {device === 'Mobile' ? (
        <>
          <div className={styles.iconDiv}>
            <a href="#">
              <img src="/images/socials/Facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/images/socials/Instagram.svg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/images/socials/LinkedIn.svg" alt="LinkedIn" />
            </a>
            <a href="#">
              <img src="/images/socials/Twitter.svg" alt="Twitter" />
            </a>
          </div>
          <div className={styles.row2}>
        <div className={styles.infoDiv}>
          © WESMART COMMUNICATION AB, 2023–2024
        </div>
        <div className={styles.infoDiv}>
          PRIVACY POLICY &ensp;&ensp;&ensp;&ensp; • &ensp;&ensp;&ensp;&ensp;
          TERMS & CONDITIONS
        </div>
        <div className={styles.infoDiv}>
          <img src="/images/socials/cocki.svg" alt="Cookie Preferences" />
          COOKIE PREFERENCES
        </div>
      </div>
        </>
      ):(
        <>
     
      <div className={styles.row1}>
        <div className={styles.column}>
          <span className={styles.categoryTitle}>COMPANY</span>
          <span className={styles.categoryText}>About us</span>
          <span className={styles.categoryText} onClick={handleClickCareers}>
            Careers
          </span>
        </div>
        <div className={styles.column}>
          <span className={styles.categoryTitle}>PRODUCTS</span>
          <span className={styles.categoryText}>Logistics and industry</span>
          <span className={styles.categoryText}>Smart cities</span>
          <span className={styles.categoryText}>Public Transportation</span>
          <span className={styles.categoryText}>Safety</span>
          <span className={styles.categoryText}>Security</span>
        </div>
        <div className={styles.column}>
          <span className={styles.categoryTitle}>CONTACTS</span>
          <span className={styles.categoryText}>info@wesmart.co.il</span>
          <span className={styles.categoryText}>+972 50 502 5094</span>
          <span className={styles.categoryText}>
            Gazit 10 St, Karmiel.
            <br /> 2165379
          </span>
        </div>
        <div>
          <div className={styles.categoryTitle}>FOLLOW US</div>
          <div className={styles.iconDiv}>
            <a href="#">
              <img src="/images/socials/Facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/images/socials/Instagram.svg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/images/socials/LinkedIn.svg" alt="LinkedIn" />
            </a>
            <a href="#">
              <img src="/images/socials/Twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.infoDiv}>
          © WESMART COMMUNICATION AB, 2023–2024
        </div>
        <div className={styles.infoDiv}>
          PRIVACY POLICY &ensp;&ensp;&ensp;&ensp; • &ensp;&ensp;&ensp;&ensp;
          TERMS & CONDITIONS
        </div>
        <div className={styles.infoDiv}>
          <img src="/images/socials/cocki.svg" alt="Cookie Preferences" />
          COOKIE PREFERENCES
        </div>
      </div> </>)}
    </motion.div>
  );
};

export default TrueFooter;
