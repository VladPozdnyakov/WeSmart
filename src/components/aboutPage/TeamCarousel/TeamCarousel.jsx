// TeamCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TeamCarousel.module.scss";
import { useTranslation } from "react-i18next";

const TeamCarousel = () => {
  const { t } = useTranslation();
  const teamMembers = [
    {
      name: t("EHUD_LAVIE"),
      description: t("Former_deputy"),
      image: "/images/ava.jpg",
      load: "/images/aboutCarousel.svg",
    },
    {
      name: t("DANNY_COHEN"),
      description: t("CEO_of_Leumi"),
      image: "/images/aboutCarousel.svg",
      load: "/images/aboutCarousel.svg",
    },
    {
      name: t("OR_LABAN"),
      description: t("VP_and_entrepreneur"),
      image: "/images/aboutCarousel.svg",
      load: "/images/aboutCarousel.svg",
    },
    {
      name: t("LIOR_EINAV"),
      description: t("VP_of_Technology"),
      image: "/images/aboutCarousel.svg",
      load: "/images/aboutCarousel.svg",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    draggable: true, // Свободное листание мышкой
    swipeToSlide: true, // Возможность перелистывать несколько слайдов

    customPaging: (i) => (
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(204, 209, 217, 1)",
          position: "relative",
        }}
      />
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-5.5vh",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%", // Ширина всей полосы прогресса
            height: "1px",
            backgroundColor: "rgba(204, 209, 217, 1)", // Цвет основной полоски
          }}
        >
          <div
            style={{
              position: "absolute",
              left: `${
                dots.findIndex((dot) =>
                  dot.props.className.includes("slick-active")
                ) *
                (50 / dots.length)
              }%`,
              width: `${50 / dots.length}%`,
              height: "5px",
              backgroundColor: "orange", // Оранжевая полоска
              transition: "left 0.5s ease-in-out",
            }}
          />
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.memberCard}>
            <div className={styles.imageDiv}>
              <img
                src={member.load}
                alt={member.name}
                className={styles.load}
              />
              <img
                src={member.image}
                alt={member.name}
                className={styles.image}
              />
            </div>
            <div className={styles.name}>{member.name}</div>
            <div className={styles.description}>
              {member.description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamCarousel;
