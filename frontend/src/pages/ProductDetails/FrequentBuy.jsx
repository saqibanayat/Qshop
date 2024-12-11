import React from "react";
import { FaPlus } from "react-icons/fa";

const FrequentBuy = () => {
  return (
    <div className="md:px-20 px-5 ">
      <div className="text-blue-400 font-bold text-3xl mb-8">
        Acerca de este artículo
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* main div 1 */}
        <div className="flex justify-between items-center col-span-7 ">

          {/* first div  */}
          <div>
            <img
              src=""
              alt=""
              className="w-64 my-5 h-48 bg-green-800 rounded-2xl"
            />
            <p
              className="text-gray-400 text-lg font-semibold mb-5"
              style={{ maxWidth: "260px" }}
            >
              Apple iMac MK442LL/A 21.5- Pulgadas computadora
            </p>
            <h3 className="text-xl md:text-5xl lg:text-3xl font-semibold text-blue-600 md:my-12">
              S/4,500.00 PEN
            </h3>
          </div>
          {/* plus icon */}
          <div className="flex items-center justify-center">
            <FaPlus className="text-gray-400 text-xl md:mb-52 mb-44 md:mx-0 mx-4" />
          </div>
          {/* second div  */}
          <div>
            <img
              src=""
              alt=""
              className="w-64 my-5 h-48 bg-green-800 rounded-2xl"
            />
            <p
              className="text-gray-400 text-lg font-semibold mb-5"
              style={{ maxWidth: "260px" }}
            >
              Apple iMac MK442LL/A 21.5- Pulgadas computadora
            </p>
            <h3 className="text-xl md:text-5xl lg:text-3xl font-semibold text-blue-600 md:my-12">
              S/4,500.00 PEN
            </h3>
          </div>
        </div>

        {/* main div 2  */}
        {/* third div  */}
        <div className="col-span-5 md:ml-36 mt-6 w">
          <h2 className="md:text-4xl lg:text-3xl text-2xl font-bold text-gray-500 mb-8">
            Llévatelos juntos por
          </h2>

          <h3 className="text-blue-600 font-semibold md:text-3xl lg:text-4xl text-3xl  mb-8">
            S/4,500.00 PEN
          </h3>
          <button className="px-8 my-5 py-3 rounded-2xl text-white text-xl font-semibold bg-secondary">
            Agregar ambos al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrequentBuy;