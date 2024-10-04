import Icon from './images/icon.png';

export default function Services() {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-gray-900 mb-8">OUR SERVICES</h1>

                {/* Horizontal Line */}
                <div className="mb-8 mx-auto w-24 border-b-4 border-blue-600"></div>

                {/* Services Row */}
                <div className="flex flex-wrap justify-center mb-12">
                    {/* Service Item 1 */}
                    <div className="flex flex-col items-center mx-2 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-8"> {/* Increased my-8 for more vertical spacing */}
                        <img
                            src={Icon}
                            alt="UI/UX"
                            className="mb-4 w-20 h-20 rounded-full" // Increased size and added rounded class
                        />
                        <h2 className="text-xl font-semibold mb-2">UI/UX</h2> {/* Increased font size */}
                        <p className="text-gray-600 text-base">
                            Prototyping, branding, UI and UX design for web and mobile products.
                        </p> {/* Increased font size */}
                    </div>

                    {/* Service Item 2 */}
                    <div className="flex flex-col items-center mx-2 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-8"> {/* Increased my-8 for more vertical spacing */}
                        <img
                            src={Icon}
                            alt="Icon/Illustration"
                            className="mb-4 w-20 h-20 rounded-full" // Increased size and added rounded class
                        />
                        <h2 className="text-xl font-semibold mb-2">Icon/Illustration</h2> {/* Increased font size */}
                        <p className="text-gray-600 text-base">
                            Character Design, Icon Set, Illustration Guide, Illustration Set.
                        </p> {/* Increased font size */}
                    </div>

                    {/* Service Item 3 */}
                    <div className="flex flex-col items-center mx-2 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-8"> {/* Increased my-8 for more vertical spacing */}
                        <img
                            src={Icon}
                            alt="IOS Development"
                            className="mb-4 w-20 h-20 rounded-full" // Increased size and added rounded class
                        />
                        <h2 className="text-xl font-semibold mb-2">IOS Development</h2> {/* Increased font size */}
                        <p className="text-gray-600 text-base">
                            Using modern programming languages, such as Swift and Objective-C.
                        </p> {/* Increased font size */}
                    </div>

                    {/* Service Item 4 */}
                    <div className="flex flex-col items-center mx-2 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-8"> {/* Increased my-8 for more vertical spacing */}
                        <img
                            src={Icon}
                            alt="Development"
                            className="mb-4 w-20 h-20 rounded-full" // Increased size and added rounded class
                        />
                        <h2 className="text-xl font-semibold mb-2">Development</h2> {/* Increased font size */}
                        <p className="text-gray-600 text-base">
                            HTML/CSS, JavaScript Animation, WordPress, Responsive Website.
                        </p> {/* Increased font size */}
                    </div>

                    {/* Service Item 5 */}
                    <div className="flex flex-col items-center mx-2 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-8"> {/* Increased my-8 for more vertical spacing */}
                        <img
                            src={Icon}
                            alt="Android Development"
                            className="mb-4 w-20 h-20 rounded-full" // Increased size and added rounded class
                        />
                        <h2 className="text-xl font-semibold mb-2">Android Development</h2> {/* Increased font size */}
                        <p className="text-gray-600 text-base">
                            We develop Android apps in Java and Kotlin.
                        </p> {/* Increased font size */}
                    </div>

                    {/* Service Item 6 */}
                    <div className="flex flex-col items-center mx-2 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-8"> {/* Increased my-8 for more vertical spacing */}
                        <img
                            src={Icon}
                            alt="Web Development"
                            className="mb-4 w-20 h-20 rounded-full" // Increased size and added rounded class
                        />
                        <h2 className="text-xl font-semibold mb-2">Web Development</h2> {/* Increased font size */}
                        <p className="text-gray-600 text-base">
                            We provide both frontend and backend development services.
                        </p> {/* Increased font size */}
                    </div>
                </div>
            </div>
        </div>
    );
}
