import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import modalImage from '../../assets/homePage/girl-modal-image.png';
import BlueLogo from '../../assets/Blue-logo.png'
const Benefits = () => {
  return (
    <>
    <div className="px-5 md:px-16 md:my-20 my-7 bg-white p-20 flex flex-cols-2">
 <div className='w-3/4'>
        <h1 className='font-semibold text-4xl text-gray-600 mb-10'>¡Descubre todos los <span className='text-secondary'>beneficios</span> que <span className='text-secondary'>Qshop</span> tiene para tí!</h1>
        <div className='flex flex-wrap gap-4 md:gap-8'>
        <button className='bg-Highlight text-white text-2xl font-medium py-5 px-8 rounded-xl'>Button 1 %</button>
        <button className='bg-Highlight text-white text-2xl font-medium py-5 px-8 rounded-xl'>Button 1 %</button>
        <button className='bg-Highlight text-white text-2xl font-medium py-5 px-8 rounded-xl'>Button 1 %</button>
        </div>
        <button className='bg-secondary text-white text-2xl rounded-xl shadow-lg shadow-black md:mt-12 mt-7 p-4 px-12 flex items-center gap-5 justify-center'>Lorem, ipsum. <FaArrowRight /> </button>
        <div className="flex items-center  gap-5 mt-14">
          <img src={BlueLogo} alt="" />
          <h2 className="uppercase tracking-[.25em]  text-[#1C98F7] font-[400px] text-3xl">
            Qshop
          </h2>
        </div>
    </div>
    <div className="w-1/4">
      <img src={modalImage} alt="" srcset="" />
    </div>
    </div>
   

   

    </>
  )
}

export default Benefits