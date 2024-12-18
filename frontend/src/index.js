import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/store';
import NavbarValuesContext from './context/NavbarValuesContext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <NavbarValuesContext>
      <BrowserRouter>
        <App />
       </BrowserRouter> 
        </NavbarValuesContext>
      </PersistGate>
  </Provider>
 
  </React.StrictMode>
);


