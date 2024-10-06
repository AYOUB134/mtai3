import React from 'react';
import mitronImg from './images/mitron.jpg';
import foodiesImg from './images/foodies-1.jpg';
import binderImg from './images/binder-1.jpg';
import badooImg from './images/hugme-1.jpg';
import infotexImg from './images/88-01.jpg';
import nafterImg from './images/nafter.jpg';
import vorzImg from './images/vorz.jpg';

const projects = [
  {
    title: "Badoo Clone Dating App",
    description: "App Development, Android",
    image: badooImg,
  },
  {
    title: "Foodies - Food Delivery App",
    description: "App Development, Android and IOS App",
    image: foodiesImg,
  },
  {
    title: "Mitron",
    description: "App Development, Android",
    image: mitronImg,
  },
  {
    title: "Binder - Tinder Clone",
    description: "IOS and Android",
    image: binderImg,
  },
  {
    title: "Infotex - Social Video Sharing App",
    description: "App Development, Android, IOS",
    image: infotexImg,
  },
  {
    title: "Vorz - Blockchain NFT Application",
    description: "App Development, Blockchain, Android, IOS",
    image: vorzImg,
  },
  {
    title: "Nafter - Social Media NFT Platform",
    description: "Blockchain Application",
    image: nafterImg,
  },
];

export default function ProjectShowcase() {
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen py-20" id='projects'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
          OUR LATEST WORKS
        </h2>
        {/* Full-width horizontal line */}
        <div className="mt-4 mb-4 mx-auto w-60 border-b-4 border-blue-600" />
        {/* Margin below the line */}
        <div className="mb-12" />
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-stretch justify-center`}>
              <div className="w-full md:w-2/5 h-[50vh] md:h-[80vh] flex items-center justify-center overflow-hidden rounded-l-lg shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-l-lg"
                />
              </div>
              <div className="w-full md:w-2/5 bg-white p-8 rounded-r-lg shadow-lg h-auto md:h-[80vh] flex flex-col justify-start overflow-hidden">
                <h3 className="text-3xl font-bold text-gray-900 mb-2 mt-4">{project.title}</h3>
                <p className="text-xl text-gray-600 mb-4 mt-2">{project.description}</p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-300 self-start">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
