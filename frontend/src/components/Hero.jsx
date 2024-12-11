import React from "react";
import Sliderr from "./Sliderr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {ReactComponent as LogoSvg} from '../assets/logo.svg'
const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    arrows: false
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 px-5 md:px-16 md:py-16 py-6  ">
      {/* left side  */}
      <div className=" col-span-3">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
            <Sliderr />  
            </div>
            <div>
            <Sliderr />  
            </div>
            <div>
            <Sliderr />  
            </div>
          </Slider>
        </div>
      </div>

      {/* rigth side  */}
      <div className="  bg-white rounded-2xl flex flex-col gap-4 justify-center items-center p-4 shadow-md mt-9 md:mt-0">
        <LogoSvg/>
        <h2 className="text-[#FF8C00] font-semibold text-lg">
          ¡Personaliza tú experiencia!
        </h2>
        <p className="text-gray-600 font-semibold text-sm">
          Mejoremos tú experiencia en Qshop,
          <span className="text-[#FF8C00] underline">inicia sesión</span> o
          <span className="text-[#FF8C00] underline">una cuenta</span> con
          nosotros.
        </p>
        <button className="bg-[#FF8C00] rounded-2xl text-white font-semibold text-xl py-1.5 px-4 shadow">
          Crear una cuenta
        </button>
        <button className="bg-white rounded-2xl text-[#FF8C00] font-semibold text-xl py-1.5 px-4 shadow">
          Iniciar sesión
        </button>
        <p className="text-gray-600 underline text-sm mt-4">
          Términos y Condiciones
        </p>
      </div>
    </div>
  );
};

export default Hero;
