import React, { useEffect, useState, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaHeart } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getProductsApi } from "../Redux/slice/sellerSlice";
import { addFavoriteApi, getFavoriteApi } from "../Redux/slice/authSlice";
import { toast } from "react-toastify";
import iphoneImage from "../assets/homePage/ipone-image.png";
import { useNavigate } from "react-router-dom";
import {ReactComponent as CartIcon} from '../assets/svg/cart.svg'
import { addToCartApi } from "../Redux/slice/buyerSlice";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "flex",
        background: "Highlight",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        position: "absolute",
        right: "-70px",
        top: "28%",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "flex",
        background: "Highlight",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        position: "absolute",
        left: "-60px",
        top: "30%",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
}

const CustomArrows = () => {
  const dispatch = useDispatch();
  const [listOfProducts, setListOfProducts] = useState([]);
  const [favCollection, setFavCollection] = useState(new Set()); // Use Set for efficient lookups
  const { listOfFavoriteProducts } = useSelector((state) => state.user);
const navigate = useNavigate()
  // Fetch products on component mount
  useEffect(() => {
    dispatch(getProductsApi()).then((res) => {
      if (res?.payload?.products?.length > 0) {
        setListOfProducts(res.payload.products);
      }
    });
  }, [dispatch]);

  // Fetch favorite products and initialize `favCollection`
  useEffect(() => {
    dispatch(getFavoriteApi()).then((res) => {
      if (res.payload.data?.length > 0) {
        const favorites = new Set(
          res.payload.data.map((item) => item?.productId?._id)
        );
        setFavCollection(favorites);
      }
    });
  }, [dispatch]);

  // Add to favorites and update local state
  const addToFavorite = useCallback(
    (productId) => {
      if (favCollection.has(productId)) return; // Prevent duplicate additions
      dispatch(addFavoriteApi(productId)).then((res) => {
        if (res?.payload?.success === true) {
          toast.success("Successfully Added to Favorites!");
          setFavCollection(new Set([...favCollection, productId])); // Update Set
          dispatch(getFavoriteApi())
        }
      });
    },
    [dispatch, favCollection]
  );

  const addToCartHandler=(id)=>{
    const cartData ={productId:id,quantity:1}
    dispatch(addToCartApi(cartData))
    .then((res)=>{
if(res?.payload?.success===true){
  navigate("/cart")
  toast.success('added Successfully!')
}
    })
  }

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    focusOnSelect: true,
    autoplaySpeed: 4000,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, dots: true },
      },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };
const moveToDetailPage=(id)=>{
navigate(`/ProductDetail/${id}`)

}
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {listOfProducts.map((item, index) => {
          const isFavorite = favCollection.has(item._id); // Check favorite status efficiently
          return (
            <div key={index} className="">
              <div className="image-area h-[250px] w-[200px] relative flex justify-center">
                <div className="bg-red-500 text-sm text-white py-1 px-3 rounded-lg absolute top-0 left-0 font-semibold mt-1">
                  -10% off
                </div>
                <img
                  src={item?.images[0] || iphoneImage}
                  alt=""
                  className="pt-8 rounded-lg mt-5 cursor-pointer"
                  onClick={()=>moveToDetailPage(item._id)}
                />
                <div
                  onClick={() => addToFavorite(item._id)}
                  className="favorite w-[50px] h-[50px] bg-gray-200 rounded-full absolute bottom-0 flex justify-center items-center right-0 cursor-pointer"
                >
                  <FaHeart size={30} color={isFavorite ? "red" : "white"} />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-black font-bold mt-4 cursor-pointer" onClick={()=>moveToDetailPage(item._id)}>{item?.name}</h2>
                <div className="flex items-center my-2">
                  <div className="text-highlight font-semibold">4.9</div>
                  <div className="text-secondary ml-1">
                    <FaStar className="h-5 w-5" />
                  </div>
                </div>
               
                <div className="flex space-x-2 my-2">
                  <div className="w-6 h-6 rounded-full bg-red-500"></div>
                  <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                  <div className="w-6 h-6 rounded-full bg-green-500"></div>
                  <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                  <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                </div>
                <div className="flex gap-x-5">
                  <p className="text-gray-600 line-through">S/500.00 PEN</p>
                  <p className="text-secondary font-bold">S/{item.price} PEN</p>
                
                </div>
              </div> 
               <div className="flex gap-3 mt-1">
                                  <button className=" flex flex-row  gap-2 items-center justify-center rounded-lg bg-yellow-400 text-center text-2xl py-2 px-4 text-white">
                                <CartIcon  onClick={()=>addToCartHandler(item._id)}/>
                    
                                 
                                </button>
                    
                                <button className="  flex items-center justify-center rounded-lg bg-orange-400 text-center text-xl py-3 px-5 text-white ">
                                Comprar
                                </button>
                  </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CustomArrows;
