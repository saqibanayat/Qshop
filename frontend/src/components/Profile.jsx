// import React from "react";
// import user3 from "../Assets/user3.png";
// import { Camera } from "lucide-react";
// import camera2 from "../Assets/camera2.png";

// const Profile = () => {
//   return (
//     <div className="bg-white p-4">
//       <h1 className="text-[#1C98F7] font-Inter ml-20 text-3xl">Perfil</h1>
//       <div className="flex flex-col justify-center items-center">
//         <img src={user3} alt="user" className="h- w-36 relative" />
//         <img
//           src={camera2}
//           alt="camera2"
//           className="text-white bg-[#004E89] rounded-full h-10 w-10 p-2 absolute -mb-20 ml-24"
//         />
//         {/* <Camera className="text-white bg-[#1C98F7] rounded-full h-10 w-10 p-1 absolute -mb-24 ml-28" /> */}
//       </div>

//       {/* grid */}
//       <div className="grid grid-cols-2 gap-x-24 mt-10 px-10">
//         {/* row 1 col 1 */}
//         <div className="mb-6">
//           <label
//             for="first_name"
//             className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
//           >
//             Nombre
//           </label>
//           <input
//             type="text"
//             id="first_name"
//             className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg  block w-full p-2.5 "
//             placeholder="José Luis"
//             required
//           />
//         </div>
//         {/* row 1 col 2 */}
//         <div className="mb-6">
//           <label
//             for="last_name"
//             className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
//           >
//             Apellido
//           </label>
//           <input
//             type="text"
//             id="last_name"
//             className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg  block w-full p-2.5 "
//             placeholder="Ramírez Velasco"
//             required
//           />
//         </div>
//         {/* row 2 col 1 */}
//         <div>
//           <label
//             for="phone"
//             className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
//           >
//             Número de celular
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg  block w-full p-2.5 "
//             placeholder="55 6989 5623"
//             pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
//             required
//           />
//         </div>
//         {/* row 2 col 2 */}
//         <div className="mb-6">
//           <label
//             for="email"
//             className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg  block w-full p-2.5 "
//             placeholder="joseluis@gmail.com"
//             required
//           />
//         </div>
//         {/* row 3 col 1 */}
//         <div className="mb-6">
//           <label
//             for="password"
//             className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
//           >
//             Nueva Contraseña
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg  block w-full p-2.5 "
//             placeholder="•••••••••"
//             required
//           />
//         </div>
//         {/* row 3 col 2 */}
//         <div className="mb-6">
//           <label
//             for="confirm_password"
//             className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
//           >
//             Confirmar Contraseña
//           </label>
//           <input
//             type="password"
//             id="confirm_password"
//             className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg  block w-full p-2.5 "
//             placeholder="•••••••••"
//             required
//           />
//         </div>
//         {/* row 5 */}
//         <div className="col-start-2">
//           <button
//             type="submit"
//             className="border-2 border-[#FF9900] bg-[#FF9900]  text-white py-2 px-44 rounded-md hover:bg-transparent hover:text-[#FF9900] font-semibold"
//           >
//             Actualizar datos
//           </button>
//         </div>
//         {/* row 6 */}
//         <div className="col-start-2">
//           <h1 className="text-[#FF9900] justify-end items-end">
//             Eliminar cuenta
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React from "react";
import camera2 from "../Assets/camera2.png";
import user3 from "../Assets/user3.png";

const Profile = () => {
  return (
    <div className="bg-white p-4 overflow-auto">
      <h1 className="text-[#1C98F7] font-Inter mb-4 md:ml-20 text-3xl">
        Perfil
      </h1>
      <div className="flex flex-col justify-center items-center">
        <img src={user3} alt="user" className="h- w-36 relative" />
        <img
          src={camera2}
          alt="camera2"
          className="text-white bg-[#004E89] rounded-full h-10 w-10 p-2 absolute -mb-20 ml-24"
        />
      </div>
      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-x-24 mt-10 px-5 md:px-10">
        {/* row 1 col 1 */}
        <div className="mb-6">
          <label
            htmlFor="first_name"
            className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
          >
            Nombre
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg block w-full p-2.5"
            placeholder="José Luis"
            required
          />
        </div>
        {/* row 1 col 2 */}
        <div className="mb-6">
          <label
            htmlFor="last_name"
            className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
          >
            Apellido
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg block w-full p-2.5"
            placeholder="Ramírez Velasco"
            required
          />
        </div>
        {/* row 2 col 1 */}
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
          >
            Número de celular
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg block w-full p-2.5"
            placeholder="55 6989 5623"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
        {/* row 2 col 2 */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg block w-full p-2.5"
            placeholder="joseluis@gmail.com"
            required
          />
        </div>
        {/* row 3 col 1 */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
          >
            Nueva Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>
        {/* row 3 col 2 */}
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirm_password"
            className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>
        {/* row 5 */}
        <div className="mb-6 md:col-span-2 md:flex md:justify-center">
          <button
            type="submit"
            className="border-2 border-[#FF9900] bg-[#FF9900] text-white py-2 px-20 md:px-44 rounded-md hover:bg-transparent hover:text-[#FF9900] font-semibold"
          >
            Actualizar datos
          </button>
        </div>
        {/* row 6 */}
        <div className="mb-6 md:col-span-2 md:flex md:justify-center">
          <h1 className="text-[#FF9900] justify-end items-end">
            Eliminar cuenta
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
