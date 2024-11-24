import React from 'react'
import { Outlet } from 'react-router-dom' // Import Outlet to render nested routes

// Define the Props interface to specify the expected props for the component
interface Props {
    children: React.ReactNode // children prop to receive JSX elements/components as children
    ticker: string
}

// Functional component CompanyDashboard accepts children via destructuring
const CompanyDashboard = ({ children, ticker }: Props) => {
  return (
    <div className="relative md:ml-64 bg-blueGray-100 w-full">
      {/* Main container with Tailwind CSS classes for layout and styling */}
      <div className="relative pt-20 pb-32 bg-lightBlue-500">
        {/* Secondary container with padding at the top and bottom and a light blue background */}
        <div className="px-4 md:px-6 mx-auto w-full">
          {/* Content wrapper with responsive padding and full width */}
          <div>
            <div className="flex flex-wrap">
              {children}
              {/* Render children passed to the component */}
            </div>
            <div className="flex flex-wrap">
              {<Outlet context={ticker}/>}
              {/* Render the nested route components inside the Outlet */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDashboard