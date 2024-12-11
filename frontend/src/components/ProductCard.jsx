import React from "react";
import { FaStar } from "react-icons/fa6";

const PrductCard = () => {
  return (
    <div>
      <div className="mt-10 bg-white p-5 rounded-2xl">
        <div className="bg-blue-500 text-white py-1 my-12 px-2 text-center rounded-sm text-xl mr-4 self-start font-semibold w-32 -mt-10  absolute ">
        $500 MXN
        </div>
        <img
          src=""
          alt=""
          className="w-[200px] h-[200px] bg-green-800  rounded-lg mt-5"
        />
        <hr className=" border border-gray-400 bg-gray-400 w-[200px] mt-8" />
        <div className="flex flex-col">
          <h2 className="text-black font-bold mt-4">Case iPhone 15 Pro Max</h2>
          {/* <div className="flex items-center my-2">
                <div className="text-Highlight font-semibold">4.9</div>
                <div className="text-secondary ml-1 ">
                  <FaStar className="h-5 w-5" />
                </div>
              </div> */}
          <p className="text-gray-600">Color</p>
          <div className="flex space-x-2 my-2">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            <div className="w-6 h-6 rounded-full bg-purple-500"></div>
          </div>
          {/* <div className="flex gap-x-5">
                <p className="text-gray-600 line-through">S/500.00 PEN</p>
                <p className="text-secondary font-bold">S/450.00 PEN</p>
              </div> */}
          <button className="px-8 my-5 py-3 rounded-2xl text-white text-xl font-semibold bg-secondary w-[200px]">
            Agregar  
          </button>
          <button className="px-8  py-3 rounded-2xl text-white text-xl font-semibold bg-secondary w-[200px]">
            Agregar  
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrductCard;


// import React from 'react'
// import PrductCard from './PrductCard'

// const Products = () => {
//   return (
//     <div className='px-20'>
//         <div className="text-blue-400 font-bold text-3xl mb-20">
//         Productos relacionados a "Apple iMac..."
//       </div>

//       <div className='flex gap-x-20 justify-center'>
//         <PrductCard />
//         <PrductCard />
//         <PrductCard />
//         <PrductCard />
//       </div>
//     </div>
//   )
// }

// export default Products