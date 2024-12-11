import React from 'react'
import ProductHero from './ProductHero'
import Details from './Details';
import FrequentBuy from './FrequentBuy';
import Products from './Products';
import Testimonials from './Testimonials';

const index = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
        <ProductHero />
        <Details />
        <FrequentBuy />
        <Products />
        <Testimonials />
    </div>
  )
}

export default index