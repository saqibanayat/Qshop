import React from "react";
import { Plus } from "lucide-react";

const Direction = () => {
  return (
    <div className="bg-white p-16 overflow-x-auto">
      <h1 className="text-[#1C98F7] font-Quicksand font-bold text-4xl">
        Dirección
      </h1>
      <h1 className="text-[#1C98F7] mt-8 text-xl">Dirección predeterminada</h1>
      <div className="flex flex-col md:flex-row justify-between mt-4 border-b-4 ">
        <p className="text-[#777777] font-Quicksand text-xl mb-6">
          Bajada Marta Collazo 1 Puerta 839, La Libertad, San
          <br /> Pedro de Lloc, Peru.
        </p>
        <h1 className="text-[#004E89] text-lg md:text-xl font-Quicksand font-bold mb-6">
          Editar dirección
        </h1>
      </div>
      <div className="mt-6">
        <h1 className="text-[#1C98F7] text-xl ">Direcciones guardadas</h1>
        <p className="text-[#777777] font-Quicksand text-xl mt-4">
          Bajada Marta Collazo 1 Puerta 839, La Libertad, San
          <br /> Pedro de Lloc, Peru.
        </p>
        <p className="text-[#004E89] font-Quicksand font-semibold text-xl mt-4">
          Establecer dirección determinada
        </p>
        <p className="text-[#777777] font-Quicksand text-xl mt-4">
          Bajada Marta Collazo 1 Puerta 839, La Libertad, San
          <br /> Pedro de Lloc, Peru.
        </p>
        <p className="text-[#004E89] font-Quicksand font-semibold text-xl mt-4">
          Establecer dirección determinada
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center space-x-6 mt-8">
          <button className="rounded-full shadow-lg p-3  text-[#1C98F7]">
            <Plus />
          </button>
          <h1 className="text-[#777777] font-Quicksand font-normal text-xl">
            Agregar dirección
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Direction;
