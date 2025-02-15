import { useState } from "react";
import facebookImg from "./images/nfacebook.jpeg";
import instagramImg from "./images/ninstagram.jpeg";
import linkedinImg from "./images/nlinkedin.jpeg";
import footerimg from "./images/footerimg.png";
import whatsapp from "./images/nwhatsapp.jpeg";
import x from "./images/nnnx.jpeg";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer
      className="text-white py-20 relative overflow-hidden"
      id="contact"
      style={{
        backgroundImage: `url(${footerimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-black text-3xl md:text-4xl font-bold mb-10 tracking-widest">
          Interested to work with us?
        </h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-300 self-start"
        >
          Let's Talk!
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-xs md:max-w-sm relative mt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Let's Talk</h2>
              <p className="text-gray-600 text-center mb-4">
                Email us at <span className="text-[#3b82f6] font-medium">hellomtai1@gmail.com </span>
              </p>
              <p className="text-gray-600 text-center mb-6">We'll get back to you as soon as possible.</p>

              <form 
                action="https://formsubmit.co/hellomtai1@gmail.com" 
                method="POST" 
                className="space-y-0"
              >
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
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-center space-x-4 mt-8">
          {[{ href: "https://facebook.com", src: facebookImg, alt: "Facebook" },
            { href: "https://instagram.com", src: instagramImg, alt: "Instagram" },
            { href: "https://linkedin.com", src: linkedinImg, alt: "LinkedIn" },
            { href: "https://wa.me/+923101564855", src: whatsapp, alt: "WhatsApp" },
            { href: "https://x.com/LabsMtai", src: x, alt: "X" },
          ].map((social) => (
            <a
              key={social.alt}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:shadow-lg transition duration-300"
            >
              <img src={social.src} alt={social.alt} className="h-8 w-8" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
