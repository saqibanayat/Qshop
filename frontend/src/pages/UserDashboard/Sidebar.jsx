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
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../../Redux/slice/authSlice";
import { toast } from "react-toastify";

const Sidebar = ({ setCurrentComponent }) => {

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
        <h1 className="text-[#1C98F7] font-normal font-Inter text-lg">Hola,</h1>
        <h1 className="font-Inter font-medium text-2xl">José Luis</h1>
      </div>
      {/* nav items */}
      <nav className="mt-10 pb-14 px-2">
        <button
          onClick={() => setCurrentComponent("Profile")}
          className="flex items-center py-2 font-Inter text-lg text-[#1C98F7] hover:bg-[#004E89] hover:text-white"
        >
          <FaUser className="mr-4 text-[#1C98F7]" />
          Perfil
        </button>
        <button
          onClick={() => setCurrentComponent("Favorites")}
          className="flex items-center py-2 font-Inter text-base text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaHeart className="mr-4 text-[#1C98F7]" />
          Favoritos
        </button>
        <button
          onClick={() => setCurrentComponent("Orderstatus")}
          className="flex items-center py-2 font-Inter text-base text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaBox className="mr-4 text-[#1C98F7]" />
          Estatus de pedidos (4)
        </button>
        <button
          onClick={() => setCurrentComponent("Paymentmethods")}
          className="flex items-center py-2 font-Inter text-base text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaCreditCard className="mr-4 text-[#1C98F7]" />
          Formas de pago
        </button>
        <button
          onClick={() => setCurrentComponent("Chats")}
          className="flex items-center py-2 font-Inter text-base text-[#FF9900] hover:bg-[#004E89] hover:text-white"
        >
          <FaComments className="mr-4 text-[#1C98F7]" />
          Chat (4)
        </button>
        <button
          onClick={() => setCurrentComponent("ShippingDetails")}
          className="flex items-center py-2 font-Inter mb-6 text-base text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaSignOutAlt className="mr-4 text-[#1C98F7]" />
          Regresar
        </button>
        <button
          onClick={() => setCurrentComponent("Direction")}
          className="flex items-center py-2 font-Inter text-base mb-6 border-b-4 border-spacing-10 text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaMapMarkerAlt className="mr-4 text-[#1C98F7]" />
          Dirección
        </button>
  
        <button
          onClick={() => setCurrentComponent("Ayuda")}
          className="flex items-center py-2 font-Inter text-base text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaQuestionCircle className="mr-4 text-[#1C98F7]" />
          Ayuda
        </button>
        <button
          onClick={() => setCurrentComponent("Tickets")}
          className="flex items-center py-2 font-Inter text-base text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaTicketAlt className="mr-4 text-[#1C98F7]" />
          Tickets
        </button>
        <button
          // onClick={() => setCurrentComponent("CerrarSesion")}
          onClick={(e) => {
            e.preventDefault(); 
            logoutUser(); 
          }}
          className="flex items-center py-2 font-Inter mb-6 text-base text-black hover:bg-[#004E89] hover:text-white"
        >
          <FaSignOutAlt className="mr-4 text-[#1C98F7]" />
          Cerrar sesión
        </button>
       
      </nav>
    </div>
  );
};

export default Sidebar;
