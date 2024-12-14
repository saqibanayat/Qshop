import React, { useEffect, useRef, useState } from "react";
import camera2 from "../Assets/camera2.png";
import user3 from "../Assets/user3.png";
import { useDispatch, useSelector } from "react-redux";
import { getSellerProfileApi, setSellerProfileApi } from "../../Redux/slice/sellerSlice";
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";

const Profile = () => {
  const dispatch=useDispatch()
  const [selectedImage , setselectedImage ] = useState(null);
  const [profileData, setprofileData] = useState({
    password:'',
    confirmPassword:'' 
   })
  const fileInputRef = useRef(null);
  const { register, handleSubmit , formState: { errors } } = useForm();

  const{sellerProfileData}=useSelector((state)=>state.seller)

  
  useEffect(() => {
  if(sellerProfileData){
    setprofileData((prev)=>({...prev,...sellerProfileData?.seller}))
  }
  }, [sellerProfileData])
  
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setselectedImage(file);
      
    }
  };
  
  const handleClickChangePicture = () => {
    fileInputRef.current.click(); // Simulate click on hidden file input
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    setprofileData(prevState => ({
      ...prevState,
      [name]: value
    }))}

const UpdateProfileData=()=>{
 
  if(profileData?.confirmPassword !=profileData?.password){
    toast.error("password and confirm password do not match!")
    return
  }
  const formData = new FormData();
formData.append('firstName',profileData?.firstName)
formData.append('lastName',profileData?.lastName)
formData.append('cellular',profileData?.cellular)
if(profileData?.password != ''){
  formData.append('password',profileData?.password)
}
if(selectedImage){
  formData.append('image',selectedImage)
}
dispatch(setSellerProfileApi(formData))
.then((res)=>{
if(res?.payload?.success===true){
  toast.success(res?.payload?.message)
  dispatch(getSellerProfileApi())
}
})
  

}

  return (
    <div className="bg-white p-4 overflow-auto">
      <h1 className="text-[#1C98F7] font-Inter mb-4 md:ml-20 text-3xl">
        Perfil
      </h1>
      <div className="flex flex-col justify-center items-center" onClick={handleClickChangePicture}>
        <img src={selectedImage ? URL.createObjectURL(selectedImage)
         :
          profileData?.profilePicture ?
        profileData.profilePicture
        :
user3
        }  alt="user" className="h- w-36 relative" />
        <img
          src={camera2}
          alt="camera2"
          className="text-white bg-[#004E89] rounded-full h-10 w-10 p-2 absolute -mb-20 ml-24"
        />
         <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
      </div>
      {/* grid */}
      <form onSubmit={handleSubmit(UpdateProfileData)}>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-x-24 mt-10 px-5 md:px-10">
        {/* row 1 col 1 */}
        <div className="mb-6">
          <label
            htmlFor="firstName"
            className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
          >
            Nombre
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={profileData?.firstName}
            error={errors}
            register={register}
            onChange={handleInputChange}
            className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg block w-full p-2.5"
            placeholder="José Luis"
            required
          />
        </div>
        {/* row 1 col 2 */}
        <div className="mb-6">
          <label
            htmlFor="lastName"
            className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
          >
            Apellido
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={profileData?.lastName}
            onChange={handleInputChange}
            className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg block w-full p-2.5"
            placeholder="Ramírez Velasco"
            required
          />
        </div>
        {/* row 2 col 1 */}
        <div className="mb-6">
          <label
            htmlFor="cellular"
            className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
          >
            Número de celular
          </label>
          <input
            type="tel"
            id="cellular"
            name="cellular"
            value={profileData?.cellular}
            onChange={handleInputChange}
            className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg block w-full p-2.5"
            placeholder="55 6989 5623"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
        {/* row 2 col 2 */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={profileData?.email}
            onChange={handleInputChange}
            className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg block w-full p-2.5"
            placeholder="joseluis@gmail.com"
            required
          />
        </div>
        {/* row 3 col 1 */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
          >
            Nueva Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            error={errors}
            value={profileData?.password}
            register={register}
            onChange={handleInputChange}
            className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg block w-full p-2.5"
            placeholder="•••••••••"
            // required
          />
        </div>
        {/* row 3 col 2 */}
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 font-Inter text-gray-700 text-xl font-normal dark:text-white"
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            error={errors}
            register={register}
            value={profileData?.confirmPassword}
            onChange={handleInputChange}
            className="bg-white border border-gray-300 text-gray-900 font-Inter text-base font-normal rounded-lg block w-full p-2.5"
            placeholder="•••••••••"
            // required
          />
        </div>
        {/* row 5 */}
        <div className="mb-6 md:col-span-2 md:flex md:justify-center">
          <button
            type="submit"
            className="border-2 border-[#FF9900] bg-[#FF9900] text-white py-2 px-20 md:px-44 rounded-md hover:bg-transparent hover:text-[#FF9900] font-semibold"
          >
            Actualizar datos
          </button>
        </div>
        {/* row 6 */}
        <div className="mb-6 md:col-span-2 md:flex md:justify-center">
          <h1 className="text-[#FF9900] justify-end items-end">
            Eliminar cuenta
          </h1>
        </div>
      </div>
      </form>
     
    </div>
  );
};

export default Profile;
