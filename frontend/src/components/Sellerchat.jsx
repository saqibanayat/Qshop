// import React from "react";
// import greendot from "../Assets/greendot.png";
// import bigdot from "../Assets/bigdot.png";
// import { Phone } from "lucide-react";
// import { EllipsisVertical } from "lucide-react";
// import call2 from "../Assets/call2.png";
// import menudots2 from "../Assets/menudots2.png";
// import { useState } from "react";
// import smile from "../Assets/smile.png";
// import vector from "../Assets/Vector.png";
// import { Link } from "react-router-dom";

// const Sellerchat = () => {
//   const [messages, setMessages] = useState([
//     {
//       sender: "buyer",
//       text: "Do you still have that car from gone in 60 seconds? Can I borrow it please.",
//       time: "8:00 AM",
//     },
//     { sender: "seller", text: "Yeah dude for sure", time: "8:45 AM" },
//     {
//       sender: "buyer",
//       text: "Dude WTF was up with that plane you were on!!!?",
//       time: "9:00 AM",
//     },
//     { sender: "seller", text: "LOL I Know right", time: "9:45 AM" },
//     {
//       sender: "buyer",
//       text: "Hey man what should we do this weekend?",
//       time: "10:00 AM",
//     },
//     {
//       sender: "seller",
//       text: "Steal the declaration of independence?...",
//       time: "10:45 AM",
//     },
//   ]);

//   return (
//     <div className="bg-white p-6">
//       {/* chat */}
//       <div className="flex mt-10 space-x-16 items-center border-b-2">
//         <div className="flex flex-col justify-center items-center mb-8 ml-8">
//           <img src={bigdot} alt="bigdot" className="w-24 md:w-20 relative" />
//           <img
//             src={greendot}
//             alt="greendot"
//             className="  absolute -mt-10 mr-10 w-5 md:-mt-16 md:mr-14"
//           />
//         </div>
//         <div className="flex-grow flex justify-between items-center">
//           <div className="flex flex-col">
//             <h1 className="text-[#1C98F7] font-Quicksand font-bold text-2xl">
//               José Fernández
//             </h1>
//             <p className="mt-2 font-bold text-lg text-gray-600">En línea</p>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div>
//               <img src={call2} alt="call" className="h-6 w-6" />
//               {/* <Phone style={{ color: "#1C98F7" }} /> */}
//             </div>
//             <div>
//               <Link to="/Sellerinfo">
//                 <img src={menudots2} alt="menudots" className="h-10 w-10" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* chat bubbles */}
//       <div
//         className="py-8 relative flex flex-grow flex-col px-12 justify-end"
//         style={{ backgroundColor: "white" }}
//       >
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`my-1 p-2 text-sm flex flex-col relative ${
//               message.sender === "buyer"
//                 ? "ml-auto rounded-lg rounded-tr-none bg-[#004E89] text-white speech-bubble-right p-4"
//                 : "mr-auto rounded-lg rounded-tl-none bg-gray-400 text-white speech-bubble-left p-4"
//             }`}
//           >
//             <p>{message.text}</p>
//             <p className="text-white text-xs text-right leading-none">
//               {message.time}
//             </p>
//           </div>
//         ))}
//       </div>
//       {/* input */}
//       <div className="flex items-center space-x-4 ">
//         <div className="relative flex-grow">
//           <input
//             type="text"
//             id="input-6"
//             className="block w-full rounded-2xl h-16 pl-16 pr-4 text-sm text-gray-700 border focus:outline-none shadow-sm focus:border-blue-500"
//             placeholder="Message"
//           />
//           <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-4">
//             <img src={smile} alt="smile" />
//           </span>
//         </div>
//         <div className="flex-shrink-0">
//           <button className="bg-[#1C98F7] rounded-full p-4">
//             <img src={vector} alt="vector" className="h-8 w-8" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sellerchat;

import React from "react";
import greendot from "../Assets/greendot.png";
import bigdot from "../Assets/bigdot.png";
import { Phone } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
import call2 from "../Assets/call2.png";
import menudots2 from "../Assets/menudots2.png";
import { useState } from "react";
import smile from "../Assets/smile.png";
import vector from "../Assets/Vector.png";
import { Link } from "react-router-dom";

const Sellerchat = () => {
  const [messages, setMessages] = useState([
    {
      sender: "buyer",
      text: "Do you still have that car from gone in 60 seconds? Can I borrow it please.",
      time: "8:00 AM",
    },
    { sender: "seller", text: "Yeah dude for sure", time: "8:45 AM" },
    {
      sender: "buyer",
      text: "Dude WTF was up with that plane you were on!!!?",
      time: "9:00 AM",
    },
    { sender: "seller", text: "LOL I Know right", time: "9:45 AM" },
    {
      sender: "buyer",
      text: "Hey man what should we do this weekend?",
      time: "10:00 AM",
    },
    {
      sender: "seller",
      text: "Steal the declaration of independence?...",
      time: "10:45 AM",
    },
  ]);

  return (
    <div className="bg-white p-6 overflow-x-auto">
      {/* chat */}
      <div className="flex mt-10 space-x-6 md:space-x-16 items-center border-b-2">
        <div className="flex flex-col justify-center items-center mb-8 ml-8">
          <img src={bigdot} alt="bigdot" className="w-16 md:w-20 relative" />
          <img
            src={greendot}
            alt="greendot"
            className="  absolute -mt-12 mr-10 w-5 md:-mt-16 md:mr-14"
          />
        </div>
        <div className="flex-grow flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-[#1C98F7] font-Quicksand font-bold text-lg md:text-2xl">
              José Fernández
            </h1>
            <p className="mt-2 font-bold text-lg text-gray-600">En línea</p>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <img src={call2} alt="call" className="h-6 w-6" />
              {/* <Phone style={{ color: "#1C98F7" }} /> */}
            </div>
            <div>
              <Link to="/Sellerinfo">
                <img src={menudots2} alt="menudots" className="h-10 w-10" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* chat bubbles */}
      <div
        className="py-8 relative flex flex-grow flex-col px-12 justify-end"
        style={{ backgroundColor: "white" }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`my-1 p-2 text-sm flex flex-col relative ${
              message.sender === "buyer"
                ? "ml-auto rounded-lg rounded-tr-none bg-[#004E89] text-white speech-bubble-right p-4"
                : "mr-auto rounded-lg rounded-tl-none bg-gray-400 text-white speech-bubble-left p-4"
            }`}
          >
            <p>{message.text}</p>
            <p className="text-white text-xs text-right leading-none">
              {message.time}
            </p>
          </div>
        ))}
      </div>
      {/* input */}
      <div className="flex items-center space-x-4 ">
        <div className="relative flex-grow">
          <input
            type="text"
            id="input-6"
            className="block w-full rounded-2xl h-16 pl-16 pr-4 text-sm text-gray-700 border focus:outline-none shadow-sm focus:border-blue-500"
            placeholder="Message"
          />
          <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-4">
            <img src={smile} alt="smile" />
          </span>
        </div>
        <div className="flex-shrink-0">
          <button className="bg-[#1C98F7] rounded-full p-4 md:p-3">
            <img src={vector} alt="vector" className="h-5 w-5 md:h-8 md:w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sellerchat;
