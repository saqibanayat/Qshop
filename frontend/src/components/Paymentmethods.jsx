// import React from "react";
// import visa from "../Assets/visa.png";
// import bitcoin from "../Assets/bitcoin.png";
// import paypal from "../Assets/paypal.png";
// import downarrow from "../Assets/downarrow.png";
// import lock from "../Assets/lock.png";

// const Payment = () => {
//   return (
//     <div className="bg-white p-4">
//       <h1 className="text-[#1C98F7] font-Quicksand font-semibold ml-16 text-3xl">
//         Formas de pago
//       </h1>
//       <div className="ml-9 mt-8 ">
//         <h1 className="ml-6 mb-6 text-gray-400 font-Quicksand font-medium text-xl">
//           Mis tarjetas
//         </h1>
//       </div>
//       <div className="flex mt-8">
//         {/* div 1 */}
//         {/* form 1 */}
//         <div className="ml-4 px-8">
//           {/* Payment Method Dropdown */}
//           <div className="relative mt-1 ">
//             <input
//               type="email"
//               id="input-6"
//               className="block  ml-4 rounded-lg h-10 pl-16 px-28 py-5  mt-1 text-sm text-gray-700 border focus:outline-none shadow-sm focus:border-blue-500"
//               placeholder="Débito, crédito"
//             />
//             <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-10">
//               <img src={visa} alt="visa" />
//             </span>
//             <span className="absolute inset-y-0 right-0 flex items-center justify-center ml-10">
//               <img src={downarrow} alt="downarrow" />
//             </span>
//           </div>
//           <h1 className="text-[#FE8300] mb-8 mt-10 ml-4 font-Quicksand font-bold text-xl">
//             Agregar Método de Pago
//           </h1>
//           {/* input  1*/}
//           <div className="relative mt-1 ">
//             <input
//               type="email"
//               id="input-6"
//               className="block  ml-4 rounded-lg h-10 pl-16 px-28 py-5  mt-1 text-sm text-gray-700 border focus:outline-none shadow-sm focus:border-blue-500"
//               placeholder="Débito, crédito"
//             />
//             <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-10">
//               <img src={visa} alt="visa" />
//             </span>
//             <span className="absolute inset-y-0 right-0 flex items-center justify-center ml-10">
//               <img src={downarrow} alt="downarrow" />
//             </span>
//           </div>
//           {/* input  2*/}
//           <div className="relative mt-1 ">
//             <input
//               type="email"
//               id="input-6"
//               className="block  ml-4 rounded-lg h-10 pl-16 px-28 py-5  mt-1 text-sm text-gray-700 border focus:outline-none shadow-sm focus:border-blue-500"
//               placeholder="paypal"
//             />
//             <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-10">
//               <img src={paypal} alt="paypal" />
//             </span>
//             <span className="absolute inset-y-0 right-0 flex items-center justify-center ml-10">
//               <img src={downarrow} alt="downarrow" />
//             </span>
//           </div>
//           {/* input  3*/}
//           <div className="relative mt-1 ">
//             <input
//               type="email"
//               id="input-6"
//               className="block  ml-4 rounded-lg h-10 pl-16 px-28 py-5  mt-1 text-sm text-gray-700 border focus:outline-none shadow-sm focus:border-blue-500"
//               placeholder="bitcoin"
//             />
//             <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-10">
//               <img src={bitcoin} alt="bitcoin" />
//             </span>
//             <span className="absolute inset-y-0 right-0 flex items-center justify-center ml-10">
//               <img src={downarrow} alt="downarrow" />
//             </span>
//           </div>
//           {/* input  4*/}
//           <div className="relative mt-1 ">
//             <input
//               type="email"
//               id="input-6"
//               className="block  ml-4 rounded-lg h-10 pl-16 px-28 py-5  mt-1 text-sm text-gray-700 border focus:outline-none shadow-sm focus:border-blue-500"
//               placeholder="Yape"
//             />

//             <span className="absolute inset-y-0 right-0 flex items-center justify-center ml-10">
//               <img src={downarrow} alt="downarrow" />
//             </span>
//           </div>
//           {/* input  5*/}
//           <div className="relative mt-1 ">
//             <input
//               type="email"
//               id="input-6"
//               className="block  ml-4 rounded-lg h-10 pl-16 px-28 py-5  mt-1 text-sm text-gray-700 border focus:outline-none shadow-sm focus:border-blue-500"
//               placeholder="Plin"
//             />

//             <span className="absolute inset-y-0 right-0 flex items-center justify-center ml-10">
//               <img src={downarrow} alt="downarrow" />
//             </span>
//           </div>
//         </div>
//         {/* div 2 */}
//         <div className="border-l border-gray-300 h-96 mr-10"></div>
//         {/* div 3 */}
//         <div className=" inline-block">
//           <div className="bg-[#004E89] rounded-lg px-16 py-4">
//             <h1 className="text-white">Qshop Cash</h1>
//             <h1 className="text-white">PEN S/2,500.00</h1>
//             <button className="text-white bg-[#FFD100] mt-3 px-6 py-2 rounded-lg">
//               Recargar saldo
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* lock */}
//       <div className="flex mt-10 flex-col justify-center items-center">
//         <img src={lock} alt="lock" />
//         <h1 className="text-gray-400 font-Quicksand text-xl">
//           Pago 100% seguro, protegemos tus datos
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Payment;

import React from "react";
import visa from "../Assets/visa.png";
import bitcoin from "../Assets/bitcoin.png";
import paypal from "../Assets/paypal.png";
import downarrow from "../Assets/downarrow.png";
import lock from "../Assets/lock.png";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="bg-white p-4 overflow-x-auto">
      <h1 className="text-[#1C98F7] font-Quicksand font-semibold md:ml-16 text-2xl md:text-3xl">
        Formas de pago
      </h1>
      <div className="md:ml-9 mt-8 ">
        <h1 className="ml-6 text-gray-400 text-start font-Quicksand font-medium text-lg md:text-xl">
          Mis tarjetas
        </h1>
      </div>
      <div className="flex md:flex-row flex-col mt-8">
        {/* div 1 */}
        {/* form 1 */}
        <div className="md:ml-4 px-8 flex flex-col justify-center items-center md:w-2/3">
          {/* Payment Method Dropdown */}
          <div className="relative mt-1 md:w-96 w-60 ">
            <input
              type="email"
              id="input-6"
              className="block w-full rounded-lg h-10 md:h-12 md:pl-12 pl-8 pr-8 text-xs md:text-base text-gray-700 border focus:outline-none shadow-sm focus:border-blue-500"
              placeholder="Débito, crédito"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <img src={visa} alt="visa" className="md:h-6 md:w-8 h-5 w-5" />
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <img
                src={downarrow}
                alt="downarrow"
                className="md:h-8 md:w-8 h-5 w-5"
              />
            </span>
          </div>
          <h1 className="text-[#FE8300] mb-8 mt-10 md:ml-4 font-Quicksand font-bold text-base md:text-xl">
            Agregar Método de Pago
          </h1>
          {/* Input 1 */}
          <div className="relative mt-1 md:w-96 w-60">
            <input
              type="email"
              id="input-1"
              className="block w-full rounded-lg h-10 md:h-12 md:pl-12 pl-8 pr-8 text-xs md:text-base text-gray-700 border focus:outline-none shadow-sm focus:border-blue-500"
              placeholder="Débito, crédito"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <img src={visa} alt="visa" className="md:h-6 md:w-8 h-5 w-5" />
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <img
                src={downarrow}
                alt="downarrow"
                className="md:h-8 md:w-8 h-5 w-5"
              />
            </span>
          </div>

          {/* Input 2 */}
          <div className="relative mt-1 md:w-96 w-60">
            <input
              type="email"
              id="input-2"
              className="block w-full rounded-lg h-10 md:h-12 md:pl-12 pl-8 pr-8 text-xs md:text-base text-gray-700 border focus:outline-none shadow-sm focus:border-blue-500"
              placeholder="paypal"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <img
                src={paypal}
                alt="paypal"
                className="md:h-6 md:w-8 h-5 w-5"
              />
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <img
                src={downarrow}
                alt="downarrow"
                className="md:h-8 md:w-8 h-5 w-5"
              />
            </span>
          </div>

          {/* Input 3 */}
          <div className="relative mt-1 md:w-96 w-60">
            <input
              type="email"
              id="input-3"
              className="block w-full rounded-lg h-10 md:h-12 md:pl-12 pl-8 pr-8 text-xs md:text-base text-gray-700 border focus:outline-none shadow-sm focus:border-blue-500"
              placeholder="bitcoin"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <img
                src={bitcoin}
                alt="bitcoin"
                className="md:h-6 md:w-8 h-5 w-5"
              />
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <img
                src={downarrow}
                alt="downarrow"
                className="md:h-8 md:w-8 h-5 w-5"
              />
            </span>
          </div>

          {/* Input 4 */}
          <div className="relative mt-1 md:w-96 w-60">
            <input
              type="email"
              id="input-4"
              className="block w-full rounded-lg h-10 md:h-12 md:pl-12 pl-8 pr-8 text-xs md:text-base text-gray-700 border focus:outline-none shadow-sm focus:border-blue-500"
              placeholder="Yape"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <img
                src={downarrow}
                alt="downarrow"
                className="md:h-8 md:w-8 h-5 w-5"
              />
            </span>
          </div>

          {/* Input 5 */}
          <div className="relative mt-1 md:w-96 w-60">
            <input
              type="email"
              id="input-5"
              className="block w-full rounded-lg h-10 md:h-12 md:pl-12 pl-8 pr-8 text-xs md:text-base text-gray-700 border focus:outline-none shadow-sm focus:border-blue-500"
              placeholder="Plin"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <img
                src={downarrow}
                alt="downarrow"
                className="md:h-8 md:w-8 h-5 w-5"
              />
            </span>
          </div>
        </div>
        {/* div 2 */}
        <div className="md:border-l border-b border-gray-300 md:h-96 ml-0 mr-10 mb-10 mt-10 md:mt-0"></div>
        {/* div 3 */}
        <div className="md:inline-block flex justify-center items-center  md:w-1/3 px-6">
          <div className="bg-[#004E89] rounded-lg px-8 py-4">
            <h1 className="text-white">Qshop Cash</h1>
            <h1 className="text-white">PEN S/2,500.00</h1>
            <Link to="/Paymentcards">
              <button className="text-white bg-[#FFD100] mt-3 px-6 py-2 rounded-lg">
                Recargar saldo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* lock */}
      <div className="flex mt-10 flex-col justify-center items-center">
        <img src={lock} alt="lock" />
        <h1 className="text-gray-400 font-Quicksand text-lg md:text-xl">
          Pago 100% seguro, protegemos tus datos
        </h1>
      </div>
    </div>
  );
};

export default Payment;
