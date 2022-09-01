import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./carouselCSS.css";
import { useEffect, useState } from "react";

const Carousel = () => {
  const responsiveSettings = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  const carouselPictures: string[] = [
    "https://i.ibb.co/LYN1zNX/carousel-1.png",
    "https://i.ibb.co/zQk5N5V/carousel-2.png",
    "https://i.ibb.co/LRC2kM8/carousel-3.png",
    "https://i.ibb.co/2NtmnSY/carousel-4.png",
    "https://i.ibb.co/txyc6x6/carousel-5.png",
    "https://i.ibb.co/T8Lm7tZ/carousel-6.png",
  ];

  return (
    <div id="app__carousel">
      <Slide
        responsive={responsiveSettings}
        cssClass="app__carousel--wrapper"
        indicators={true}
      >
        <div className="app__carousel--img-box">
          <div style={{ backgroundImage: `url(${carouselPictures[0]})` }}></div>
        </div>
        <div className="app__carousel--img-box">
          <div style={{ backgroundImage: `url(${carouselPictures[1]})` }}></div>
        </div>
        <div className="app__carousel--img-box">
          <div style={{ backgroundImage: `url(${carouselPictures[2]})` }}></div>
        </div>
        <div className="app__carousel--img-box">
          <div style={{ backgroundImage: `url(${carouselPictures[3]})` }}></div>
        </div>
        <div className="app__carousel--img-box">
          <div style={{ backgroundImage: `url(${carouselPictures[4]})` }}></div>
        </div>
        <div className="app__carousel--img-box">
          <div style={{ backgroundImage: `url(${carouselPictures[5]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Carousel;
