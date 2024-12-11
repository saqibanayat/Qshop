import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Bitcoin = () => {
  return (
    <div className="bg-white p-8 md:p-16 h-full">
      <h1 className="text-[#1C98F7] font-Quicksand font-bold text-2xl md:text-4xl">
        Agregar Bitcoin
      </h1>
      <div className="bg-gray-200 flex flex-col md:flex-row justify-between items-center mt-10 p-4">
        <div className="flex space-x-4 items-center">
          <AiFillInfoCircle className="text-[#FF9900] h-8 w-8" />
          <p className="text-[#777777] font-Quicksand font-normal text-xl">
            La cantidad máxima que se puede gastar es{" "}
            <span className="font-bold">-0.00287867 BTC</span>
          </p>
        </div>

        <div className="flex items-center">
          <h1 className="text-[#777777] font-Quicksand font-normal text-xl">
            Leer más
          </h1>

          <FaArrowUpRightFromSquare className="text-[#FF9900]  h-6 w-6" />
        </div>
      </div>
      <div className="flex space-x-4 mt-10">
        <h1>Cantidad</h1>
        <h1>Enviar máximo</h1>
        <label className="relative inline-block mt-1">
          <input type="checkbox" className="peer invisible" />
          <span className="absolute top-0 left-0 w-9 h-5 cursor-pointer rounded-full bg-slate-200 border border-slate-300 transition-all duration-100 peer-checked:bg-sky-700"></span>
          <span className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full z-10 transition-all duration-100 peer-checked:translate-x-4"></span>
        </label>
      </div>
      <div className="flex items-center space-x-4 mt-10">
        <div className="flex items-center border border-gray-300 rounded p-2">
          <input type="text" placeholder="0" className="outline-none w-full" />
          <span className="ml-2 text-gray-400">BTC</span>
        </div>
        <span className="text-2xl">⇌</span>
        <div className="flex items-center border border-gray-300 rounded p-2">
          <input
            type="text"
            placeholder="0.00"
            className="outline-none w-full"
          />
          <span className="ml-2  text-gray-400">$</span>
        </div>
      </div>
      {/* currency converter */}
    </div>
  );
};

export default Bitcoin;
