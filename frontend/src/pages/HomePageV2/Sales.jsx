import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import iphoneImage from '../../assets/homePage/ipone-image.png';
import iphoneOfferImage from '../../assets/homePage/iphone-offer-image.png'

const Sale = () => {

  const handleProductClick = () => {
    window.location.href = '/pages/ProductDetails/index';
  };



  return (
    <div className="flex px-5 md:px-20">
      {/* left side  */}
      <aside className="bg-[#F3F8FE] w-[627px] rounded-lg p-12 md:block hidden">
        <h1 className="text-primary font-bold text-2xl text-center">
          Offers Lorem, ipsum.
        </h1>
        <div className="bg-red-500 text-white py-2 px-6 rounded-lg mr-4 self-start font-semibold w-32 my-8">
          -10% off
        </div>
        <img src={iphoneOfferImage} alt="image here" className="w-[300px] h-[350px]   rounded-lg" />
        <p className="text-lg text-center font-semibold my-5 px-12">
          Iphone 12 pro max256 gb interna...{" "}
        </p>
        <div className="flex gap-x-5 mb-12">
          <p className="text-gray-600 line-through">S/500.00 PEN</p>
          <p className="text-primary font-bold">S/450.00 PEN</p>
        </div>
        <button className="bg-secondary text-white text-xl rounded-lg  mt-8 p-2 px-16 flex items-center gap-5 justify-center">
          Lorem, ipsum.{" "}
        </button>
      </aside>

      {/* rigth side  */}
      <div className="lg:px-28 md:px-5 sm:px-3 px-5 w-full">

        <div className="flex justify-between items-start">
          <h1 className="text-Highlight text-2xl font-bold">Lorem, ipsum.</h1>
          <h2 className="text-primary text-xl font-semibold flex gap-4 ">
            View All
            <IoIosArrowForward />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-x-5">



{/* //////////////////// */}
        <div onClick={handleProductClick} className="cursor-pointer">
      <div className="bg-red-500 text-white py-2 px-6 rounded-lg mr-4 self-start font-semibold w-32 mt-8 absolute">
        -10% off
      </div>
      <img
       src={iphoneImage}
        alt=""
        className="w-[200px] h-[200px] bg-green-800 rounded-lg mt-5"
      />
      <div className="flex flex-col">
        <h2 className="text-black font-bold mt-4">Case iPhone 15 Pro Max</h2>
        <div className="flex items-center my-2">
          <div className="text-Highlight font-semibold">4.9</div>
          <div className="text-secondary ml-1">
            <FaStar className="h-5 w-5" />
          </div>
        </div>
        <p className="text-gray-600">Color</p>
        <div className="flex space-x-2 my-2">
          <div className="w-6 h-6 rounded-full bg-red-500"></div>
          <div className="w-6 h-6 rounded-full bg-blue-500"></div>
          <div className="w-6 h-6 rounded-full bg-green-500"></div>
          <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
          <div className="w-6 h-6 rounded-full bg-purple-500"></div>
        </div>
        <div className="flex gap-x-5">
          <p className="text-gray-600 line-through">S/500.00 PEN</p>
          <p className="text-secondary font-bold">S/450.00 PEN</p>
        </div>
      </div>
    </div>
    {/* /////////////////// */}




          <div>
            <div className="bg-red-500 text-white py-2 px-6 rounded-lg mr-4 self-start font-semibold w-32 mt-8 absolute">
              -10% off
            </div>
            <img
             src={iphoneImage}
              alt=""
              className="w-[200px] h-[200px] bg-green-800  rounded-lg mt-5"
            />
            <div className="flex flex-col">
              <h2 className="text-black font-bold mt-4">Case iPhone 15 Pro Max</h2>
              <div className="flex items-center my-2">
                <div className="text-Highlight font-semibold">4.9</div>
                <div className="text-secondary ml-1 ">
                  <FaStar className="h-5 w-5" />
                </div>
              </div>
              <p className="text-gray-600">Color</p>
              <div className="flex space-x-2 my-2">
                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                <div className="w-6 h-6 rounded-full bg-purple-500"></div>
              </div>
              <div className="flex gap-x-5">
                <p className="text-gray-600 line-through">S/500.00 PEN</p>
                <p className="text-secondary font-bold">S/450.00 PEN</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-red-500 text-white py-2 px-6 rounded-lg mr-4 self-start font-semibold w-32 mt-8 absolute">
              -10% off
            </div>
            <img
             src={iphoneImage}
              alt=""
              className="w-[200px] h-[200px] bg-green-800  rounded-lg mt-5"
            />
            <div className="flex flex-col">
              <h2 className="text-black font-bold mt-4">Case iPhone 15 Pro Max</h2>
              <div className="flex items-center my-2">
                <div className="text-Highlight font-semibold">4.9</div>
                <div className="text-secondary ml-1 ">
                  <FaStar className="h-5 w-5" />
                </div>
              </div>
              <p className="text-gray-600">Color</p>
              <div className="flex space-x-2 my-2">
                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                <div className="w-6 h-6 rounded-full bg-purple-500"></div>
              </div>
              <div className="flex gap-x-5">
                <p className="text-gray-600 line-through">S/500.00 PEN</p>
                <p className="text-secondary font-bold">S/450.00 PEN</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-red-500 text-white py-2 px-6 rounded-lg mr-4 self-start font-semibold w-32 mt-8 absolute">
              -10% off
            </div>
            <img
             src={iphoneImage}
              alt=""
              className="w-[200px] h-[200px] bg-green-800  rounded-lg mt-5"
            />
            <div className="flex flex-col">
              <h2 className="text-black font-bold mt-4">Case iPhone 15 Pro Max</h2>
              <div className="flex items-center my-2">
                <div className="text-Highlight font-semibold">4.9</div>
                <div className="text-secondary ml-1 ">
                  <FaStar className="h-5 w-5" />
                </div>
              </div>
              <p className="text-gray-600">Color</p>
              <div className="flex space-x-2 my-2">
                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                <div className="w-6 h-6 rounded-full bg-purple-500"></div>
              </div>
              <div className="flex gap-x-5">
                <p className="text-gray-600 line-through">S/500.00 PEN</p>
                <p className="text-secondary font-bold">S/450.00 PEN</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-red-500 text-white py-2 px-6 rounded-lg mr-4 self-start font-semibold w-32 mt-8 absolute">
              -10% off
            </div>
            <img
             src={iphoneImage}
              alt=""
              className="w-[200px] h-[200px] bg-green-800  rounded-lg mt-5"
            />
            <div className="flex flex-col">
              <h2 className="text-black font-bold mt-4">Case iPhone 15 Pro Max</h2>
              <div className="flex items-center my-2">
                <div className="text-Highlight font-semibold">4.9</div>
                <div className="text-secondary ml-1 ">
                  <FaStar className="h-5 w-5" />
                </div>
              </div>
              <p className="text-gray-600">Color</p>
              <div className="flex space-x-2 my-2">
                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                <div className="w-6 h-6 rounded-full bg-purple-500"></div>
              </div>
              <div className="flex gap-x-5">
                <p className="text-gray-600 line-through">S/500.00 PEN</p>
                <p className="text-secondary font-bold">S/450.00 PEN</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-red-500 text-white py-2 px-6 rounded-lg mr-4 self-start font-semibold w-32 mt-8 absolute">
              -10% off
            </div>
            <img
             src={iphoneImage}
              alt=""
              className="w-[200px] h-[200px] bg-green-800  rounded-lg mt-5"
            />
            <div className="flex flex-col">
              <h2 className="text-black font-bold mt-4">Case iPhone 15 Pro Max</h2>
              <div className="flex items-center my-2">
                <div className="text-Highlight font-semibold">4.9</div>
                <div className="text-secondary ml-1 ">
                  <FaStar className="h-5 w-5" />
                </div>
              </div>
              <p className="text-gray-600">Color</p>
              <div className="flex space-x-2 my-2">
                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                <div className="w-6 h-6 rounded-full bg-purple-500"></div>
              </div>
              <div className="flex gap-x-5">
                <p className="text-gray-600 line-through">S/500.00 PEN</p>
                <p className="text-secondary font-bold">S/450.00 PEN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
