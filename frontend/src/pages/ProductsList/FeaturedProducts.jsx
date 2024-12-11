import React from 'react';
import img1 from '../../assets/edu.png'
const FeaturedProducts = () => {

  const products = [
    { id: 1, image: img1, caption: 'Product 1' },
    { id: 2, image: img1, caption: 'Product 2' },
    { id: 3, image: img1, caption: 'Product 3' },
    { id: 4, image: img1, caption: 'Product 4' },
    { id: 5, image: img1, caption: 'Product 5' },
    { id: 6, image: img1, caption: 'Product 6' },
    { id: 7, image: img1, caption: 'Product 7' },
    { id: 8, image: img1, caption: 'Product 8' },
    { id: 9, image: img1, caption: 'Product 9' },
    { id: 10, image:img1, caption: 'Product 10' },
  ];

  return (
    <div className="container mx-auto p-4 mt-12">
      <h2 className="text-3xl font-bold text-blue-500">Featured Products</h2>
      <p className="text-gray-600 mt-2 mb-6">Check out our latest collection of exclusive items.</p>

      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg overflow-hidden">
            <img src={product.image} alt={product.caption} className="w-full h-56 object-cover rounded-md" />
            <p className="text-yellow-500 font-semibold text-center mt-2">{product.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
