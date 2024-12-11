import React from "react";
import {
  FaUser,
  FaHeart,
  FaBox,
  FaComments,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaTicketAlt,
  FaSignOutAlt,
  FaCreditCard,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutApi } from "../Redux/slice/authSlice";
import { toast } from "react-toastify";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const logoutUser = ()=>{
    console.log('running');
    
    dispatch(logoutApi())
    .then((res)=>{
      if(res?.payload?.success===true){
        toast.success(res?.payload?.message)
        navigate('/login')
      }
    })
  }
  return (
    <div className="bg-white p-5 px-6 hidden md:block h-full">
      <div className="flex flex-col">
        <h1 className="text-[#1C98F7]  font-normal font-Inter text-lg">
          Hola,
        </h1>
        <h1 className="font-Inter font-medium text-2xl">José Luis</h1>
      </div>
      {/* nav items */}
      <nav className="mt-10 pb-14 px-2">
        <Link
          to="/"
          href="/Profile"
          className="flex items-center py-2 font-Inter text-lg text-[#1C98F7] hover:bg-[#004E89] hover:text-white"
        >
          <FaUser className="mr-4 text-[#1C98F7] " />
          Perfil
        </Link>
        <a
          href="/Favorites"
          className="flex items-center py-2 font-Inter text-base text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaHeart className="mr-4 text-[#1C98F7]" />
          Favoritos
        </a>
        <Link
          to="/Orderstatus"
          className="flex items-center py-2 font-Inter text-sm text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaBox className="mr-4 text-[#1C98F7] " />
          Estatus do pedidos (4)
        </Link>
        <Link
          to="/Paymentmethods"
          className="flex items-center py-2 font-Inter text-base text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaCreditCard className="mr-4 text-[#1C98F7] " />
          Formas de pago
        </Link>
        <Link
          to="/Chats"
          className="flex items-center py-2 font-Inter text-base text-[#FF9900] hover:bg-[#004E89] hover:text-white"
        >
          <FaComments className="mr-4 text-[#1C98F7] " />
          Chat (4)
        </Link>
        <Link
          to="/Direction"
          className="flex items-center py-2 font-Inter text-base mb-6 border-b-4 border-spacing-10 text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaMapMarkerAlt className="mr-4 text-[#1C98F7] " />
          Dirección
        </Link>
        <Link
          to="/"
          className="flex items-center py-2 font-Inter text-base text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaQuestionCircle className="mr-4 text-[#1C98F7] " />
          Ayuda
        </Link>
        <Link
          to="/"
          className="flex items-center py-2 font-Inter text-base text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaTicketAlt className="mr-4 text-[#1C98F7] " />
          Tickets
        </Link>
        <Link
        to=''
       onClick={(e) => {
        e.preventDefault(); 
        logoutUser(); 
      }}

          className="flex items-center py-2 font-Inter mb-6  text-base text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaSignOutAlt className="mr-4 text-[#1C98F7] " />
          Cerrar sesión
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
