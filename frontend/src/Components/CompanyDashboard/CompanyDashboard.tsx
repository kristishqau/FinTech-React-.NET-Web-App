import React from 'react'
import { Outlet } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  ticker: string
}

const CompanyDashboard = ({ children, ticker }: Props) => {
  return (
    <div className="relative md:ml-64 bg-blueGray-100 w-full h-screen flex flex-col">
      {/* Main container with Tailwind CSS classes for layout and styling */}
      <div className="relative pt-20 pb-8 bg-lightBlue-500 flex-grow">
        {/* Secondary container with padding at the top and bottom, flex-grow to fill available height */}
        <div className="px-4 md:px-6 mx-auto w-full">
          {/* Content wrapper with responsive padding and full width */}
          <div className="flex flex-wrap">
            {children}
            {/* Render children passed to the component */}
          </div>
          <div className="flex flex-wrap">
            <Outlet context={ticker}/>
            {/* Render the nested route components inside the Outlet */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDashboard