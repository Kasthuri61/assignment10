import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  return (
    <section id="products" className="max-w-7xl mx-auto mb-16">
      {products.length === 0 ? (
        <p className="text-center text-white text-xl mt-10">
          No products found. Try adjusting your filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;