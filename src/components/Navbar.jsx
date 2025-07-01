import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Yuga E-Commerce</div>
        <ul className="flex space-x-6">
          <li><a href="Hero.jsx" className="hover:underline">Home</a></li>
          <li><a href="ProdictCart.jsx" className="hover:underline">Product</a></li>
          <li><a href="Addcard.jsx" className="hover:underline">Add Cart</a></li>
          <li><a href="About.jsx" className="hover:underline">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;