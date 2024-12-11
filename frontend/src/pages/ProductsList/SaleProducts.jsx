import React from "react";
import img1 from "../../assets/edu.png";

const SaleProducts = () => {
  const saleProducts = [
    {
      id: 1,
      image: img1,
      badge: "-50% off",
      title: "Product 1",
      description: [
        "Feature A",
        "Feature B",
        "Feature C",
        "Special Offer",
        "Limited Edition",
      ],
    },
    {
      id: 2,
      image: img1,
      badge: "-50% off",
      title: "Product 2",
      description: [
        "Feature A",
        "Feature B",
        "Feature C",
        "Special Offer",
        "Limited Edition",
      ],
    },
    {
      id: 3,
      image: img1,
      badge: "-50% off",
      title: "Product 3",
      description: [
        "Feature A",
        "Feature B",
        "Feature C",
        "Special Offer",
        "Limited Edition",
      ],
    },
    {
      id: 4,
      image: img1,
      badge: "-50% off",
      title: "Product 4",
      description: [
        "Feature A",
        "Feature B",
        "Feature C",
        "Special Offer",
        "Limited Edition",
      ],
    },
    {
      id: 5,
      image: img1,
      badge: "-50% off",
      title: "Product 5",
      description: [
        "Feature A",
        "Feature B",
        "Feature C",
        "Special Offer",
        "Limited Edition",
      ],
    },
    {
      id: 6,
      image: img1,
      badge: "-50% off",
      title: "Product 6",
      description: [
        "Feature A",
        "Feature B",
        "Feature C",
        "Special Offer",
        "Limited Edition",
      ],
    },
    {
      id: 7,
      image: img1,
      badge: "-50% off",
      title: "Product 7",
      description: [
        "Feature A",
        "Feature B",
        "Feature C",
        "Special Offer",
        "Limited Edition",
      ],
    },
    {
      id: 8,
      image: img1,
      badge: "-50% off",
      title: "Product 8",
      description: [
        "Feature A",
        "Feature B",
        "Feature C",
        "Special Offer",
        "Limited Edition",
      ],
    },
    {
      id: 9,
      image: img1,
      badge: "-50% off",
      title: "Product 9",
      description: [
        "Feature A",
        "Feature B",
        "Feature C",
        "Special Offer",
        "Limited Edition",
      ],
    },
    {
      id: 10,
      image: img1,
      badge: "-50% off",
      title: "Product 10",
      description: [
        "Feature A",
        "Feature B",
        "Feature C",
        "Special Offer",
        "Limited Edition",
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-20">
      <h2 className="text-3xl font-bold text-blue-500 mb-4">Sale Products</h2>

      <div className="grid grid-cols-5 gap-4 ">
        {saleProducts.map((product) => (
          <div key={product.id} className="rounded-lg overflow-hidden w-full mt-5">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-md inline-block mb-2">
              {product.badge}
            </span>

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover rounded-md mb-2"
            />

            <h3 className="text-lg font-semibold text-gray-800">
              {product.title}
            </h3>

            <ul className="mt-2 space-y-1">
              {product.description.map((line, index) => (
                <li
                  key={index}
                  className={
                    index === 3
                      ? "text-yellow-500"
                      : index === 4
                      ? "text-blue-500"
                      : "text-gray-600"
                  }
                >
                  {index === 2 ? <del>{line}</del> : line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaleProducts;
