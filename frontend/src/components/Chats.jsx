// import React from "react";
// import greendot from "../Assets/greendot.png";
// import dot2 from "../Assets/dot2.png";
// import bigdot from "../Assets/bigdot.png";
// import { Link } from "react-router-dom";

// const Chats = () => {
//   return (
//     <div className="bg-white p-16">
//       <h1 className="text-[#1C98F7] font-Quicksand font-bold text-4xl">
//         Chats
//       </h1>
//       {/* chat 1 */}
//       <Link to="/Sellerchat">
//         <div className="flex space-x-28 mt-10">
//           <div>
//             <img src={greendot} alt="greendot" />
//           </div>
//           <div className="flex justify-between">
//             <div className="flex flex-col">
//               <h1 className="text-[#1C98F7] font-Quicksand font-bold text-lg">
//                 José Fernández
//               </h1>
//               <p className="mt-4 font-bold text-lg text-gray-600">
//                 Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en
//                 color ne...
//               </p>
//             </div>
//             <div>
//               <h1 className="text-[#1C98F7] font-Quicksand font-bold text-lg">
//                 11:20 AM
//               </h1>
//             </div>
//           </div>
//         </div>
//       </Link>
//       {/* chat 2 */}
//       <Link to="/Sellerchat">
//         <div className="flex mt-10 space-x-16">
//           <div className="flex flex-col justify-center items-center">
//             <img src={bigdot} alt="bigdot" className=" w-20 relative" />
//             <img
//               src={greendot}
//               alt="camera2"
//               className="  absolute -mt-16 mr-16"
//             />
//           </div>
//           <div className="flex justify-between mt-6">
//             <div className="flex flex-col">
//               <h1 className="text-[#1C98F7] font-Quicksand font-bold text-lg">
//                 Isabelle Ruiz
//               </h1>
//               <p className="mt-4 font-bold text-lg text-gray-600">
//                 Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en
//                 color ne...
//               </p>
//             </div>
//             <div>
//               <h1 className="text-[#1C98F7] font-Quicksand font-bold text-lg">
//                 1:38 PM
//               </h1>
//             </div>
//           </div>
//         </div>
//       </Link>
//       {/* chat 3 */}
//       <Link to="/Sellerchat">
//         <div className="flex mt-10 space-x-16">
//           <div className="flex flex-col justify-center items-center">
//             <img src={bigdot} alt="bigdot" className=" w-20 relative" />
//             <img
//               src={greendot}
//               alt="greendot"
//               className="  absolute -mt-16 mr-16"
//             />
//           </div>
//           <div className="flex justify-between mt-6">
//             <div className="flex flex-col">
//               <h1 className="text-[#1C98F7] font-Quicksand font-bold text-lg">
//                 José Fernández
//               </h1>
//               <p className="mt-4 font-bold text-lg text-gray-600">
//                 Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en
//                 color ne...
//               </p>
//             </div>
//             <div>
//               <h1 className="text-[#1C98F7] font-Quicksand font-bold text-lg">
//                 11:20 AM
//               </h1>
//             </div>
//           </div>
//         </div>
//       </Link>
//       {/* chat 4 */}
//       <Link to="/Sellerchat">
//         <div className="flex mt-10 space-x-16">
//           <div className="flex flex-col justify-center items-center">
//             <img src={bigdot} alt="bigdot" className=" w-20 relative" />
//             <img src={dot2} alt="dot2" className="  absolute -mt-16 mr-16" />
//           </div>
//           <div className="flex justify-between mt-6">
//             <div className="flex flex-col">
//               <h1 className="text-[#1C98F7] font-Quicksand text-lg font-bold">
//                 Isabelle Ruiz
//               </h1>
//               <p className="mt-4 text-lg font-Quicksand text-gray-400 font-bold">
//                 Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en
//                 color ne...
//               </p>
//             </div>
//             <div>
//               <h1 className="text-[#1C98F7] font-Quicksand text-lg font-bold">
//                 1:38 PM
//               </h1>
//             </div>
//           </div>
//         </div>
//       </Link>
//       {/* chat 5 */}
//       <Link to="/Sellerchat">
//         <div className="flex mt-10 space-x-16">
//           <div className="flex flex-col justify-center items-center">
//             <img src={bigdot} alt="bigdot" className=" w-20 relative" />
//             <img src={dot2} alt="dot2" className="  absolute -mt-16 mr-16" />
//           </div>
//           <div className="flex justify-between mt-6">
//             <div className="flex flex-col">
//               <h1 className="text-[#1C98F7] font-Quicksand text-lg font-bold">
//                 José Fernández
//               </h1>
//               <p className="mt-4 text-lg font-Quicksand text-gray-400 font-bold">
//                 Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en
//                 color ne...
//               </p>
//             </div>
//             <div>
//               <h1 className="text-[#1C98F7] font-Quicksand text-lg font-bold">
//                 11:20 AM
//               </h1>
//             </div>
//           </div>
//         </div>
//       </Link>
//       {/* chat 6 */}
//       <Link to="/Sellerchat">
//         <div className="flex mt-10 space-x-16">
//           <div className="flex flex-col justify-center items-center">
//             <img src={bigdot} alt="bigdot" className=" w-20 relative" />
//             <img src={dot2} alt="dot2" className="  absolute -mt-16 mr-16" />
//           </div>
//           <div className="flex justify-between mt-6">
//             <div className="flex flex-col">
//               <h1 className="text-[#1C98F7] font-Quicksand text-lg font-bold">
//                 Isabelle Ruiz
//               </h1>
//               <p className="mt-4 text-lg font-Quicksand text-gray-400 font-bold">
//                 Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en
//                 color ne...
//               </p>
//             </div>
//             <div>
//               <h1 className="text-[#1C98F7] font-Quicksand text-lg font-bold">
//                 1:38 PM
//               </h1>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default Chats;

import React from "react";
import greendot from "../Assets/greendot.png";
import dot2 from "../Assets/dot2.png";
import bigdot from "../Assets/bigdot.png";
import { Link } from "react-router-dom";

const Chats = () => {
  return (
    <div className="bg-white p-6 md:p-16 overflow-x-auto">
      <h1 className="text-[#1C98F7] font-Quicksand font-bold text-2xl md:text-4xl">
        Chats
      </h1>
      {/* chat 1 */}
      <Link to="/Sellerchat">
        <div className="flex flex-col space-x-20 md:space-x-32 mt-10">
          <div>
            <img src={greendot} alt="greendot" className="w-5" />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1 className="text-[#1C98F7] font-Quicksand font-bold text-base md:text-lg">
                José Fernández
              </h1>
              <p className="mt-4 font-bold text-sm md:text-lg text-gray-600">
                Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en
                color ne...
              </p>
            </div>
            <div>
              <h1 className="text-[#1C98F7] mr:0 md:mr-8 font-Quicksand font-bold text-sm md:text-lg">
                11:20 AM
              </h1>
            </div>
          </div>
        </div>
      </Link>
      {/* chat 2 */}
      <Link to="/Sellerchat">
        <div className="flex mt-10 space-x-8 md:space-x-16">
          <div className="flex flex-col justify-center items-center">
            <img src={bigdot} alt="bigdot" className="w-24 md:w-20 relative" />
            <img
              src={greendot}
              alt="greendot"
              className="  absolute -mt-10 mr-10 w-5 md:-mt-16 md:mr-14"
            />
          </div>
          <div className="flex justify-between mt-6">
            <div className="flex flex-col">
              <h1 className="text-[#1C98F7] font-Quicksand font-bold text-base md:text-lg">
                José Fernández
              </h1>
              <p className="mt-4 font-bold text-sm md:text-lg text-gray-600">
                Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en
                color ne...
              </p>
            </div>
            <div>
              <h1 className="text-[#1C98F7] font-Quicksand font-bold text-sm md:text-lg">
                11:20 AM
              </h1>
            </div>
          </div>
        </div>
      </Link>
      {/* chat 3 */}
      <Link to="/Sellerchat">
        <div className="flex mt-10 space-x-8 md:space-x-16">
          <div className="flex flex-col justify-center items-center">
            <img src={bigdot} alt="bigdot" className="w-24 md:w-20 relative" />
            <img
              src={greendot}
              alt="greendot"
              className="  absolute -mt-10 mr-10 w-5 md:-mt-16 md:mr-14"
            />
          </div>
          <div className="flex justify-between mt-6">
            <div className="flex flex-col">
              <h1 className="text-[#1C98F7] font-Quicksand font-bold text-base md:text-lg">
                José Fernández
              </h1>
              <p className="mt-4 font-bold text-sm md:text-lg text-gray-600">
                Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en
                color ne...
              </p>
            </div>
            <div>
              <h1 className="text-[#1C98F7] font-Quicksand font-bold text-sm md:text-lg">
                11:20 AM
              </h1>
            </div>
          </div>
        </div>
      </Link>
      {/* chat 4 */}
      <Link to="/Sellerchat">
        <div className="flex mt-10 space-x-8 md:space-x-16">
          <div className="flex flex-col justify-center items-center">
            <img src={bigdot} alt="bigdot" className="w-24 md:w-20 relative" />
            <img
              src={dot2}
              alt="dot2"
              className="  absolute -mt-10 mr-10 w-5 md:-mt-16 md:mr-14"
            />
          </div>
          <div className="flex justify-between mt-6">
            <div className="flex flex-col">
              <h1 className="text-[#1C98F7] font-Quicksand font-bold text-base md:text-lg">
                José Fernández
              </h1>
              <p className="mt-4 font-bold text-sm md:text-lg text-gray-600">
                Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en
                color ne...
              </p>
            </div>
            <div>
              <h1 className="text-[#1C98F7] font-Quicksand font-bold text-sm md:text-lg">
                11:20 AM
              </h1>
            </div>
          </div>
        </div>
      </Link>
      {/* chat 5 */}
      <Link to="/Sellerchat">
        <div className="flex mt-10 space-x-8 md:space-x-16">
          <div className="flex flex-col justify-center items-center">
            <img src={bigdot} alt="bigdot" className="w-24 md:w-20 relative" />
            <img
              src={dot2}
              alt="dot2"
              className="  absolute -mt-10 mr-10 w-5 md:-mt-16 md:mr-14"
            />
          </div>
          <div className="flex justify-between mt-6">
            <div className="flex flex-col">
              <h1 className="text-[#1C98F7] font-Quicksand font-bold text-base md:text-lg">
                José Fernández
              </h1>
              <p className="mt-4 font-bold text-sm md:text-lg text-gray-600">
                Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en
                color ne...
              </p>
            </div>
            <div>
              <h1 className="text-[#1C98F7] font-Quicksand font-bold text-sm md:text-lg">
                11:20 AM
              </h1>
            </div>
          </div>
        </div>
      </Link>
      {/* chat 6 */}
      <Link to="/Sellerchat">
        <div className="flex mt-10 space-x-8 md:space-x-16">
          <div className="flex flex-col justify-center items-center">
            <img src={bigdot} alt="bigdot" className="w-24 md:w-20 relative" />
            <img
              src={dot2}
              alt="dot2"
              className="  absolute -mt-10 mr-10 w-5 md:-mt-16 md:mr-14"
            />
          </div>
          <div className="flex justify-between mt-6">
            <div className="flex flex-col">
              <h1 className="text-[#1C98F7] font-Quicksand font-bold text-base md:text-lg">
                José Fernández
              </h1>
              <p className="mt-4 font-bold text-sm md:text-lg text-gray-600">
                Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en
                color ne...
              </p>
            </div>
            <div>
              <h1 className="text-[#1C98F7] font-Quicksand font-bold text-sm md:text-lg">
                11:20 AM
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Chats;

{
  /* chat 4 */
}
<Link to="/Sellerchat">
  <div className="flex mt-10 space-x-16">
    <div className="flex flex-col justify-center items-center">
      <img src={bigdot} alt="bigdot" className=" w-20 relative" />
      <img src={dot2} alt="dot2" className="  absolute -mt-16 mr-16" />
    </div>
    <div className="flex justify-between mt-6">
      <div className="flex flex-col">
        <h1 className="text-[#1C98F7] font-Quicksand text-lg font-bold">
          Isabelle Ruiz
        </h1>
        <p className="mt-4 text-lg font-Quicksand text-gray-400 font-bold">
          Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en color
          ne...
        </p>
      </div>
      <div>
        <h1 className="text-[#1C98F7] font-Quicksand text-lg font-bold">
          1:38 PM
        </h1>
      </div>
    </div>
  </div>
</Link>;
{
  /* chat 5 */
}
<Link to="/Sellerchat">
  <div className="flex mt-10 space-x-16">
    <div className="flex flex-col justify-center items-center">
      <img src={bigdot} alt="bigdot" className=" w-20 relative" />
      <img src={dot2} alt="dot2" className="  absolute -mt-16 mr-16" />
    </div>
    <div className="flex justify-between mt-6">
      <div className="flex flex-col">
        <h1 className="text-[#1C98F7] font-Quicksand text-lg font-bold">
          José Fernández
        </h1>
        <p className="mt-4 text-lg font-Quicksand text-gray-400 font-bold">
          Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en color
          ne...
        </p>
      </div>
      <div>
        <h1 className="text-[#1C98F7] font-Quicksand text-lg font-bold">
          11:20 AM
        </h1>
      </div>
    </div>
  </div>
</Link>;
{
  /* chat 6 */
}
<Link to="/Sellerchat">
  <div className="flex mt-10 space-x-16">
    <div className="flex flex-col justify-center items-center">
      <img src={bigdot} alt="bigdot" className=" w-20 relative" />
      <img src={dot2} alt="dot2" className="  absolute -mt-16 mr-16" />
    </div>
    <div className="flex justify-between mt-6">
      <div className="flex flex-col">
        <h1 className="text-[#1C98F7] font-Quicksand text-lg font-bold">
          Isabelle Ruiz
        </h1>
        <p className="mt-4 text-lg font-Quicksand text-gray-400 font-bold">
          Claro! Me encataría el producto, solo una duda, ¿No lo tendrá en color
          ne...
        </p>
      </div>
      <div>
        <h1 className="text-[#1C98F7] font-Quicksand text-lg font-bold">
          1:38 PM
        </h1>
      </div>
    </div>
  </div>
</Link>;
