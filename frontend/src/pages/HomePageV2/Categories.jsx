import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

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
  

const Categories = () => {
    const settings = {
        dots: true,
        infinite: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 4000,
        rtl: true,
        slidesToShow: 7,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
    

  return (
    <>
    <div className="mb-20 md:px-24 px-5">

      <h1 className="text-Highlight  text-3xl m-12 md:px-10 px-5 font-bold">Categories</h1>
    {/* <div className='flex justify-between px-20 md:mb-16 mb-5'> */}

    <div className="slider-container  px-8 md:px-0">
      <Slider {...settings}>

        <div className=' flex-row items-center justify-center place-content-center grid '>
            <div className='rounded-full h-[120px] w-[120px] bg-gray-300 ml-3'>
                <img src="" alt="" />
            </div>
            <h2 className='text-[#777777] text-xl font-medium my-6'>Lorem, ipsum lor.</h2>
        </div>

        
        <div className=' flex-row items-center justify-center place-content-center grid '>
            <div className='rounded-full h-[120px] w-[120px] bg-gray-300 ml-3'>
                <img src="" alt="" />
            </div>
            <h2 className='text-[#777777] text-xl font-medium my-6'>Lorem, ipsum lor.</h2>
        </div>

        <div className=' flex-row items-center justify-center place-content-center grid '>
            <div className='rounded-full h-[120px] w-[120px] bg-gray-300 ml-3'>
                <img src="" alt="" />
            </div>
            <h2 className='text-[#777777] text-xl font-medium my-6'>Lorem, ipsum lor.</h2>
        </div>

        <div className=' flex-row items-center justify-center place-content-center grid '>
            <div className='rounded-full h-[120px] w-[120px] bg-gray-300 ml-3'>
                <img src="" alt="" />
            </div>
            <h2 className='text-[#777777] text-xl font-medium my-6'>Lorem, ipsum lor.</h2>
        </div>

        <div className=' flex-row items-center justify-center place-content-center grid '>
            <div className='rounded-full h-[120px] w-[120px] bg-gray-300 ml-3'>
                <img src="" alt="" />
            </div>
            <h2 className='text-[#777777] text-xl font-medium my-6'>Lorem, ipsum lor.</h2>
        </div>

        <div className=' flex-row items-center justify-center place-content-center grid '>
            <div className='rounded-full h-[120px] w-[120px] bg-gray-300 ml-3'>
                <img src="" alt="" />
            </div>
            <h2 className='text-[#777777] text-xl font-medium my-6'>Lorem, ipsum lor.</h2>
        </div>

        <div className=' flex-row items-center justify-center place-content-center grid '>
            <div className='rounded-full h-[120px] w-[120px] bg-gray-300 ml-3'>
                <img src="" alt="" />
            </div>
            <h2 className='text-[#777777] text-xl font-medium my-6'>Lorem, ipsum lor.</h2>
        </div>

</Slider>
    </div>
    </div>
    </>

  )
}

export default Categories