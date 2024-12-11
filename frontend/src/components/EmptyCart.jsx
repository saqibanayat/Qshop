import React from "react";

const EmptyCart = () => {
  return (
    <div className="flex flex-col px-4 md:px-12 py-4 md:py-12 gap-4 md:gap-12 overflow-hidden">
      <div className="sm:w-full">
        <h1 className="text-2xl text-blue-400 pb-4">Tu carrito está vacío</h1>

        <p className="pr-4">
          Tu carrito de compras vive para servirte. Dale un propósito, llénalo
          con provisiones, ropa, artículos para el hogar, electrónicos y
          más. Continúa comprando en Qshop.com.pe, obtén información sobre las{" "}
          <span className="text-orange-400 underline">ofertas de hoy</span> o
          visita tus{" "}
          <span className="text-orange-400 underline">favoritos</span>
        </p>

        <div className="py-4 overflow-hidden mx-4">
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

        <h1 className="text-2xl text-blue-400 pb-4">Tu carrito está vacío</h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-20">
          <h1 className="md:w-1/2">Mis favoritos</h1>
          <h1 className="md:w-1/2">Comprar nuevamente</h1>
        </div>

        <div className="py-2">
          <svg
            width="840"
            height="4"
            viewBox="0 0 840 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="-1.74846e-07"
              y1="2"
              x2="840"
              y2="1.99993"
              stroke="#C6C6C6"
              strokeWidth="4"
            />
          </svg>
        </div>

        <p className="py-4">
          Actualmente no tienes productos en ninguna lista de favoritos.{" "}
          <span className="text-orange-400 underline">¡Crea una lista ahora!</span>
        </p>

        <button className="h-12 md:h-[52px] w-full md:w-[300px] rounded-lg justify-center flex items-center bg-blue-400 text-center text-xl py-4 text-white">
          Crear lista de favoritos
        </button>
      </div>

      <div className="border-2 border-gray-400 p-4 md:p-8">
        <p className="py-4">
          Los clientes que compraron productos relacionados a tu última búsqueda
          también compraron
        </p>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex mb-4 md:w-1/2">
            <div className="flex items-center gap-4">
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
                <h4 className="font-manrope font-semibold text-xl leading-10 text-blue-400 mb-2">
                  Airpods (3a generación)
                </h4>

                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                      className="text-yellow-400"
                    >
                      <g clipPath="url(#clip0_13624_2974)">
                        <path
                          d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13624_2974">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ))}
                  <h1>5,340 valoraciones</h1>
                </div>

                <h1 className="text-xl text-blue-400 py-2">S/200.00 PEN</h1>

                <button className="h-12 md:h-[48px] w-full md:w-[250px] rounded-lg justify-center flex items-center bg-yellow-400 text-center text-xl py-4 text-white">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 md:pt-8 md:w-1/2">
            <div className="flex mb-4">
              <div className="flex items-center gap-4">
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
                  <h4 className="font-manrope font-semibold text-xl leading-10 text-blue-400 mb-2">
                    Airpods (3a generación)
                  </h4>

                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="none"
                        className="text-yellow-400"
                      >
                        <g clipPath="url(#clip0_13624_2974)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2974">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                    <h1>5,340 valoraciones</h1>
                  </div>

                  <h1 className="text-xl text-blue-400 py-2">S/200.00 PEN</h1>

                  <button className="h-12 md:h-[48px] w-full md:w-[250px] rounded-lg justify-center flex items-center bg-yellow-400 text-center text-xl py-4 text-white">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
