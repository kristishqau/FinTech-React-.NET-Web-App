import { Link } from "react-router-dom"
import { useState } from "react"

interface SidebarLinkProps {
  to: string
  text: string
  onClick: () => void
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, text, onClick }) => (
  <li onClick={onClick}>
    <Link
      to={to}
      className="flex items-center text-yellow-800 hover:text-yellow-600 font-semibold uppercase text-sm transition duration-200 bg-yellow-200 p-4 rounded-lg hover:bg-yellow-300"
      aria-label={text}
    >
      <span className="ml-3">{text}</span>
    </Link>
  </li>
)

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        className="fixed top-6 left-6 z-20 p-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      <nav
        className={`fixed top-0 bottom-0 left-0 w-64 bg-yellow flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-20`}
      >
        <div className="px-4 py-6">
          <ul className="space-y-12">
            <SidebarLink
              to="company-profile"
              text="Company Profile"
              onClick={toggleSidebar}
            />
            <SidebarLink
              to="income-statement"
              text="Income Statement"
              onClick={toggleSidebar}
            />
            <SidebarLink
              to="balance-sheet"
              text="Balance Sheet"
              onClick={toggleSidebar}
            />
            <SidebarLink
              to="cashflow-statement"
              text="CashFlow Statement"
              onClick={toggleSidebar}
            />
            <SidebarLink
              to="historical-dividend"
              text="Historical Dividend"
              onClick={toggleSidebar}
            />
          </ul>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        ></div>
      )}
    </>
  )
}

export default Sidebar