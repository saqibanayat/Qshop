import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import HomePageV1 from "./pages/HomePageV1/index";

import ProductDetails from "./pages/ProductDetails/index";
import HomePageV2 from "./pages/HomePageV2/Index";
import UserForm from "./pages/ContactForm/UserForm";

import React, { useEffect } from "react";

import { RegistrationProvider } from "./context/RegistrationContext";

import ProductDetail from "./pages/ProductDetail/Index";
import ProductsList from "./pages/ProductsList/index";
import ProductCompra from "./pages/ProductCompra/index";
import CartPage from "./pages/EmptyCartPage";
import AddAddress from "./pages/PaymentGateWay/AddAddress";
import PaymentMethod from "./pages/PaymentGateWay/PaymentMethod";
import NewAddress from "./pages/PaymentGateWay/NewAddress";
import Transfer from "./pages/PaymentGateWay/Transfer";
import Bitcoin from "./pages/PaymentGateWay/Bitcoin";
import Confirmation from "./pages/PaymentGateWay/Confirmation";
import PersonalInfo from "./pages/UserRegistration/PersonalInfo";
import Address from "./pages/UserRegistration/Address";
import ConfirmData from "./pages/UserRegistration/ConfirmData";
import Completed from "./pages/UserRegistration/Completed";
import Register from "./pages/UserRegistration/Register";
import Login from "./pages/Login";

import Layout from "./components/Layout";
import CartWithItemsPage from "./pages/CartWithItemsPage";
import Profile from "./pages/UserDashboard/Router";
import AdminDashBoard from "./pages/DashBoardAdmin/Router";
import UserDashboard from "./pages/UserDashboard/Router";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import PaymentRoutes from "./pages/PaymentGateWay/PaymentRoutes";
import { useDispatch, useSelector } from "react-redux";
import { setPath } from "./Redux/slice/pathSlice";
function PathWatcher() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    // Dispatch current path to Redux on route change
    dispatch(setPath(location.pathname));
  }, [location, dispatch]);

  return null; // No UI rendering
}
function App() {
  const navigate = useNavigate();
  const currentPath = useSelector((state) => state.path.currentPath);

  useEffect(() => {
    // Navigate to the persisted path on app load
    if (currentPath && currentPath !== window.location.pathname) {
      navigate(currentPath);
    }
  }, [currentPath, navigate]);

  // useEffect(() => {
  //   if (!validRoutes.includes(currentPath)) {
  //     navigate("/");
  //   }
  // }, [currentPath, navigate]);
  return (
    <>
     <PathWatcher />
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/UserRegistration"
            element={
              <RegistrationProvider>
                <Register />
              </RegistrationProvider>
            }
          />
          <Route
            path="/UserRegistration/personalInfo"
            element={
              <RegistrationProvider>
                <PersonalInfo />
              </RegistrationProvider>
            }
          />
          <Route
            path="/UserRegistration/address"
            element={
              <RegistrationProvider>
                <Address />
              </RegistrationProvider>
            }
          />
          <Route
            path="/UserRegistration/confirmdata"
            element={
              <RegistrationProvider>
                <ConfirmData />
              </RegistrationProvider>
            }
          />
          <Route
            path="/UserRegistration/completed"
            element={
              <RegistrationProvider>
                <Completed />
              </RegistrationProvider>
            }
          />

          <Route path="/Profile" element={<Profile />} />
          <Route path="/admindashboard" element={<AdminDashBoard />} />
          <Route path="/userdashboard" element={<UserDashboard />} />

          <Route path="/" element={<HomePageV2/>} />
          <Route path="/HomePageV2" element={<HomePageV1 />} />
          {/* <Route path="/ProductDetails" element={<ProductDetails />} /> */}
          <Route path="/ProductsList" element={<ProductsList />} />
          <Route path="/ProductCompra" element={<ProductCompra />} />
          <Route path="/UserForm" element={<UserForm />} />

          <Route path="/ProductDetail/:id" element={<ProductDetail />} />

          <Route path="/cart" element={<CartWithItemsPage />} />
          {/* <Route path="/cartwithitems" element={<CartWithItemsPage />} /> */}

          <Route path="/PaymentGateWay" element={<AddAddress />} />
          <Route path="/PaymentGateWay/newaddress" element={<NewAddress />} />
          <Route
            path="/PaymentGateWay/paymentmethod"
            element={<PaymentMethod />}
          />
          <Route path="/PaymentGateWay/transfer" element={<Transfer />} />
          <Route path="/PaymentGateWay/bitcoin" element={<Bitcoin />} />
          <Route
            path="/PaymentGateWay/confirmation"
            element={<Confirmation />}
          />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Layout>
    </>
    
 
  );
}

export default App;
