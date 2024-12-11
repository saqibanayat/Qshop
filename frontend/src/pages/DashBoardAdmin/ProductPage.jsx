import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsApi } from "../../Redux/slice/authSlice";

const products = [
  {
    id: 157892,
    name: "Case Iphone 15 pro max",
    category: "Tecnología",
    quantity: 35,
    price: "S/1500.00 PEN",
  },
  {
    id: 157892,
    name: "Case Iphone 15 pro max",
    category: "Hogar",
    quantity: 1787,
    price: "S/1500.00 PEN",
  },
  {
    id: 157892,
    name: "Case Iphone 15 pro max",
    category: "Belleza",
    quantity: 896,
    price: "S/1500.00 PEN",
  },
  {
    id: 157892,
    name: "Case Iphone 15 pro max",
    category: "Deportes",
    quantity: 450,
    price: "S/1500.00 PEN",
  },
];

const approvedProducts = [
  { name: "Case Iphone 15 Pro Max", price: "S/1500.00 PEN", quantity: 16 },
  { name: "Case Iphone 15 Pro Max", price: "S/1500.00 PEN", quantity: 16 },
];

const deniedProducts = [
  { name: "Case Iphone 15 Pro Max", price: "S/1500.00 PEN", quantity: 16 },
  { name: "Case Iphone 15 Pro Max", price: "S/1500.00 PEN", quantity: 16 },
];

const ProductPage = () => {
  const dispatch = useDispatch()
  const{getSellerProductsList}=useSelector((state)=>state.user)
  const [productList, setproductList] = useState([])
  useEffect(()=>{

    dispatch(getProductsApi())
  },[])

  useEffect(() => {
  if(getSellerProductsList){
    setproductList(getSellerProductsList?.product)
  }
  }, [getSellerProductsList])
  
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold text-blue-600">Productos</h1>

      <div className="flex flex-col md:flex-row items-center mt-6 gap-4">
        <div className="flex flex-1 items-center bg-gray-100 rounded-lg shadow-lg p-2">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_434_6976)">
              <path
                d="M19.2462 17.4833H18.2653L17.9176 17.1481C19.4076 15.4097 20.1775 13.0382 19.7553 10.5176C19.1717 7.06575 16.2911 4.30925 12.8144 3.88708C7.56214 3.24141 3.1418 7.66175 3.78747 12.914C4.20964 16.3907 6.96614 19.2713 10.418 19.8549C12.9386 20.2771 15.3101 19.5072 17.0485 18.0172L17.3837 18.3649V19.3458L22.6608 24.6229C23.1699 25.132 24.0018 25.132 24.5109 24.6229C25.02 24.1138 25.02 23.2819 24.5109 22.7728L19.2462 17.4833ZM11.7962 17.4833C8.70447 17.4833 6.20872 14.9876 6.20872 11.8958C6.20872 8.80408 8.70447 6.30833 11.7962 6.30833C14.888 6.30833 17.3837 8.80408 17.3837 11.8958C17.3837 14.9876 14.888 17.4833 11.7962 17.4833Z"
                fill="#989898"
              />
            </g>
            <defs>
              <clipPath id="clip0_434_6976">
                <rect
                  width="29.8"
                  height="29.8"
                  fill="white"
                  transform="translate(0 0.0996094)"
                />
              </clipPath>
            </defs>
          </svg>

          <input
            type="text"
            className="flex-1 bg-gray-100 outline-none"
            placeholder="Search"
          />
        </div>
        <select className="bg-gray-100 rounded-lg shadow-lg p-2">
          <option>Todas las categorías</option>
          {/* Add more categories as needed */}
        </select>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Agregar producto
        </button>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4">ID Producto</th>
              <th className="py-2 px-4">Nombre del producto</th>
              <th className="py-2 px-4">Categoría</th>
              <th className="py-2 px-4">Cantidad</th>
              <th className="py-2 px-4">Precio</th>
              <th className="py-2 px-4">Acción</th>
            </tr>
          </thead>
          <tbody>
            {productList?.length>0 ?
            productList?.map((product, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{product._id}</td>
                <td className="py-2 px-4 text-blue-500">{product?.name}</td>
                <td className="py-2 px-4">{product?.category || ''}</td>
                <td className="py-2 px-4">{product?.quantity || ''}</td>
                <td className="py-2 px-4">{product?.price || ''}</td>
                <td className="py-2 px-4 flex items-center justify-center space-x-2">
                  <button className="text-green-500">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.125 21.875V17.4479L16.875 3.72396C17.0833 3.53299 17.3135 3.38542 17.5656 3.28125C17.8177 3.17708 18.0823 3.125 18.3594 3.125C18.6372 3.125 18.9062 3.17708 19.1667 3.28125C19.4271 3.38542 19.6528 3.54167 19.8437 3.75L21.276 5.20833C21.4844 5.39931 21.6365 5.625 21.7323 5.88542C21.8281 6.14583 21.8757 6.40625 21.875 6.66667C21.875 6.94444 21.8274 7.20937 21.7323 7.46146C21.6372 7.71354 21.4851 7.9434 21.276 8.15104L7.55208 21.875H3.125ZM18.3333 8.125L19.7917 6.66667L18.3333 5.20833L16.875 6.66667L18.3333 8.125Z"
                        fill="#40A81C"
                      />
                    </svg>
                  </button>
                  <button className="text-red-500">
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 18C2.45 18 1.97933 17.8043 1.588 17.413C1.19667 17.0217 1.00067 16.5507 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8043 17.021 14.413 17.413C14.0217 17.805 13.5507 18.0007 13 18H3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z"
                        fill="#FF4747"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          :
          <p className="text-center">No products</p>
          }
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-6">
        <div className="mr-2 items-center justify-center flex">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 10L13 19L14.4 17.5L7 10L14.4 2.5L13 1L4 10Z"
              fill="#777777"
            />
          </svg>
        </div>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg mx-1">
          1
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg mx-1">
          2
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg mx-1">
          3
        </button>
        <div className="ml-2 items-center justify-center flex">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99998 1L5.59998 2.5L13 10L5.59998 17.5L6.99998 19L16 10L6.99998 1Z"
              fill="#777777"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="flex-1">
          <h2 className="text-green-500 text-2xl font-bold py-4 px-2">Productos aprobados</h2>
          <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-lg">
            { 
            approvedProducts.map((product, index) => (
              <div key={index} className="mt-4 flex gap-4 border-b py-4 ">
                <div>
                  <svg
                    width="101"
                    height="101"
                    viewBox="0 0 101 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50.5" cy="50.5" r="50.5" fill="#D9D9D9" />
                  </svg>
                </div>
                <div className="mt-4">
                  <h3>{product.name}</h3>
                  <p className="text-red-500">{product.price}</p>
                  <p>Cantidad: {product.quantity}</p>
                </div>
              </div>
            ))}
            <div className="justify-center flex items-center">
              <button className="mt-4 bg-blue-500  text-white px-4 py-2 rounded-lg">
                Ver productos aprobados
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
        <h2 className="text-red-500 text-2xl font-bold py-4 px-2">Productos negados</h2>
        <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-lg">
          
          {deniedProducts.map((product, index) => (
            <div key={index} className="mt-4 flex gap-4 border-b py-4 ">
                  <div>
                  <svg
                    width="101"
                    height="101"
                    viewBox="0 0 101 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50.5" cy="50.5" r="50.5" fill="#D9D9D9" />
                  </svg>
                </div>
                <div className="mt-4">
              <h3>{product.name}</h3>
              <p className="text-red-500">{product.price}</p>
              <p>Cantidad: {product.quantity}</p>
            </div>
            </div>
          ))}
          <div className="justify-center flex items-center">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
            Ver productos negados
          </button>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
