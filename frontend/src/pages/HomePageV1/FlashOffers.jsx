import React from 'react'
import ProductCard from '../../components/ProductCard'
const FlashOffers = () => {
  return (
    <>
    <h2 className='text-start text-4xl text-white font-semibold my-6 px-5 md:px-16'>Ofertas flash (20 hrs 58 min 17 seg)</h2>
    <div className='flex flex-wrap  gap-x-4  px-5 md:px-16 md:justify-between justify-center mb-12'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

    </div>
    <button className='text-white underline text-2xl font-semibold mx-auto block w-fit mb-12 underline-offset-2'>
  Ver más ofertas
</button>
    </>
  )
}

export default FlashOffers