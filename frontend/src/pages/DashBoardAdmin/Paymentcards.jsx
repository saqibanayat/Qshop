import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Paymentcards = () => {
  return (
    <div className="bg-white p-8 md:p-6 h-full">
      <div className="flex space-x-6">
        <Link to="/Paymentmethods">
          <button className="rounded-full shadow-lg p-3 text-[#1C98F7]">
            <ArrowLeft />
          </button>
        </Link>
        <h1 className="text-[#777777] font-Quicksand font-normal text-xl mb-14 text-center">
          Regresar
        </h1>
      </div>
      <p className="text-[#777777] font-Quicksand text-xl text-center">
        Agrega una tarjeta de crédito, débito dónde realizaremos el cargo de
        <br /> tus productos
      </p>
      {/* card form */}
      <form className="flex justify-center items-center mt-8">
        {/* grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* row  1*/}
          <div className="col-span-2 ">
            <input
              type="text"
              name="card-holder"
              id="card-holder"
              placeholder="Número de la tarjeta"
              className="w-full py-3 px-4 bg-gray-200 border border-gray-400 rounded-lg focus:outline-none focus:bg-white focus:border-gray-400"
            />
          </div>
          {/* row 2 col 1 */}
          <div className="">
            <input
              type="text"
              name="card-holder"
              id="card-holder"
              placeholder="MM / AA"
              className="w-full py-3 px-4 border bg-gray-200 border-gray-400 rounded-lg focus:outline-none focus:bg-white focus:border-gray-400"
            />
          </div>
          {/* row  2 col 2*/}
          <div className="">
            <input
              type="text"
              name="card-holder"
              id="card-holder"
              placeholder="CVV"
              className="w-full py-3 px-4 border bg-gray-200 border-gray-400 rounded-lg focus:outline-none focus:bg-white focus:border-gray-400"
            />
          </div>
          {/* row  3*/}
          <div className="col-span-2">
            <input
              type="text"
              name="card-holder"
              id="card-holder"
              placeholder="Usar cupón"
              className="w-full py-3 px-4 border bg-gray-200 border-gray-400 rounded-lg  focus:outline-none focus:bg-white focus:border-gray-400"
            />
          </div>
          {/* row  4*/}
          <div className="col-span-2 flex justify-center">
            <Link to="/Bitcoin">
              <button className="w-full bg-[#FF9900] text-white font-Quicksand font-normal text-xl py-3 px-4 rounded-lg focus:outline-none">
                Agregar tarjeta
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Paymentcards;
