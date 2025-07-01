import React from 'react';

function Hero() {
  return (
    <section
      id="home"
      className="my-10 bg-white/20 backdrop-blur-md-500 rounded-xl shadow-lg p-12 text-center max-w-4xl mx-auto"
      style={{
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      <h1 className="text-5xl font-extrabold text-yellow mb-4">Welcome to Yuga E-Commerce</h1>
      <p className="text-lg text-yellow/90">
        Your one-stop shop for sustainable and high-quality products.
      </p>
    </section>
  );
}

export default Hero;