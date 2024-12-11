// import React from "react";
// import bigdot from "../Assets/bigdot.png";
// import { X } from "lucide-react";
// import { Phone } from "lucide-react";
// import { Mail } from "lucide-react";

// const Sellerinfo = () => {
//   return (
//     <div className="bg-white overflow-x-auto">
//       <div className="flex space-x-8 p-8">
//         <div>
//           <img src={bigdot} alt="bigdot logo" />
//         </div>
//         <div className="flex flex-col">
//           <div className="flex justify-between">
//             <h1 className="text-[#1C98F7] font-Quicksand font-semibold text-2xl">
//               José Fernández Rodríguez
//             </h1>
//             <X />
//           </div>
//           <div className="flex space-x-10 mt-6">
//             <div className="flex flex-row space-x-2">
//               <Phone className="text-[#1C98F7]" />
//               <p>+51 55 7845 8963</p>
//             </div>
//             <div className="flex flex-row space-x-2">
//               <Mail className="text-[#1C98F7]" />
//               <p>jose@example.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <h1 className="mt-8 text-[#004E89] px-14 font-Quicksand font-semibold text-xl mx-10">
//         Información del vendedor
//       </h1>
//       <div className="mx-10">
//         {/* row 1 */}
//         <div className="flex justify-between p-14 items-center ">
//           <p className="font-Quicksand font-medium text-xl">
//             Puntuación, basada en
//             <br /> comentarios
//           </p>
//           <h1 className="text-[#40A81C] font-Quicksand text-lg font-semibold">
//             100%
//           </h1>
//         </div>
//         {/* row 2 */}
//         <div className="flex justify-between items-center p-14  bg-gray-200">
//           <p className="font-Quicksand font-medium text-xl">
//             Verificación de
//             <br /> nombre verdadero
//           </p>
//           <p className="font-Quicksand font-medium text-xl">
//             20 verificaciones de confianza, 19 verificaciones,
//             <br /> 0 verificaciones rechazadas
//           </p>
//         </div>
//         {/* row 3 */}
//         <div className="space-y-4 p-14 ">
//           <div className="flex justify-between items-center">
//             <p className="font-Quicksand font-medium text-xl">Primera compra</p>
//             <p className="font-Quicksand font-medium text-xl">
//               Hace 3 meses, 1 semana
//             </p>
//           </div>
//           <div className="flex justify-between items-center">
//             <p className="font-Quicksand font-medium text-xl">Cuenta creada</p>
//             <p className="font-Quicksand font-medium text-xl">
//               Hace 9 meses, 1 semana
//             </p>
//           </div>
//         </div>
//         {/* row 4 */}
//         <div className="space-y-4 bg-gray-200 font-Quicksand font-medium text-xl p-14 ">
//           <div className="flex justify-between items-center">
//             <p>Última vez activo</p>
//             <p>Hace 6 minutos</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <p>Idiomas</p>
//             <p>Español, inglés</p>
//           </div>
//         </div>
//         {/* row 5 */}
//         <div className="space-y-4 font-Quicksand font-medium p-14 text-xl ">
//           <div className="flex justify-between items-center">
//             <p>Correo electrónico</p>
//             <p>Verificado hace 9 meses, 1 semana</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <p>Número de teléfono</p>
//             <p>Verificado hace 9 meses, 1 semana</p>
//           </div>
//           <div className="flex justify-between items-center">
//             <p>Identificación, pasaporte o permiso para conducir</p>
//             <p>Verificado hace 9 meses, 1 semana</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sellerinfo;

import React from "react";
import bigdot from "../Assets/bigdot.png";
import { X } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

const Sellerinfo = () => {
  return (
    <div className="bg-white overflow-x-auto">
      <div className="flex space-x-8 p-8">
        <div>
          <img src={bigdot} alt="bigdot logo" />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-[#1C98F7] font-Quicksand font-semibold text-lg md:text-2xl">
              José Fernández Rodríguez
            </h1>
            <X />
          </div>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 mt-6">
            <div className="flex flex-row space-x-2 items-center mb-2">
              <Phone className="text-[#1C98F7]" />
              <p className="text-base text-gray-500">+51 55 7845 8963</p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <Mail className="text-[#1C98F7]" />
              <p className="text-base text-gray-500">jose@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-8 text-[#004E89] md:px-14 font-Quicksand font-semibold text-xl mx-10">
        Información del vendedor
      </h1>
      <div className="">
        {/* row 1 */}
        <div className="flex justify-between space-x-8 p-8 md:p-14 items-center ">
          <p className="font-Quicksand font-medium text-xl">
            Puntuación, basada en
            <br /> comentarios
          </p>
          <h1 className="text-[#40A81C] font-Quicksand text-lg font-semibold">
            100%
          </h1>
        </div>
        {/* row 2 */}
        <div className="flex justify-between space-x-8 items-center p-8 md:p-14  bg-gray-200">
          <p className="font-Quicksand font-medium text-base md:text-xl">
            Verificación de nombre
            <br /> verdadero
          </p>
          <p className="font-Quicksand font-medium text-base md:text-xl">
            20 verificaciones de confianza, 19 verificaciones,
            <br /> 0 verificaciones rechazadas
          </p>
        </div>
        {/* row 3 */}
        <div className="space-y-4 p-8 md:p-14 ">
          <div className="flex justify-between items-center">
            <p className="font-Quicksand font-medium text-lg md:text-xl">
              Primera compra
            </p>
            <p className="font-Quicksand font-medium text-lg md:text-xl">
              Hace 3 meses, 1 semana
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-Quicksand font-medium text-lg md:text-xl">
              Cuenta creada
            </p>
            <p className="font-Quicksand font-medium text-lg md:text-xl">
              Hace 9 meses, 1 semana
            </p>
          </div>
        </div>
        {/* row 4 */}
        <div className="space-y-4  bg-gray-200 font-Quicksand font-medium text-xl p-8 md:p-14 ">
          <div className="flex justify-between items-center">
            <p className="font-Quicksand font-medium text-lg md:text-xl">
              Última vez activo
            </p>
            <p className="font-Quicksand font-medium text-lg md:text-xl">
              Hace 6 minutos
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-Quicksand font-medium text-lg md:text-xl">
              Idiomas
            </p>
            <p className="font-Quicksand font-medium text-lg md:text-xl">
              Español, inglés
            </p>
          </div>
        </div>
        {/* row 5 */}
        <div className="space-y-4 font-Quicksand font-medium p-8 md:p-14 text-xl ">
          <div className="flex justify-between items-center">
            <p className="font-Quicksand font-medium text-lg md:text-xl">
              Correo electrónico
            </p>
            <p className="font-Quicksand font-medium text-lg md:text-xl">
              Verificado hace 9 meses, 1 semana
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-Quicksand font-medium text-lg md:text-xl">
              Número de teléfono
            </p>
            <p className="font-Quicksand font-medium text-lg md:text-xl">
              Verificado hace 9 meses, 1 semana
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-Quicksand font-medium text-lg md:text-xl">
              Identificación, pasaporte
              <br /> o permiso para conducir
            </p>
            <p className="font-Quicksand font-medium text-lg md:text-xl">
              Verificado hace 9 meses, 1 semana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellerinfo;
