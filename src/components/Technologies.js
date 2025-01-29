import React from 'react';
import flutterLogo from './images/flutter icon.jpeg'; 
import JavaScript from './images/technologies/js.jpeg'
import Php from './images/technologies/php.jpeg'
import Laravel from './images/technologies/laravel.jpeg'
import Mern from './images/technologies/mern.jpeg'
import Mean from './images/technologies/mean.jpeg'
import Python from './images/technologies/python.jpeg'
import Django from './images/technologies/django.jpeg'
import Rubby from './images/technologies/ruby.jpeg'
import Java from './images/technologies/java.jpeg'
import Spring from './images/technologies/spring.jpeg'
import Csharp from './images/technologies/csharp.jpeg'
import Asp from './images/technologies/asp.jpeg'

import Android from './images/technologies/andoroid.jpeg'
import iOS from './images/technologies/ios.jpeg'
import ReactNative from './images/technologies/asp.jpeg'
import Xamarin from './images/technologies/xamrim.jpeg'


const technologies = {
  mobile: [
    { name: 'Android', description: 'Develop native Android applications.',
      icon: <img src={Android} alt="Flutter Logo" className="w-12 h-12 mx-auto" />,
    },
    { name: 'iOS', description: 'Create apps for iPhone and iPad.',
      icon: <img src={iOS} alt="Flutter Logo" className="w-12 h-12 mx-auto" />,
      },
    {
      name: 'Flutter',
      description: 'Build natively compiled applications for mobile from a single codebase.',
      icon: <img src={flutterLogo} alt="Flutter Logo" className="w-12 h-12 mx-auto" />, // Flutter logo
    },
    { name: 'React Native', description: 'Build mobile apps using React.',
      icon: <img src={ReactNative} alt="Flutter Logo" className="w-12 h-12 mx-auto" />,
     },
    { name: 'Xamarin', description: 'Develop apps for Android and iOS using C#.',
      icon: <img src={Xamarin} alt="Flutter Logo" className="w-12 h-12 mx-auto" />,
    },
  ],
  web: [
    { name: 'JavaScript', description: 'A versatile language for web development.',
       icon:  <img src={JavaScript} alt="Flutter Logo" className="w-12 h-12 mx-auto" />,
      
    },
    { name: 'PHP', description: 'Server-side scripting language for web development.', 
      
      icon:  <img src={Php} alt="Flutter Logo" className="w-12 h-12 mx-auto" />,
    
    },
    { name: 'Laravel', description: 'A PHP framework for web artisans.',
      
      icon:  <img src={Laravel} alt="Flutter Logo" className="w-12 h-12 mx-auto" />,
    
    },
    { name: 'MERN', description: 'MongoDB, Express.js, React, Node.js stack for full-stack development.', 
      
      icon: <img src={Mern} alt="Flutter Logo" className="w-12 h-12 mx-auto" />,
    
    },
    { name: 'MEAN', description: 'MongoDB, Express.js, Angular, Node.js stack for full-stack development.', 
      
      icon: <img src={Mean} alt="Flutter Logo" className="w-12 h-12 mx-auto" />,
    
    },
    { name: 'Python', description: 'A powerful language for web and app development.',
      
      icon:<img src={Python} alt="Flutter Logo" className="w-12 h-12 mx-auto" />, 
      
    },
    { name: 'Django', description: 'A high-level Python web framework for rapid development.',icon:<img src={Django} alt="Flutter Logo" className="w-12 h-12 mx-auto" />, 

    },
    { name: 'Ruby', description: 'A dynamic language focused on simplicity and productivity.',
      icon:<img src={Rubby} alt="Flutter Logo" className="w-12 h-12 mx-auto" />, 
    },
    { name: 'Java', description: 'A versatile, object-oriented programming language.',
       icon:<img src={Java} alt="Flutter Logo" className="w-12 h-12 mx-auto" />, 
      },
    { name: 'Spring', description: 'A comprehensive framework for Java.',
  
      icon:<img src={Spring} alt="Flutter Logo" className="w-12 h-12 mx-auto" />, 
    },
    { name: 'C#', description: 'A modern object-oriented programming language.', 
      
      icon:<img src={Csharp} alt="Flutter Logo" className="w-12 h-12 mx-auto" />, 
    },
    { name: 'ASP.NET', description: 'A framework for building web apps with C#.',
      icon:<img src={Asp} alt="Flutter Logo" className="w-12 h-12 mx-auto" />, 
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
