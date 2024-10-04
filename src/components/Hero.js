import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-white text-gray-800 py-20 lg:py-40">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
          Welcome to Our Website
        </h1>
        <p className="text-xl lg:text-2xl max-w-3xl mb-8">
          Discover amazing content and explore new possibilities with our cutting-edge solutions and technology.
        </p>
        <button className="bg-blue-600 text-white font-semibold text-lg lg:text-xl py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
