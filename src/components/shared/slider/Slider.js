import React from "react";
import "./style.scss";
import {
    AiFillCaretLeft,
    AiFillCaretRight
  } from "react-icons/ai";

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
      <div className="container">
        <div className="slider">
        <a href="/#" className="before-btn btn"><AiFillCaretLeft/> </a>
        <a href="/#" className="after-btn btn"> <AiFillCaretRight/> </a>
           <div className="image-box">
{/* 
           <div className="slide" >
            <img src="./hero-photos/1.jpeg" alt="slider-photo"/>
           </div>
           <div className="slide" >
            <img src="./hero-photos/2.jpeg" alt="slider-photo"/>
           </div> */}
          {heroPhotos.map((photo) => {
            return (
              <div className="slide" >
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
