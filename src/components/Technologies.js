import React from 'react';
import flutterLogo from './images/flutter icon.jpeg'; // Import the Flutter logo

const technologies = {
  mobile: [
    { name: 'Android', description: 'Develop native Android applications.', icon: '📱' },
    { name: 'iOS', description: 'Create apps for iPhone and iPad.', icon: '🍏' },
    {
      name: 'Flutter',
      description: 'Build natively compiled applications for mobile from a single codebase.',
      icon: <img src={flutterLogo} alt="Flutter Logo" className="w-12 h-12 mx-auto" />, // Flutter logo
    },
    { name: 'React Native', description: 'Build mobile apps using React.', icon: '⚛️' },
    { name: 'Xamarin', description: 'Develop apps for Android and iOS using C#.', icon: '🔷' },
  ],
  web: [
    { name: 'JavaScript', description: 'A versatile language for web development.', icon: '🟡' },
    { name: 'PHP', description: 'Server-side scripting language for web development.', icon: '🐘' },
    { name: 'Laravel', description: 'A PHP framework for web artisans.', icon: '🦄' },
    { name: 'MERN', description: 'MongoDB, Express.js, React, Node.js stack for full-stack development.', icon: '🌐' },
    { name: 'MEAN', description: 'MongoDB, Express.js, Angular, Node.js stack for full-stack development.', icon: '🌍' },
    { name: 'Python', description: 'A powerful language for web and app development.', icon: '🐍' },
    { name: 'Django', description: 'A high-level Python web framework for rapid development.', icon: '🚀' },
    { name: 'Ruby', description: 'A dynamic language focused on simplicity and productivity.', icon: '💎' },
    { name: 'Java', description: 'A versatile, object-oriented programming language.', icon: '☕' },
    { name: 'Spring', description: 'A comprehensive framework for Java.', icon: '🌱' },
    { name: 'C#', description: 'A modern object-oriented programming language.', icon: '🔷' },
    { name: 'ASP.NET', description: 'A framework for building web apps with C#.', icon: '🌐' },
  ],
};

const Technologies = () => {
  return (
    <div className="flex justify-center py-10 min-h-screen bg-gray-50" id="technologies">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-11/12 p-8 my-10">
        <h2 className="text-4xl font-bold text-center mb-8">Our Technologies</h2>
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-center mb-12">Mobile Technologies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.mobile.map((tech, index) => (
              <div
                key={index}
                className="shadow-xl rounded-lg p-6 text-center transition-transform transform hover:scale-105 border-l-4 border-indigo-500"
              >
                <div className="text-5xl mb-4 text-indigo-600">{tech.icon}</div>
                <h4 className="text-2xl font-semibold mb-2 text-gray-800">{tech.name}</h4>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-center mb-20">Web Technologies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.web.map((tech, index) => (
              <div
                key={index}
                className="shadow-xl rounded-lg p-4 text-center transition-transform transform hover:scale-105 border-l-4 border-indigo-500 m-4"
              >
                <div className="text-5xl mb-4 text-indigo-600">{tech.icon}</div>
                <h4 className="text-2xl font-semibold mb-2 text-gray-800">{tech.name}</h4>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
