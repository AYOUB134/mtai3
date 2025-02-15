import React from 'react';
import ludooImg from './images/ludoo.jpg';
import foodiesImg from './images/foodapp.jpg';
import doctorImg from './images/doctor.jpg';
import hikmatImg from './images/newhikmat.jpg';

const projects = [
  {
    title: "Ludo Game App",
    description: "A classic board game with multiplayer fun, tournaments, multiple payment methods, an admin panel, and easy withdrawal options for seamless gameplay and rewards.",
    image: ludooImg,
    url: "/",
  },
  {
    title: "FoodByte  App",
    description: "FoodByte is a user-friendly food delivery app with real-time tracking, multiple payments, and a robust admin panel.",
    image: foodiesImg,
    url: "/",
  },
  {
    title: "H Pulse App",
    description: "H Pulse is a versatile healthcare management app for Android, iOS, featuring a powerful admin panel to efficiently manage patient records, appointments, and healthcare services.",
    image: doctorImg,
    url: "/",
  },
  {
    title: "Hikmat.Ai",
    description: "Hikmat.Ai is a multi-platform AI-powered relationship education tool with a robust admin panel for personalized insights and transformative learning.",
    image: hikmatImg,
    url: "https://hikmat.ai", // External URL for Hikmat.Ai
  },
];

export default function ProjectShowcase() {
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
          OUR LATEST WORKS
        </h2>
        <div className="mt-4 mb-4 mx-auto w-60 border-b-4 border-blue-600" />
        <div className="mb-12" />
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              } items-stretch justify-center`}
            >
              <div className="w-full md:w-2/5 h-[50vh] md:h-[80vh] flex items-center justify-center overflow-hidden rounded-l-lg shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-l-lg"
                />
              </div>
              <div className="w-full md:w-2/5 bg-white p-8 rounded-r-lg shadow-lg h-auto md:h-[80vh] flex flex-col justify-start overflow-hidden">
                <h3 className="text-3xl font-bold text-gray-900 mb-2 mt-4">
                  {project.title}
                </h3>
                <p className="text-xl text-gray-600 mb-4 mt-2">{project.description}</p>
                <a
                  href={project.url}
                  target={project.url.startsWith("http") ? "_blank" : "_self"} // Open external links in a new tab
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-300 self-start"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
