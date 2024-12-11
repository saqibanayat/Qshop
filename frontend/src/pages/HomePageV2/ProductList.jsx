import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import iphoneImage from '../../assets/homePage/ipone-image.png';

const ProductList = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
        <div>


          <div className="flex justify-between md:px-7 px-0 md:my-10 my-2">
            <h1 className="text-Highlight text-2xl font-bold">Lorem, ipsum.</h1>
            <h2 className="text-primary text-xl font-semibold flex gap-4 items-center">
              View All
              <IoIosArrowForward />
            </h2>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 ">


            <div className=" mx-auto">


              <div className="flex p-6  ">
                <div className="">
                    <div className="bg-red-500 text-white text-center  py-1 px-1 rounded-lg mr-4 self-start font-semibold">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
              
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <p className="text-secondary font-bold">
                      S/450.00 PEN
                    </p>
                  </div>
                </div>


                
              </div>



            </div>



            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white text-center  py-1 px-1 rounded-lg mr-4 self-start font-semibold">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white py-1 px-1 rounded-lg mr-4 self-start font-semibold text-center">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white py-1 px-1 rounded-lg mr-4 self-start font-semibold text-center">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white py-1 px-1 rounded-lg mr-4 self-start font-semibold text-center">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white py-1 px-1 rounded-lg mr-4 self-start font-semibold text-center">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white py-1 px-1 rounded-lg mr-4 self-start font-semibold text-center">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white py-1 px-1 rounded-lg mr-4 self-start font-semibold text-center">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
        <div className="flex justify-between md:px-7 px-0 md:my-10 my-2">
            <h1 className="text-Highlight text-2xl font-bold">Lorem, ipsum.</h1>
            <h2 className="text-primary text-xl font-semibold flex gap-4 items-center">
              View All
              <IoIosArrowForward />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white py-1 px-1 rounded-lg mr-4 self-start font-semibold text-center">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white py-1 px-1 rounded-lg mr-4 self-start font-semibold text-center">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white py-1 px-1 rounded-lg mr-4 self-start font-semibold text-center">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white py-1 px-1 rounded-lg mr-4 self-start font-semibold text-center">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white py-1 px-1 rounded-lg mr-4 self-start font-semibold text-center">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white py-1 px-1 rounded-lg mr-4 self-start font-semibold text-center">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white py-1 px-1 rounded-lg mr-4 self-start font-semibold text-center">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mx-auto">
              <div className="flex p-6  ">
                  <div className="">
                    <div className="bg-red-500 text-white py-1 px-1 rounded-lg mr-4 self-start font-semibold text-center">
                  -10% off
                </div>
                <img src={iphoneImage} alt="" srcset="" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-black font-bold">Case iPhone 15 Pro Max</h2>
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
                    <picture className="text-secondary font-bold">
                      S/450.00 PEN
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
