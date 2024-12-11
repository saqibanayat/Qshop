import React from "react";
import { FaBox } from "react-icons/fa";
import { BsPersonBoundingBox } from "react-icons/bs";

const Details = () => {
  return (
    <>
    <div className="grid md:grid-cols-12 grid-cols-1 h- md:divide-x-4  md:my-20 ">


      {/* left sdei  */}



      <div className="  col-span-5 md:px-20 px-5">
        <div className="text-blue-400 font-bold text-3xl mb-8">
          Acerca de este artículo
        </div>
        <h2 className="text-gray-400 text-xl font-semibold my-6">
          Usos específicos del producto: Profesional
        </h2>
        
        <div className="space-y-4 overflow-hidden h-56">
          <p className="text-gray-400 text-lg font-semibold">Marca: Apple</p>
          <p className="text-gray-400 text-lg font-semibold">
            Sistema operativo: Mac OS X
          </p>
          <p className="text-gray-400 text-lg font-semibold">
            Capacidad de almacenamiento de la memoria: 8 GB
          </p>
          <p className="text-gray-400 text-lg font-semibold">
            Intel Core i5 de 2,8 GHz de cuatro núcleos.
          </p>
          <p className="text-gray-400 text-lg font-semibold">
            Turbo Boost de hasta 3,3 GHz
          </p>
          <p className="text-gray-400 text-lg font-semibold">
            Turbo Boost de hasta 3,3 GHz
          </p>
          <p className="text-gray-400 text-lg font-semibold">
            Turbo Boost de hasta 3,3 GHz
          </p>
        </div>

        <button className=" text-blue-400 underline text-3xl font-semibold my-9">
          Ver más
        </button>
      </div>



      {/* rigth side  */}
      <div className="  col-span-7 md:px-32 px-5 ">
        <div className="text-blue-400 font-bold text-3xl mb-8">
          Acerca de este artículo
        </div>
        <div className="flex flex-row">
          <img src="" alt="" className="w-48 h-48 bg-green-800 rounded-2xl" />
          <div className="flex flex-col justify-between ml-12">
            <h1 className="text-blue-400 font-semibold text-3xl">Heading</h1>
            <p className="flex items-center">
              <BsPersonBoundingBox className="text-gray-600 text-lg mr-6 w-9 h-9" />
              <span className="text-gray-600 font-semibold text-2xl">
                Paragraph
              </span>
            </p>
            <p className="flex items-center">
              <FaBox className="text-gray-600 text-lg mr-6 w-9 h-9" />
              <span className="text-gray-600 font-semibold text-2xl">
                Paragraph
              </span>
            </p>
          </div>
        </div>

        <div className="flex-col flex gap-y-8 mt-6">
          <button className="px-4 py-2 rounded-2xl text-white text-xl font-semibold bg-secondary">
            Button 1
          </button>
          <button className="px-4 py-2 rounded-2xl text-white text-xl font-semibold bg-blue-600">
            Button 2
          </button>
        </div>
      </div>

    </div>
      <hr className="h-1 w-full border mt-5 bg-gray-500 border-gray-500"/>
    </>

  );
};

export default Details;
