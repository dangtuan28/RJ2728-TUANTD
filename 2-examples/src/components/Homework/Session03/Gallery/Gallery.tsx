import React, { useEffect, useState } from "react";
import Styles from "./Slider.module.css";

const Gallery: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: "http://foundry.mediumra.re/img/cover14.jpg",
    },
    {
      id: 2,
      image: "http://foundry.mediumra.re/img/cover15.jpg",
    },
    {
      id: 3,
      image: "http://foundry.mediumra.re/img/cover16.jpg",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);
  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className={Styles.slide}>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slides[currentSlide].image} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={slides[currentSlide].image} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={slides[currentSlide].image} className="d-block w-100" />
          </div>
        </div>
        <button
          onClick={handleNext}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          onClick={handleNext}
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Gallery;