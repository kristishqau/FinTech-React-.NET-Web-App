import { Link } from "react-router-dom"
import { FaHome, FaMoneyBill, FaTable } from "react-icons/fa"
import { SlGraph } from "react-icons/sl"
import { FaTableCells } from "react-icons/fa6"
import { useState } from "react"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-6 left-4 z-20 p-2 bg-yellow-500 text-white rounded-md md:hidden"
        onClick={toggleSidebar}
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>
      {/* Sidebar */}
      <nav
        className={`fixed top-1 bottom-0 left-0 w-64 bg-yellow flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-20`}
      >
        <div className="px-4 py-6">
          <ul className="space-y-12">
            <li onClick={toggleSidebar}>
              <Link
                to="company-profile"
                className="flex items-center text-yellow-800 hover:text-yellow-600 font-semibold uppercase text-sm transition duration-200 bg-yellow-200 p-4 rounded-lg hover:bg-yellow-300"
              >
                <FaHome className="text-xl" />
                <span className="ml-3">Company Profile</span>
              </Link>
            </li>
            <li onClick={toggleSidebar}>
              <Link
                to="income-statement"
                className="flex items-center text-yellow-800 hover:text-yellow-600 font-semibold uppercase text-sm transition duration-200 bg-yellow-200 p-4 rounded-lg hover:bg-yellow-300"
              >
                <FaTable className="text-xl" />
                <span className="ml-3">Income Statement</span>
              </Link>
            </li>
            <li onClick={toggleSidebar}>
              <Link
                to="balance-sheet"
                className="flex items-center text-yellow-800 hover:text-yellow-600 font-semibold uppercase text-sm transition duration-200 bg-yellow-200 p-4 rounded-lg hover:bg-yellow-300"
              >
                <FaTableCells className="text-xl" />
                <span className="ml-3">Balance Sheet</span>
              </Link>
            </li>
            <li onClick={toggleSidebar}>
              <Link
                to="cashflow-statement"
                className="flex items-center text-yellow-800 hover:text-yellow-600 font-semibold uppercase text-sm transition duration-200 bg-yellow-200 p-4 rounded-lg hover:bg-yellow-300"
              >
                <FaMoneyBill className="text-xl" />
                <span className="ml-3">CashFlow Statement</span>
              </Link>
            </li>
            <li onClick={toggleSidebar}>
              <Link
                to="historical-dividend"
                className="flex items-center text-yellow-800 hover:text-yellow-600 font-semibold uppercase text-sm transition duration-200 bg-yellow-200 p-4 rounded-lg hover:bg-yellow-300"
              >
                <SlGraph className="text-xl" />
                <span className="ml-3">Historical Dividend</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  )
}

export default Sidebar