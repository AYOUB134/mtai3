import React from 'react';
import facebookImg from './images/facebook.png';
import instagramImg from './images/instagram.png';
import linkedinImg from './images/linkedin.png';
import footerimg from './images/footerimg.png';
import whatsapp from './images/whatsapp.jpeg';
import x from './images/xicon.jpeg';

const Footer = () => {
  return (
    <footer
      className="text-white py-20 relative overflow-hidden" id="contact"
      style={{
        backgroundImage: `url(${footerimg})`, // Set the background image
        backgroundSize: 'cover', // Ensure the image covers the entire footer
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
      }}
    >
      <div className="container mx-auto text-center relative z-10"> {/* Ensure this is above the background image */}
        <h1 className="text-black text-3xl md:text-4xl font-bold text-center mb-10 leading-snug tracking-widest">
          Interested to work with us?
        </h1>

        {/* Button for Let's Talk with updated background color */}
        <a
          href="mailto:example@example.com"
          className="inline-block bg-[#3b82f6] text-white text-lg font-bold py-3 px-20 rounded-full transition duration-300 hover:bg-[#2563eb] mb-20"
        >
          Let's talk!
        </a>

        <div className="flex justify-center space-x-6 mb-4"> {/* Adjusted bottom margin */}
          {/* Social Media Icons */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <div className="p-3 bg-white rounded-full hover:shadow-lg transition duration-300">
              <img
                src={facebookImg}
                alt="Facebook"
                className="h-6 w-6" // Consistent size for icons
              />
            </div>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <div className="p-3 bg-white rounded-full hover:shadow-lg transition duration-300">
              <img
                src={instagramImg}
                alt="Instagram"
                className="h-6 w-6" // Consistent size for icons
              />
            </div>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <div className="p-3 bg-white rounded-full hover:shadow-lg transition duration-300">
              <img
                src={linkedinImg}
                alt="LinkedIn"
                className="h-6 w-6" // Consistent size for icons
              />
            </div>
          </a>

          {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <div className="p-3 bg-white rounded-full hover:shadow-lg transition duration-300">
              <img
                src={linkedinImg}
                alt="LinkedIn"
                className="h-6 w-6" // Consistent size for icons
              />
            </div>
          </a> */}

          {/* WhatsApp Icon with white background */}
          <a
            href="https://wa.me/+923101564855"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-3 bg-white rounded-full hover:shadow-lg transition duration-300">
              <img
                src={whatsapp}
                alt="WhatsApp"
                className="h-6 w-6" // Consistent size for icons
              />
            </div>
          </a>

          {/* X (Twitter) Icon with white background */}
          <a
            href="https://x.com/LabsMtai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-3 bg-white rounded-full hover:shadow-lg transition duration-300">
              <img
                src={x}
                alt="X"
                className="h-6 w-6" // Consistent size for icons
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
