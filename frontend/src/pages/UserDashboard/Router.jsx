import React from "react";
import Profile from "./Profile";
import Favorites from "./Favorites";

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
import ShippingDetails from "./ShippingDetails";

const App = () => {

  const [currentComponent, setCurrentComponent] = React.useState("Profile");

 
  const renderComponent = () => {
    switch (currentComponent) {
      case "Profile":
        return <Profile />;
      case "Favorites":
        return <Favorites />;
      case "Orderstatus":
        return <Orderstatus />;
      case "Paymentmethods":
        return <Paymentmethods />;
      case "Chats":
        return <Chats />;
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
        case "ShippingDetails":
          return <ShippingDetails />;
      default:
        return <Profile />;
    }
  };

  return (
    <div>
     
      <div className="flex flex-col md:flex-row bg-gray-200 space-y-6 md:space-y-0 md:space-x-6 md:p-8">
        <div className="md:w-1/5 w-full">
          <Sidebar setCurrentComponent={setCurrentComponent} />
        </div>
        <div className="md:w-4/5 w-full">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default App;
