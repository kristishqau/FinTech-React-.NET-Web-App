import React, { FC, memo } from 'react'
import { Outlet } from 'react-router-dom'

interface CompanyDashboardProps {
  ticker: string
  children: React.ReactNode
}

const CompanyDashboard: FC<CompanyDashboardProps> = ({ ticker, children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <div className="mb-8 space-y-6">
              {children}
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-card p-6 animate-fade-in">
              <Outlet context={ticker} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(CompanyDashboard)