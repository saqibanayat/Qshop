import React from "react";
import OrderPage from "./OrderPage";

import Profile from "./Profile";
// import Favorites from "./Favorites";
// import Header from "./Header";
import Sidebar from "./Sidebar";
import Orderstatus from "./Orderstatus";
import Paymentmethods from "./Paymentmethods";
import Chats from "./Chats";
import Direction from "./Direction";
import Orderdetails from "./Orderdetails";
import Sellerchat from "./Sellerchat";
import Sellerinfo from "./Sellerinfo";
import Paymentcards from "./Paymentcards";
import Bitcoin from "./Bitcoin";
// import AdminSidebar from "./AdminSidebar";
import Dashboard from "./Dashboard";
import AddProducts from "./AddProducts";
// import AdminSidebar2 from "./AdminSidebar2";
import ProductPage from "./ProductPage";
import { Navbarvalue } from "../../context/NavbarValuesContext";
import Favorites from "./Favorites";

const App = () => {
    const {adminDashboardCurrentComponent}=Navbarvalue()
    console.log("🚀 ~ App ~ adminDashboardCurrentComponent:", adminDashboardCurrentComponent)
  

  const renderComponent = () => {
    switch (adminDashboardCurrentComponent) {
      case "Dashboard":
        return <Dashboard />;
      case "Profile":
        return <Profile />;
      case "AddProducts":
        return <AddProducts />;
      case "ProductPage":
        return <ProductPage />;
      case "Favorite":
        return <Favorites />;

      case "OrderPage":
        return <OrderPage />;

      case "Chats":
        return <Chats />;

      case "Orderstatus":
        return <Orderstatus />;
      case "Paymentmethods":
        return <Paymentmethods />;

      case "Direction":
        return <Direction />;
      case "Orderdetails":
        return <Orderdetails />;
      case "Sellerchat":
        return <Sellerchat />;
      case "Sellerinfo":
        return <Sellerinfo />;
      case "Paymentcards":
        return <Paymentcards />;
      case "Bitcoin":
        return <Bitcoin />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row bg-gray-200 space-y-6 md:space-y-0 md:space-x-6 md:p-8">
        <div className="md:w-1/5 w-full">
          <Sidebar  />
        </div>
        <div className="md:w-4/5 w-full">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default App;
