import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Navbarvalue } from "../context/NavbarValuesContext";
const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
const {userData}=useSelector((state)=>state.user);
const {adminCurrentComponentHandler}=Navbarvalue()

const navigate= useNavigate()
const selectDashboard=(e)=>{
  e.preventDefault()
  if(userData?.user){
    console.log('function in');
    
if(userData?.user?.role=='seller'){
navigate('/admindashboard')
}
else if(userData?.user?.role=='user'){
  navigate('/userdashboard')
}
else{
  navigate('/')
}
  }
  else{
    navigate('/login')
  }
}
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="bg-primary h-[100px] flex flex-wrap items-center   px-5 justify-between">

        <Link to='/'>
        <div className="flex gap-5">
          <svg
            width="58"
            height="55"
            viewBox="0 0 58 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.7423 8.59865C22.3503 9.99301 20.5716 10.8451 18.793 11.0001L15.9316 11.2325L18.793 14.1761C20.9583 16.5001 22.041 17.1198 23.7423 16.8874C25.5983 16.655 26.0623 16.1127 27.145 12.3944C28.3823 8.28879 30.161 6.2747 30.161 9.06344C30.161 11.9296 32.3263 16.5775 33.873 17.1198C35.1876 17.5846 36.193 17.1198 38.6676 14.7958C40.369 13.2465 41.761 11.6972 41.761 11.3874C41.761 11.0775 40.601 10.8451 39.1316 10.8451C37.1983 10.8451 35.8063 10.2254 34.1823 8.52118C31.0116 5.42259 26.913 5.42259 23.7423 8.59865Z"
              fill="white"
            />
            <path
              d="M10.8275 18.7463C10.7502 22.0772 9.4355 24.7885 7.88883 24.7885C6.8835 24.7885 6.1875 26.6477 6.1875 29.4364C6.1875 31.0632 6.80617 31.9927 8.5075 32.9998C10.4408 34.1618 10.7502 34.8589 10.9822 38.2674L11.2142 42.1406L14.9262 38.5772C16.9368 36.6406 18.5608 34.6265 18.5608 34.1618C18.5608 32.6899 13.6888 30.211 10.6728 30.211C8.66217 30.211 7.73417 29.9012 7.73417 29.1265C7.73417 27.9646 8.5075 27.6547 13.1475 26.6477C16.2408 26.0279 18.5608 24.711 18.5608 23.6265C18.5608 22.697 12.1422 15.4927 11.3688 15.4927C11.0595 15.4927 10.8275 16.9646 10.8275 18.7463Z"
              fill="white"
            />
            <path
              d="M42.6885 19.676C39.8271 22.9296 40.1365 25.0986 43.5391 26.338C48.7978 28.2746 49.4938 28.662 49.4938 29.4366C49.4938 29.8239 48.6431 30.2113 47.5605 30.2113C45.1631 30.2113 41.2965 32.0704 40.7551 33.4648C40.2911 34.7817 41.4511 36.9507 43.7711 39.2746C46.0138 41.5211 47.1738 40.9789 47.1738 37.8803C47.1738 36.4859 47.8698 34.9366 48.9525 33.8521C49.9578 32.9225 50.9631 30.831 51.2725 29.2817C51.6591 26.8803 51.3498 26.1056 49.4165 24.0915C47.9471 22.5422 47.1738 20.9155 47.1738 19.3662C47.1738 16.2676 45.6271 16.3451 42.6885 19.676Z"
              fill="white"
            />
            <path
              d="M19.7206 42.6056C16.3953 46.014 16.7046 47.2535 21.0353 47.2535C22.2726 47.2535 23.6646 48.0281 24.5926 49.1901C26.3713 51.514 29.8513 51.9788 28.6913 49.7324C28.3046 49.0352 27.5313 46.8662 26.99 44.9295C25.2113 38.5 24.0513 38.1126 19.7206 42.6056Z"
              fill="white"
            />
            <path
              d="M33.2535 40.5143C30.8561 42.4509 29.0775 51.127 31.0108 51.127C31.5521 51.127 32.7121 50.2748 33.7175 49.1903C34.9548 47.796 36.3468 47.2537 38.2801 47.2537C41.8375 47.2537 41.7601 46.0143 38.0481 42.3734C34.8001 39.1974 34.8775 39.1974 33.2535 40.5143Z"
              fill="white"
            />
          </svg>

          <div className="flex items-center uppercase tracking-[.25em] text-[#FFFFFF] font-[400px] text-[18px]">
            Qshop
          </div>
        </div>
        </Link>

        <div className="flex gap-3 items-center">
          <div className="">
            <IoLocationSharp className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="font-semibold text-lg  text-white leading-5">
            Selecciona tú <br /> ubicación
          </h2>
        </div>

        <div>
          <form className="max-w-lg mx-auto lg:flex hidden ">
            <div className="flex relative">
              <button
                id="dropdown-button"
                onClick={toggleDropdown}
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-[#8C8C8C] bg-gray-200 border border-[#8C8C8C] rounded-s-full  focus:outline-none focus:ring-gray-100 dark:text-[#8C8C8C] "
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
                    className="py-2 text-sm text-[#8C8C8C] "
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-400 hover:text-white rounded-lg "
                      >
                        input 1
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-400 hover:text-white rounded-lg "
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
                  className="block p-2.5 w-full z-20 text-sm text-gray-200 bg-gray-50 rounded-e-full border-s-gray-50 border-s-2 border border-gray-400 focus:ring-white focus:border-white   dark:text-white dark:focus:border-white"
                  placeholder=" search ..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 px-6   text-sm font-medium h-full text-white bg-[#FFD100] rounded-e-full border border-[#FFD100] hover:bg-[#FFD10]  focus:outline-none focus:ring-[#FFD100] dark:bg-[#FFD100] dark:hover:bg-[#FFD100] dark:focus:ring-[#FFD100]"
                >
                  <svg
                    className="w-5 h-5 text-black "
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

        <Link to=''
        onClick={(e)=>{selectDashboard(e)}}
        >
        <div className="lg:flex hidden items-center gap-3 md">
          <div>
            <IoPersonSharp className="h-8 w-8 text-white" />
          </div>
          <h2 className="font-semibold text-lg  text-white">{userData?.user ? userData?.user?.personalInfo?.firstName : 'Iniciar sesión'}</h2>
        </div>
        </Link>
        <Link to='/cartwithitems'>
        <div className="lg:flex hidden  items-center gap-3">
          <div>
            <FaCartPlus className="h-8 w-8 text-white" />
          </div>
          <h2 className="font-semibold text-lg  text-white">Cart</h2>
        </div>
        </Link>
        <div className="lg:flex hidden  items-center gap-3"   onClick={()=>{adminCurrentComponentHandler('Favorite')}}>
          <div>
            <FaHeart className="h-8 w-8 text-white" />
          </div>
          <h2 className="font-semibold text-lg  text-white leading-5">
            Favourite <br /> Items
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-between bg-[#474747] md:h-[51px] h-[90px] items-center px-5 pb-2 md:pb-0">
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Deportes</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Salud y belleza</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Herramientas y hogar</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Moda</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Estilo</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Tecnología</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Papelería</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Electrónica</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Juguetes</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Videojuegos</h1>
        <h1 className="text-lg text-[#FFFFFF] font-semibold">Primavera</h1>
        
      </div>
    </>
  );
};

export default Header;
