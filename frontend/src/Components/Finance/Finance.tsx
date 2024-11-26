import finance from "./finance.png"
import { Link } from 'react-router-dom'

const Finance = () => {
  return (
    <section id="finance" className="bg-gradient-to-r from-yellow-100 to-yellow-200 min-h-screen flex items-center py-20">
      {/* Main container for the component, structured flexibly for responsiveness */}
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center space-y-10 lg:space-y-0">
        {/* Left section: Contains text content */}
        <div className="flex flex-col space-y-6 lg:space-y-8 mb-12 lg:mb-0 lg:w-1/2 justify-center items-center lg:items-start">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-center text-yellow-600 lg:text-left leading-tight">
            Revolutionizing the Way You Access Financial Insights
          </h1>
          <p className="text-xl lg:text-2xl text-center text-gray-700 lg:text-left">
            Say goodbye to irrelevant news and misinformation. Our platform provides direct access to accurate, real-time financial data and documents that empower you to make smarter investment decisions.
          </p>
          <p className="text-lg text-center text-gray-600 lg:text-left mt-4">
            From the latest quarterly reports to in-depth financial analytics, you get a curated experience that filters the noise, leaving you with what really matters for your financial journey.
          </p>
          <div className="mx-auto lg:mx-0">
            {/* Navigation button styled as a link */}
            <Link
              to="/search"
              className="py-4 px-8 text-2xl font-semibold text-white bg-yellow-600 rounded-lg shadow-md hover:bg-yellow-700 transition duration-300 transform hover:scale-105">
              Start Exploring
            </Link>
          </div>
        </div>
        {/* Right section: Contains the image */}
        <div className="mx-auto w-full max-w-xs md:w-96 lg:w-1/2 pt-8 lg:pt-16">
          <img src={finance} alt="Illustration representing financial data" className="w-full h-auto " />
        </div>
      </div>
    </section>
  )
}

export default Finance