import React from "react";
import SliderImage from '../assets/homePage/hero_image.png'
const Sliderr = () => {
  return (
    <div className="flex ">
     <img
          src={SliderImage}
          className="w-[40%] bg-green-900 rounded-l-2xl md:h-[360px] h-[250px]"
          alt=""
        />

        <div className="bg-[#1E1E1E] w-[60%] rounded-r-2xl relative flex flex-col gap-4 justify-center items-center md:h-[360px] h-[250px] ">
        <button className="md:px-4 md:py-3 p-2 rounded- text-white md:text-xl md:font-semibold bg-[#EF7B00] md:w-44 ">
            Mejores precios
          </button>

          <button className="p-2 md:px-4 md:py-4 rounded text-white md:text-3xl md:font-semibold bg-[#004E89] md:w-64">
            Ciber monday
          </button>

          <div className="text-white font-semibold md:text-3xl ">
            Smartwatch Swiss <br />
            Code Square II unisex
          </div>

          <button className="md:px-4 md:py-2 p-2 rounded-2xl text-white md:text-xl md:font-semibold bg-[#EF7B00] md:w-48">
            Ver ofertas
          </button>
        </div>
    </div>
  );
};

export default Sliderr;
