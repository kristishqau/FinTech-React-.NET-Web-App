import { Link } from 'react-router-dom'
import { FaHome, FaMoneyBill, FaTable } from 'react-icons/fa'
import { SlGraph } from "react-icons/sl"
import { FaTableCells } from "react-icons/fa6"

const Sidebar = () => {
  return (
    <nav className="fixed top-24 bottom-0 left-0 w-64 bg-gradient-to-r from-yellow-100 to-yellow-200 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform translate-x-0 md:translate-x-0 overflow-y-auto z-10">
      <div className="px-4 py-6">
        <ul className="space-y-12">
          <li>
            <Link
              to="company-profile"
              className="flex items-center text-yellow-800 hover:text-yellow-600 font-semibold uppercase text-sm transition duration-200 bg-yellow-200 p-4 rounded-lg hover:bg-yellow-300"
            >
              <FaHome className="text-xl" />
              <span className="ml-3">Company Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="income-statement"
              className="flex items-center text-yellow-800 hover:text-yellow-600 font-semibold uppercase text-sm transition duration-200 bg-yellow-200 p-4 rounded-lg hover:bg-yellow-300"
            >
              <FaTable className="text-xl" />
              <span className="ml-3">Income Statement</span>
            </Link>
          </li>
          <li>
            <Link
              to="balance-sheet"
              className="flex items-center text-yellow-800 hover:text-yellow-600 font-semibold uppercase text-sm transition duration-200 bg-yellow-200 p-4 rounded-lg hover:bg-yellow-300"
            >
              <FaTableCells className="text-xl" />
              <span className="ml-3">Balance Sheet</span>
            </Link>
          </li>
          <li>
            <Link
              to="cashflow-statement"
              className="flex items-center text-yellow-800 hover:text-yellow-600 font-semibold uppercase text-sm transition duration-200 bg-yellow-200 p-4 rounded-lg hover:bg-yellow-300"
            >
              <FaMoneyBill className="text-xl" />
              <span className="ml-3">CashFlow Statement</span>
            </Link>
          </li>
          <li>
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
  )
}

export default Sidebar