import React from "react";
import bus from "../Assets/bus.png";
import { Link } from "react-router-dom";

const Orderstatus = () => {
  return (
    <div className="bg-white p-4 md:p-16 overflow-x-auto">
      <h1 className="text-[#1C98F7] font-Quicksand font-bold text-2xl md:text-4xl">
        Estatus de pedidos (4)
      </h1>
      {/* search button */}
      <div className="relative w-64 md:w-1/2 mt-5">
        <input
          className="w-full font-Inter font-normal text-sm md:text-base py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="search"
          placeholder="Número de pedido"
        />
        <button className="absolute inset-y-0 right-0 flex items-center px-8 text-white bg-[#1C98F7] border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
            />
          </svg>
        </button>
      </div>
      {/* order 1 */}
      {/* grid */}
      <div className="grid grid-cols-5 gap-x-2 md:gap-x-6 mt-16">
        {/* col  1*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white pb-5 p-1 md:p-2 rounded-t-lg font-Quicksand font-normal text-xs md:text-base">
            Número de pedido
          </h1>
        </div>
        {/* col  2*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white  p-1 md:p-2 md:pb-4 rounded-t-lg font-Quicksand font-normal text-xs">
            Cantidad de productos
          </h1>
        </div>
        {/* col  3*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white pb-6 md:pb-2 p-2 rounded-t-lg font-Quicksand font-normal text-base">
            Estatus
          </h1>
        </div>
        {/* col  4*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white pb-6 md:pb-2 p-2 rounded-t-lg font-Quicksand font-normal text-base">
            Total
          </h1>
        </div>
        {/* col  5*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white pb-6 md:pb-2 p-2 rounded-t-lg font-Quicksand font-normal text-base">
            Fecha
          </h1>
        </div>
      </div>

      {/* grid 2 */}
      <div className="grid grid-cols-5 gap-x-4 md:gap-x-6 bg-[#F5F5F5] p-2 md:p-6">
        {/* col  1*/}
        <div className="flex justify-center items-center mt-4 mb-4">
          <h1 className="text-[#004E89] font-Quicksand text-sm md:text-xl">
            154789-7
          </h1>
        </div>
        {/* col  2*/}
        <div className="flex flex-col justify-center items-center mt-4 mb-4">
          <h1 className="text-[#1C98F7] font-Quicksand text-lg md:text-2xl">
            2
          </h1>
          <h1 className="font-Quicksand font-normal text-sm md:text-xl text-[#777777]">
            Productos
          </h1>
        </div>
        {/* col  3*/}
        <div className="flex flex-col justify-center items-center mt-4 mb-4">
          <img src={bus} alt="bus" className="h-5 w-5" />
          <h1 className="font-Quicksand font-normal text-xs md:text-base mt-2 text-[#777777]">
            En camino
            <br className="md:hidden" /> a tu hogar
          </h1>
        </div>
        {/* col  4*/}
        <div className="flex justify-center items-center mt-4 mb-4">
          <h1 className="text-[#1C98F7] font-Quicksand text-xs md:text-xl">
            S/4,500.00 PEN
          </h1>
        </div>
        {/* col  5*/}
        <div className="flex justify-center items-center mt-4 mb-4">
          <h1 className="text-[#1C98F7] font-Quicksand text-xs md:text-xl">
            13 de enero 2024
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center mt-3">
        <Link
          to="/orderdetails"
          className="bg-[#FF9900] text-white px-8 py-2 rounded-lg"
        >
          Ver pedido
        </Link>
      </div>
      {/* order 2 */}
      {/* grid */}
      <div className="grid grid-cols-5 gap-x-2 md:gap-x-6 mt-16">
        {/* col  1*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white pb-5 p-1 md:p-2 rounded-t-lg font-Quicksand font-normal text-xs md:text-base">
            Número de pedido
          </h1>
        </div>
        {/* col  2*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white  p-1 md:p-2 md:pb-4 rounded-t-lg font-Quicksand font-normal text-xs">
            Cantidad de productos
          </h1>
        </div>
        {/* col  3*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white pb-6 md:pb-2 p-2 rounded-t-lg font-Quicksand font-normal text-base">
            Estatus
          </h1>
        </div>
        {/* col  4*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white pb-6 md:pb-2 p-2 rounded-t-lg font-Quicksand font-normal text-base">
            Total
          </h1>
        </div>
        {/* col  5*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white pb-6 md:pb-2 p-2 rounded-t-lg font-Quicksand font-normal text-base">
            Fecha
          </h1>
        </div>
      </div>

      {/* grid 2 */}
      <div className="grid grid-cols-5 gap-x-4 md:gap-x-6 bg-[#F5F5F5] p-2 md:p-6">
        {/* col  1*/}
        <div className="flex justify-center items-center mt-4 mb-4">
          <h1 className="text-[#004E89] font-Quicksand text-sm md:text-xl">
            154789-7
          </h1>
        </div>
        {/* col  2*/}
        <div className="flex flex-col justify-center items-center mt-4 mb-4">
          <h1 className="text-[#1C98F7] font-Quicksand text-lg md:text-2xl">
            2
          </h1>
          <h1 className="font-Quicksand font-normal text-sm md:text-xl text-[#777777]">
            Productos
          </h1>
        </div>
        {/* col  3*/}
        <div className="flex flex-col justify-center items-center mt-4 mb-4">
          <img src={bus} alt="bus" className="h-5 w-5" />
          <h1 className="font-Quicksand font-normal text-xs md:text-base mt-2 text-[#777777]">
            En camino
            <br className="md:hidden" /> a tu hogar
          </h1>
        </div>
        {/* col  4*/}
        <div className="flex justify-center items-center mt-4 mb-4">
          <h1 className="text-[#1C98F7] font-Quicksand text-xs md:text-xl">
            S/4,500.00 PEN
          </h1>
        </div>
        {/* col  5*/}
        <div className="flex justify-center items-center mt-4 mb-4">
          <h1 className="text-[#1C98F7] font-Quicksand text-xs md:text-xl">
            13 de enero 2024
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center mt-3">
        <Link
          to="/orderdetails"
          className="bg-[#FF9900] text-white px-8 py-2 rounded-lg"
        >
          Ver pedido
        </Link>
      </div>
      {/* order 3 */}
      {/* grid */}
      <div className="grid grid-cols-5 gap-x-2 md:gap-x-6 mt-16">
        {/* col  1*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white pb-5 p-1 md:p-2 rounded-t-lg font-Quicksand font-normal text-xs md:text-base">
            Número de pedido
          </h1>
        </div>
        {/* col  2*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white  p-1 md:p-2 md:pb-4 rounded-t-lg font-Quicksand font-normal text-xs">
            Cantidad de productos
          </h1>
        </div>
        {/* col  3*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white pb-6 md:pb-2 p-2 rounded-t-lg font-Quicksand font-normal text-base">
            Estatus
          </h1>
        </div>
        {/* col  4*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white pb-6 md:pb-2 p-2 rounded-t-lg font-Quicksand font-normal text-base">
            Total
          </h1>
        </div>
        {/* col  5*/}
        <div>
          <h1 className="bg-[#1C98F7] text-white pb-6 md:pb-2 p-2 rounded-t-lg font-Quicksand font-normal text-base">
            Fecha
          </h1>
        </div>
      </div>

      {/* grid 2 */}
      <div className="grid grid-cols-5 gap-x-4 md:gap-x-6 bg-[#F5F5F5] p-2 md:p-6">
        {/* col  1*/}
        <div className="flex justify-center items-center mt-4 mb-4">
          <h1 className="text-[#004E89] font-Quicksand text-sm md:text-xl">
            154789-7
          </h1>
        </div>
        {/* col  2*/}
        <div className="flex flex-col justify-center items-center mt-4 mb-4">
          <h1 className="text-[#1C98F7] font-Quicksand text-lg md:text-2xl">
            2
          </h1>
          <h1 className="font-Quicksand font-normal text-sm md:text-xl text-[#777777]">
            Productos
          </h1>
        </div>
        {/* col  3*/}
        <div className="flex flex-col justify-center items-center mt-4 mb-4">
          <img src={bus} alt="bus" className="h-5 w-5" />
          <h1 className="font-Quicksand font-normal text-xs md:text-base mt-2 text-[#777777]">
            En camino
            <br className="md:hidden" /> a tu hogar
          </h1>
        </div>
        {/* col  4*/}
        <div className="flex justify-center items-center mt-4 mb-4">
          <h1 className="text-[#1C98F7] font-Quicksand text-xs md:text-xl">
            S/4,500.00 PEN
          </h1>
        </div>
        {/* col  5*/}
        <div className="flex justify-center items-center mt-4 mb-4">
          <h1 className="text-[#1C98F7] font-Quicksand text-xs md:text-xl">
            13 de enero 2024
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center mt-3">
        <Link
          to="/orderdetails"
          className="bg-[#FF9900] text-white px-8 py-2 rounded-lg"
        >
          Ver pedido
        </Link>
      </div>
    </div>
  );
};

export default Orderstatus;

// import React from "react";
// import bus from "../Assets/bus.png";
// import { Link } from "react-router-dom";

// const Orderstatus = () => {
//   return (
//     <div className="bg-white p-16">
//       <h1 className="text-[#1C98F7] font-Quicksand font-bold text-4xl">
//         Estatus de pedidos (4)
//       </h1>
//       {/* search button */}
//       <div className="relative w-1/2 mt-5">
//         <input
//           className="w-full font-Inter font-normal py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           type="search"
//           placeholder="Número de pedido"
//         />
//         <button className="absolute inset-y-0 right-0 flex items-center px-8 text-white bg-[#1C98F7] border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//           <svg
//             className="h-5 w-5"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
//             />
//           </svg>
//         </button>
//       </div>
//       {/* card 1 */}
//       {/* grid */}
//       <div className="grid grid-cols-5 gap-x-6 mt-16">
//         {/* col  1*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 rounded-t-lg font-Quicksand font-normal text-base">
//             Número de pedido
//           </h1>
//         </div>
//         {/* col  2*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 pb-4 rounded-t-lg font-Quicksand font-normal text-xs">
//             Cantidad de productos
//           </h1>
//         </div>
//         {/* col  3*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 rounded-t-lg font-Quicksand font-normal text-base">
//             Estatus
//           </h1>
//         </div>
//         {/* col  4*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 rounded-t-lg font-Quicksand font-normal text-base">
//             Total
//           </h1>
//         </div>
//         {/* col  5*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 rounded-t-lg font-Quicksand font-normal text-base">
//             Fecha
//           </h1>
//         </div>
//       </div>

//       {/* grid 2 */}
//       <div className="grid grid-cols-5 gap-x-6 bg-[#F5F5F5] p-6">
//         {/* col  1*/}
//         <div className="flex justify-center items-center mt-4 mb-4">
//           <h1 className="text-[#004E89] font-Quicksand text-xl">154789-7</h1>
//         </div>
//         {/* col  2*/}
//         <div className="flex flex-col justify-center items-center mt-4 mb-4">
//           <h1 className="text-[#1C98F7] font-Quicksand text-2xl">2</h1>
//           <h1 className="font-Quicksand font-normal text-xl text-[#777777]">
//             Productos
//           </h1>
//         </div>
//         {/* col  3*/}
//         <div className="flex flex-col justify-center items-center mt-4 mb-4">
//           <img src={bus} alt="bus" className="h-5 w-5" />
//           <h1 className="font-Quicksand font-normal text-base mt-2 text-[#777777]">
//             En camino a tu hogar
//           </h1>
//         </div>
//         {/* col  4*/}
//         <div className="flex justify-center items-center mt-4 mb-4">
//           <h1 className="text-[#1C98F7] font-Quicksand text-xl">
//             S/4,500.00 PEN
//           </h1>
//         </div>
//         {/* col  5*/}
//         <div className="flex justify-center items-center mt-4 mb-4">
//           <h1 className="text-[#1C98F7] font-Quicksand text-xl">
//             13 de enero 2024
//           </h1>
//         </div>
//       </div>
//       <div className="flex justify-center items-center mt-3">
//         <Link
//           to="/orderdetails"
//           className="bg-[#FF9900] text-white px-8 py-2 rounded-lg"
//         >
//           Ver pedido
//         </Link>
//         {/* <button className="bg-[#FF9900] text-white px-8 py-2 rounded-lg">
//           Ver pedido
//         </button> */}
//       </div>
//       {/* card 2 */}
//       {/* grid */}
//       <div className="grid grid-cols-5 gap-x-6 mt-16">
//         {/* col  1*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 rounded-t-lg font-Quicksand font-normal text-base">
//             Número de pedido
//           </h1>
//         </div>
//         {/* col  2*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 pb-4 rounded-t-lg font-Quicksand font-normal text-xs">
//             Cantidad de productos
//           </h1>
//         </div>
//         {/* col  3*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 rounded-t-lg font-Quicksand font-normal text-base">
//             Estatus
//           </h1>
//         </div>
//         {/* col  4*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 rounded-t-lg font-Quicksand font-normal text-base">
//             Total
//           </h1>
//         </div>
//         {/* col  5*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 rounded-t-lg font-Quicksand font-normal text-base">
//             Fecha
//           </h1>
//         </div>
//       </div>

//       {/* grid 2 */}
//       <div className="grid grid-cols-5 gap-x-6 bg-[#F5F5F5] p-6">
//         {/* col  1*/}
//         <div className="flex justify-center items-center mt-4 mb-4">
//           <h1 className="text-[#004E89] font-Quicksand text-xl">154789-7</h1>
//         </div>
//         {/* col  2*/}
//         <div className="flex flex-col justify-center items-center mt-4 mb-4">
//           <h1 className="text-[#1C98F7] font-Quicksand text-2xl">2</h1>
//           <h1 className="font-Quicksand font-normal text-xl text-[#777777]">
//             Productos
//           </h1>
//         </div>
//         {/* col  3*/}
//         <div className="flex flex-col justify-center items-center mt-4 mb-4">
//           <img src={bus} alt="bus" className="h-5 w-5" />
//           <h1 className="font-Quicksand font-normal text-base mt-2 text-[#777777]">
//             En camino a tu hogar
//           </h1>
//         </div>
//         {/* col  4*/}
//         <div className="flex justify-center items-center mt-4 mb-4">
//           <h1 className="text-[#1C98F7] font-Quicksand text-xl">
//             S/4,500.00 PEN
//           </h1>
//         </div>
//         {/* col  5*/}
//         <div className="flex justify-center items-center mt-4 mb-4">
//           <h1 className="text-[#1C98F7] font-Quicksand text-xl">
//             13 de enero 2024
//           </h1>
//         </div>
//       </div>
//       <div className="flex justify-center items-center mt-3">
//         <Link
//           to="/orderdetails"
//           className="bg-[#FF9900] text-white px-8 py-2 rounded-lg"
//         >
//           Ver pedido
//         </Link>
//         {/* <button className="bg-[#FF9900] text-white px-8 py-2 rounded-lg">
//           Ver pedido
//         </button> */}
//       </div>
//       {/* card 3 */}
//       {/* grid */}
//       <div className="grid grid-cols-5 gap-x-6 mt-16">
//         {/* col  1*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 rounded-t-lg font-Quicksand font-normal text-base">
//             Número de pedido
//           </h1>
//         </div>
//         {/* col  2*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 pb-4 rounded-t-lg font-Quicksand font-normal text-xs">
//             Cantidad de productos
//           </h1>
//         </div>
//         {/* col  3*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 rounded-t-lg font-Quicksand font-normal text-base">
//             Estatus
//           </h1>
//         </div>
//         {/* col  4*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 rounded-t-lg font-Quicksand font-normal text-base">
//             Total
//           </h1>
//         </div>
//         {/* col  5*/}
//         <div>
//           <h1 className="bg-[#1C98F7] text-white p-2 rounded-t-lg font-Quicksand font-normal text-base">
//             Fecha
//           </h1>
//         </div>
//       </div>

//       {/* grid 2 */}
//       <div className="grid grid-cols-5 gap-x-6 bg-[#F5F5F5] p-6">
//         {/* col  1*/}
//         <div className="flex justify-center items-center mt-4 mb-4">
//           <h1 className="text-[#004E89] font-Quicksand text-xl">154789-7</h1>
//         </div>
//         {/* col  2*/}
//         <div className="flex flex-col justify-center items-center mt-4 mb-4">
//           <h1 className="text-[#1C98F7] font-Quicksand text-2xl">2</h1>
//           <h1 className="font-Quicksand font-normal text-xl text-[#777777]">
//             Productos
//           </h1>
//         </div>
//         {/* col  3*/}
//         <div className="flex flex-col justify-center items-center mt-4 mb-4">
//           <img src={bus} alt="bus" className="h-5 w-5" />
//           <h1 className="font-Quicksand font-normal text-base mt-2 text-[#777777]">
//             En camino a tu hogar
//           </h1>
//         </div>
//         {/* col  4*/}
//         <div className="flex justify-center items-center mt-4 mb-4">
//           <h1 className="text-[#1C98F7] font-Quicksand text-xl">
//             S/4,500.00 PEN
//           </h1>
//         </div>
//         {/* col  5*/}
//         <div className="flex justify-center items-center mt-4 mb-4">
//           <h1 className="text-[#1C98F7] font-Quicksand text-xl">
//             13 de enero 2024
//           </h1>
//         </div>
//       </div>
//       <div className="flex justify-center items-center mt-3">
//         <Link
//           to="/orderdetails"
//           className="bg-[#FF9900] text-white px-8 py-2 rounded-lg"
//         >
//           Ver pedido
//         </Link>
//         {/* <button className="bg-[#FF9900] text-white px-8 py-2 rounded-lg">
//           Ver pedido
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default Orderstatus;
