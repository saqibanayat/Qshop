import React from "react";
import AboutAndSupplier from "../../components/AboutAndSupplier";
import PurchasedTogether from "../../components/PurchasedTogether";
import ProductDetailHero from "../../components/ProductDetailHero";
import RelatedMacProducts from "../../components/RelatedMacProducts";
import Review from "../../components/Review";
const Index = () => {
  return (
    <div>
      <ProductDetailHero />
      <AboutAndSupplier />
      <PurchasedTogether />
      <RelatedMacProducts/>
      <Review/>
    </div>
  );
};

export default Index;
