import React, { useState } from "react";
import { IoLocationSharp, IoPersonSharp } from "react-icons/io5";
import { FaHeart, FaCartPlus } from "react-icons/fa";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className=" bg-primary flex-shrink-0 bg-[#004E89] h-[100px]  flex flex-wrap items-center md:px-20 px-5 justify-between">
        <div className="flex gap-5">
          <div>Logo here</div>
          <h2 className="uppercase tracking-[.25em] text-[#FFFFFF] font-[400px] text-[18px]">
            Qshop
          </h2>
        </div>

        <div className="flex gap-3 items-center">
          <div className="">
            <IoLocationSharp className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="font-semibold text-lg text-white leading-5">
            Selecciona tú <br /> ubicación
          </h2>
        </div>

        <div>
          <form className="max-w-lg mx-auto lg:flex hidden">
            <div className="flex relative">
              <button
                id="dropdown-button"
                onClick={toggleDropdown}
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-[#8C8C8C] bg-gray-200 border border-[#8C8C8C] rounded-s-full focus:outline-none focus:ring-gray-100 dark:text-[#8C8C8C]"
                type="button"
              >
                All categories blah
                <svg
                  className="w-2.5 h-2.5 ms-2.5 text-[#daa9a9]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div
                  id="dropdown"
                  className="absolute z-10 left-0 mt-12 bg-[#8C8C8C] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-200"
                >
                  <ul
                    className="py-2 text-sm text-[#8C8C8C]"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-400 hover:text-white rounded-lg"
                      >
                        input 1
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-400 hover:text-white rounded-lg"
                      >
                        input 2
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              <div className="relative md:w-[285px] w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-200 bg-gray-50 rounded-e-full border-s-gray-50 border-s-2 border border-gray-400 focus:ring-white focus:border-white dark:text-white dark:focus:border-white"
                  placeholder=" search ..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 px-6 text-sm font-medium h-full text-white bg-[#FFD100] rounded-e-full border border-[#FFD100] hover:bg-[#FFD10] focus:outline-none focus:ring-[#FFD100] dark:bg-[#FFD100] dark:hover:bg-[#FFD100] dark:focus:ring-[#FFD100]"
                >
                  <svg
                    className="w-5 h-5 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="lg:flex hidden items-center gap-3 md">
          <div>
            <IoPersonSharp className="h-8 w-8 text-white" />
          </div>
          <h2 className="font-semibold text-lg text-white">Iniciar sesión</h2>
        </div>

        <div className="lg:flex hidden items-center gap-3">
          <div>
            <FaCartPlus className="h-8 w-8 text-white" />
          </div>
          <h2 className="font-semibold text-lg text-white">Cart</h2>
        </div>

        <div className="lg:flex hidden items-center gap-3">
          <div>
            <FaHeart className="h-8 w-8 text-white" />
          </div>
          <h2 className="font-semibold text-lg text-white leading-5">
            Favourite <br /> Items1
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-between bg-[#474747] md:h-[51px] h-[90px] items-center md:px-20 px-5 pb-2 md:pb-0">
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Heading 1</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Heading 1</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Heading 1</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Heading 1</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Heading 1</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Heading 1</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Heading 1</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Heading 1</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Heading 1</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Heading 1</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Heading 1</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Heading 1</h1>
      </div>
    </>
  );
};

export default Header;
