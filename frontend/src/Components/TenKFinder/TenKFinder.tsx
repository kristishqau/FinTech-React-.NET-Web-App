import React, { useEffect, useState } from 'react'
import { CompanyTenK } from '../../company'
import { getTenK } from '../../api'
import Spinner from '../Spinner/Spinner'
import TenKFinderItem from './TenKFinderItem'

interface Props {
  ticker: string
}

const TenKFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyTenK[] | undefined>(undefined)

  useEffect(() => {
    const fetchTenKData = async () => {
      try {
        const response = await getTenK(ticker)
        if (response?.data) {
          setCompanyData(response.data)
        } else {
          setCompanyData([])
        }
      } catch (error) {
        console.error('Error fetching 10-K data:', error)
        setCompanyData([])
      }
    }

    fetchTenKData()
  }, [ticker])

  return (
    <div className="inline-flex rounded-md shadow-sm m-2" role="group">
      {companyData === undefined ? (
        <Spinner />
      ) : companyData.length > 0 ? (
        companyData.slice(0, 5).map((tenK) => (
          <TenKFinderItem key={tenK.symbol} tenK={tenK} />
        ))
      ) : (
        <p>No 10-K filings found for this ticker.</p>
      )}
    </div>
  )
}

export default TenKFinder