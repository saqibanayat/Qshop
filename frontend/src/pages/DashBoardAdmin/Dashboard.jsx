import React from "react";
import { TrendingUp, Archive, Package } from "lucide-react";
import {
  IoIosArrowDown,
  IoMdArrowDropdown,
  IoMdCloseCircle,
} from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { HiClock } from "react-icons/hi2";
import { AiFillInfoCircle } from "react-icons/ai";
import calender from "../Assets/calendar.png";
import box2 from "../Assets/box2.png";
import barrow from "../Assets/barrow.png";

const Dashboard = () => {
  return (
    <div className="bg-white p-4 overflow-auto rounded-xl">
      <h1 className="text-[#1C98F7] font-Quicksand font-bold mb-4 mt-4 md:ml-8 text-3xl">
        Dashboard
      </h1>
      <h1 className="text-[#FF9900] font-Quicksand font-bold md:ml-8">
        Periodo Febrero 2024- Marzo 2024
      </h1>
      <div className="flex flex-col lg:flex-row mt-10 justify-between space-x-0 lg:space-x-8 px-8">
        <div className="flex-grow">
          {/* grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-8">
            {/* col  1 */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-[#FF47474D] to-[#FFFFFF0F] shadow-md px-2 py-8">
              <TrendingUp className="h-10 w-10 bg-[#FF4747] text-white rounded-full p-2" />
              <h1 className="text-[#777777] font-Quicksand font-bold mt-2">
                Total ventas
              </h1>
              <p className="font-Quicksand text-[#777777] mt-1">+ 43%</p>
              <h1 className="text-[#FF9900] font-Quicksand font-bold mt-1">
                S/253,000
              </h1>
            </div>
            {/* col  2 */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-[#1C98F74D] to-[#FFFFFF0F] shadow-md px-2 py-8">
              <Archive className="h-10 w-10 bg-[#1C98F7] text-white rounded-full p-2" />
              <h1 className="font-Quicksand font-bold text-[#777777] mt-2">
                Total pedidos
              </h1>
              <p className="font-Quicksand text-[#777777] mt-1">+ 13%</p>
              <h1 className="font-Quicksand font-bold text-[#777777] mt-1">
                256
              </h1>
            </div>
            {/* col  3 */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-[#FF99004D] to-[#FFFFFF] shadow-md px-2 py-8">
              <Package className="h-10 w-10 bg-[#FF9900] text-white rounded-full p-2" />
              <h1 className="font-Quicksand font-bold text-[#777777] mt-2">
                Total productos
              </h1>
              <p className="font-Quicksand text-[#777777] mt-1">+ 7%</p>
              <h1 className="font-Quicksand font-bold text-[#777777] mt-1">
                S/729.00
              </h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-4 mt-6">
            <div className="flex items-center">
              <h1 className="text-[#777777] font-Quicksand underline">
                Más datos
              </h1>
              <IoIosArrowDown className="text-[#FF9900] font-bold ml-3" />
            </div>
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 mt-4 md:mt-0">
              <div className="flex items-center">
                <h1 className="text-[#777777] font-Quicksand">
                  Periodo actual
                </h1>
                <img
                  src={calender}
                  alt="calender"
                  className="text-[#FF9900] font-bold ml-3 h-5 w-5"
                />
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <h1 className="text-[#777777] font-Quicksand">
                  Periodo a comparar
                </h1>
                <img
                  src={calender}
                  alt="calender"
                  className="text-[#FF9900] font-bold ml-3 h-5 w-5"
                />
              </div>
            </div>
          </div>
          {/* grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-4 mt-6 justify-center items-center rounded-xl shadow-lg p-4">
            {/* row 1 col 1 */}
            <div className="flex items-center justify-center space-x-4 bg-[#F3F8FE] rounded-xl p-2">
              <FaCheck className="text-[#40A81C] inline-block" />
              <h1 className="font-Quicksand text-[#777777]">Confirmados</h1>
              <h1 className="text-[#40A81C] font-Quicksand font-bold">50</h1>
            </div>
            {/* row 1 col 2 */}
            <div className="flex items-center justify-center space-x-4 bg-[#F3F8FE] rounded-xl p-2">
              <HiClock className="text-[#FF9900] h-7 w-7" />
              <h1 className="font-Quicksand text-[#777777]">Pendientes</h1>
              <h1 className="text-[#FF9900] font-Quicksand font-bold">25</h1>
            </div>
            {/* row 1 col 3 */}
            <div className="flex items-center justify-center space-x-4 bg-[#F3F8FE] rounded-xl p-2">
              <IoMdCloseCircle className="text-[#FF4747] h-7 w-7" />
              <h1 className="font-Quicksand text-[#777777]">Cancelados</h1>
              <h1 className="text-[#FF4747] font-Quicksand font-bold">15</h1>
            </div>
            {/* row 2 col 1 */}
            <div className="flex items-center justify-center space-x-4 bg-[#F3F8FE] rounded-xl p-2">
              <img
                src={box2}
                alt="box2"
                className="text-[#40A81C] inline-block"
              />
              <h1 className="font-Quicksand text-[#777777]">Entregados</h1>
              <h1 className="text-[#FF9900] font-Quicksand font-bold">165</h1>
            </div>
            {/* row 2 col 2 */}
            <div className="flex items-center justify-center space-x-4 bg-[#F3F8FE] rounded-xl p-2">
              <img
                src={barrow}
                alt="barrow"
                className="text-[#40A81C] inline-block"
              />
              <h1 className="font-Quicksand text-[#777777]">Regresados</h1>
              <h1 className="text-[#004E89] font-Quicksand font-bold">15</h1>
            </div>
            {/* row 2 col 3 */}
            <div className="flex items-center justify-center space-x-4 bg-[#F3F8FE] rounded-xl p-2">
              <AiFillInfoCircle className="text-[#FFD100] h-7 w-7" />
              <h1 className="font-Quicksand text-[#777777]">Error de envío</h1>
              <h1 className="text-[#FFD100] font-Quicksand font-bold">15</h1>
            </div>
          </div>
        </div>
        {/*1st side column */}
        <div className="text-center md:text-start rounded-2xl border-2 mt-6 md:mt-0 p-2 md:px-5 md:py-4">
          <h1 className="text-[#1C98F7] text-base md:text-xl font-Quicksand font-bold">
            Mensajes recientes
          </h1>
          <div className="border-b ">
            <div className="md:ml-10 mt-5">
              <h1 className="font-Quicksand text-sm md:text-base font-semibold">
                James Benny
              </h1>
              <p className="font-Quicksand text-xs md:text-base text-[#777777] mb-3">
                ¿Sigue disponible la pc gamer?
              </p>
            </div>
          </div>
          <div className="border-b ">
            <div className="md:ml-10 mt-3">
              <h1 className="font-Quicksand text-sm md:text-base  font-semibold">
                William Chynita
              </h1>
              <p className="font-Quicksand text-xs md:text-base text-[#777777] mb-3">
                Tuve un problema con el envío
              </p>
            </div>
          </div>
          <div className="border-b ">
            <div className="md:ml-10 mt-3">
              <h1 className="font-Quicksand text-sm md:text-base  font-semibold">
                Henry David
              </h1>
              <p className="font-Quicksand text-xs md:text-base text-[#777777] mb-3">
                Muchas gracias, llegó excelente...
              </p>
            </div>
          </div>

          <div className="md:ml-10 mt-3">
            <h1 className="font-Quicksand text-sm md:text-base  font-semibold">
              Charlotte Flair
            </h1>
            <p className="font-Quicksand text-xs md:text-base text-[#777777] mb-3">
              ¿En cuánto tiempo llegaría el ped...
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-[#1C98F7] text-white font-Quicksand px-12  md:px-24 py-2 rounded-xl">
              Ver chats
            </button>
          </div>
        </div>
      </div>
      {/* new section */}
      <div className="flex flex-col lg:flex-row mt-10 justify-between lg:space-x-8 px-4 lg:px-8">
        <div className="flex-grow">
          <div className="flex flex-row lg:items-center">
            <h1 className="font-Quicksand font-bold text-[#1C98F7]">
              Resumen ventas
            </h1>
            <div className="ml-auto md:mt-4 lg:mt-0 flex items-center space-x-2 border p-2">
              <button className="font-Quicksand font-bold">Mes</button>
              <IoMdArrowDropdown className="text-xl" />
            </div>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder=""
              className="w-full py-8 lg:py-16 border border-gray-300 rounded-md"
            />
          </div>
          <h1 className="font-Quicksand font-bold text-[#1C98F7] mt-10">
            Últimos pedidos
          </h1>
          {/* grid */}
          <div className="grid grid-rows-4 gap-4 mt-4">
            {/* row 1 */}
            <div className="bg-[#1C98F7] text-sm md:text-base text-white font-Quicksand flex items-center justify-between px-4 lg:px-12 w-full rounded-xl">
              <h1>Cliente</h1>
              <h1>Fecha</h1>
              <h1>Precio</h1>
              <h1>Producto</h1>
            </div>
            {/* row  2*/}
            <div className="font-Quicksand text-xs md:text-base flex items-center justify-between px-4 lg:px-12 py-2 w-full rounded-xl">
              <h1 className="text-[#777777]">James Benny</h1>
              <h1 className="text-[#777777]">12-Feb-24</h1>
              <h1 className="text-[#FF9900] font-bold">S/1550.00 PEN</h1>
              <h1 className="text-[#777777]">
                Case Iphone
                <br /> 15 pro max
              </h1>
            </div>
            {/* row  3*/}
            <div className="font-Quicksand text-xs md:text-base flex items-center justify-between px-4 lg:px-12 py-2 w-full rounded-xl">
              <h1 className="text-[#777777]">James Benny</h1>
              <h1 className="text-[#777777]">12-Feb-24</h1>
              <h1 className="text-[#FF9900] font-bold">S/1550.00 PEN</h1>
              <h1 className="text-[#777777]">
                Case Iphone
                <br /> 15 pro max
              </h1>
            </div>
            {/* row  4*/}
            <div className="font-Quicksand text-xs md:text-base flex items-center justify-between px-4 lg:px-12 py-2 w-full rounded-xl">
              <h1 className="text-[#777777]">James Benny</h1>
              <h1 className="text-[#777777]">12-Feb-24</h1>
              <h1 className="text-[#FF9900] font-bold">S/1550.00 PEN</h1>
              <h1 className="text-[#777777]">
                Case Iphone
                <br /> 15 pro max
              </h1>
            </div>
          </div>
          <h1 className="font-Quicksand font-bold text-[#1C98F7] underline text-center mt-5">
            Ver pedidos
          </h1>
        </div>
        {/* 2nd side column */}
        <div className="border h-96 mt-8 lg:mt-0">
          <div className="flex flex-col rounded-2xl px-5 py-4">
            <h1 className="font-Quicksand font-bold text-[#1C98F7]">
              Anuncios
            </h1>
            <p className="font-Quicksand text-[#777777] mb-60">
              Aprobamos tu último producto agregado
              <br /> con nosotros
            </p>
            <button className="bg-[#1C98F7] text-white font-Quicksand px-16 py-2 rounded-xl">
              Ver anuncios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
