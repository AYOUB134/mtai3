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
            Need a customized application to suit your business needs? Worry no more! At MTAI, we create clones of popular applications that are already in the market. We have most, if not all, applications available in our collection. The apps range from food delivery apps like Skipthedishes and Seamless, dating apps such as Tinder and Bumble, video sharing apps like TikTok to image sharing apps such as Instagram.You buy the app for an affordable fee of less than $40, and we will customize the app to suit your brand. This way, you save your precious money for other business processes such as marketing. Better yet, it is a one-time fee transaction and no monthly cost is required.
          </p>
         </div>
      </div>
    );
}
