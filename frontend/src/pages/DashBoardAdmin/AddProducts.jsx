import React, { useEffect, useRef, useState } from "react";
import { AiFillPicture } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AddProductApi, getCategoriesApi } from "../../Redux/slice/sellerSlice";
import { toast } from "react-toastify";
import TableDropdown from "../../components/qshopTableDropdown/TableDropdown";


const AddProducts = () => {
  const fileInputRef = useRef(null);
  const {userData}=useSelector((state)=>state.user)
  const dispatch = useDispatch()
  const{listOfCategory}=useSelector((state)=>state.seller)
  const [categoryId, setcategoryId] = useState()
  const [addProductData, setaddProductData] = useState({
    name: '',
    // seller:userData?.user?._id,
    description: '',
    price: '',
    quantity: '',
    sizes: '',
    flavor: '',
    colors: '',
    images: []
  });
  const handleClickChangePicture = () => {
    fileInputRef.current.click(); // Simulate click on hidden file input
  };
  const handleOnChange = (e) => {
    setaddProductData({ ...addProductData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setaddProductData({
      ...addProductData,
      images: [...addProductData.images, ...files] // Append new images to array
    });
  };
useEffect(() => {
dispatch(getCategoriesApi())
}, [])




  const addProductHandler = async (e) => {
    e.preventDefault();

    // Create a FormData object
    const formData = new FormData();

    // Append text fields
    for (const key in addProductData) {
      if (key !== 'images') {  
        formData.append(key, addProductData[key]);
      }
    }
formData.append('seller',userData?.user?._id)
formData.append('category',categoryId)
for (let i = 0; i < addProductData?.images.length; i++) {
  formData.append('images', addProductData?.images[i]); 
}
   
    try {
      dispatch(AddProductApi(formData))
   .then((res)=>{
    if(res?.payload?.success){
      toast.success(res?.payload?.msg)
    }
   })

    } catch (error) {
      console.error("Error uploading product data:", error);
    }
  };




  return (
    <div className="bg-white px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-16 overflow-x-auto rounded-xl">
      <h1 className="text-[#1C98F7] font-Quicksand font-bold mb-4 text-3xl">Agregar producto</h1>
      <p className="font-Quicksand text-[#777777] mt-8">
        Para poder publicar un producto, debes de llenar el siguiente formulario y llenar los espacios que se te solicitan.
        <span className="text-[#1C98F7] font-bold"> ¡Nos encanta que formes parte de la familia QSHOP!</span>
      </p>
      <form onSubmit={addProductHandler}>
        <h1 className="font-Quicksand text-[#004E89] font-medium mt-8 mb-3">Nombre del producto</h1>
        <input
          type="text"
          placeholder="Escribe el nombre del producto"
          className="w-full p-2 bg-[#F5F5F5] rounded-lg"
          name="name"
          value={addProductData.name}
          onChange={handleOnChange}
        />

        {/* Price and Quantity */}
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-6 lg:space-x-12 mt-6">
          <div className="w-full ">
            <h1 className="font-Quicksand text-[#004E89] font-medium mt-8 mb-3">Precio</h1>
            <input
              type="text"
              placeholder="S/300.00 PEN"
              className="w-full p-2 bg-[#F5F5F5] rounded-lg"
              name="price"
              value={addProductData.price}
              onChange={handleOnChange}
            />
          </div>
          <div className="w-full ">
            <h1 className="font-Quicksand text-[#004E89] font-medium mt-8 mb-3">Cantidad de producto</h1>
            <input
              type="text"
              placeholder="52"
              className="w-full p-2 bg-[#F5F5F5] rounded-lg"
              name="quantity"
              value={addProductData.quantity}
              onChange={handleOnChange}
            />
          </div>
        </div>

        {/* Description */}
        <h1 className="font-Quicksand text-[#004E89] font-medium mt-8 mb-3">Descripción</h1>
        <textarea
          placeholder="Coloca una descripción detallada del producto"
          className="w-full p-2 bg-[#F5F5F5] rounded-lg"
          name="description"
          value={addProductData.description}
          onChange={handleOnChange}
        ></textarea>

<h1 className="font-Quicksand text-[#004E89] font-medium mt-8 mb-3">Category</h1>

        <TableDropdown

                  items={listOfCategory}
                  onSelect={(data)=>setcategoryId(data?._id)}
                  listKeyName='name' //variable which you want to show in dropdown list suppose "name"
                  selectionName='Select category'
 
        />

        {/* Sizes, Flavors, Colors */}
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-6 lg:space-x-12 mt-6">
          <div className="w-full md:w-1/3">
            <h1 className="font-Quicksand text-[#004E89] font-medium mt-8 mb-3">Tallas</h1>
            <input
              type="text"
              placeholder="CH, Med, GRD, etc."
              className="w-full p-2 bg-[#F5F5F5] rounded-lg"
              name="sizes"
              value={addProductData.sizes}
              onChange={handleOnChange}
            />
          </div>
          <div className="w-full md:w-1/3">
            <h1 className="font-Quicksand text-[#004E89] font-medium mt-8 mb-3">Sabores</h1>
            <input
              type="text"
              placeholder="Fresa, chocolate, vainilla, etc."
              className="w-full p-2 bg-[#F5F5F5] rounded-lg"
              name="flavor"
              value={addProductData.flavor}
              onChange={handleOnChange}
            />
          </div>
          <div className="w-full md:w-1/3">
            <h1 className="font-Quicksand text-[#004E89] font-medium mt-8 mb-3">Colores</h1>
            <input
              type="text"
              placeholder="Blanco"
              className="w-full p-2 bg-[#F5F5F5] rounded-lg"
              name="colors"
              value={addProductData.colors}
              onChange={handleOnChange}
            />
          </div>
        </div>

        {/* Images */}
   



<h1 className="font-Quicksand text-[#004E89] font-medium mt-8 mb-3">
        Imágenes
      </h1>
      <p className="font-Quicksand text-[#777777]">
        Agrega por lo menos 4 imágenes de tu producto (Considera tomarlas desde
        diferentes ángulos, que sean claras y que no sean borrosas)
      </p>
      <div className="flex flex-row md:justify-start space-x-2  md:space-x-4 mt-6">
        <div className="w-1/4">
          <div className="flex flex-col p-4 md:p-12 justify-center items-center rounded-2xl bg-[#F5F5F5]"onClick={handleClickChangePicture}>
            {addProductData?.images[0]?
          <img src={URL.createObjectURL(addProductData?.images[0])} alt="" />  
          :
       <>
         <AiFillPicture className="text-[#1C98F7] h-8 w-8 md:h-12 md:w-12 rounded-2xl" />

            <h1 className="font-Quicksand text-[#777777] text-xs md:text-base underline mt-3" >
              Agregar imagen
            </h1>
       </>
          }
          
            <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleImageChange}
                  
                    />
          </div>
        </div>
        <div className="w-1/4">
        <div className="flex flex-col p-4 md:p-12 justify-center items-center rounded-2xl bg-[#F5F5F5]"onClick={handleClickChangePicture}>
            {addProductData?.images[1]?
          <img src={URL.createObjectURL(addProductData?.images[1])} alt="" />  
          :
       <>
         <AiFillPicture className="text-[#1C98F7] h-8 w-8 md:h-12 md:w-12 rounded-2xl" />

            <h1 className="font-Quicksand text-[#777777] text-xs md:text-base underline mt-3" >
              Agregar imagen
            </h1>
       </>
          }
          
            <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleImageChange}
                  
                    />
          </div>
        </div>
        <div className="w-1/4">
        <div className="flex flex-col p-4 md:p-12 justify-center items-center rounded-2xl bg-[#F5F5F5]"onClick={handleClickChangePicture}>
            {addProductData?.images[2]?
          <img src={URL.createObjectURL(addProductData?.images[2])} alt="" />  
          :
       <>
         <AiFillPicture className="text-[#1C98F7] h-8 w-8 md:h-12 md:w-12 rounded-2xl" />

            <h1 className="font-Quicksand text-[#777777] text-xs md:text-base underline mt-3" >
              Agregar imagen
            </h1>
       </>
          }
          
            <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleImageChange}
                  
                    />
          </div>
        </div>
        <div className="w-1/4">
        <div className="flex flex-col p-4 md:p-12 justify-center items-center rounded-2xl bg-[#F5F5F5]"onClick={handleClickChangePicture}>
            {addProductData?.images[3]?
          <img src={URL.createObjectURL(addProductData?.images[3])} alt="" />  
          :
       <>
         <AiFillPicture className="text-[#1C98F7] h-8 w-8 md:h-12 md:w-12 rounded-2xl" />

            <h1 className="font-Quicksand text-[#777777] text-xs md:text-base underline mt-3" >
              Agregar imagen
            </h1>
       </>
          }
          
            <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleImageChange}
                  
                    />
          </div>
        </div>
      </div>
    

        <div className="flex justify-between space-x-6 mt-10 md:mt-12">
          <button className="text-[#FF4747] font-Quicksand font-bold shadow-md border px-3 md:px-8 py-3 rounded-lg">
            Cancelar producto
          </button>
          <button type="submit" className="bg-[#40A81C] text-white font-Quicksand font-bold px-3 md:px-8 py-3 rounded-lg">
            Publicar producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
