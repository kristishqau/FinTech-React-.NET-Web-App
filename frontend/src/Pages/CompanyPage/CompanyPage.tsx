import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../company'
import { getCompanyProfile } from '../../api'
import Sidebar from '../../Components/Sidebar/Sidebar'
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard'
import Tile from '../../Components/Tile/Tile'
import Spinner from '../../Components/Spinner/Spinner'
import TenKFinder from '../../Components/TenKFinder/TenKFinder'

interface Props {}

const CompanyPage = (props: Props) => {
  let {ticker} =useParams()
  const [company, setCompany] = useState<CompanyProfile>()

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!)
      setCompany(result?.data[0])
    }
    getProfileInit()
  }, [])

  return ( 
    <>
    {company ? (
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 w-full relative flex overflow-x-hidden">
        <Sidebar />
        <CompanyDashboard ticker={ticker!}>
          <Tile title="Company" info={company.companyName}></Tile>
          <Tile title="Price" info={`$${company.price?.toString() || "N/A"}`} />
          <Tile title="DCF" info={`$${company.dcf?.toString() || "N/A"}`} />
          <Tile title="Sector" info={company.sector}></Tile>
          <TenKFinder ticker={company.symbol}></TenKFinder>
          <p className="bg-white shadow rounded text-medium font-medium text-yellow-900 p-3 mt-1 m-4">
            {company.description}
          </p>
        </CompanyDashboard>
      </div>
    ) : (
      <Spinner />
    )}
    </>
  )
}

export default CompanyPage