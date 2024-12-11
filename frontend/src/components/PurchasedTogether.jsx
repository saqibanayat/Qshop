import React from "react";

const PurchasedTogether = () => {
  return (
    <div className="py-8 px-4 md:px-8 overflow-hidden">
      <h1 className="text-blue-600 text-xl md:text-2xl font-bold py-4 md:py-8">
        Comprados juntos usualmente
      </h1>

      <div className="flex flex-col md:flex-row items-center md:gap-36 px-4 md:px-16">
        {/* First item */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
          <div className="flex items-center justify-center mb-4">
            <svg
              width="231"
              height="199"
              viewBox="0 0 231 199"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="231" height="199" rx="20" fill="#D9D9D9" />
            </svg>
          </div>
          <p className="w-52 text-center">
            Apple iMac MK442LL/A 21.5-Pulgadas computadora
          </p>
          <h1 className="text-blue-400 text-xl">S/4,500.00 PEN</h1>
        </div>

        {/* Plus sign */}
        <div className="text-4xl flex items-center justify-center mx-4 md:mx-0">
          +
        </div>

        {/* Second item */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-0 ">
          <div className="flex items-center justify-center mb-4">
            <svg
              width="231"
              height="199"
              viewBox="0 0 231 199"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="231" height="199" rx="20" fill="#D9D9D9" />
            </svg>
          </div>
          <p className="w-52 text-center">
            Apple iMac MK442LL/A 21.5-Pulgadas computadora
          </p>
          <h1 className="text-blue-400 text-xl">S/4,500.00 PEN</h1>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-8 md:mt-0 md:flex md:flex-col md:items-center md:text-center">
        <h1 className="text-2xl py-4">Llévatelos juntos por:</h1>
        <h1 className="text-blue-400 text-3xl py-4">S/4,500.00 PEN</h1>
        <div className="py-4">
          <button className="h-[52px] flex items-center justify-center w-full md:w-72 rounded-lg bg-yellow-400 text-center text-xl py-4 text-white">
            Agregar ambos al carrito
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center py-16">
        <svg
          width="100%"
          height="1"
          viewBox="0 0 1236 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="1236" y2="0.5" stroke="#C6C6C6" />
        </svg>
      </div>
    </div>
  );
};

export default PurchasedTogether;
