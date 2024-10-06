import wedo1 from './images/wedo-1.png'
import wedo2 from './images/wedo-2.png'
import wedo3 from './images/wedo-3.png'
import wedo4 from './images/wedo-4.png'
import wedo5 from './images/wedo-5.png'
import wedo6 from './images/wedo-6.png'
export default function Services() {
    return (
        <div className="bg-gray-50 py-16" id='services'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-gray-900 mb-12">OUR SERVICES</h1> {/* Increased margin-bottom to 12 for more spacing */}

                {/* Horizontal Line */}
                <div className="mb-12 mx-auto w-24 border-b-4 border-blue-600"></div> {/* Increased margin-bottom to 12 for more spacing */}

                {/* Services Row */}
                <div className="flex flex-wrap justify-center gap-8 mb-12"> {/* Added gap-8 for more space between services */}
                    {/* Service Item 1 */}
                    <div className="flex flex-col items-center mx-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-8"> {/* Added mx-4 for more horizontal spacing */}
                        <img
                            src={wedo1}
                            alt="UI/UX"
                            className="mb-6 w-20 h-20 rounded-full" // Increased size to 24 and margin-bottom to 6 for more spacing
                        />
                        <h2 className="text-xl font-semibold mb-4">UI/UX</h2> {/* Increased margin-bottom to 4 for more spacing */}
                        <p className="text-gray-600 text-base tracking-wide leading-relaxed">
                            Prototyping, branding, UI and UX design for web and mobile products.
                        </p> {/* Added tracking-wide for more space between words and leading-relaxed for increased line spacing */}
                    </div>

                    {/* Service Item 2 */}
                    <div className="flex flex-col items-center mx-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-8">
                        <img
                            src={wedo2}
                            alt="Icon/Illustration"
                            className="mb-6 w-20 h-20 rounded-full"
                        />
                        <h2 className="text-xl font-semibold mb-4">Icon/Illustration</h2>
                        <p className="text-gray-600 text-base tracking-wide leading-relaxed">
                            Character Design, Icon Set, Illustration Guide, Illustration Set.
                        </p>
                    </div>

                    {/* Service Item 3 */}
                    <div className="flex flex-col items-center mx-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-8">
                        <img
                            src={wedo3}
                            alt="IOS Development"
                            className="mb-6 w-20 h-20 rounded-full"
                        />
                        <h2 className="text-xl font-semibold mb-4">IOS Development</h2>
                        <p className="text-gray-600 text-base tracking-wide leading-relaxed">
                            Using modern programming languages, such as Swift and Objective-C.
                        </p>
                    </div>

                    {/* Service Item 4 */}
                    <div className="flex flex-col items-center mx-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-8">
                        <img
                            src={wedo4}
                            alt="Development"
                            className="mb-6 w-20 h-20 rounded-full"
                        />
                        <h2 className="text-xl font-semibold mb-4">Development</h2>
                        <p className="text-gray-600 text-base tracking-wide leading-relaxed">
                            HTML/CSS, JavaScript Animation, WordPress, Responsive Website.
                        </p>
                    </div>

                    {/* Service Item 5 */}
                    <div className="flex flex-col items-center mx-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-8">
                        <img
                            src={wedo5}
                            alt="Android Development"
                            className="mb-6 w-20 h-20 rounded-full"
                        />
                        <h2 className="text-xl font-semibold mb-4">Android Development</h2>
                        <p className="text-gray-600 text-base tracking-wide leading-relaxed">
                            We develop Android apps in Java and Kotlin.
                        </p>
                    </div>

                    {/* Service Item 6 */}
                    <div className="flex flex-col items-center mx-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-8">
                        <img
                            src={wedo6}
                            alt="Web Development"
                            className="mb-6 w-20 h-20 rounded-full"
                        />
                        <h2 className="text-xl font-semibold mb-4">Web Development</h2>
                        <p className="text-gray-600 text-base tracking-wide leading-relaxed">
                            We provide both frontend and backend development services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
