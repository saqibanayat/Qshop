import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../../Redux/slice/authSlice";
import { toast } from "react-toastify";
import { getSellerProfileApi } from "../../Redux/slice/sellerSlice";
import { Navbarvalue } from "../../context/NavbarValuesContext";

const AdminSidebar2 = () => {
  const [activeButton, setActiveButton] = useState("Profile"); // To track the active button
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {adminCurrentComponentHandler}=Navbarvalue()
  const{sellerProfileData}=useSelector((state)=>state.seller)

  const logoutUser = () => {
    console.log("running");
    dispatch(logoutApi()).then((res) => {
      if (res?.payload?.success === true) {
        toast.success(res?.payload?.message);
        navigate("/login");
      }
    });
  };

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName); // Set the active button
    adminCurrentComponentHandler(componentName)
  };

    useEffect(() => {
      dispatch(getSellerProfileApi())
    
    }, [])
  return (
    <div className="bg-white p-5 px-6 hidden md:block h-full rounded-xl">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img className="w-24"
           src={sellerProfileData?.seller?.profilePicture? sellerProfileData?.seller?.profilePicture:bigdot} alt="bigdot logo" />
        </div>
        <h1 className="font-Quicksand font-bold text-2xl text-[#777777] mt-2">
         {sellerProfileData?.seller?.lastName? sellerProfileData?.seller?.lastName:'José Luis'}
        </h1>
      </div>
      {/* nav items */}
      <nav className="mt-10 pb-14 px-2">
        <button
          onClick={() => handleButtonClick("Dashboard")}
          className={`flex items-center font-Quicksand font-bold px-2 py-2 text-lg ${
            activeButton === "Dashboard" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <img src={bars} alt="bars" className="mr-4" />
          Dashboard
        </button>
        <button
          onClick={() => handleButtonClick("Profile")}
          className={`flex items-center px-2 py-2 font-Quicksand text-lg ${
            activeButton === "Profile" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <FaUser className="mr-4 text-[#1C98F7]" />
          Perfil
        </button>
        <button
          onClick={() => handleButtonClick("AddProducts")}
          className={`flex items-center px-2 py-2 font-Quicksand text-lg ${
            activeButton === "AddProducts" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <FiPlusCircle className="mr-4 text-[#1C98F7] h-6 w-6" />
          Agregar productos
        </button>
        <button
          onClick={() => handleButtonClick("ProductPage")}
          className={`flex items-center px-2 py-2 font-Quicksand text-lg ${
            activeButton === "ProductPage" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <BsBoxSeam className="mr-4 text-[#1C98F7]" />
          Productos
        </button>
        <button
          onClick={() => handleButtonClick("OrderPage")}
          className={`flex items-center px-2 py-2 font-Quicksand text-lg ${
            activeButton === "OrderPage" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <BsArchive className="mr-4 text-[#1C98F7]" />
          Pedidos (25)
        </button>
        <button
          onClick={() => handleButtonClick("Sellerchat")}
          className={`flex items-center px-2 py-2 font-Quicksand text-lg ${
            activeButton === "Sellerchat" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <RiDiscountPercentFill className="mr-4 text-[#1C98F7] h-5 w-5" />
          Ofertas
        </button>
        <button
          onClick={() => handleButtonClick("Sellerinfo")}
          className={`flex items-center px-2 py-2 font-Quicksand text-lg ${
            activeButton === "Sellerinfo" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <PiMicrophoneFill className="mr-4 text-[#1C98F7]" />
          Anuncios
        </button>
        <button
          onClick={() => handleButtonClick("Chats")}
          className={`flex items-center px-2 py-2 mb-10 font-Quicksand font-bold text-lg ${
            activeButton === "Chats" ? "bg-[#004E89] text-white" : "text-[#FF9900]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <HiMiniChatBubbleOvalLeft className="mr-4 text-[#FF9900] h-5 w-5" />
          Chat (4)
        </button>
        <button
          onClick={() => handleButtonClick("Paymentmethods")}
          className={`flex items-center px-2 py-2 font-Quicksand text-lg ${
            activeButton === "Paymentmethods" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <MdHelpOutline className="mr-4 text-[#FF9900] h-6 w-6" />
          Ayuda
        </button>
        <button
          onClick={() => handleButtonClick("Orderdetails")}
          className={`flex items-center px-2 py-2 font-Quicksand text-lg ${
            activeButton === "Orderdetails" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <HiTicket className="mr-4 text-[#FF9900] h-5 w-5" />
          Tickets
        </button>
        <button
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
