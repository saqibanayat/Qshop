import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  { useContext } from 'react';
import { RegistrationContext } from '../../context/RegistrationContext';


const Address = () => {
 

    const { address, setAddress } = useContext(RegistrationContext);
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setAddress({
        ...address,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/UserRegistration/confirmdata');
    };





  return (
    <div className="flex flex-col items-center justify-center py-12 relative overflow-hidden">
      <div className="absolute top-16 py-2 sm:left-12 left-4 flex gap-8 items-center justify-center">
        <Link>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_6_5012)">
              <circle cx="30" cy="26" r="26" fill="white" />
            </g>
            <path
              d="M43.001 26.2817H21.0527L30.6597 35.8887L29.561 36.9873L18.0742 25.5005L29.561 14.0137L30.6597 15.1123L21.0527 24.7192H43.001V26.2817Z"
              fill="#1C98F7"
            />
            <defs>
              <filter
                id="filter0_d_6_5012"
                x="0"
                y="0"
                width="60"
                height="60"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_6_5012"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_6_5012"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Link>
        <h1 className="text-xl hidden sm:hidden md:hidden lg:block">Regresar</h1>
      </div>

      <div className="mt-24 lg:mt-0 flex">
        <svg width="315" height="24" viewBox="0 0 315 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="315" height="24" rx="5" fill="#1C98F7"/>
        </svg>
        <svg width="350" height="24" viewBox="0 0 350 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="650" height="24" rx="5" fill="#F5F5F5"/>
        </svg>
      </div>

      <div className="flex justify-between gap-40 py-4 ">
        <h1>Paso 1</h1>
        <h1>Paso 2</h1>
        <h1>Paso 3</h1>
      </div>

      <div>
        <h1 className="text-3xl text-blue-400 py-6">Agrega tu dirección</h1>
        <h1>Un servicio personalizado hasta la comodidad de tu hogar</h1>
        <div className="pb-5 my-4">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="w-[350px] pr-2">
                <input
                  placeholder="Departamento"
                  value={address.departamento}
                  name='departamento'
                  onChange={handleChange}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
              </div>
              <div className="w-[250px]">
                <input
                  placeholder="Provincia"
                  value={address.provincia}
                  name='provincia'
                  onChange={handleChange}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
              </div>
            </div>

            <div className="flex">
              <div className="w-[225px] pr-2">
                <input
                  placeholder="Distrito"
                  value={address.distrito}
                  name='distrito'
                  onChange={handleChange}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
              </div>
              <div className="w-[225px] pr-2">
                <input
                  placeholder="Avenida / Calle / Jirón"
                  value={address.calle}
                  name='calle'
                  onChange={handleChange}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
              </div>
              <div className="w-[150px]">
                <input
                  placeholder="Número"
                  value={address.numero}
                  name='numero'
                  onChange={handleChange}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
              </div>
            </div>

            <textarea
              id="description"
              placeholder="Referencias"
              name="referencias"
              rows="4"
              value={address.referencias}
              onChange={handleChange}
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-200 sm:text-sm"
            ></textarea>

            <button
              type="submit"
              className="h-[64px] w-full my-3 rounded-lg justify-center flex items-center bg-blue-400 text-center text-xl py-4 text-white"
            >
              Continuar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Address;





















