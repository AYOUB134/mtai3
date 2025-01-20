import { useState } from 'react';
import Heroimg from './images/heroimg.png'; // Make sure the path to the image is correct

export default function Navhero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="relative min-h-screen bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${Heroimg})`, // Use `url()` to set the background image
      }}
    >
      {/* Navigation */}
      <nav className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-white text-2xl font-bold">MTAI Software Labs</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a href="#services" className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </a>
                <a href="#technologies" className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium">
                  Technologies
                </a>
                <a href="#projects" className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium">
                  Projects
                </a>
                <a href="#contact" className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-10 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#services" className="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium">
                Services
              </a>
              <a href="#technologies" className="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium">
                Technologies
              </a>
              <a href="#projects" className="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium">
                Projects
              </a>
              <a href="#contact" className="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero content */}
      <main className="relative z-10 mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-blue-200">MTAI Software Labs</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We are a software design and development agency that creates innovative solutions for your business needs.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
              >
                Learn more
              </a>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
