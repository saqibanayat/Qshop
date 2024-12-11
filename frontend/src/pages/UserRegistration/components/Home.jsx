import React from "react";
import RegistrationForm from "./RegistrationForm";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-400 via-blue-100 to-white h-full flex flex-col md:flex-row px-4 md:px-20 text-[#1A5276]">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-3xl font-semibold mb-2 mt-20 md:mt-40">
            Crea una cuenta en Qshop
          </h1>
          <p className="text-lg mt-4">
            <span className="font-bold text-[#1A5276]">
              ¡Bienvenido a Qshop!
            </span>
            <br />
            Crear una cuenta es rápido, fácil y te brinda acceso a una
            experiencia de <br />
            compra personalizada.{" "}
            <span className="font-bold text-[#1A5276]">¡Únete a Qshop!</span>
          </p>
          <h1 className="text-2xl font-semibold mb-4 mt-10 md:mt-20">
            ¿Ya tienes una cuenta con nosotros?
          </h1>
          <p>Ingresa con tu correo electrónico y contraseña</p>
          <Link to="/login">
          <button className="bg-[#FFA500] text-white font-bold py-2 px-8 rounded mt-4">
            Iniciar sesión
          </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
