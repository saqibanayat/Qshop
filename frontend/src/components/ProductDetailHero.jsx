import React, { useEffect } from "react";
import {ReactComponent as DeliveryIcon} from '../assets/svg/delivery.svg'
import {ReactComponent as CardIcon} from '../assets/svg/cardPayment.svg'
import {ReactComponent as ReturnDeliveryIcon} from '../assets/svg/returnDelivery.svg'
import {ReactComponent as AuthenticProductIcon} from '../assets/svg/autenticProduct.svg'
import {ReactComponent as ReviewStarIcon} from '../assets/svg/reviewStar.svg'

import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const YourComponent = ({ productDetail }) => {
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
                {/* main showcase images loop */}
                <div className="swiper-wrapper">
                  {productDetail?.images.map((item,index) => {
                    return (<>
                      <div className="swiper-slide" key={index}>
                        <div className="block">
                          <img
                            src={item}
                            alt="product image"
                            className="max-lg:mx-auto max-w-[400px]"
                          />
                        </div>
                      </div>
                    </>)
                  })}


                </div>
              </div>
              <div className="nav-for-slider">
                <div className="swiper-wrapper">

                  {productDetail?.images.map((item,index) => {
                    return (<>
                      <div className="swiper-slide thumbs-slide"key={index}>
                        <img
                          src={item}
                          alt="porduct image"
                          className="cursor-pointer rounded-xl transition-all duration-500"
                        />
                      </div>

                    </>)
                  })
                  }
                </div>
              </div>
            </div>
            {/* detail data of porduct  */}
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
                     {productDetail?.name}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                  <div className="flex items-center gap-3">
                    <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">
                      4.9{" "}
                    </h5>
                    <div>
                    <ReviewStarIcon/>
                    </div>
                  </div>

                  <h5 className="pl-4">1,155 calificaciones</h5>
                </div>
                <div className="flex gap-3 pb-6">
                  <h1 className="text-2xl">Precio:</h1>
                  <h1 className="text-3xl text-blue-400">S/{productDetail?.price} PEN</h1>
                </div>

                <ul className="grid gap-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <DeliveryIcon/>

                    <span className="font-normal text-base text-gray-900 ">
                      Entrega rápida en todo el país
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CardIcon/>

                    <span className="font-normal text-base text-gray-900 ">
                      Pago seguro
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                   <ReturnDeliveryIcon/>

                    <span className="font-normal text-base text-gray-900 ">
                      Política de devolución de 7 días
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                   <AuthenticProductIcon/>

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
