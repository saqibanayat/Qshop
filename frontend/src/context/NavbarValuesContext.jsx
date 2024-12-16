// MyContextProvider.js
import React, { useContext, useState } from 'react';


import { createContext } from 'react';

const MyContext = createContext();

export const Navbarvalue = () => {
    return useContext(MyContext);
  };

const NavbarValuesContext = ({ children }) => {
    const [adminDashboardCurrentComponent, setadminDashboardCurrentComponent] = useState('profile')



//dashboard start survey tab values
  const adminCurrentComponentHandler = (value) => {
    setadminDashboardCurrentComponent(value);
  };


 

  return (
    <MyContext.Provider value={{ 
adminCurrentComponentHandler,
adminDashboardCurrentComponent,

     }}>
      {children}
    </MyContext.Provider>
  );
};

export default NavbarValuesContext;
