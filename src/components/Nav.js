import React, { useState } from 'react';
import logo from './images/logo.png';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="MTAI Software Labs Logo" className="h-20 w-16" />
            <span className="text-3xl md:text-4xl font-extrabold text-blue-600">
             Software Labs
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <a href="#home" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300">
              Home
            </a>
            <a href="#projects" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300">
              Projects
            </a>
            <a href="#technologies" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300">
              Technologies
            </a>
            <a href="#contact" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300">
              Contact Us
            </a>
            <a href="#about" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300">
              About Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a
            href="#home"
            className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
          >
            Home
          </a>
          <a
            href="#projects"
            className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#technologies"
            className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
          >
            Technologies
          </a>
          <a
            href="#contact"
            className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
          >
            Contact Us
          </a>
          <a
            href="#about"
            className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
          >
            About Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
