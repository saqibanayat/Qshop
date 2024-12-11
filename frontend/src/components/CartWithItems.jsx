import React from "react";

const CartWithItems = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 md:px-12 py-12 gap-12 overflow-hidden">
      <div className="w-full md:w-2/3">
        <h1 className="text-2xl text-blue-400">Tu carrito (2 productos)</h1>

        <div className=" py-4">
          <svg
            width="840"
            height="1"
            viewBox="0 0 840 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="-4.37114e-08"
              y1="0.5"
              x2="840"
              y2="0.499927"
              stroke="#C6C6C6"
            />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center gap-6">
            <div>
              <svg
                width="170"
                height="170"
                viewBox="0 0 205 205"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="205" height="205" rx="20" fill="#B8D7FF" />
              </svg>{" "}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-manrope font-semibold text-xl leading-10 text-black mb-2">
                  Apple iMac MK442LL/A 21.5-...
                </h4>

                <h1 className="text-xl text-blue-400 py-2">S/200.00 PEN</h1>
              </div>

              <h1>Vendido por: José Rodríguez</h1>

              <h1 className="text-green-400 py-3">Disponible</h1>

              <div className="flex flex-col lg:flex-row gap-2">
                <div>
                  <button className="h-[48px] md:w-[200px] px-2 rounded-lg justify-center flex items-center bg-gray-300 text-center text-xl py-4 text-gray-900">
                    Cantidad:
                    <form>
                      <div className="relative flex items-center">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="quantity-input"
                          className="rounded-s-lg p-3 h-11 focus:ring-2 focus:outline-none"
                        >
                          <svg
                            className="w-3 h-3 text-gray-900"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          id="quantity-input"
                          data-input-counter
                          aria-describedby="helper-text-explanation"
                          className="h-11 text-center text-gray-900 bg-gray-300 text-sm block w-4 py-2.5"
                          placeholder="1"
                          required
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="quantity-input"
                          className="rounded-e-lg p-3 h-11 focus:ring-2"
                        >
                          <svg
                            className="w-3 h-3 text-gray-900"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </button>
                </div>
                <div>
                  <button className="h-[48px] md:w-[200px] rounded-lg justify-center flex items-center bg-blue-400 text-center text-xl py-4 text-white">
                    Agregar a favoritos
                  </button>
                </div>
                <div className="flex">
                  <h1 className="mx-2 text-gray-300 underline">Compartir</h1>

                  <h1 className="mx-2 text-gray-300 underline">Eliminar</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-4">
          <svg
            width="840"
            height="1"
            viewBox="0 0 840 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="-4.37114e-08"
              y1="0.5"
              x2="840"
              y2="0.499927"
              stroke="#C6C6C6"
            />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex items-center gap-6">
            <div>
              <svg
                width="170"
                height="170"
                viewBox="0 0 205 205"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="205" height="205" rx="20" fill="#B8D7FF" />
              </svg>{" "}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-manrope font-semibold text-xl leading-10 text-black mb-2">
                  Apple iMac MK442LL/A 21.5-...
                </h4>

                <h1 className="text-xl text-blue-400 py-2">S/200.00 PEN</h1>
              </div>

              <h1>Vendido por: José Rodríguez</h1>

              <h1 className="text-green-400 py-3">Disponible</h1>

              <div className="flex flex-col lg:flex-row gap-2">
                <div>
                  <button className="h-[48px] md:w-[200px] px-2 rounded-lg justify-center flex items-center bg-gray-300 text-center text-xl py-4 text-gray-900">
                    Cantidad:
                    <form>
                      <div className="relative flex items-center">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="quantity-input"
                          className="rounded-s-lg p-3 h-11 focus:ring-2 focus:outline-none"
                        >
                          <svg
                            className="w-3 h-3 text-gray-900"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          id="quantity-input"
                          data-input-counter
                          aria-describedby="helper-text-explanation"
                          className="h-11 text-center text-gray-900 bg-gray-300 text-sm block w-4 py-2.5"
                          placeholder="1"
                          required
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="quantity-input"
                          className="rounded-e-lg p-3 h-11 focus:ring-2"
                        >
                          <svg
                            className="w-3 h-3 text-gray-900"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </button>
                </div>
                <div>
                  <button className="h-[48px] md:w-[200px] rounded-lg justify-center flex items-center bg-blue-400 text-center text-xl py-4 text-white">
                    Agregar a favoritos
                  </button>
                </div>
                <div className="flex">
                  <h1 className="mx-2 text-gray-300 underline">Compartir</h1>

                  <h1 className="mx-2 text-gray-300 underline">Eliminar</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-4">
          <svg
            width="840"
            height="1"
            viewBox="0 0 840 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="-4.37114e-08"
              y1="0.5"
              x2="840"
              y2="0.499927"
              stroke="#C6C6C6"
            />
          </svg>
        </div>
      </div>

      <div className="md:border-2 md:border-gray-400 md:px-6">
        <h1 className="text-2xl text-gray-900 py-6">Total a pagar</h1>

        <div className="flex justify-between items-center py-4 border-b border-gray-400">
          <h1 className="text-lg text-gray-700">Subtotal (2 artículos):</h1>
          <h1 className="text-xl text-blue-400">S/400.00 PEN</h1>
        </div>

        <div className="flex justify-between items-center py-4 border-b border-gray-400">
          <h1 className="text-lg text-gray-700">Envío:</h1>
          <h1 className="text-xl text-blue-400">S/20.00 PEN</h1>
        </div>

        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg text-gray-700">Total:</h1>
          <h1 className="text-xl text-blue-400">S/420.00 PEN</h1>
        </div>

        <button className="w-full bg-blue-400 text-white text-lg py-3 mb-6 mt-6 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Pagar ahora
        </button>
      </div>
    </div>
  );
};

export default CartWithItems;
