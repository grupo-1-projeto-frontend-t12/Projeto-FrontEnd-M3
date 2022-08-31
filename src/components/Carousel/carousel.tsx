import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./carouselCSS.css";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  function widthSetter() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    widthSetter();

    window.addEventListener("resize", () => {
      console.log(width);
      widthSetter();
    });
  });
  const carouselPictures: string[] = [
    "https://i.ibb.co/LYN1zNX/carousel-1.png",
    "https://i.ibb.co/zQk5N5V/carousel-2.png",
    "https://i.ibb.co/LRC2kM8/carousel-3.png",
    "https://i.ibb.co/2NtmnSY/carousel-4.png",
    "https://i.ibb.co/txyc6x6/carousel-5.png",
    "https://i.ibb.co/T8Lm7tZ/carousel-6.png",
  ];

  return (
    <div className="app__carousel--wrapper">
      {width > 1200 ? (
        <Slide slidesToScroll={3} slidesToShow={3}>
          <div className="app__carousel--slide-div mini_slide">
            <img
              className="app__carousel--image"
              src={carouselPictures[0]}
              alt="just another img"
            />
          </div>
          <div className="app__carousel--slide-div  mini_slide">
            <img
              className="app__carousel--image"
              src={carouselPictures[1]}
              alt="just another img"
            />
          </div>
          <div className="app__carousel--slide-div mini_slide">
            <img
              className="app__carousel--image"
              src={carouselPictures[2]}
              alt="just another img"
            />
          </div>
        </Slide>
      ) : (
        <Slide>
          <div className="app__carousel--slide-div">
            <img
              className="app__carousel--image"
              src={carouselPictures[0]}
              alt="just another img"
            />
          </div>
          <div className="app__carousel--slide-div">
            <img
              className="app__carousel--image"
              src={carouselPictures[1]}
              alt="just another img"
            />
          </div>
          <div className="app__carousel--slide-div">
            <img
              className="app__carousel--image"
              src={carouselPictures[2]}
              alt="just another img"
            />
          </div>
        </Slide>
      )}
    </div>
  );
};

export default Carousel;
