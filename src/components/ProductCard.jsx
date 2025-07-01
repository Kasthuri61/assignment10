import React from 'react';

function ProductCard({ product }) {
  const { name, price, category, rating, image } = product;

  const handleAddToCart = () => {
    console.log(`Added to cart: ${name}`);
  };

  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
        <p className="text-green-700 font-bold">${price.toFixed(2)}</p>
        <p className="text-sm text-gray-700">Category: {category}</p>
        <p className="text-yellow-500">Rating: {rating} ⭐</p>
        <button
          onClick={handleAddToCart}
          className="mt-3 w-full py-2 bg-blue-600 hover:bg-green-600 text-white rounded-md font-semibold transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;