import logo from "./FinTechLogo.png" // Import logo image
import { Link } from 'react-router-dom' // Import Link component from React Router for navigation

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      {/* The main navigation container */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left section of the navigation, containing the logo and the 'Search' link */}
        <div className="flex items-center space-x-6">
          <Link to="/"> 
            {/* Link to the homepage */}
            <img src={logo} alt="FinTech Logo" className="h-12 w-auto" />
            {/* Logo image with defined size */}
          </Link>
        </div>
        {/* Right section of the navigation, containing 'Login' and 'Signup' */}
        <div className="hidden lg:flex items-center space-x-6 text-black">
          <div className="hover:text-yellow-500 cursor-pointer">Login</div>
          <a
            href="/signup"
            className="px-6 py-3 font-bold rounded text-white bg-yellow-500 hover:bg-yellow-400 transition duration-200"
          >
            Signup
            {/* Signup button with some padding, font weight, and rounded corners. The background color is yellow */}
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar