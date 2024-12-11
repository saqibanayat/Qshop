import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { SiSamsung } from "react-icons/si";
import { FaStar } from "react-icons/fa6";
import brandImage1 from '../../assets/homePage/seller-brand.png'
import brandImage2 from '../../assets/homePage/seller-brand2.png'
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
        // display: "flex",
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
        // display: "flex",
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

const Venders = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
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
    <>
      <h1 className="text-Highlight  text-3xl m-12 md:px-10 px-5 font-bold ">
        Top Venders
      </h1>
      <div className=" md:px-20 px-5  mb-12">
        <div className="slider-container px-2 md:px-0">
          <Slider {...settings}>
            <div className="h-40 w-full mb-44 ">
              <div className="border border-gray-300 rounded-xl">
                <div >
                  <img className=" h-32 rounded-t-xl" src={brandImage1} alt="" srcset="" />
                </div>

                <div className="p-6">
                  <div className="flex justify-start gap-6">
                    <div className="bg-white p-4 border border-gray-300 rounded-full flex items-center  w-20 h-20 justify-center absolute -mt-12">
                      <FaApple className="text-black w-8 h-8" />
                    </div>

                    <div className="ml-24 -mt-6">
                      <h2 className="text-highlight text-center font-bold text-xl -mb-0.5 text-Highlight">
                        Apple
                      </h2>
                      <div className="flex items-center justify-center mb-14">
                        <p className="text-Highlight font-semibold">4.9</p>
                        <div className="text-secondary ml-1 flex items-center">
                          <FaStar className="h-5 w-5 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between space-x-4">
                    <div className="bg-blue-100 text-primary py-2 px-4 rounded-lg">
                      +10mil reviews
                    </div>
                    <div className="bg-blue-100 text-primary py-2 px-4 rounded-lg">
                      450 Products
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-40 w-full mb-44 ">
              <div className="border border-gray-300 rounded-xl">
              <div >
                  <img className=" h-32 rounded-t-xl" src={brandImage2} alt="" srcset="" />
                </div>

                <div className="p-6">
                  <div className="flex justify-start gap-6">
                    <div className="bg-white p-4 border border-gray-300 rounded-full flex items-center  w-20 h-20 justify-center absolute -mt-12">
                    <SiSamsung className="text-primary w-12 h-12" />
                    </div>

                    <div className="ml-24 -mt-6">
                      <h2 className="text-highlight text-center font-bold text-xl -mb-0.5 text-Highlight">
                        Sumsung
                      </h2>
                      <div className="flex items-center justify-center mb-14">
                        <p className="text-Highlight font-semibold">4.9</p>
                        <div className="text-secondary ml-1 flex items-center">
                          <FaStar className="h-5 w-5 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between space-x-4">
                    <div className="bg-blue-100 text-primary py-2 px-4 rounded-lg">
                      +10mil reviews
                    </div>
                    <div className="bg-blue-100 text-primary py-2 px-4 rounded-lg">
                      450 Products
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-40 w-full mb-44 ">
              <div className="border border-gray-300 rounded-xl">
              <div >
                  <img className=" h-32 rounded-t-xl" src={brandImage1} alt="" srcset="" />
                </div>

                <div className="p-6">
                  <div className="flex justify-start gap-6">
                    <div className="bg-white p-4 border border-gray-300 rounded-full flex items-center  w-20 h-20 justify-center absolute -mt-12">
                      <FaApple className="text-black w-8 h-8" />
                    </div>

                    <div className="ml-24 -mt-6">
                      <h2 className="text-highlight text-center font-bold text-xl -mb-0.5 text-Highlight">
                        Apple
                      </h2>
                      <div className="flex items-center justify-center mb-14">
                        <p className="text-Highlight font-semibold">4.9</p>
                        <div className="text-secondary ml-1 flex items-center">
                          <FaStar className="h-5 w-5 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between space-x-4">
                    <div className="bg-blue-100 text-primary py-2 px-4 rounded-lg">
                      +10mil reviews
                    </div>
                    <div className="bg-blue-100 text-primary py-2 px-4 rounded-lg">
                      450 Products
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Venders;
