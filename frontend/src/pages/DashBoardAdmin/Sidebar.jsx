import React from "react";
import bigdot from "../Assets/bigdot.png";
import bars from "../Assets/bars.png";
import { FaUser } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { BsArchive } from "react-icons/bs";
import { RiDiscountPercentFill } from "react-icons/ri";
import { PiMicrophoneFill } from "react-icons/pi";
import { HiMiniChatBubbleOvalLeft } from "react-icons/hi2";
import { MdHelpOutline } from "react-icons/md";
import { HiTicket } from "react-icons/hi2";
import { CgLogOut } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../../Redux/slice/authSlice";
import { toast } from "react-toastify";

const AdminSidebar2 = ({ setCurrentComponent }) => {
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
    <div className="bg-white p-5 px-6 hidden md:block h-full rounded-xl">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img src={bigdot} alt="bigdot logo" />
        </div>
        <h1 className="font-Quicksand font-bold text-2xl text-[#777777] mt-2">
          José Luis
        </h1>
      </div>
      {/* nav items */}
      <nav className="mt-10 pb-14 px-2">
        <button
          onClick={() => setCurrentComponent("Dashboard")}
          className="flex items-center font-Quicksand font-bold px-2 py-2 text-lg text-[#1C98F7] hover:bg-[#004E89] hover:text-white"
        >
          <img src={bars} alt="bars" className="mr-4" />
          Dashboard
        </button>
        <button
          onClick={() => setCurrentComponent("Profile")}
          className="flex items-center px-2 py-2 font-Quicksand text-lg text-[#777777] hover:bg-[#004E89] hover:text-white"
        >
          <FaUser className="mr-4 text-[#1C98F7]" />
          Perfil
        </button>
        <button
          onClick={() => setCurrentComponent("AddProducts")}
          className="flex items-center px-2 py-2 font-Quicksand text-lg text-[#777777] hover:bg-[#004E89] hover:text-white"
        >
          <FiPlusCircle className="mr-4 text-[#1C98F7] h-6 w-6" />
          Agregar productos
        </button>
        <button
          onClick={() => setCurrentComponent("ProductPage")}
          className="flex items-center px-2 py-2 font-Quicksand text-lg text-[#777777] hover:bg-[#004E89] hover:text-white"
        >
          <BsBoxSeam className="mr-4 text-[#1C98F7]" />
          Productos
        </button>
        <button
          onClick={() => setCurrentComponent("OrderPage")}
          className="flex items-center px-2 py-2 font-Quicksand text-lg text-[#777777] hover:bg-[#004E89] hover:text-white"
        >
          <BsArchive className="mr-4 text-[#1C98F7]" />
          Pedidos (25)
        </button>
        <button
          onClick={() => setCurrentComponent("Sellerchat")}
          className="flex items-center px-2 py-2 font-Quicksand text-lg text-[#777777] hover:bg-[#004E89] hover:text-white"
        >
          <RiDiscountPercentFill className="mr-4 text-[#1C98F7] h-5 w-5" />
          Ofertas
        </button>
        <button
          onClick={() => setCurrentComponent("Sellerinfo")}
          className="flex items-center px-2 py-2 font-Quicksand text-lg text-[#777777] hover:bg-[#004E89] hover:text-white"
        >
          <PiMicrophoneFill className="mr-4 text-[#1C98F7]" />
          Anuncios
        </button>
        <button
          onClick={() => setCurrentComponent("Chats")}
          className="flex items-center px-2 py-2 mb-10 font-Quicksand font-bold text-lg text-[#FF9900] hover:bg-[#004E89] hover:text-white"
        >
          <HiMiniChatBubbleOvalLeft className="mr-4 text-[#FF9900] h-5 w-5" />
          Chat (4)
        </button>
        <button
          onClick={() => setCurrentComponent("Paymentmethods")}
          className="flex items-center px-2 py-2 font-Quicksand text-lg text-[#777777] hover:bg-[#004E89] hover:text-white"
        >
          <MdHelpOutline className="mr-4 text-[#FF9900] h-6 w-6" />
          Ayuda
        </button>
        <button
          onClick={() => setCurrentComponent("Orderdetails")}
          className="flex items-center px-2 py-2 font-Quicksand text-lg text-[#777777] hover:bg-[#004E89] hover:text-white"
        >
          <HiTicket className="mr-4 text-[#FF9900] h-5 w-5" />
          Tickets
        </button>
        <button
          // onClick={() => setCurrentComponent("Logout")}
          onClick={(e) => {
            e.preventDefault(); 
            logoutUser(); 
          }}
          className="flex items-center px-2 py-2 font-Quicksand mb-6 text-lg text-[#FF4747] hover:bg-[#004E89] hover:text-white"
        >
          <CgLogOut className="text-[#FF4747] mr-4 h-6 w-6" />
          Cerrar sesión
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar2;
