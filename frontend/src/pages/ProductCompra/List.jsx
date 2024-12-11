// import React, { useState } from "react";
// import filter from "../Assets/filter.png";


// const List = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="bg-white p-8 md:px-12 ">
//       <h1 className="text-[#1C98F7] font-Quicksand font-bold text-2xl md:text-4xl ml-12">
//         Favoritos
//       </h1>
//       {/* search input */}
//       <div className="flex flex-col  md:flex-row md:px-12 space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-5">
//         <div className="relative w-full md:w-1/2">
//           <input
//             className="w-full font-Inter font-normal py-2 px-4 border bg-gray-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             type="search"
//             placeholder="Buscar producto"
//           />
//           <button className="absolute inset-y-0 right-0 flex items-center px-4 md:px-8 text-white bg-blue-600 border border-blue-600 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//             <svg
//               className="h-5 w-5"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
//               />
//             </svg>
//           </button>
//         </div>
//         {/* filter button */}
//         <div className="relative mt-4 md:mt-0">
//           <button
//             className="flex items-center font-Inter font-normal text-base md:text-lg text-gray-500 ml-10 mt-2"
//             onClick={toggleDropdown}
//           >
//             Filtro <img src={filter} alt="filter" className="h-4 w-4 ml-1" />
//           </button>
//           {isDropdownOpen && (
//             <div className="absolute top-full mt-1 md:mt-0 left-0 md:left-auto bg-white border border-gray-300 rounded-md shadow-lg w-full md:w-48">
//               <div className="p-2">
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span className="text-gray-700 font-Inter font-normal">
//                     Tecnología
//                   </span>
//                 </label>
//                 <label className="flex items-center space-x-2 mt-2">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span className="text-gray-700 font-Inter font-normal">
//                     Moda y belleza
//                   </span>
//                 </label>
//                 <label className="flex items-center space-x-2 mt-2">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span className="text-gray-700 font-Inter font-normal">
//                     Deportes
//                   </span>
//                 </label>
//                 <label className="flex items-center space-x-2 mt-2">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span className="text-gray-700 font-Inter font-normal">
//                     Hogar
//                   </span>
//                 </label>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       {/* pricing cards */}
//       <div className="grid grid-cols-1 md:px-12 gap-4 mt-4">
//         {/* pricing card 1 */}
//         <div className="border border-gray-300 shadow-lg rounded-lg p-2">
//           <div className="bg-[#FF4747] inline-block text-white text-xs md:text-lg font-bold  rounded px-2 py-1">
//             -20% off
//           </div>
//           <div className="mt-2 md:ml-40">
//             <h2 className="text-base md:text-xl font-bold font-Quicksand">
//               Case iPhone 15 Pro Max
//             </h2>
//             <h3 className="text-sm md:text-base text-gray-400 mt-1 font-Quicksand">
//               Marca: iPhone
//             </h3>
//             <div className="flex items-center mt-2">
//               <p className="text-sm md:text-base text-gray-400 line-through font-Quicksand">
//                 S/550.00 PEN
//               </p>
//               <h2 className="text-base md:text-2xl font-bold text-[#1c98f7] ml-2 font-Quicksand">
//                 S/450.00 PEN
//               </h2>
//             </div>
//           </div>
//           <div className="flex justify-end items-end mt-2">
//             <button className="bg-[#FF9900] text-white md:text-xl font-bold py-2 px-4 rounded font-Quicksand">
//               Comprar
//             </button>
       
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default List;

// import React, { useState } from "react";
// import filter from "../Assets/filter.png";
// import img1 from "../../assets/edu.png";

// const List = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="bg-white p-8 md:px-12">
//       <h1 className="text-[#1C98F7] font-Quicksand font-bold text-2xl md:text-4xl ml-12">
//         Favoritos
//       </h1>

//       <div className="flex flex-col md:flex-row md:px-12 space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-5">
//         <div className="relative w-full md:w-1/2">
//           <input
//             className="w-full font-Inter font-normal py-2 px-4 border bg-gray-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             type="search"
//             placeholder="Buscar producto"
//           />
//           <button className="absolute inset-y-0 right-0 flex items-center px-4 md:px-8 text-white bg-blue-600 border border-blue-600 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//             <svg
//               className="h-5 w-5"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="relative mt-4 md:mt-0">
//           <button
//             className="flex items-center font-Inter font-normal text-base md:text-lg text-gray-500 ml-10 mt-2"
//             onClick={toggleDropdown}
//           >
//             Filtro <img src={filter} alt="filter" className="h-4 w-4 ml-1" />
//           </button>
//           {isDropdownOpen && (
//             <div className="absolute top-full mt-1 md:mt-0 left-0 md:left-auto bg-white border border-gray-300 rounded-md shadow-lg w-full md:w-48">
//               <div className="p-2">
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span className="text-gray-700 font-Inter font-normal">
//                     Tecnología
//                   </span>
//                 </label>
//                 <label className="flex items-center space-x-2 mt-2">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span className="text-gray-700 font-Inter font-normal">
//                     Moda y belleza
//                   </span>
//                 </label>
//                 <label className="flex items-center space-x-2 mt-2">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span className="text-gray-700 font-Inter font-normal">
//                     Deportes
//                   </span>
//                 </label>
//                 <label className="flex items-center space-x-2 mt-2">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span className="text-gray-700 font-Inter font-normal">
//                     Hogar
//                   </span>
//                 </label>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="grid grid-cols-12 gap-4 mt-8 md:px-12">
//   {/* First Card */}
//   <div className="col-span-12 md:col-span-9 border border-gray-300 shadow-lg rounded-lg p-4 flex h-[200px]">
//     <div className="flex-shrink-0">
//       <div className="bg-[#FF4747] inline-block text-white text-xs md:text-lg font-bold rounded px-2 py-1">
//         -20% off
//       </div>
//       <img src={img1} alt="Product" className="mt-2 w-[130px] h-[130px]" />
//     </div>
//     <div className="ml-4 flex flex-col justify-center">
//       <h2 className="text-base md:text-xl font-bold font-Quicksand text-[#1C98F7] mt-8">
//         Case iPhone 15 Pro Max
//       </h2>
//       <h3 className="text-sm md:text-base text-gray-400 mt-1 font-Quicksand">
//         Marca: iPhone
//       </h3>
//       <div className="flex items-center mt-2">
//         <p className="text-sm md:text-base text-gray-400 line-through font-Quicksand mt-4">
//           S/550.00 PEN
//         </p>
//         <h2 className="text-base md:text-2xl font-bold text-[#1c98f7] ml-2 font-Quicksand mt-4">
//           S/450.00 PEN
//         </h2>
//       </div>
//     </div>
//     <div className="flex justify-end items-center ml-auto">
//       <button className="bg-[#FF9900] text-white md:text-xl font-bold py-2 px-4 rounded font-Quicksand mt-[100px]">
//         Comprar
//       </button>
//     </div>
//   </div>
// {/* ======== */}


//   {/* Second Card */}
//   <div className="col-span-12 md:col-span-3 border border-gray-300 shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
//     <img src={img1} alt="Product" className="w-[255px] h-[255px] mb-4" />
//     <h2 className="text-lg font-bold font-Quicksand text-[#1C98F7]">
//       Samsung Galaxy S23
//     </h2>
//     <p className="text-gray-500 font-Quicksand mt-2">
//       Discover the latest features and innovation.
//     </p>
//     <button className="bg-[#FF9900] text-white font-bold py-2 px-4 rounded font-Quicksand w-full mt-4">
//       Comprar
//     </button>
//   </div>
// </div>

//     </div>
//   );
// };

// export default List;
import React, { useState } from "react";
import filter from "../Assets/filter.png";
import img1 from "../../assets/edu.png";

const List = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white p-8 md:px-12">
      <h1 className="text-[#1C98F7] font-Quicksand font-bold text-2xl md:text-4xl ml-12">
        Favoritos
      </h1>

      <div className="flex flex-col md:flex-row md:px-12 space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-5">
        <div className="relative w-full md:w-1/2">
          <input
            className="w-full font-Inter font-normal py-2 px-4 border bg-gray-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="search"
            placeholder="Buscar producto"
          />
          <button className="absolute inset-y-0 right-0 flex items-center px-4 md:px-8 text-white bg-blue-600 border border-blue-600 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
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

        <div className="relative mt-4 md:mt-0">
          <button
            className="flex items-center font-Inter font-normal text-base md:text-lg text-gray-500 ml-10 mt-2"
            onClick={toggleDropdown}
          >
            Filtro <img src={filter} alt="filter" className="h-4 w-4 ml-1" />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full mt-1 md:mt-0 left-0 md:left-auto bg-white border border-gray-300 rounded-md shadow-lg w-full md:w-48">
              <div className="p-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-gray-700 font-Inter font-normal">
                    Tecnología
                  </span>
                </label>
                <label className="flex items-center space-x-2 mt-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-gray-700 font-Inter font-normal">
                    Moda y belleza
                  </span>
                </label>
                <label className="flex items-center space-x-2 mt-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-gray-700 font-Inter font-normal">
                    Deportes
                  </span>
                </label>
                <label className="flex items-center space-x-2 mt-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-gray-700 font-Inter font-normal">
                    Hogar
                  </span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-8 md:px-12">
        {/* First Column (8 Columns) */}
        <div className="col-span-12 md:col-span-8 space-y-4">
          <div className="border border-gray-300 shadow-lg rounded-lg p-4 flex h-[200px]">
            <div className="flex-shrink-0">
              <div className="bg-[#FF4747] inline-block text-white text-xs md:text-lg font-bold rounded px-2 py-1">
                -20% off
              </div>
              <img src={img1} alt="Product" className="mt-2 w-[130px] h-[130px]" />
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <h2 className="text-base md:text-xl font-bold font-Quicksand text-[#1C98F7] mt-8">
                Case iPhone 15 Pro Max
              </h2>
              <h3 className="text-sm md:text-base text-gray-400 mt-1 font-Quicksand">
                Marca: iPhone
              </h3>
              <div className="flex items-center mt-2">
                <p className="text-sm md:text-base text-gray-400 line-through font-Quicksand mt-4">
                  S/550.00 PEN
                </p>
                <h2 className="text-base md:text-2xl font-bold text-[#1c98f7] ml-2 font-Quicksand mt-4">
                  S/450.00 PEN
                </h2>
              </div>
            </div>
            <div className="flex justify-end items-center ml-auto">
              <button className="bg-[#FF9900] text-white md:text-xl font-bold py-2 px-4 rounded font-Quicksand mt-[100px]">
                Comprar
              </button>
            </div>
          </div>
          {/* Add more cards here without affecting the second column */}
          <div className="border border-gray-300 shadow-lg rounded-lg p-4 flex h-[200px]">
            <div className="flex-shrink-0">
              <div className="bg-[#FF4747] inline-block text-white text-xs md:text-lg font-bold rounded px-2 py-1">
                -20% off
              </div>
              <img src={img1} alt="Product" className="mt-2 w-[130px] h-[130px]" />
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <h2 className="text-base md:text-xl font-bold font-Quicksand text-[#1C98F7] mt-8">
                Case iPhone 15 Pro Max
              </h2>
              <h3 className="text-sm md:text-base text-gray-400 mt-1 font-Quicksand">
                Marca: iPhone
              </h3>
              <div className="flex items-center mt-2">
                <p className="text-sm md:text-base text-gray-400 line-through font-Quicksand mt-4">
                  S/550.00 PEN
                </p>
                <h2 className="text-base md:text-2xl font-bold text-[#1c98f7] ml-2 font-Quicksand mt-4">
                  S/450.00 PEN
                </h2>
              </div>
            </div>
            <div className="flex justify-end items-center ml-auto">
              <button className="bg-[#FF9900] text-white md:text-xl font-bold py-2 px-4 rounded font-Quicksand mt-[100px]">
                Comprar
              </button>
            </div>
          </div>
          <div className="border border-gray-300 shadow-lg rounded-lg p-4 flex h-[200px]">
            <div className="flex-shrink-0">
              <div className="bg-[#FF4747] inline-block text-white text-xs md:text-lg font-bold rounded px-2 py-1">
                -20% off
              </div>
              <img src={img1} alt="Product" className="mt-2 w-[130px] h-[130px]" />
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <h2 className="text-base md:text-xl font-bold font-Quicksand text-[#1C98F7] mt-8">
                Case iPhone 15 Pro Max
              </h2>
              <h3 className="text-sm md:text-base text-gray-400 mt-1 font-Quicksand">
                Marca: iPhone
              </h3>
              <div className="flex items-center mt-2">
                <p className="text-sm md:text-base text-gray-400 line-through font-Quicksand mt-4">
                  S/550.00 PEN
                </p>
                <h2 className="text-base md:text-2xl font-bold text-[#1c98f7] ml-2 font-Quicksand mt-4">
                  S/450.00 PEN
                </h2>
              </div>
            </div>
            <div className="flex justify-end items-center ml-auto">
              <button className="bg-[#FF9900] text-white md:text-xl font-bold py-2 px-4 rounded font-Quicksand mt-[100px]">
                Comprar
              </button>
            </div>
          </div>
        </div>

        {/* Second Column (4 Columns) */}
        <div className="col-span-12 md:col-span-4 border border-gray-300 shadow-lg rounded-lg p-4 flex flex-col items-center text-center h-[450px]">
          <img src={img1} alt="Product" className="w-[325px] h-[270px] mb-4" />
          <h2 className="text-lg font-bold font-Quicksand text-[#1C98F7]">
            Samsung Galaxy S23
          </h2>
          <p className="text-gray-500 font-Quicksand mt-2">
            Discover the latest features and innovation.
          </p>
          <button className="bg-[#FF9900] text-white font-bold py-2 px-4 rounded font-Quicksand w-full mt-4">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
