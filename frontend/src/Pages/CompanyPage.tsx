import React from 'react'
import { useParams } from 'react-router'
import Sidebar from '../Components/Sidebar'
import CompanyDashboard from '../Components/CompanyDashboard'
import Tile from '../Components/Tile'
import Spinner from '../Components/Spinner/Spinner'
import TenKFinder from '../Components/TenKFinder/TenKFinder'
import useCompanyProfile from '../hooks/useCompanyProfile'

const CompanyPage = () => {
  const { ticker } = useParams<{ ticker: string | undefined }>()
  const { company, loading, error } = useCompanyProfile(ticker)

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <div className="error-message">{error}</div>
  }

  return company ? (
    <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 w-full relative flex overflow-x-hidden">
      <Sidebar />
      <CompanyDashboard ticker={ticker || ''}>
        {renderTile('Company', company.companyName)}
        {renderTile('Price', `$${company.price?.toString() || 'N/A'}`)}
        {renderTile('DCF', `$${company.dcf?.toString() || 'N/A'}`)}
        {renderTile('Sector', company.sector)}
        <TenKFinder ticker={company.symbol} />
        <p className="bg-white shadow rounded text-medium font-medium text-yellow-900 p-3 mt-1 m-4">
          {company.description}
        </p>
      </CompanyDashboard>
    </div>
  ) : (
    <div>No company data available.</div>
  )
}

// Helper function for rendering Tiles
const renderTile = (title: string, info: string) => (
  <Tile title={title} info={info} />
)

export default CompanyPage
