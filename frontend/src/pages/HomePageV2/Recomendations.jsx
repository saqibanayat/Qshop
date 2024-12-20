// import React from 'react'
import React, { Component } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import iphoneImage from '../../assets/homePage/ipone-image.png';
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
        top: "30%",
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
    slidesToShow: 5,
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
    <div className="lg:px-16 md:px-5 sm:px-3 px-5 w-full">
    <div className="flex justify-between items-start">
      <h1 className="text-Highlight text-2xl font-bold mb-5">Recomendaciones basadas en tus recientes búsquedas</h1>
      <h2 className="text-primary text-xl font-semibold flex gap-4 ">
        View All
        <IoIosArrowForward />
      </h2>
    </div>

    {/* <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2"> */}


    <div className="slider-container px-8 md:px-2">
      <Slider {...settings}>
      <div>
        <div className="bg-red-500 text-white py-2 px-6 rounded-lg mr-4 self-start font-semibold w-32 mt-8 absolute">
          -10% off
        </div>
        <img
         src={iphoneImage}
          alt=""
          className="w-[200px] h-[200px] bg-green-800  rounded-lg mt-5"
        />
        <div className="flex flex-col">
          <h2 className="text-black font-bold mt-4">Case iPhone 15 Pro Max</h2>
          <div className="flex items-center my-2">
            <div className="text-Highlight font-semibold">4.9</div>
            <div className="text-secondary ml-1 ">
              <FaStar className="h-5 w-5" />
            </div>
          </div>
          <p className="text-gray-600">Color</p>
          <div className="flex space-x-2 my-2">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            <div className="w-6 h-6 rounded-full bg-purple-500"></div>
          </div>
          <div className="flex gap-x-5">
            <p className="text-gray-600 line-through">S/500.00 PEN</p>
            <p className="text-secondary font-bold">S/450.00 PEN</p>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-red-500 text-white py-2 px-6 rounded-lg mr-4 self-start font-semibold w-32 mt-8 absolute">
          -10% off
        </div>
        <img
         src={iphoneImage}
          alt=""
          className="w-[200px] h-[200px] bg-green-800  rounded-lg mt-5"
        />
        <div className="flex flex-col">
          <h2 className="text-black font-bold mt-4">Case iPhone 15 Pro Max</h2>
          <div className="flex items-center my-2">
            <div className="text-Highlight font-semibold">4.9</div>
            <div className="text-secondary ml-1 ">
              <FaStar className="h-5 w-5" />
            </div>
          </div>
          <p className="text-gray-600">Color</p>
          <div className="flex space-x-2 my-2">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            <div className="w-6 h-6 rounded-full bg-purple-500"></div>
          </div>
          <div className="flex gap-x-5">
            <p className="text-gray-600 line-through">S/500.00 PEN</p>
            <p className="text-secondary font-bold">S/450.00 PEN</p>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-red-500 text-white py-2 px-6 rounded-lg mr-4 self-start font-semibold w-32 mt-8 absolute">
          -10% off
        </div>
        <img
         src={iphoneImage}
          alt=""
          className="w-[200px] h-[200px] bg-green-800  rounded-lg mt-5"
        />
        <div className="flex flex-col">
          <h2 className="text-black font-bold mt-4">Case iPhone 15 Pro Max</h2>
          <div className="flex items-center my-2">
            <div className="text-Highlight font-semibold">4.9</div>
            <div className="text-secondary ml-1 ">
              <FaStar className="h-5 w-5" />
            </div>
          </div>
          <p className="text-gray-600">Color</p>
          <div className="flex space-x-2 my-2">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            <div className="w-6 h-6 rounded-full bg-purple-500"></div>
          </div>
          <div className="flex gap-x-5">
            <p className="text-gray-600 line-through">S/500.00 PEN</p>
            <p className="text-secondary font-bold">S/450.00 PEN</p>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-red-500 text-white py-2 px-6 rounded-lg mr-4 self-start font-semibold w-32 mt-8 absolute">
          -10% off
        </div>
        <img
         src={iphoneImage}
          alt=""
          className="w-[200px] h-[200px] bg-green-800  rounded-lg mt-5"
        />
        <div className="flex flex-col">
          <h2 className="text-black font-bold mt-4">Case iPhone 15 Pro Max</h2>
          <div className="flex items-center my-2">
            <div className="text-Highlight font-semibold">4.9</div>
            <div className="text-secondary ml-1 ">
              <FaStar className="h-5 w-5" />
            </div>
          </div>
          <p className="text-gray-600">Color</p>
          <div className="flex space-x-2 my-2">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            <div className="w-6 h-6 rounded-full bg-purple-500"></div>
          </div>
          <div className="flex gap-x-5">
            <p className="text-gray-600 line-through">S/500.00 PEN</p>
            <p className="text-secondary font-bold">S/450.00 PEN</p>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-red-500 text-white py-2 px-6 rounded-lg mr-4 self-start font-semibold w-32 mt-8 absolute">
          -10% off
        </div>
        <img
         src={iphoneImage}
          alt=""
          className="w-[200px] h-[200px] bg-green-800  rounded-lg mt-5"
        />
        <div className="flex flex-col">
          <h2 className="text-black font-bold mt-4">Case iPhone 15 Pro Max</h2>
          <div className="flex items-center my-2">
            <div className="text-Highlight font-semibold">4.9</div>
            <div className="text-secondary ml-1 ">
              <FaStar className="h-5 w-5" />
            </div>
          </div>
          <p className="text-gray-600">Color</p>
          <div className="flex space-x-2 my-2">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            <div className="w-6 h-6 rounded-full bg-purple-500"></div>
          </div>
          <div className="flex gap-x-5">
            <p className="text-gray-600 line-through">S/500.00 PEN</p>
            <p className="text-secondary font-bold">S/450.00 PEN</p>
          </div>
        </div>
      </div>

      </Slider>
    </div>


    {/* </div> */}
  </div>
  )
}

export default Recomendations