import React from 'react';
import flutterLogo from './images/flutter icon.jpeg'; 
import JavaScript from './images/technologies/js.jpeg'
import Php from './images/technologies/php.jpeg'
import Laravel from './images/technologies/laravel.jpeg'
import Mern from './images/technologies/mern.jpeg'
import Mean from './images/technologies/mean.jpeg'
import Python from './images/technologies/python.jpeg'
import Django from './images/technologies/django.jpeg'
import Ruby from './images/technologies/ruby.jpeg'
import Java from './images/technologies/java.jpeg'
import Spring from './images/technologies/spring.jpeg'
import Csharp from './images/technologies/csharp.jpeg'
import Asp from './images/technologies/asp.jpeg'

import Android from './images/technologies/nandroid.jpeg'
import iOS from './images/technologies/ios.jpeg'
import ReactNative from './images/technologies/reactnative.jpeg'
import Xamarin from './images/technologies/xamrim.jpeg'

const technologies = {
  mobile: [
    { name: 'Android', description: 'Develop native Android applications.',
      icon: <img src={Android} alt="Android Logo" className="w-16 h-16 mx-auto" />,
    },
    { name: 'iOS', description: 'Create apps for iPhone and iPad.',
      icon: <img src={iOS} alt="iOS Logo" className="w-16 h-16 mx-auto" />,
      },
    {
      name: 'Flutter',
      description: 'Build hybrid mobile applications from a single codebase.',
      icon: <img src={flutterLogo} alt="Flutter Logo" className="w-16 h-16 mx-auto" />, 
    },
    { name: 'React Native', description: 'Build mobile apps using React.',
      icon: <img src={ReactNative} alt="React Native Logo" className="w-16 h-16 mx-auto" />,
     },
    { name: 'Xamarin', description: 'Develop cross-platform apps using C#.',
      icon: <img src={Xamarin} alt="Xamarin Logo" className="w-16 h-16 mx-auto" />,
    },
  ],
  web: [
    { name: 'JavaScript', description: 'A versatile language for web development.',
       icon:  <img src={JavaScript} alt="JavaScript Logo" className="w-16 h-16 mx-auto" />,
    },
    { name: 'PHP', description: 'A server-side scripting language for web development.', 
      icon:  <img src={Php} alt="PHP Logo" className="w-16 h-16 mx-auto" />,
    },
    { name: 'Laravel', description: 'A PHP framework for elegant web development.',
      icon:  <img src={Laravel} alt="Laravel Logo" className="w-16 h-16 mx-auto" />,
    },
    { name: 'MERN', description: 'A JavaScript stack for full-stack development (MongoDB, Express, React, Node).', 
      icon: <img src={Mern} alt="MERN Logo" className="w-16 h-16 mx-auto" />,
    },
    { name: 'MEAN', description: 'A JavaScript stack for full-stack development (MongoDB, Express, Angular, Node).', 
      icon: <img src={Mean} alt="MEAN Logo" className="w-16 h-16 mx-auto" />,
    },
    { name: 'Python', description: 'A powerful and easy-to-learn programming language.',
      icon:<img src={Python} alt="Python Logo" className="w-16 h-16 mx-auto" />, 
    },
    { name: 'Django', description: 'A high-level Python web framework for rapid development.',
      icon:<img src={Django} alt="Django Logo" className="w-16 h-16 mx-auto" />, 
    },
    { name: 'Ruby', description: 'A dynamic language focused on simplicity and productivity.',
      icon:<img src={Ruby} alt="Ruby Logo" className="w-16 h-16 mx-auto" />, 
    },
    { name: 'Java', description: 'A versatile, object-oriented programming language.',
       icon:<img src={Java} alt="Java Logo" className="w-16 h-16 mx-auto" />, 
      },
    { name: 'Spring', description: 'A comprehensive Java framework for enterprise applications.',
      icon:<img src={Spring} alt="Spring Logo" className="w-16 h-16 mx-auto" />, 
    },
    { name: 'C#', description: 'A modern, object-oriented programming language developed by Microsoft.', 
      icon:<img src={Csharp} alt="C# Logo" className="w-16 h-16 mx-auto" />, 
    },
    { name: 'ASP.NET', description: 'A robust framework for building web applications with C#.',
      icon:<img src={Asp} alt="ASP.NET Logo" className="w-16 h-16 mx-auto" />, 
      },
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
