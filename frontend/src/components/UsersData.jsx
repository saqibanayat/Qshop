import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import airPod from '../assets/homePage/airPods.png';
import profileImage from '../assets/homePage/profile_img.png'

const UsersData = () => {
  return (
    <div className="flex flex-col justify-center items-center shadow-md bg-white">
      <div className="w-full  mx-auto  overflow- overflow-x-auto">
        <div className="flex items-center justify-between p-4">
          <div className="bg-blue-500 md:w-[70%] w-[50%] text-center border-gray-200 border p-4">
            <h2 className="font-bold text-xl text-white">Quiero Comprar</h2>
          </div>
          <div className="bg-white md:w-[30%] w-[50%]text-center border-gray-200 border p-4">
            <h2 className="font-bold text-xl text-gray-800">Quiero Vender</h2>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white shadow-md rounded-2xl">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider rounded-2xl w-12"
              >
                Producto
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider rounded-2xl w-12"
              >
                Producto
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider rounded-2xl w-12"
              >
                Precio
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider rounded-2xl w-12"
              >
                Usuario
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider rounded-2xl w-12"
              >
                Producto
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
           
           

           
            <tr className="shadow-md">
              <td className="px-6 py-4 flex gap-x-4 text-blue-500 text-lg font-semibold text-start items-center">
                <img src={airPod} alt="" className="bg-green-900 w-28 h-28" />
              </td>
              <td className="py-4 text-blue-500 text-lg font-semibold text-start items-center">
                iPhone 13 Pro
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-lg font-semibold text-start">
                S/ 1,500.00 PEN
              </td>
              <td className="px-6 whitespace-nowrap gap-x-5 flex text-blue-500 text-lg font-semibold text-start items-start">
                <img
                  src={profileImage}
                  alt=""
                  className="w-20 h-20 bg-green-900 rounded-full my-auto"
                />
                <div className="flex flex-col text-start">
                  <span>Juan Perez</span>
                  <p className="text-gray-500 flex gap-x-1 items-center">
                    <FaLocationDot /> Lima
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-lg font-semibold text-start">
                <button className="bg-orange-500 text-white rounded-2xl shadow-md px-4 py-2 w-full text-center flex justify-center">
                  Comparar
                </button>
              </td>
            </tr>
            <tr className="shadow-md">
              <td className="px-6 py-4 flex gap-x-4 text-blue-500 text-lg font-semibold text-start items-center">
                <img src={airPod} alt="" className="bg-green-900 w-28 h-28" />
              </td>
              <td className="py-4 text-blue-500 text-lg font-semibold text-start items-center">
                Macbook Air
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-lg font-semibold text-start">
                S/ 2,500.00 PEN
              </td>
              <td className="px-6 whitespace-nowrap gap-x-5 flex text-blue-500 text-lg font-semibold text-start items-start">
                <img
                  src={profileImage}
                  alt=""
                  className="w-20 h-20 bg-green-900 rounded-full my-auto"
                />
                <div className="flex flex-col text-start">
                  <span>Maria Sanchez</span>
                  <p className="text-gray-500 flex gap-x-1 items-center">
                    <FaLocationDot /> Cusco
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-lg font-semibold text-start">
                <button className="bg-orange-500 text-white rounded-2xl shadow-md px-4 py-2 w-full text-center flex justify-center">
                  Comparar
                </button>
              </td>
            </tr>
            <tr className="shadow-md">
              <td className="px-6 py-4 flex gap-x-4 text-blue-500 text-lg font-semibold text-start items-center">
                <img src={airPod} alt="" className="bg-green-900 w-28 h-28" />
              </td>
              <td className="py-4 text-blue-500 text-lg font-semibold text-start items-center">
                Macbook Air
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-lg font-semibold text-start">
                S/ 2,500.00 PEN
              </td>
              <td className="px-6 whitespace-nowrap gap-x-5 flex text-blue-500 text-lg font-semibold text-start items-start">
                <img
                  src={profileImage}
                  alt=""
                  className="w-20 h-20 bg-green-900 rounded-full my-auto"
                />
                <div className="flex flex-col text-start">
                  <span>Maria Sanchez</span>
                  <p className="text-gray-500 flex gap-x-1 items-center">
                    <FaLocationDot /> Cusco
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-lg font-semibold text-start">
                <button className="bg-orange-500 text-white rounded-2xl shadow-md px-4 py-2 w-full text-center flex justify-center">
                  Comparar
                </button>
              </td>
            </tr>
          </tbody>

          <tfoot className=" ">
            <tr>
              <td
                colSpan={5}
                className="text-center text-2xl font-semibold text-gray-500 "
              >
                <button className="py-9 text-orange-500 underline  ">
                  ver más
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default UsersData;
