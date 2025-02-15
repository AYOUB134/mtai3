import React from 'react';

const ContactForm = ({ onClose }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-xs md:max-w-sm relative">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Let's Talk</h2>
      <p className="text-gray-600 text-center mb-4">
        Email us at <span className="text-[#3b82f6] font-medium">hellomtai1@gmail.com </span>
      </p>
      <p className="text-gray-600 text-center mb-6">We'll get back to you as soon as possible.</p>

      <form action="https://formsubmit.co/hellomtai1@gmail.com" method="POST" className="space-y-5">
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
  className="mx-auto block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-300"
>
  Send Message
</button>


      </form>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
      >
        ✕
      </button>
    </div>
  );
};

export default ContactForm;