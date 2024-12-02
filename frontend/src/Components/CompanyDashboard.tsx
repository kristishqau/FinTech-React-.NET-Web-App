import React from 'react'
import { Outlet } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  ticker: string
}

const CompanyDashboard = ({ children, ticker }: Props) => {
  return (
    <div className="relative w-full h-screen flex flex-col py-6 md:py-20">
      <div className="relative pt-16 pb-8 flex-grow">
        <div className="px-4 md:px-6 mx-auto w-full max-w-screen-xl">
          <div className="flex flex-wrap">
            {children}
          </div>
          <div className="relative flex-grow px-4 md:px-4 mx-auto w-full">
            <Outlet context={ticker} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDashboard