import React, { useEffect } from "react";
import AboutAndSupplier from "../../components/AboutAndSupplier";
import PurchasedTogether from "../../components/PurchasedTogether";
import ProductDetailHero from "../../components/ProductDetailHero";
import RelatedMacProducts from "../../components/RelatedMacProducts";
import Review from "../../components/Review";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productDetailApi } from "../../Redux/slice/sellerSlice";
import { useState } from "react";
const Index = () => {
  const {id}  = useParams()
  const dispatch = useDispatch()
  const [productDetailData, setproductDetailData] = useState()
  const [productCount, setproductCount] = useState()
  console.log(id,"params");
  useEffect(()=>{
    dispatch(productDetailApi(id))
    .then((res)=>{
      if(res?.payload?.success===true){
        setproductDetailData(res?.payload?.product)
        setproductCount(res?.payload?.userProductCount)
      }
    })
  })
  return (
    <div>
      <ProductDetailHero  productDetail={productDetailData}/>
      <AboutAndSupplier productDetail={productDetailData} productCount={productCount}/>
      <PurchasedTogether />
      <RelatedMacProducts/>
      <Review/>
    </div>
  );
};

export default Index;
