import React from "react";
import ProductCard from "../../components/ProductCard";

const Recommandations = () => {
  return (
    <div className="">
      <>
        <h2 className="text-start text-4xl text-white font-semibold my-6 px-5 md:px-16">
          Recomendaciones basados en tus recientes búsquedas
        </h2>
        <div className="flex flex-wrap  gap-x-4  px-5 md:px-16 md:justify-between justify-center mb-12 gap-y-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* <button className="text-white underline text-2xl font-semibold mx-auto block w-fit mb-12 underline-offset-2">
          Ver más ofertas
        </button> */}
      </>
    </div>
  );
};

export default Recommandations;
