import React, { useState } from "react"
import logo from "./FinTechLogo.png"
import { Link } from "react-router-dom"
import useScrollVisibility from "../../hooks/useScrollVisibility"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const showNavbar = useScrollVisibility()

  const toggleNavbar = () => setIsOpen((prev) => !prev)

  const navbarClasses = `bg-white shadow-md fixed top-0 left-0 w-full z-10 transition-transform duration-300 ease-in-out ${showNavbar ? "transform translate-y-0" : "transform -translate-y-full"}`
  const mobileNavbarClasses = `lg:hidden flex flex-col items-center space-y-4 py-4 bg-white transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link
            to="/search"
            className="hidden lg:block px-6 py-3 font-bold rounded text-white bg-yellow-400 hover:bg-yellow-500 transition duration-200"
          >
            Explore
          </Link>
        </div>

        <div className="flex items-center justify-center flex-grow">
          <Link to="/">
            <img src={logo} alt="FinTech Logo" className="h-12 w-auto" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-6 text-black">
          <a className="hover:text-yellow-500 cursor-pointer" href="/login">
            Login
          </a>
          <a
            href="/signup"
            className="px-6 py-3 font-bold rounded text-white bg-yellow-400 hover:bg-yellow-500 transition duration-200"
          >
            Signup
          </a>
        </div>

        <button
          className="lg:hidden z-20 p-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out absolute right-6 top-6"
          onClick={toggleNavbar}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      <div className={mobileNavbarClasses}>
        <Link
          to="/search"
          className="px-6 py-2 text-yellow-600 hover:text-yellow-500 transition duration-200"
          onClick={toggleNavbar}
        >
          Explore
        </Link>
        <Link
          to="/login"
          className="px-6 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md transition duration-200"
          onClick={toggleNavbar}
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-6 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md transition duration-200"
          onClick={toggleNavbar}
        >
          Signup
        </Link>
      </div>
    </nav>
  )
}

export default Navbar