import React, { useState } from "react"
import logo from "./FinTechLogo.png"
import { Link } from "react-router-dom"
import useScrollVisibility from "../../hooks/useScrollVisibility"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const showNavbar = useScrollVisibility()

  const toggleNavbar = () => setIsOpen((prev) => !prev)

  const navbarClasses = `bg-white/95 backdrop-blur-sm shadow-lg fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
    showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
  }`
  const mobileNavbarClasses = `lg:hidden flex flex-col items-center space-y-4 py-4 bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
    isOpen ? "opacity-100 max-h-64" : "opacity-0 max-h-0 overflow-hidden"
  }`

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link
            to="/search"
            className="hidden lg:flex items-center space-x-2 btn-primary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Explore</span>
          </Link>
        </div>

        <div className="flex items-center justify-center flex-grow">
          <Link to="/" className="transform hover:scale-105 transition-transform duration-200">
            <img src={logo} alt="FinTech Logo" className="h-12 w-auto" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <Link 
            to="/login"
            className="text-gray-700 hover:text-primary font-medium transition duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="btn-primary"
          >
            Sign up
          </Link>
        </div>

        <button
          className="lg:hidden z-20 p-3 text-gray-700 hover:text-primary transition-colors duration-200 absolute right-6 top-6"
          onClick={toggleNavbar}
          aria-label="Toggle navigation menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-200 ${isOpen ? "rotate-45 top-2" : "top-0"}`}></span>
            <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-200 ${isOpen ? "opacity-0" : "top-2"}`}></span>
            <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-200 ${isOpen ? "-rotate-45 top-2" : "top-4"}`}></span>
          </div>
        </button>
      </div>

      <div className={mobileNavbarClasses}>
        <Link
          to="/search"
          className="flex items-center space-x-2 px-6 py-2 text-gray-700 hover:text-primary transition duration-200"
          onClick={toggleNavbar}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>Explore</span>
        </Link>
        <Link
          to="/login"
          className="w-64 text-center btn-secondary"
          onClick={toggleNavbar}
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="w-64 text-center btn-primary"
          onClick={toggleNavbar}
        >
          Sign up
        </Link>
      </div>
    </nav>
  )
}

export default Navbar