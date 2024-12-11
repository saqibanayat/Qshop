// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Profile from "./Profile";
// import Favorites from "./Favorites";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Orderstatus from "./Orderstatus";
// import Paymentmethods from "./Paymentmethods";
// import Chats from "./Chats";
// import Direction from "./Direction";
// import Orderdetails from "./Orderdetails";
// import Sellerchat from "./Sellerchat";
// import Sellerinfo from "./Sellerinfo";

// const Router = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         {/* <Header /> */}
//         <div className="flex bg-gray-200 space-x-6 md:p-8">
//           <div className="w-1/5">
//             <Sidebar />
//           </div>
//           <div className="md:w-4/5">
//             <Routes>
//               <Route path="/" element={<Profile />} />
//               <Route path="/Favorites" element={<Favorites />} />
//               <Route path="/Orderstatus" element={<Orderstatus />} />
//               <Route path="/Paymentmethods" element={<Paymentmethods />} />
//               <Route path="/Chats" element={<Chats />} />
//               <Route path="/Direction" element={<Direction />} />
//               <Route path="/orderdetails" element={<Orderdetails />} />
//               <Route path="/Sellerchat" element={<Sellerchat />} />
//               <Route path="/Sellerinfo" element={<Sellerinfo />} />
//             </Routes>
//           </div>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default Router;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Favorites from "./Favorites";
import Header from "./Header";
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

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <div className="flex flex-col md:flex-row bg-gray-200 space-y-6 md:space-y-0 md:space-x-6 md:p-8">
          <div className="md:w-1/5 w-full">
            <Sidebar />
          </div>
          <div className="md:w-4/5 w-full">
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/Favorites" element={<Favorites />} />
              <Route path="/Orderstatus" element={<Orderstatus />} />
              <Route path="/Paymentmethods" element={<Paymentmethods />} />
              <Route path="/Chats" element={<Chats />} />
              <Route path="/Direction" element={<Direction />} />
              <Route path="/orderdetails" element={<Orderdetails />} />
              <Route path="/Sellerchat" element={<Sellerchat />} />
              <Route path="/Sellerinfo" element={<Sellerinfo />} />
              <Route path="/Paymentcards" element={<Paymentcards />} />
              <Route path="/Bitcoin" element={<Bitcoin />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;
