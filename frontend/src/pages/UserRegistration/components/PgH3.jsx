import React from 'react';

function PgH3() {
  return (
    <div className="flex flex-col items-center justify-center my-40">
      <div className="text-center">
        <h1 className="text-gray-700 text-3xl mb-4">¿Quieres ser vendedor en Qshop?</h1>
        <a href="/crear-cuenta" style={{ textDecoration: 'none' }}>
          <button className="bg-[#FFA500] text-white text-2xl py-2 px-6 rounded-lg sm:rounded-xl mt-4">
            Crear una cuenta
          </button>
        </a>
        <p className=' text-gray-700 mt-4 text-2xl'>
          <a href="/iniciar-sesion" style={{ textDecoration: 'underline' }}>
            Iniciar sesión
          </a>
        </p>
      </div>
    </div>
  );
}

export default PgH3;
