import React, { useEffect } from "react";

import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const YourComponent = () => {
  useEffect(() => {
    const swiper_thumbs = new Swiper(".nav-for-slider", {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 5,
    });

    const swiper = new Swiper(".main-slide-carousel", {
      slidesPerView: 1,
      thumbs: {
        swiper: swiper_thumbs,
      },
    });
  }, []);

  return (
    <>
      <style>
        {`
          .nav-for-slider .swiper-slide {
              height: auto;
              width: auto;
              cursor: pointer;
          }
          .swiper-wrapper {
              height: auto;
          }
          .nav-for-slider .swiper-slide img {
              border: 2px solid transparent;
              border-radius: 10px;
          }
          .nav-for-slider .swiper-slide-thumb-active img {
              border-color: rgb(79 70 229);
          }
        `}
      </style>
      <section className="py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
              <div className="swiper main-slide-carousel swiper-container relative mb-6">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="block">
                      <img
                        src="https://pagedone.io/asset/uploads/1700472379.png"
                        alt="Summer Travel Bag image"
                        className="max-lg:mx-auto"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="block">
                      <img
                        src="https://pagedone.io/asset/uploads/1711622397.png"
                        alt="Summer Travel Bag image"
                        className="max-lg:mx-auto"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="block">
                      <img
                        src="https://pagedone.io/asset/uploads/1711622408.png"
                        alt="Summer Travel Bag image"
                        className="max-lg:mx-auto"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="block">
                      <img
                        src="https://pagedone.io/asset/uploads/1711622419.png"
                        alt="Summer Travel Bag image"
                        className="max-lg:mx-auto"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="block">
                      <img
                        src="https://pagedone.io/asset/uploads/1711622437.png"
                        alt="Summer Travel Bag image"
                        className="max-lg:mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-for-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide thumbs-slide">
                    <img
                      src="https://pagedone.io/asset/uploads/1700472379.png"
                      alt="Summer Travel Bag image"
                      className="cursor-pointer rounded-xl transition-all duration-500"
                    />
                  </div>
                  <div className="swiper-slide thumbs-slide">
                    <img
                      src="https://pagedone.io/asset/uploads/1700472430.png"
                      alt="Summer Travel Bag image"
                      className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600"
                    />
                  </div>
                  <div className="swiper-slide thumbs-slide">
                    <img
                      src="https://pagedone.io/asset/uploads/1700472416.png"
                      alt="Summer Travel Bag image"
                      className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600"
                    />
                  </div>
                  <div className="swiper-slide thumbs-slide">
                    <img
                      src="https://pagedone.io/asset/uploads/1700472446.png"
                      alt="Summer Travel Bag image"
                      className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600"
                    />
                  </div>
                  <div className="swiper-slide thumbs-slide">
                    <img
                      src="https://pagedone.io/asset/uploads/1700472467.png"
                      alt="Summer Travel Bag image"
                      className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 ">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="text">
                    <div className="flex gap-2 pb-2">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 29.3333C22.8889 29.3333 21.9444 28.9444 21.1667 28.1666C20.3889 27.3888 20 26.4444 20 25.3333C20 25.1777 20.0111 25.0164 20.0333 24.8493C20.0556 24.6822 20.0889 24.5324 20.1333 24.4L10.7333 18.9333C10.3556 19.2666 9.93333 19.528 9.46667 19.7173C9 19.9066 8.51111 20.0008 8 20C6.88889 20 5.94444 19.6111 5.16667 18.8333C4.38889 18.0555 4 17.1111 4 16C4 14.8888 4.38889 13.9444 5.16667 13.1666C5.94444 12.3888 6.88889 12 8 12C8.51111 12 9 12.0946 9.46667 12.284C9.93333 12.4733 10.3556 12.7342 10.7333 13.0666L20.1333 7.59996C20.0889 7.46663 20.0556 7.31685 20.0333 7.15063C20.0111 6.9844 20 6.82307 20 6.66663C20 5.55552 20.3889 4.61107 21.1667 3.83329C21.9444 3.05551 22.8889 2.66663 24 2.66663C25.1111 2.66663 26.0556 3.05551 26.8333 3.83329C27.6111 4.61107 28 5.55552 28 6.66663C28 7.77774 27.6111 8.72218 26.8333 9.49996C26.0556 10.2777 25.1111 10.6666 24 10.6666C23.4889 10.6666 23 10.5724 22.5333 10.384C22.0667 10.1955 21.6444 9.93418 21.2667 9.59996L11.8667 15.0666C11.9111 15.2 11.9444 15.3502 11.9667 15.5173C11.9889 15.6844 12 15.8453 12 16C12 16.1555 11.9889 16.3168 11.9667 16.484C11.9444 16.6511 11.9111 16.8008 11.8667 16.9333L21.2667 22.4C21.6444 22.0666 22.0667 21.8057 22.5333 21.6173C23 21.4288 23.4889 21.3342 24 21.3333C25.1111 21.3333 26.0556 21.7222 26.8333 22.5C27.6111 23.2777 28 24.2222 28 25.3333C28 26.4444 27.6111 27.3888 26.8333 28.1666C26.0556 28.9444 25.1111 29.3333 24 29.3333Z"
                          fill="#FF9900"
                        />
                      </svg>
                      <h1>Compartir artículo</h1>
                    </div>

                    <svg
                      width="350"
                      height="1"
                      viewBox="0 0 426 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line y1="0.5" x2="426" y2="0.5" stroke="#C6C6C6" />
                    </svg>

                    <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 pt-2">
                      Apple iMac MK442LL/A 21.5-Pulgadas computadora
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                  <div className="flex items-center gap-3">
                    <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">
                      4.9{" "}
                    </h5>
                    <div>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_12029_1640)">
                          <path
                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_12029_1640">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <h5 className="pl-4">1,155 calificaciones</h5>
                </div>
                <div className="flex gap-3 pb-6">
                  <h1 className="text-2xl">Precio:</h1>
                  <h1 className="text-3xl text-blue-400">S/4,500.00 PEN</h1>
                </div>

                <ul className="grid gap-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M38.9994 40.0834C40.7977 40.0834 42.2494 38.6317 42.2494 36.8334C42.2494 35.0351 40.7977 33.5834 38.9994 33.5834C37.201 33.5834 35.7494 35.0351 35.7494 36.8334C35.7494 38.6317 37.201 40.0834 38.9994 40.0834ZM42.2494 20.5834H36.8327V26.0001H46.496L42.2494 20.5834ZM12.9993 40.0834C14.7977 40.0834 16.2493 38.6317 16.2493 36.8334C16.2493 35.0351 14.7977 33.5834 12.9993 33.5834C11.201 33.5834 9.74935 35.0351 9.74935 36.8334C9.74935 38.6317 11.201 40.0834 12.9993 40.0834ZM43.3327 17.3334L49.8327 26.0001V36.8334H45.4994C45.4994 40.4301 42.596 43.3334 38.9994 43.3334C35.4027 43.3334 32.4993 40.4301 32.4993 36.8334H19.4993C19.4993 40.4301 16.596 43.3334 12.9993 43.3334C9.40268 43.3334 6.49935 40.4301 6.49935 36.8334H2.16602V13.0001C2.16602 10.5951 4.09435 8.66675 6.49935 8.66675H36.8327V17.3334H43.3327ZM6.49935 13.0001V32.5001H8.14602C9.33768 31.1784 11.071 30.3334 12.9993 30.3334C14.9277 30.3334 16.661 31.1784 17.8527 32.5001H32.4993V13.0001H6.49935ZM21.666 15.1667L29.2493 22.7501L21.666 30.3334V24.9167H10.8327V20.5834H21.666V15.1667Z"
                        fill="#FF9900"
                      />
                    </svg>

                    <span className="font-normal text-base text-gray-900 ">
                      Entrega rápida en todo el país
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.375 9.75C9.22012 9.75 7.15349 10.606 5.62976 12.1298C4.10602 13.6535 3.25 15.7201 3.25 17.875V19.5H48.75V17.875C48.75 15.7201 47.894 13.6535 46.3702 12.1298C44.8465 10.606 42.7799 9.75 40.625 9.75H11.375ZM48.75 22.75H3.25V34.125C3.25 36.2799 4.10602 38.3465 5.62976 39.8702C7.15349 41.394 9.22012 42.25 11.375 42.25H40.625C42.7799 42.25 44.8465 41.394 46.3702 39.8702C47.894 38.3465 48.75 36.2799 48.75 34.125V22.75ZM34.125 32.5H40.625C41.056 32.5 41.4693 32.6712 41.774 32.976C42.0788 33.2807 42.25 33.694 42.25 34.125C42.25 34.556 42.0788 34.9693 41.774 35.274C41.4693 35.5788 41.056 35.75 40.625 35.75H34.125C33.694 35.75 33.2807 35.5788 32.976 35.274C32.6712 34.9693 32.5 34.556 32.5 34.125C32.5 33.694 32.6712 33.2807 32.976 32.976C33.2807 32.6712 33.694 32.5 34.125 32.5Z"
                        fill="#FF9900"
                      />
                    </svg>

                    <span className="font-normal text-base text-gray-900 ">
                      Pago seguro
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.834 36.8333C10.834 37.9826 11.2905 39.0848 12.1032 39.8975C12.9158 40.7101 14.018 41.1667 15.1673 41.1667C16.3166 41.1667 17.4188 40.7101 18.2314 39.8975C19.0441 39.0848 19.5007 37.9826 19.5007 36.8333C19.5007 35.6841 19.0441 34.5819 18.2314 33.7692C17.4188 32.9565 16.3166 32.5 15.1673 32.5C14.018 32.5 12.9158 32.9565 12.1032 33.7692C11.2905 34.5819 10.834 35.6841 10.834 36.8333ZM32.5007 36.8333C32.5007 37.9826 32.9572 39.0848 33.7699 39.8975C34.5825 40.7101 35.6847 41.1667 36.834 41.1667C37.9833 41.1667 39.0855 40.7101 39.8981 39.8975C40.7108 39.0848 41.1673 37.9826 41.1673 36.8333C41.1673 35.6841 40.7108 34.5819 39.8981 33.7692C39.0855 32.9565 37.9833 32.5 36.834 32.5C35.6847 32.5 34.5825 32.9565 33.7699 33.7692C32.9572 34.5819 32.5007 35.6841 32.5007 36.8333Z"
                        stroke="#FF9900"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.8333 36.8333H6.5V12.9999C6.5 12.4253 6.72827 11.8742 7.1346 11.4679C7.54093 11.0615 8.09203 10.8333 8.66667 10.8333H28.1667V23.8333H17.3333M17.3333 23.8333L21.6667 28.1666M17.3333 23.8333L21.6667 19.4999M19.5 36.8333H32.5M28.1667 12.9999H39L45.5 23.8333V36.8333H41.1667"
                        stroke="#FF9900"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span className="font-normal text-base text-gray-900 ">
                      Política de devolución de 7 días
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M47.9173 25L42.834 19.1875L43.5423 11.5L36.0215 9.79167L32.084 3.125L25.0007 6.16667L17.9173 3.125L13.9798 9.77083L6.45898 11.4583L7.16732 19.1667L2.08398 25L7.16732 30.8125L6.45898 38.5208L13.9798 40.2292L17.9173 46.875L25.0007 43.8125L32.084 46.8542L36.0215 40.2083L43.5423 38.5L42.834 30.8125L47.9173 25ZM19.5423 33.3542L14.584 28.3542C14.3909 28.1614 14.2376 27.9325 14.1331 27.6805C14.0285 27.4284 13.9747 27.1583 13.9747 26.8854C13.9747 26.6126 14.0285 26.3424 14.1331 26.0904C14.2376 25.8383 14.3909 25.6094 14.584 25.4167L14.7298 25.2708C15.5423 24.4583 16.8757 24.4583 17.6882 25.2708L21.0423 28.6458L31.7715 17.8958C32.584 17.0833 33.9173 17.0833 34.7298 17.8958L34.8756 18.0417C35.6881 18.8542 35.6881 20.1667 34.8756 20.9792L22.5423 33.3542C21.6882 34.1667 20.3757 34.1667 19.5423 33.3542Z"
                        fill="#FF9900"
                      />
                    </svg>

                    <span className="font-normal text-base text-gray-900 ">
                      Productos 100% auténticos
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center items-center ">
              <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8 border-2 text-gray-500 p-4">
                <div className="flex items-center justify-between gap-6 mb-6">
                  <div className="text">
                    <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">
                      Reacondicionada - Excelentes condiciones
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                  <h1 className="text-3xl text-blue-400">S/4,500.00 PEN</h1>
                </div>

                <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                  <h1 className="text-3xl text-green-400">Disponible</h1>
                </div>

                <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                  <h1 className="text-2xl">Costo de envío: S/150.00 PEN</h1>
                </div>

                <div className="flex flex-col gap-6">
                  <button className="h-[64px] w-1/2 rounded-lg bg-yellow-400 text-center text-2xl py-4 text-white ">
                    Agregar al carrito
                  </button>

                  <button className="h-[64px] w-1/2 rounded-lg bg-orange-400 text-center text-2xl py-4 text-white">
                    Comprar ahora
                  </button>
                </div>

                <h1 className="py-2 pt-6 text-xl">Envío desde: Lima, Perú</h1>
                <h1 className="pb-8 text-xl">Vendido por: José Rodríguez</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YourComponent;
