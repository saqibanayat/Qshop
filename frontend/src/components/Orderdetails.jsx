// import { ArrowLeft } from "lucide-react";
// import chat from "../Assets/chat.png";
// import help from "../Assets/help.png";
// import headphone from "../Assets/headphone.png";
// import { Link } from "react-router-dom";

// const Orderdetails = () => {
//   return (
//     <div className="bg-white p-6">
//       <div className="flex space-x-6">
//         <Link
//           to="/orderstatus"
//           className="rounded-full shadow-lg p-3 text-[#1C98F7]"
//         >
//           <ArrowLeft />
//         </Link>

//         {/* <button className="rounded-full shadow-lg p-3 text-[#1C98F7]">
//           <ArrowLeft />
//         </button> */}
//         <h1 className="text-[#777777] font-Quicksand font-normal text-xl">
//           Regresar
//         </h1>
//       </div>
//       <div className="flex justify-evenly space-x-36 ">
//         <div className="">
//           <h1 className="text-[#777777] font-Quicksand font-semibold text-xl mt-8">
//             Número de pedido: 154789-7
//           </h1>
//           <h1 className="text-[#1C98F7] font-Quicksand font-semibold text-base mt-2">
//             Llegada aproximada el 16 de enero
//           </h1>
//           {/* buttons and circles code */}
//           <div className="flex mt-8 space-x-10">
//             <div className="flex flex-col items-center">
//               <div className="w-8 h-8 rounded-full bg-[#1C98F7]"></div>
//               <div className="w-0.5 h-16 bg-[#1C98F7]"></div>
//               <div className="w-8 h-8 rounded-full bg-[#1C98F7]"></div>
//               <div className="w-0.5 h-16 bg-[#C0C0C0]"></div>
//               <div className="w-8 h-8 rounded-full bg-[#C0C0C0]"></div>
//             </div>
//             <div className="flex flex-col justify-center ml-4">
//               <h1 className="text-[#1C98F7] font-Quicksand font-semibold text-lg">
//                 En proceso
//               </h1>
//               <div className="h-16"></div>
//               <h1 className="text-[#1C98F7] font-Quicksand font-semibold text-lg">
//                 En camino a tu hogar
//               </h1>
//               <div className="h-16"></div>
//               <h1 className="text-[#777777] font-Quicksand font-semibold text-lg">
//                 Entregado
//               </h1>
//             </div>
//           </div>
//         </div>
//         {/* card */}
//         <div className="bg-[#FAFAFA] p-8 rounded-xl">
//           <h1 className="text-[#777777] font-Quicksand font-normal">
//             Fecha de pedido: 13 de enero
//           </h1>
//           <div className="flex justify-end items-end">
//             <h2 className="text-[#1C98F7] font-Quicksand font-semibold text-lg mb-32">
//               Dos productos
//             </h2>
//           </div>

//           <div className="flex space-x-8 justify-between mb-3">
//             <h1 className="text-[#777777] font-Quicksand text-base">
//               Airpods 5ta ge...
//             </h1>
//             <h1 className="text-[#1C98F7] font-Quicksand text-base">
//               S/450.00 PEN
//             </h1>
//           </div>
//           <div className="flex space-x-8 justify-between mb-3">
//             <h1 className="text-[#777777] font-Quicksand text-base">
//               Televisión LG...
//             </h1>
//             <h1 className="text-[#1C98F7] font-Quicksand text-base">
//               S/1250.00 PEN
//             </h1>
//           </div>
//           <div className="flex space-x-8 justify-between mb-3">
//             <h1 className="text-[#777777] font-Quicksand text-base">
//               Costo de envío
//             </h1>
//             <h1 className="text-[#1C98F7] font-Quicksand text-base">
//               S/15.00 PEN
//             </h1>
//           </div>
//           <div className="flex space-x-8 justify-between mb-3">
//             <h1 className="text-[#777777] font-Quicksand text-base">
//               Subtotal
//             </h1>
//             <h1 className="text-[#1C98F7] font-Quicksand text-base">
//               S/1.700.00 PEN
//             </h1>
//           </div>
//           <div className="flex space-x-8 justify-between mb-3  border-b-4 border-spacing-8">
//             <h1 className="text-[#777777] font-Quicksand text-base">Cupón</h1>
//             <h1 className="text-[#1C98F7] font-Quicksand text-base mb-4">
//               25% descuento
//             </h1>
//           </div>
//           <div className="flex justify-end items-end">
//             <h1 className="text-[#777777] font-Quicksand text-base">
//               S/1.715.00 PEN
//             </h1>
//           </div>
//           <div className="flex space-x-8 justify-between mb-3 ">
//             <h1 className="text-[#777777] font-Quicksand text-base">Total</h1>
//             <h1 className="text-[#1C98F7] font-Quicksand text-base mb-4">
//               S/1.515.00 PEN
//             </h1>
//           </div>
//         </div>
//       </div>
//       <div className=" border-t-4 mt-8">
//         <div className="flex items-center justify-center mt-8">
//           <h1 className="text-[#1C98F7] font-Quicksand">
//             ¿Tienes alguna duda acerca de tu pedido?
//           </h1>
//         </div>
//         <div className="grid grid-cols-3 gap-x-8 px-8 mt-5">
//           <div className="flex flex-col items-center justify-center">
//             <img src={chat} alt="chat" className="h-12 w-12" />
//             <h1 className="text-[#777777] font-Quicksand text-base mt-2">
//               Habla con el vendedor
//             </h1>
//           </div>
//           <div className="flex flex-col items-center justify-center">
//             <img src={help} alt="help" className="h-12 w-12" />

//             <h1 className="text-[#777777] font-Quicksand text-base mt-2">
//               Preguntas frecuentes
//             </h1>
//           </div>
//           <div className="flex flex-col items-center justify-center">
//             <img src={headphone} alt="headphone" className="h-12 w-12" />
//             <h1 className="text-[#777777] font-Quicksand text-base mt-2">
//               Atención al cliente
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orderdetails;

import { ArrowLeft } from "lucide-react";
import chat from "../Assets/chat.png";
import help from "../Assets/help.png";
import headphone from "../Assets/headphone.png";
import { Link } from "react-router-dom";

const Orderdetails = () => {
  return (
    <div className="bg-white p-4 md:p-6 overflow-x-auto">
      <div className="flex space-x-6">
        <Link
          to="/orderstatus"
          className="rounded-full shadow-lg p-3 text-[#1C98F7]"
        >
          <ArrowLeft />
        </Link>

        {/* <button className="rounded-full shadow-lg p-3 text-[#1C98F7]">
          <ArrowLeft />
        </button> */}
        <h1 className="text-[#777777] font-Quicksand font-normal text-xl">
          Regresar
        </h1>
      </div>
      <div className="flex justify-evenly md:space-x-36 ">
        <div className="">
          <h1 className="text-[#777777] font-Quicksand font-semibold text-base md:text-xl mt-8">
            Número de pedido: 154789-7
          </h1>
          <h1 className="text-[#1C98F7] font-Quicksand font-semibold text-sm md:text-base mt-2">
            Llegada aproximada
            <br className="md:hidden" /> el 16 de enero
          </h1>
          {/* buttons and circles code */}
          <div className="flex mt-8 md:space-x-10">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-[#1C98F7]"></div>
              <div className="w-0.5 h-16 bg-[#1C98F7]"></div>
              <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-[#1C98F7]"></div>
              <div className="w-0.5 h-16 bg-[#C0C0C0]"></div>
              <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-[#C0C0C0]"></div>
            </div>
            <div className="flex flex-col justify-center ml-4">
              <h1 className="text-[#1C98F7] font-Quicksand font-semibold text-base md:text-lg">
                En proceso
              </h1>
              <div className="h-8 md:h-16"></div>
              <h1 className="text-[#1C98F7] font-Quicksand font-semibold text-base md:text-lg">
                En camino a tu hogar
              </h1>
              <div className="h-16"></div>
              <h1 className="text-[#777777] font-Quicksand font-semibold text-base md:text-lg">
                Entregado
              </h1>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="bg-[#FAFAFA] p-8 rounded-xl">
          <h1 className="text-[#777777] font-Quicksand font-normal text-base mb-2 md:text-lg">
            Fecha de pedido: 13 de enero
          </h1>
          <div className="flex justify-end items-end">
            <h2 className="text-[#1C98F7] font-Quicksand font-semibold text-lg mb-6 md:mb-32">
              Dos productos
            </h2>
          </div>

          <div className="flex space-x-8 justify-between mb-3">
            <h1 className="text-[#777777] font-Quicksand text-sm md:text-base">
              Airpods 5ta ge...
            </h1>
            <h1 className="text-[#1C98F7] font-Quicksand text-sm md:text-base">
              S/450.00 PEN
            </h1>
          </div>
          <div className="flex space-x-8 justify-between mb-3">
            <h1 className="text-[#777777] font-Quicksand text-sm md:text-base">
              Televisión LG...
            </h1>
            <h1 className="text-[#1C98F7] font-Quicksand text-sm md:text-base">
              S/1250.00 PEN
            </h1>
          </div>
          <div className="flex space-x-8 justify-between mb-3">
            <h1 className="text-[#777777] font-Quicksand text-sm md:text-base">
              Costo de envío
            </h1>
            <h1 className="text-[#1C98F7] font-Quicksand text-sm md:text-base">
              S/15.00 PEN
            </h1>
          </div>
          <div className="flex space-x-8 justify-between mb-3">
            <h1 className="text-[#777777] font-Quicksand text-sm md:text-base">
              Subtotal
            </h1>
            <h1 className="text-[#1C98F7] font-Quicksand text-sm md:text-base">
              S/1.700.00 PEN
            </h1>
          </div>
          <div className="flex space-x-8 justify-between mb-3  border-b-4 border-spacing-8">
            <h1 className="text-[#777777] font-Quicksand text-sm md:text-base">
              Cupón
            </h1>
            <h1 className="text-[#1C98F7] font-Quicksand text-sm md:text-base mb-4">
              25% descuento
            </h1>
          </div>
          <div className="flex justify-end items-end">
            <h1 className="text-[#777777] font-Quicksand text-sm md:text-base">
              S/1.715.00 PEN
            </h1>
          </div>
          <div className="flex space-x-8 justify-between ">
            <h1 className="text-[#777777] font-Quicksand text-sm md:text-base text-start">
              Total
            </h1>
            <h1 className="text-[#1C98F7] font-Quicksand text-sm md:text-base mb-4">
              S/1.515.00 PEN
            </h1>
          </div>
        </div>
      </div>
      <div className=" border-t-4 mt-8">
        <div className="flex items-center justify-center mt-8">
          <h1 className="text-[#1C98F7] font-Quicksand">
            ¿Tienes alguna duda acerca de tu pedido?
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-x-8 px-8 mt-5">
          <div className="flex flex-col items-center justify-center">
            <img src={chat} alt="chat" className="h-12 w-12" />
            <h1 className="text-[#777777] font-Quicksand text-base mt-2">
              Habla con el vendedor
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={help} alt="help" className="h-12 w-12" />

            <h1 className="text-[#777777] font-Quicksand text-base mt-2">
              Preguntas frecuentes
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={headphone} alt="headphone" className="h-12 w-12" />
            <h1 className="text-[#777777] font-Quicksand text-base mt-2">
              Atención al cliente
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderdetails;
