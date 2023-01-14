import React from "react";
import "./style.scss";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Slider = () => {
  const heroPhotos = [
    {
      id: "1s",
      category: "hero-content",
      img: "./hero-photos/1.jpeg",
      name: "slider photo",
      // size:
    },
    {
      id: " 2s",
      category: "hero-content",
      img: "./hero-photos/2.jpeg",
      name: "slider photo",
    },
    {
      id: "3s",
      category: "hero-content",
      img: "./hero-photos/3.jpeg",
      name: "slider photo",
    },
    {
      id: "4s",
      category: "hero-content",
      img: "./hero-photos/4.jpeg",
      name: "slider photo",
    },
    {
      id: "5s",
      category: "hero-content",
      img: "./hero-photos/5.jpeg",
      name: "slider photo",
    },
  ];

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="slider">
          <a href="/#" className="before-btn btn">
            <BiChevronLeft />{" "}
          </a>
          <a href="/#" className="after-btn btn">
            {" "}
            <BiChevronRight />{" "}
          </a>
          <div className="image-box">
            {heroPhotos.map((photo, index) => {
              return (
                <div className="slide" key={index}>
                  <img src={photo.img} alt={photo.name} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
