import React, { createContext, useState } from 'react';

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [userAsSeller, setuserAsSeller] = useState(false);
  const [shopName, setShopName] = useState();
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    age: '',
    gender: '',
    cellular: '',
    documentType: '',
    dni: ''
  });
  const [address, setAddress] = useState({
    departamento: '',
    provincia: '',
    distrito: '',
    calle: '',
    numero: '',
    referencias: ''
  });

  return (
    <RegistrationContext.Provider value={{
      email, setEmail,
      password, setPassword,
      phone, setPhone,
      personalInfo, setPersonalInfo,
      address, setAddress,
      shopName, setShopName,
      userAsSeller,setuserAsSeller,
    }}>
      {children}
    </RegistrationContext.Provider>
  );
};
