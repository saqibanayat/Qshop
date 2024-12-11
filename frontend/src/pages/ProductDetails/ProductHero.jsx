// import React from "react";
import { FaStar, FaShippingFast } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductHero = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-24 gap-12 px-4 md:px-16 py-12 justify-items-center">
        {/* Left side */}
        <div className="flex justify-center">
        {/* <Carousel
          showArrows={false}
          showStatus={false}
          thumbWidth={100} // Custom width for thumbs
          thumbHeight={10}
          useKeyboardArrows={false}
        > */}
          <div className="flex justify-center">

            <img
              src=""
              height="100"
              // alt="product Image"
              className="md:w-[394px] w-[300px] md:h-[460px] h-[300px] bg-green-900 rounded-2xl"
            />
          </div>
          {/* <div className="flex justify-center">
            <img
              src=""
              // alt="product Image"
              className="md:w-[394px] w-[300px] md:h-[460px] h-[300px] bg-blue-900 rounded-2xl"
            />
          </div>
          <div className="flex justify-center">
            <img
              src=""
              // alt="product Image"
              className="md:w-[394px] w-[00px] md:h-[460px] h-[300px] bg-red-900 rounded-2xl"
            />
          </div>
          <div className="flex justify-center">
            <img
              src=""
              // alt="product Image"
              className="md:w-[394px] w-[300px] md:h-[460px] h-[300px] bg-orange-900 rounded-2xl"
            />
          </div> */}
          </div>
        {/* </Carousel> */}

        {/* Center side */}
        <div className="md:px-6">
          <div className="flex gap-x-3 text-secondary  justify-end text-3xl items-center">
            <IoShareSocialSharp />
            <p className="md:text-2xl text-base text-end font-semibold text-gray-500 lg:text-xl">
              Compartir artículo
            </p>
          </div>
          <hr className="bg-gray-500  w-full mt-3" />
          <h2 className="md:text-3xl lg:text-2xl text-2xl font-bold text-gray-700 mb-12 mt-7 ">
            Apple iMac MK442LL/A 21.5- Pulgadas computadora
          </h2>
          <div className="flex items-center mt-2">
            <span className="ml-2 text-2xl font-bold text-gray-700">4.9</span>
            <FaStar className="text-secondary w-9 h-9 ml-7" />
            <span className="ml-7 md:text-xl text-xl font-semibold text-gray-500">
              (1,155 calificaciones)
            </span>
          </div>
          <div className="flex items-center mt-12 text-2xl md:text-4\3xl">
            <h2 className="text-gray-700 mr-7 font-bold">Precio:</h2>
            <h3 className="text-blue-600 font-semibold md:text-4xl lg:text-2xl text-3xl ">
              S/4,500.00 PEN
            </h3>
          </div>
          <div className="md:mt-10 mt-5 space-y-4 md:space-y-7 lg:space-y-4">
            {[
              "Entrega rápida en todo el país",
              "Entrega rápida en todo el país",
              "Entrega rápida en todo el país",
              "Entrega rápida en todo el país",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center md:text-2xl lg:text-xl text-lg font-semibold"
              >
                <FaShippingFast className="text-secondary w-10 h-10 md:mr-10 mr-5" />
                <h3 className="text-gray-500">{text}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="border border-gray-400 w-full max-w-[606px]  md:h-[625px] h-[400px] p-8 flex flex-col justify-between items-start">
          <h2 className="md:text-4xl lg:text-3xl text-2xl font-bold text-gray-500">
            Reacondicionada - Excelentes condiciones
          </h2>

          <h3 className="text-3xl md:text-5xl lg:text-3xl font-semibold text-blue-600">
            S/4,500.00 PEN
          </h3>

          <h3 className="md:text-3xl text-xl lg:text-2xl font-bold text-green-500">
            Disponible
          </h3>

          <p className="md:text-xl text-base font-semibold text-gray-500 lg:text-base">
            Costo de envío: S/150.00 PEN
          </p>

          <button className="bg-secondary text-white md:px-6 px-3 md:py-3 py-1 rounded-2xl md:text-3xl text-xl font-bold lg:text-xl">
            Agregar al carrito
          </button>
          <button className="bg-yellow-400 text-white md:px-6 px-3 md:py-3 py-1 rounded-2xl md:text-3xl text-xl font-bold lg:text-xl">
            Comprar ahora
          </button>

          <p className="md:text-xl text-base font-semibold text-gray-500  lg:text-base">
            Envío desde: Lima, Perú <br />
            Vendido por: José Rodríguez
          </p>
        </div>
      </div>
      <hr className="border-gray-300 md:w-3/5 md:block hidden -mt-10 ml-20 " />
    </>
  );
};

export default ProductHero;
