import React, { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaBirthdayCake } from "react-icons/fa";
import { useContext } from "react";
import { RegistrationContext } from "../../context/RegistrationContext";
import { useNavigate } from "react-router-dom";
const PersonalInfo = () => {
  const { personalInfo, setPersonalInfo } = useContext(RegistrationContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };
  const handleDateChange = (date) => {
    setPersonalInfo({
      ...personalInfo,
      birthDate: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/UserRegistration/address");
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 relative overflow-hidden">
      {/* ... Other JSX content ... */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="pb-5">
          <div>
            <input
              placeholder="Nombre(s) *"
              type="text"
              name="firstName"
              autoComplete="name"
              required
              value={personalInfo.firstName}
              onChange={handleChange}
              className="text-gray-700 placeholder-gray-500 w-full px-4 py-2.5 mt-2 text-base transition duration-300 ease-in-out transform border-2 border-gray-300 rounded-lg bg-gray-100 focus:border-gray-600 focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ring-gray-200"
            />
          </div>
          <div>
            <input
              placeholder="Apellido(s) *"
              type="text"
              name="lastName"
              autoComplete="name"
              required
              value={personalInfo.lastName}
              onChange={handleChange}
              className="text-gray-700 placeholder-gray-500 w-full px-4 py-2.5 mt-2 text-base transition duration-300 ease-in-out transform border-2 border-gray-300 rounded-lg bg-gray-100 focus:border-gray-600 focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ring-gray-200"
            />
          </div>
          <div className="relative w-full mt-2">
            <DatePicker
              selected={personalInfo.birthDate}
              onChange={handleDateChange}
              placeholderText="Fecha de nacimiento *"
              dateFormat="dd/MM/yyyy"
              className="text-gray-700 placeholder-gray-500 w-full p-4 border-2 rounded-lg bg-gray-100 focus:border-gray-600 focus:outline-none focus:ring-2 ring-gray-200"
              wrapperClassName="w-full"
              popperPlacement="bottom-end"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-500">
              <FaBirthdayCake />
            </span>
          </div>
          <div className="flex">
            <div className="w-[225px] pr-2">
              <input
                placeholder="Edad *"
                type="number"
                name="age"
                autoComplete="age"
                required
                value={personalInfo.age}
                onChange={handleChange}
                className="text-gray-700 placeholder-gray-500 w-full px-4 py-2.5 mt-2 text-base transition duration-300 ease-in-out transform border-2 border-gray-300 rounded-lg bg-gray-100 focus:border-gray-600 focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ring-gray-200"
              />
            </div>
            <div className="w-[225px] pr-2">
              <select
                name="gender"
                value={personalInfo.gender}
                onChange={handleChange}
                className="text-gray-700 placeholder-gray-500 w-full px-4 py-2.5 mt-2 text-base transition duration-300 ease-in-out transform border-2 border-gray-300 rounded-lg bg-gray-100 focus:border-gray-600 focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ring-gray-200"
              >
                <option disabled value="">
                  Sexo
                </option>
                <option value="Male">Masculino</option>
                <option value="Female">Femenino</option>
              </select>
            </div>
            <div className="w-[150px]">
              <input
                placeholder="Celular"
                type="tel"
                name="cellular"
                pattern="^\+\d{1,3} \d{2} \d{4} \d{4}$"
                value={personalInfo.cellular}
                onChange={handleChange}
                className="text-gray-700 placeholder-gray-500 w-full px-4 py-2.5 mt-2 text-base transition duration-300 ease-in-out transform border-2 border-gray-300 rounded-lg bg-gray-100 focus:border-gray-600 focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ring-gray-200"
                title="Please enter a valid phone number in the format +51 55 5796 7851"
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-[350px] pr-2">
              <select
                className="text-gray-700 placeholder-gray-500 w-full px-4 py-2.5 mt-2 text-base transition duration-300 ease-in-out transform border-2 border-gray-300 rounded-lg bg-gray-100 focus:border-gray-600 focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ring-gray-200"
                name="documentType"
                value={personalInfo.documentType}
                onChange={handleChange}
                required
              >
                <option disabled value="">
                  Tipo de documento *
                </option>
                <option value="DNI">
                  DNI (Documento Nacional de Identidad)
                </option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="NIE">
                  NIE (Número de Identidad de Extranjero)
                </option>
              </select>
            </div>
            <div className="w-[250px]">
              <input
                type="text"
                name="dni"
                placeholder="Ingresa tu DNI *"
                value={personalInfo.dni}
                onChange={handleChange}
                required
                className="text-gray-700 placeholder-gray-500 w-full px-4 py-2.5 mt-2 text-base transition duration-300 ease-in-out transform border-2 border-gray-300 rounded-lg bg-gray-100 focus:border-gray-600 focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ring-gray-200"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white transition duration-300 ease-in-out transform bg-blue-500 border-2 border-gray-300 rounded-lg focus:outline-none focus:bg-gray-600"
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
