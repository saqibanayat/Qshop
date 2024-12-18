import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartApi, getCartListApi, removeCartItemApi } from "../Redux/slice/buyerSlice";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const CartWithItems = () => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const {ListOfCartItems}=useSelector((state)=>state.buyer)
  useEffect(()=>{
    dispatch(getCartListApi())
  },[])

  
  const MinusQuantity=(id,quantity)=>{
    dispatch(removeCartItemApi({productId:id,quantity}))
    .then(()=>{
      dispatch(getCartListApi())
    })
  }
  const increaseQuantity=(id,quantity)=>{
    dispatch(addToCartApi({productId:id,quantity}))
    .then(()=>{
      dispatch(getCartListApi())
    })
  }
  return (
    <div className="flex flex-col lg:flex-row px-6 md:px-12 py-12 gap-12 overflow-hidden">
      <div className="w-full md:w-2/3">
        <h1 className="text-2xl text-blue-400">Tu carrito ({ListOfCartItems?.items?.length} productos)</h1>

       
          <hr className=" my-4"/>
       
{ListOfCartItems?.items?.map((item,index)=>{
  return(
  <>
   <div className="flex flex-col md:flex-row mb-4" key={index}>
          <div className="flex items-center gap-6">
            <div>
             <img className="max-w-[80px]" src={item?.product?.images[0]} alt="" />
            </div>

            <div>
              <div className="flex flex-col items-start gap-2">
                <h4 className="font-manrope font-semibold text-xl leading-10 text-black mb-2">
                {item?.product?.name}
                </h4>

                <h1 className="text-xl text-blue-400 py-2">S/{item?.product?.price} PEN</h1>
              </div>

              <h1>Vendido por: {item?.product?.seller?.personalInfo?.firstName+' '+item?.product?.seller?.personalInfo?.lastName}</h1>

              <h1 className="text-green-400 py-3">Disponible</h1>

              <div className="flex flex-col lg:flex-row gap-2">
                <div>
                  <button className="h-[48px] md:w-[200px] px-2 rounded-lg justify-center flex items-center bg-gray-300 text-center text-xl py-4 text-gray-900">
                    Cantidad:
                    <form>
                      <div className="relative flex items-center">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="quantity-input"
                          className="rounded-s-lg p-3 h-11 focus:ring-2 focus:outline-none"
                        >
                      <FiMinus onClick={()=>MinusQuantity(item.product._id,1)}/>
                        </button>
                        <input
                          type="text"
                          id="quantity-input"
                          data-input-counter
                          aria-describedby="helper-text-explanation"
                          className="h-11 text-center text-gray-900 bg-gray-300 text-sm block w-4 py-2.5"
                          placeholder="1"
                          value={item?.quantity}
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="quantity-input"
                          className="rounded-e-lg p-3 h-11 focus:ring-2"
                        >
                         <IoIosAdd onClick={()=>increaseQuantity(item.product._id,1)}/>
                        </button>
                      </div>
                    </form>
                  </button>
                </div>
                <div>
                  <button className="h-[48px] md:w-[200px] rounded-lg justify-center flex items-center bg-blue-400 text-center text-xl py-4 text-white">
                    Agregar a favoritos
                  </button>
                </div>
                <div className="flex">
                  <h1 className="mx-2 text-gray-300 underline">Compartir</h1>

                  <h1 className="mx-2 text-gray-300 underline">Eliminar</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className=" my-4"/>
  </>
  )
})}
       

    
      </div>

      <div className="md:border-2 md:border-gray-400 md:px-6">
        <h1 className="text-2xl text-gray-900 py-6">Total a pagar</h1>

        <div className="flex justify-between items-center py-4 border-b border-gray-400">
          <h1 className="text-lg text-gray-700">Subtotal ({ListOfCartItems?.items?.length} artículos):</h1>
          <h1 className="text-xl text-blue-400">S/{ListOfCartItems?.totalPrice ||0} PEN</h1>
        </div>

        <div className="flex justify-between items-center py-4 border-b border-gray-400">
          <h1 className="text-lg text-gray-700">Envío:</h1>
          <h1 className="text-xl text-blue-400">S/0 PEN</h1>
        </div>

        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg text-gray-700">Total:</h1>
          <h1 className="text-xl text-blue-400">S/{ListOfCartItems?.totalPrice ||0} PEN</h1>
        </div>

        <button onClick={()=>{navigate('/PaymentGateWay')}} className="w-full bg-[#FF9900] text-white text-lg py-3 mb-6 mt-6 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Proceder al pago
        </button>
      </div>
    </div>
  );
};

export default CartWithItems;
