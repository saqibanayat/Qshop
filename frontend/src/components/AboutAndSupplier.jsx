import React from "react";

const AboutAndSupplier = ({productDetail,productCount}) => {
  return (
    <div className="flex justify-center flex-col items-center gap-10 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-36 items-center justify-center">
        <div className="max-w-md">
          <h1 className="text-blue-600 text-2xl font-bold py-4">
            Acerca de este artículo
          </h1>
          <h1 className="leading-10 text-lg">
            Usos específicos del producto: Profesional <br /> Marca: Apple
            <br /> Sistema operativo: Mac OS X<br /> Capacidad de almacenamiento
            de la memoria: 8 GB <br /> Intel Core i5 de 2,8 GHz de cuatro
            núcleos.
            <br /> Turbo Boost de hasta 3,3 GHz.
          </h1>
          <h1 className="text-blue-600 text-xl underline py-4">Ver más</h1>
        </div>

        <div className="hidden lg:block">
          <svg
            width="5"
            height="400"
            viewBox="0 0 5 465"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4.49998"
              y1="0.00430092"
              x2="0.499981"
              y2="465.004"
              stroke="#C6C6C6"
            />
          </svg>
        </div>

        <div className="max-w-md">
          <h1 className="text-blue-600 text-2xl font-bold py-4">
            Información del proveedor
          </h1>
          <div className="flex flex-row py-6 gap-6">
            <div>
              {productDetail?.seller?.personalInfo?.profilePicture? 
               <img width="205" height="205" src={productDetail?.seller?.personalInfo?.profilePicture} alt="" />
            :
             <svg
                width="205"
                height="205"
                viewBox="0 0 205 205"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="205" height="205" rx="20" fill="#B8D7FF" />
              </svg>
            }
             
           
            </div>
            <div>
              <h1 className="text-blue-600 text-2xl font-bold py-4">
                {productDetail?.seller?.personalInfo?.firstName+' '+productDetail?.seller?.personalInfo?.lastName}
              </h1>
              <div className="flex flex-row items-center gap-2">
              <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.7714 25.8334C31.0839 25.9792 31.4381 26.0417 31.7714 26.0417C32.4589 26.0417 33.1047 25.7709 33.6047 25.2917L38.1464 20.8334H40.1048C43.2714 20.8334 45.8339 18.2709 45.8339 15.1042V9.89592C45.8339 6.72925 43.2714 4.16675 40.1048 4.16675H30.7298C27.5631 4.16675 25.0006 6.72925 25.0006 9.89592V15.1042C25.0006 17.7292 26.7714 19.9376 29.1673 20.6251V23.4376C29.1673 24.4792 29.8131 25.4167 30.7714 25.8334ZM16.6673 28.1251C12.6464 28.1251 9.37558 24.8542 9.37558 20.8334C9.37558 16.8126 12.6464 13.5417 16.6673 13.5417C20.6881 13.5417 23.9589 16.8126 23.9589 20.8334C23.9589 24.8542 20.6881 28.1251 16.6673 28.1251ZM16.6673 45.8334C12.3756 45.8334 9.08392 44.6668 6.87558 42.3543C4.09225 39.4292 4.161 35.7417 4.16725 35.3605V35.3334C4.16725 33.1042 6.04225 31.2501 8.33392 31.2501H25.0006C27.2923 31.2501 29.1673 33.1251 29.1673 35.4167L29.1693 35.4293C29.1756 35.6938 29.2631 39.4084 26.461 42.3543C24.2506 44.6668 20.9589 45.8334 16.6673 45.8334Z"
                    fill="#FF9900"
                  />
                </svg>

                <h1>256 reseñas</h1>
              </div>
              <div className="flex flex-row items-center gap-2">
              <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5452 42.9541C21.2035 44.8749 23.0327 45.8333 24.9994 45.8333V24.9999L5.49518 14.7354C5.46684 14.7815 5.43906 14.8281 5.41185 14.8749C4.16602 16.9874 4.16602 19.6187 4.16602 24.8791V25.1229C4.16602 30.3812 4.16602 33.0124 5.40977 35.1249C6.6556 37.2395 8.89727 38.4166 13.3785 40.7687L17.5452 42.9541Z"
                    fill="#004E89"
                  />
                  <path
                    opacity="0.7"
                    d="M36.619 9.23342L32.4523 7.04591C28.7961 5.12716 26.9669 4.16675 25.0003 4.16675C23.0315 4.16675 21.2044 5.12508 17.5461 7.04591L13.3794 9.23342C8.99609 11.5334 6.75443 12.7084 5.49609 14.7334L25.0003 25.0001L44.5044 14.7355C43.2419 12.7084 41.0044 11.5334 36.619 9.23342Z"
                    fill="#004E89"
                  />
                  <path
                    opacity="0.5"
                    d="M44.5896 14.8749C44.5617 14.8281 44.5332 14.7815 44.5042 14.7354L25 24.9999V45.8333C26.9667 45.8333 28.7958 44.8749 32.4542 42.9541L36.6208 40.7666C41.1021 38.4145 43.3438 37.2395 44.5896 35.1249C45.8333 33.0124 45.8333 30.3812 45.8333 25.1249V24.8812C45.8333 19.6208 45.8333 16.9874 44.5896 14.8749Z"
                    fill="#004E89"
                  />
                  <path
                    d="M13.1727 9.34176L13.381 9.23343L16.4914 7.6001L35.4497 18.0272L43.8352 13.8376C44.1206 14.1605 44.3706 14.5043 44.5893 14.8751C44.9018 15.4043 45.1352 15.9668 45.3102 16.5938L36.9789 20.7584V27.0834C36.9789 27.4978 36.8143 27.8953 36.5213 28.1883C36.2282 28.4813 35.8308 28.6459 35.4164 28.6459C35.002 28.6459 34.6046 28.4813 34.3116 28.1883C34.0185 27.8953 33.8539 27.4978 33.8539 27.0834V22.3209L26.5622 25.9668V45.6334C26.0517 45.7644 25.5268 45.8316 24.9997 45.8334C24.4831 45.8334 23.9727 45.7668 23.4372 45.6334V25.9668L4.69141 16.5918C4.86641 15.9668 5.09974 15.4043 5.41224 14.8751C5.62915 14.5055 5.88174 14.158 6.16641 13.8376L24.9997 23.2543L32.056 19.7272L13.1727 9.34176Z"
                    fill="#004E89"
                  />
                </svg>


                <h1>{productCount} productos</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <button className="h-[52px] w-full flex items-center justify-center rounded-lg bg-orange-400 text-center text-xl py-4 text-white ">
              Ver productos
            </button>
            <button className="h-[52px] flex flex-row w-full gap-2 items-center justify-center rounded-lg bg-blue-400 text-center text-2xl py-4 text-white">
            
            <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6_3531)">
                  <path
                    d="M20.5 40.5C31.5457 40.5 40.5 31.5457 40.5 20.5C40.5 9.4543 31.5457 0.5 20.5 0.5C9.4543 0.5 0.5 9.4543 0.5 20.5C0.5 31.5457 9.4543 40.5 20.5 40.5Z"
                    fill="#1C98F7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.85 29.6562C21.7296 29.5951 22.6016 29.4529 23.455 29.2313C24.5082 29.5526 25.6215 29.6254 26.7075 29.4438C26.7505 29.4368 26.794 29.4335 26.8375 29.4338C27.225 29.4338 27.7337 29.6588 28.475 30.1338V29.3525C28.4752 29.2173 28.5112 29.0846 28.5795 28.968C28.6479 28.8514 28.7459 28.755 28.8638 28.6888C29.1863 28.5063 29.4863 28.2962 29.76 28.065C30.84 27.15 31.45 25.93 31.45 24.6375C31.45 24.2037 31.3813 23.7825 31.2512 23.38C31.5775 22.7713 31.8413 22.1313 32.035 21.4675C32.6614 22.4063 32.9971 23.5089 33 24.6375C33 26.3937 32.1825 28.0312 30.7687 29.2288C30.5328 29.4285 30.2844 29.613 30.025 29.7812V31.6075C30.025 32.2362 29.3 32.5975 28.7887 32.2237C28.3053 31.8624 27.8047 31.5245 27.2887 31.2113C27.141 31.1228 26.9873 31.0447 26.8288 30.9775C26.4037 31.0413 25.9688 31.0737 25.53 31.0737C23.765 31.0737 22.1338 30.545 20.85 29.6562ZM11.5175 26.0037C9.2875 24.1125 8 21.5363 8 18.775C8 13.1337 13.3225 8.625 19.8212 8.625C26.3212 8.625 31.6438 13.1337 31.6438 18.775C31.6438 24.4175 26.32 28.9262 19.8212 28.9262C19.0912 28.9262 18.3687 28.87 17.6613 28.7575C17.355 28.83 16.1312 29.5575 14.3675 30.845C13.7287 31.3125 12.8225 30.8612 12.8225 30.075V26.96C12.3658 26.672 11.9297 26.3525 11.5175 26.0037ZM17.7037 26.8363C17.7575 26.8363 17.8125 26.84 17.8662 26.8488C18.5037 26.9563 19.1587 27.0112 19.8212 27.0112C25.3113 27.0112 29.705 23.2887 29.705 18.775C29.705 14.2625 25.3113 10.54 19.8212 10.54C14.3337 10.54 9.9375 14.2625 9.9375 18.775C9.9375 20.9575 10.9637 23.0125 12.7787 24.55C13.235 24.935 13.7362 25.285 14.2738 25.59C14.575 25.76 14.7613 26.0775 14.7613 26.42V28.2163C16.1563 27.28 17.0737 26.8363 17.7037 26.8363ZM14.7825 20.6912C13.9262 20.6912 13.2325 20.0037 13.2325 19.1588C13.2325 18.3125 13.9262 17.6263 14.7825 17.6263C15.6387 17.6263 16.3325 18.3125 16.3325 19.1588C16.3325 20.005 15.6387 20.6912 14.7825 20.6912ZM19.8212 20.6912C18.965 20.6912 18.2712 20.0037 18.2712 19.1588C18.2712 18.3125 18.965 17.6263 19.8212 17.6263C20.6775 17.6263 21.3713 18.3125 21.3713 19.1588C21.3713 20.005 20.6775 20.6912 19.8212 20.6912ZM24.86 20.6912C24.0038 20.6912 23.31 20.0037 23.31 19.1588C23.31 18.3125 24.0038 17.6263 24.86 17.6263C25.7163 17.6263 26.41 18.3125 26.41 19.1588C26.41 20.005 25.7163 20.6912 24.86 20.6912Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_3531">
                    <rect
                      width="40"
                      height="40"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h5 className="text-xl"> Chatea con el proveedor</h5>
            </button>
          </div>
        </div>
      </div>

      <svg
        width="1236"
        height="1"
        viewBox="0 0 1236 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="1236" y2="0.5" stroke="#C6C6C6" />
      </svg>
    </div>
  );
};

export default AboutAndSupplier;
