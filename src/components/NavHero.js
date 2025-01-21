import { useState, useEffect } from "react";
import Heroimg from "./images/heroimg.png";
import logo from "./images/logo.png";

export default function Navhero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${Heroimg})`,
      }}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-10 ${
          isScrolled ? "bg-white bg-opacity-10 backdrop-blur-md" : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-auto transition-all duration-300"
                  src={logo}
                  alt="Logo"
                  style={{
                    filter: isScrolled
                      ? "invert(21%) sepia(76%) saturate(545%) hue-rotate(183deg) brightness(95%) contrast(89%)"
                      : "none",
                  }}
                />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isScrolled ? "text-blue-500" : "text-white"
                  }`}
                >
                  Home
                </a>
                <a
                  href="#services"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isScrolled ? "text-blue-500" : "text-white"
                  }`}
                >
                  Services
                </a>
                <a
                  href="#technologies"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isScrolled ? "text-blue-500" : "text-white"
                  }`}
                >
                  Technologies
                </a>
                <a
                  href="#projects"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isScrolled ? "text-blue-500" : "text-white"
                  }`}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isScrolled ? "text-blue-500" : "text-white"
                  }`}
                >
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <main className="relative z-10 mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Welcome MTAI </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A software agency crafting innovative solutions to meet your
            business needs.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-full shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center border border-transparent text-sm font-medium rounded-full text-blue-500 bg-white hover:bg-blue-50 py-2 px-6"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
