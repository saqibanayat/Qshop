import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesApi, getProductsApi } from "../../Redux/slice/sellerSlice";
import {ReactComponent as SearchIcon} from "../../assets/svg/searchIcon.svg";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import TableDropdown from "../../components/qshopTableDropdown/TableDropdown";


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
  const [productList, setproductList] = useState([])
  const [categoryId, setcategoryId] = useState()
  const{userData}=useSelector((state)=>state.user)
  const{listOfCategory}=useSelector((state)=>state.seller)

  useEffect(()=>{

    dispatch(getProductsApi({seller:userData?.user?._id,category:categoryId}))
    .then((res)=>{
      if(res?.payload?.success===true){
        setproductList(res?.payload?.products)
      }

    })
  },[categoryId])
  useEffect(() => {
    dispatch(getCategoriesApi())
    }, [])
    

  
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold text-blue-600">Productos</h1>

      <div className="flex flex-col md:flex-row items-center mt-6 gap-4">
        <div className="flex flex-1 items-center bg-gray-100 rounded-lg shadow-lg p-2">
      
        <SearchIcon/>

          <input
            type="text"
            className="flex-1 bg-gray-100 outline-none"
            placeholder="Search"
          />
        </div>
       
               <TableDropdown

items={listOfCategory}
onSelect={(data)=>setcategoryId(data?._id)}
listKeyName='name' //variable which you want to show in dropdown list suppose "name"
selectionName='Select category'

/>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Agregar producto
        </button>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4 text-start">ID Producto</th>
              <th className="py-2 px-4 text-start">Nombre del producto</th>
              <th className="py-2 px-4 text-start">Categoría</th>
              <th className="py-2 px-4 text-start">Cantidad</th>
              <th className="py-2 px-4 text-start">Precio</th>
              <th className="py-2 px-4 text-start">Acción</th>
            </tr>
          </thead>
          <tbody>
            {productList?.length>0 ?
            productList?.map((product, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{product._id}</td>
                <td className="py-2 px-4 text-blue-500">
                <div className="flex  items-center gap-2 ">
                 <img src={product?.images[0]} className="h-20" alt="" />    
                  <p>   {product?.name}</p>
                </div>
            
               
                  </td>
                <td className="py-2 px-4 ">
                  <p> {product?.category?.name || ''}</p>
                 
                  </td>
                <td className="py-2 px-4 ">
                  <p>{product?.quantity || ''}</p>
                  
                  </td>
                <td className="py-2 px-4"><p>{product?.price || ''}</p></td>
                <td className="py-2 px-4 ">
                  <div className="flex items-center justify-center space-x-2">
                       <MdEdit color="#40A81C" size={25}/>

                  <RiDeleteBinFill color="#FF4747" size={25} /> 
                  </div>
            

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
