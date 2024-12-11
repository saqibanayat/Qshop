

import React from 'react'
import { Link } from 'react-router-dom'

import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useContext } from 'react';
import { RegistrationContext } from '../../context/RegistrationContext';
import { useDispatch } from 'react-redux';
import {  RegisterSellerApi, RegisteruserApi } from '../../Redux/slice/authSlice';

const ConfirmData = () => {
  const { email, password, phone, personalInfo, address,userAsSeller,shopName } = useContext(RegistrationContext);
  const navigate = useNavigate();
const dispatch = useDispatch()
  const submitRegistration = () => {
    if(userAsSeller===true){
        const userData = {
      email,
      password,
      phone,
      personalInfo,
      address,
      shopName,
    }; 

          dispatch(RegisterSellerApi(userData))
     .then((res)=>{
if(res?.payload?.success===true){
 toast.success('Registration successful');
       navigate('/UserRegistration/completed');
}
 
     })
    }else{
      const userData = {
        email,
        password,
        phone,
        personalInfo,
        address,
        
      };
      
          dispatch(RegisteruserApi(userData))
     .then((res)=>{
if(res?.payload?.success===true){
 toast.success('Registration successful');
       navigate('/UserRegistration/completed');
}
 
     })
    }
  
  
    
    
      
      
      
      
      
    }


  

  return (
    <div className="flex flex-col items-center justify-center py-12 relative overflow-hidden">
    <div className="absolute top-16 py-2 sm:left-12 left-4 flex gap-8 items-center justify-center">
      <Link to="/previous-page"> {/* Update this path as needed */}
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
      <svg width="538" height="24" viewBox="0 0 538 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="538" height="24" rx="5" fill="#1C98F7"/>
      </svg>
      <svg width="200" height="24" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="24" rx="5" fill="#F5F5F5"/>
      </svg>
    </div>

    <div className="flex justify-between gap-40 py-4 ">
      <h1>Paso 1</h1>
      <h1>Paso 2</h1>
      <h1>Paso 3</h1>
    </div>

    <div>
      <h1 className="text-3xl text-blue-400 py-6">Confirma tus datos</h1>
      <h1>Asegúrate que tus datos estén completos y correctos</h1>

      <div className="pb-5 pt-8 my-4 flex flex-col gap-2">
      <div className="mb-4">
          <div className="flex justify-between">
            <p><strong>Nombre:</strong> {personalInfo.firstName}</p>
            <Link to="/UserRegistration/personalInfo">
              <button className="text-white bg-orange-500 py-1 px-3 rounded-md">
                Editar datos personales
              </button>
            </Link>
          </div>
        </div>
        <p className="mb-4"><strong>Fecha de nacimiento:</strong> {personalInfo.birthDate ? format(new Date(personalInfo.birthDate), 'dd MMMM yyyy') : '25 de enero de 1985'}</p>
        <p className="mb-4"><strong>Edad:</strong> {personalInfo.age}</p>
        <p className="mb-4"><strong>Sexo:</strong> {personalInfo.gender}</p>
        <p className="mb-4"><strong>Celular:</strong> {personalInfo.cellular}</p>
        <p className="mb-4"><strong>Documento de autenticación:</strong> {personalInfo.documentType}</p>
        <p className="mb-4"><strong>DNI:</strong> {personalInfo.dni}</p>
        


        <div className="mb-4">
          <div className="flex justify-between">
          <p className="mb-4"><strong>Dirección predeterminada:</strong></p>
          <Link to="/UserRegistration/address">
            <button className="text-white bg-orange-500 py-2 px-4 rounded-md mr-4">
              Editar dirección
            </button>
          </Link>
          </div>
        </div>
        <p>Address: {`${address.calle}, ${address.numero}, ${address.distrito}, ${address.provincia}, ${address.departamento}`}</p>
        <p>References: {address.referencias}</p>
       

    
          <button onClick={submitRegistration} className="h-[64px] w-full my-3 mt-8 rounded-lg justify-center flex items-center bg-blue-400 text-center text-xl py-4 text-white">
            Continuar
          </button>
       
      </div>
    </div>
  </div>
  )
}

export default ConfirmData

























