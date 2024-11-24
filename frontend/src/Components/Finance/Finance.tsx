import finance from "./finance.png" // Importing the finance image for display
import { Link } from 'react-router-dom' // Importing Link for navigation between routes

// Functional component named Finance
const Finance = () => {
  return (
    <section id="finance" className="bg-white">
      {/* Main container for the component, structured flexibly for responsiveness */}
      <div className="container flex flex-col-reverse mx-auto p-8 lg:flex-row">
        {/* Left section: Contains text content */}
        <div className="flex flex-col space-y-10 mb-44 m-10 lg:m-10 xl:m-20 lg:mt-16 lg:w-1/2 xl:mb-52 justify-center">
          <h1 className="text-4xl font-extrabold text-center text-yellow-500 lg:text-5xl lg:max-w-md lg:text-left">
            Financial data with no news.
            {/* Main heading with large, bold text that adapts responsively */}
          </h1>
          <p className="text-2xl text-center text-gray-500 lg:max-w-md lg:text-left">
            Search relevant financial documents without fear mongering and fake news.
            {/* Subheading with a concise description */}
          </p>
          <div className="mx-auto lg:mx-0">
            {/* Navigation button styled as a link */}
            <Link
              to="/search"
              className="py-5 px-10 text-2xl font-bold text-white bg-yellow-500 rounded-lg lg:py-4 hover:bg-yellow-600 transition duration-300">
              Get Started
            </Link>
          </div>
        </div>
        {/* Right section: Contains the image */}
        <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2 pt-16">
          <img src={finance} alt="Illustration representing financial data" />
          {/* Displays the finance image */}
        </div>
      </div>
    </section>
  )
}

export default Finance