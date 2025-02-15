import { useState, useEffect } from 'react';
import logo from './images/logo.png';
import Heroimg from './images/heroimg.png';

export default function Navhero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change bg when scrolled 50px

      // Check if footer is visible
      const footer = document.getElementById('contact');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        setIsFooterVisible(footerRect.top < window.innerHeight && footerRect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${Heroimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'bg-blue-500 bg-opacity-80 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'Services', 'Technologies', 'Projects', 'Contact Us'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-10 focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Services', 'Technologies', 'Projects', 'Contact Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero content */}
      <main className="relative z-10 mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Welcome To MTAI</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A software agency transforming ideas into powerful, innovative solutions for your business growth.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-full shadow">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-300"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed button and form */}
      {!isFooterVisible && (
        <div
          className={`fixed right-4 bottom-4 z-50 transition-all duration-300 ${
            isScrolled ? 'translate-x-0' : 'hidden'
          }`}
        >
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      )}

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-xs md:max-w-sm relative">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Let's Talk</h2>
            <p className="text-gray-600 text-center mb-4">
              Email us at <span className="text-[#3b82f6] font-medium">hellomtai1@gmail.com </span>
            </p>
            <p className="text-gray-600 text-center mb-6">We'll get back to you as soon as possible.</p>

            <form action="https://formsubmit.co/hellomtai1@gmail.com" method="POST" className="space-y-0">
              <input type="hidden" name="_subject" value="New contact form submission" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:border-[#3b82f6] outline-none text-gray-800 text-lg"
                  placeholder="Your Name *"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:border-[#3b82f6] outline-none text-gray-800 text-lg"
                  placeholder="Your Email *"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:border-[#3b82f6] outline-none text-gray-800 text-lg"
                  placeholder="Subject *"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-md focus:border-[#3b82f6] outline-none text-gray-800 text-lg resize-none"
                  placeholder="Your Message *"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-300 self-start"
              >
                Send Message
              </button>
            </form>

            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
