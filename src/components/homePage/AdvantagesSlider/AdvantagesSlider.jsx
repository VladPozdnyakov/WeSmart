import React from "react";
import Slider from "react-slick";
import styles from "./AdvantagesSlider.module.scss";
import AdvantageBlock from "../Advantages/Advantage";

const AdvantagesSlider = () => {
  const slides = [
    {
        title: "",
        description: "",
      },
      
    {
      title: "SECURITY",
      description: "We understand that in times of uncertainty, a sense of security is a vital necessity",
      image: '/images/securitySlidegBG.svg'
    },
    {
      title: "SAFETY",
      description: "The solutions include alarm systems, security cameras, access control and more",
      image: '/images/safetySliderBG.svg'
    },
    {
      title: "SMART CITIES",
      description: "We provide smart security solutions based on data analysis and artificial intelligence, suitable for cities and towns of all sizes",
      image: '/images/smartCitiesSliderBG.svg'
    },
    {
      title: "LOGISTICS AND INDUSTRIES",
      description: "Ai-solutions provide our customers with strategic insights and real-time monitoring of critical logistics data",
      image: '/images/logisticSliderBG.svg'
    },
    {
      title: "PUBLIC TRANSPORTATION",
      description: "The WeSmart system monitors bus and train traffic in real time, provides accurate predictions of arrival times and analyzes usage patterns",
      image: '/images/publickTransportationSliderBG.svg'
    },
    {
      title: "",
      description: "",
      image: ''
    },
    {
        title: "",
        description: "",
        image: ''
      },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 3, // Показываем 3 слайда
    
    autoplay: false,
    autoplaySpeed: 1500,
    draggable: true, // Свободное листание мышкой
    swipeToSlide: true, // Возможность перелистывать несколько слайдов
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className={styles.slide} key={index} style={{ width: '33vw' }}>
            {slide.title === "" && slide.description === "" ? (
              <div className={styles.emptySlide} style={{ width: '100%', height: '100%', backgroundColor: 'lightgray' }}>
                {/* Пустой слайд без контента */}
              </div>
            ) : (
              <AdvantageBlock title={slide.title} description={slide.description} backgroundImage={slide.image} />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AdvantagesSlider;
