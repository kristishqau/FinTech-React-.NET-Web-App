import { useState, useEffect } from "react"

const useScrollVisibility = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false) // Scrolling down, hide navbar
      } else {
        setShowNavbar(true) // Scrolling up, show navbar
      }
      setLastScrollY(window.scrollY) // Update scroll position
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return showNavbar
}

export default useScrollVisibility