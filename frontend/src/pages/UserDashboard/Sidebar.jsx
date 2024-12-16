import React, { useState } from "react";
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
import { Navbarvalue } from "../../context/NavbarValuesContext";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState(""); // Track active button
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {adminCurrentComponentHandler}=Navbarvalue()


  const logoutUser = () => {
    dispatch(logoutApi())
      .then((res) => {
        if (res?.payload?.success === true) {
          toast.success(res?.payload?.message);
          navigate("/login");
        }
      })
      .catch((err) => {
        toast.error("Error logging out");
      });
  };

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName); // Set active button
    adminCurrentComponentHandler(componentName); // Set current component
  };

  return (
    <div className="bg-white p-5 px-6 hidden md:block h-full rounded-xl">
      <div className="flex flex-col">
        <h1 className="text-[#1C98F7] font-normal font-Inter text-lg">Hola,</h1>
        <h1 className="font-Inter font-medium text-2xl">José Luis</h1>
      </div>
      {/* nav items */}
      <nav className="mt-10 pb-14 px-2">
        <button
          onClick={() => handleButtonClick("Profile")}
          className={`flex items-center py-2 px-2 font-Inter text-lg ${
            activeButton === "Profile" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <FaUser className="mr-4" />
          Perfil
        </button>
        <button
          onClick={() => handleButtonClick("Favorite")}
          className={`flex items-center py-2 px-2 font-Inter text-lg ${
            activeButton === "Favorites" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <FaHeart className="mr-4" />
          Favoritos
        </button>
        <button
          onClick={() => handleButtonClick("Orderstatus")}
          className={`flex items-center py-2 px-2 font-Inter text-lg ${
            activeButton === "Orderstatus" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <FaBox className="mr-4" />
          Estatus de pedidos (4)
        </button>
        <button
          onClick={() => handleButtonClick("Paymentmethods")}
          className={`flex items-center py-2 px-2 font-Inter text-lg ${
            activeButton === "Paymentmethods" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <FaCreditCard className="mr-4" />
          Formas de pago
        </button>
        <button
          onClick={() => handleButtonClick("Chats")}
          className={`flex items-center py-2 px-2 font-Inter text-lg ${
            activeButton === "Chats" ? "bg-[#004E89] text-white" : "text-[#FF9900]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <FaComments className="mr-4" />
          Chat (4)
        </button>
        <button
          onClick={() => handleButtonClick("Direction")}
          className={`flex items-center py-2 px-2 font-Inter text-lg ${
            activeButton === "Direction" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <FaMapMarkerAlt className="mr-4" />
          Dirección
        </button>
        <button
          onClick={() => handleButtonClick("Ayuda")}
          className={`flex items-center py-2 px-2 font-Inter text-lg ${
            activeButton === "Ayuda" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <FaQuestionCircle className="mr-4" />
          Ayuda
        </button>
        <button
          onClick={() => handleButtonClick("Tickets")}
          className={`flex items-center py-2 px-2 font-Inter text-lg ${
            activeButton === "Tickets" ? "bg-[#004E89] text-white" : "text-[#777777]"
          } hover:bg-[#004E89] hover:text-white`}
        >
          <FaTicketAlt className="mr-4" />
          Tickets
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            logoutUser();
          }}
          className="flex items-center py-2 px-2 font-Inter text-lg text-[#FF4747] hover:bg-[#004E89] hover:text-white"
        >
          <FaSignOutAlt className="mr-4" />
          Cerrar sesión
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
