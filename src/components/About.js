export default function About() {
    return (
      <div className="bg-gray-50 py-20"> {/* Increased top and bottom padding for overall spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-900 mb-12 tracking-wide"> {/* Added tracking-wide for word spacing */}
            WHAT WE DO
          </h1>
  
          {/* Horizontal Line */}
          <div className="mt-4 mb-12 mx-auto w-24 border-b-4 border-blue-600"></div> {/* Increased bottom margin */}
  
          {/* Description Text */}
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-8 mb-6 tracking-wide"> {/* Added tracking-wide for word spacing */}
          At MTAI Software Labs, we specialize in building innovative digital solutions to empower your business. Our team leverages a wide range of technologies, including Angular, Swift, Java, Flutter, React Native, PHP Laravel, Node.js, React.js, HTML, CSS, and JavaScript to create high-performance, scalable applications.

We develop secure and feature-rich mobile apps for Android and iOS, as well as responsive web applications. We also specialize in building robust SaaS platforms designed to optimize business workflows and enhance user experiences.

Our AI-powered solutions, including chatbots, drive customer engagement and streamline support. With a focus on quality, security, and performance, we help your business stay ahead in the ever-evolving digital world.
          </p>
         </div>
      </div>
    );
}
