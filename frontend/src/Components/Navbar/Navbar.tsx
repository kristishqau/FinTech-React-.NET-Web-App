import React, { useState, useEffect } from "react"
import logo from "./FinTechLogo.png"
import { Link } from "react-router-dom"

interface Props {}

const Navbar = (props: Props) => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Handle scroll event to toggle navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide navbar
        setShowNavbar(false)
      } else {
        // If scrolling up, show navbar
        setShowNavbar(true)
      }
      // Update last scroll position
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <nav
      className={`bg-white shadow-md fixed top-0 left-0 w-full z-10 transition-transform duration-300 ease-in-out ${
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
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
            className="px-6 py-3 font-bold rounded text-white bg-yellow-400 hover:bg-yellow-500 transition duration-200"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar