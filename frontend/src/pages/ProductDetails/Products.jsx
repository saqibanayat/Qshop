// import React from 'react'
import React, { Component } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import PrductCard from '../../components/ProductCard'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{
      ...style,
      display: "block",
      background: "Highlight",
      marginRight: "24px",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      position: "absolute",
      right: "-70px",
      top: "28%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      zIndex: 1,
    }}
    onClick={onClick}
  >
   <IoIosArrowForward />
  </div>
);
}


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "Highlight",
        marginLeft: "24px",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        position: "absolute",
        left: "-60px",
        top: "28%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    >
     <IoIosArrowBack />
    </div>
  );
}





const Recomendations = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="lg:px-32 md:px-5 sm:px-3 px-10 w-full ">
    <div className="text-blue-400 font-bold text-3xl mb-20">
         Productos relacionados a "Apple iMac..."
     </div>




    <div className="slider-container ">
      <Slider {...settings}>

     <PrductCard />
     <PrductCard />
     <PrductCard />
     <PrductCard />

   

      </Slider>
    </div>


    {/* </div> */}
  </div>
  )
}

export default Recomendations