import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import lock from "../Assets/lock.png";
import { Link } from "react-router-dom";

const ShippingDetails = () => {
  return (
    // <div className="bg-white p-4 overflow-x-auto">
    //   <div className="flex md:flex-row flex-col mt-8">
    //     <div className="md:ml-4 px-8 flex   md:w-2/3">
    //       <div className=" p-6">
    //         <div className="flex items-center mb-8 space-x-2">
    //           <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md">
    //             <IoMdArrowRoundBack className="text-[#1C98F7] text-lg" />
    //           </div>
    //           <p className=" hover:text-[#1C98F7] font-Quicksand">Regresar</p>
    //         </div>

    //         <div className="mb-4">
    //           <h2 className="text-4xl font-bold ">Número de pedido: 154789-7</h2>
    //           <h3 className="text-3xl text-[#1C98F7] mt-5">
    //             Llegada aproximada el 16 de enero
    //           </h3>
    //         </div>

    //         <div className="flex flex-col items-start relative">
    //           <div className="absolute left-2 top-3 bottom-[50px] w-0.5 bg-blue-500"></div>

    //           {/* Step 1 */}
    //           <div className="flex items-center mb-6">
    //             <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
    //             <p className="ml-4 text-gray-700">En proceso</p>
    //           </div>

    //           {/* Step 2 */}
    //           <div className="flex items-center mb-6">
    //             <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
    //             <p className="ml-4 text-gray-700">En camino a tu hogar</p>
    //           </div>

    //           {/* Step 3 */}
    //           <div className="flex items-center">
    //             <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
    //             <p className="ml-4 text-gray-700">Entregado</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* ========== */}
    //     <div className="md:border-l border-b border-gray-300 md:h-96 ml-0 mr-10 mb-10 mt-10 md:mt-0"></div>

    //     <div className="bg-white shadow-md rounded-lg p-6">
    //       <div className="border-t border-gray-200 pt-4">
    //         <p className="text-right text-gray-600 font-Quicksand text-lg md:text-md mt-2">
    //           Fecha de pedido: 13 de enero
    //         </p>
    //         <h1 className="text-right text-[#1C98F7] font-Quicksand text-2xl md:text-3xl">
    //           Dos productos
    //         </h1>
    //         <ul className="list-none">
    //           <li className="flex justify-between mb-2">
    //             <span>Airpods 5ta gen.</span>
    //             <span>$450.00 PEN</span>
    //           </li>
    //           <li className="flex justify-between mb-2">
    //             <span>Television LG...</span>
    //             <span>$1250.00 PEN</span>
    //           </li>
    //           <li className="flex justify-between mb-2">
    //             <span>Shipping cost</span>
    //             <span>$15.00 PEN</span>
    //           </li>
    //           <li className="flex justify-between mb-2">
    //             <span>Subtotal</span>
    //             <span>$1700.00 PEN</span>
    //           </li>
    //           <li className="flex justify-between mb-2">
    //             <span>Coupon</span>
    //             <span>25% discount</span>
    //           </li>
    //           <hr />
    //           <del className="text-left text-gray-600 font-Quicksand text-lg md:text-md mt-2">
    //             $151
    //           </del>
    //           <li className="flex justify-between mb-2">
    //             <span className="font-bold">Total</span>
    //             <span className="font-bold">$1515.00 PEN</span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>

    // </div>
    <div className="bg-white p-4 overflow-x-auto">
  <div className="flex md:flex-row flex-col mt-8">
    <div className="md:ml-4 px-8 flex md:w-2/3">
      <div className="p-6">
        <div className="flex items-center mb-8 space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md">
            <IoMdArrowRoundBack className="text-[#1C98F7] text-lg" />
          </div>
          <p className="hover:text-[#1C98F7] font-Quicksand text-lg">Regresar</p>
        </div>

        <div className="mb-4">
          <h2 className="text-4xl font-bold">Número de pedido: 154789-7</h2>
          <h3 className="text-3xl text-[#1C98F7] mt-5">
            Llegada aproximada el 16 de enero
          </h3>
        </div>

        <div className="flex flex-col items-start relative">
          <div className="absolute left-2 top-3 bottom-[50px] w-0.5 bg-blue-500"></div>
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <p className="ml-4 text-gray-700">En proceso</p>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <p className="ml-4 text-gray-700">En camino a tu hogar</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <p className="ml-4 text-gray-700">Entregado</p>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="md:border-l border-b border-gray-300 md:h-96 ml-0 mr-10 mb-10 mt-10 md:mt-0"></div>

    {/* Updated Right-side Card */}
    <div className="bg-gray-100 shadow-md rounded-lg p-6 md:w-1/3">
      <div className="border-t border-gray-200 pt-4">
        <p className="text-right text-gray-600 font-Quicksand text-lg md:text-md mt-2">
          Fecha de pedido: 13 de enero
        </p>
        <h1 className="text-right text-[#1C98F7] font-Quicksand text-2xl md:text-3xl">
          Dos productos
        </h1>
        <ul className="list-none">
          <li className="flex justify-between mb-2">
            <span>Airpods 5ta gen.</span>
            <span className="text-[#1C98F7]">$450.00 PEN</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Television LG...</span>
            <span className="text-[#1C98F7]">$1250.00 PEN</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Shipping cost</span>
            <span className="text-[#1C98F7]">$15.00 PEN</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="text-[#1C98F7]">$1700.00 PEN</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Coupon</span>
            <span className="text-[#1C98F7]">25% discount</span>
          </li>
          <hr />
          <del className="text-left text-gray-600 font-Quicksand text-lg md:text-md mt-2">
            $151
          </del>
          <li className="flex justify-between mb-2">
            <span className="font-bold">Total</span>
            <span className="font-bold text-[#1C98F7]">$1515.00 PEN</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <br />
      <hr />
      <p className="text-center text-[#1C98F7] font-Quicksand text-2xl md:text-3xl mt-6">
        Your Heading Text Here
      </p>

      <div className="flex mt-10 flex-row justify-between items-center">
        <div className="flex flex-col items-center">
          <img src={lock} alt="lock" />
          <h1 className="text-gray-400 font-Quicksand text-lg md:text-xl text-center">
            protegemos tus
          </h1>
        </div>

        {/* Lock Icon 2 */}
        <div className="flex flex-col items-center">
          <img src={lock} alt="lock" />
          <h1 className="text-gray-400 font-Quicksand text-lg md:text-xl text-center">
            protegemos tus
          </h1>
        </div>

        {/* Lock Icon 3 */}
        <div className="flex flex-col items-center">
          <img src={lock} alt="lock" />
          <h1 className="text-gray-400 font-Quicksand text-lg md:text-xl text-center">
            protegemos tus
          </h1>
        </div>
      </div>
</div>

  );
};

export default ShippingDetails;
