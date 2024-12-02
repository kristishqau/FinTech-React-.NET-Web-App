import React, { useEffect, useState } from 'react'
import { CompanyTenK } from '../../company'
import { getTenK } from '../../api'
import Spinner from '../Spinner/Spinner'
import TenKFinderItem from './TenKFinderItem'

interface Props {
  ticker: string
}

const TenKFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>()
  useEffect(() => {
    const fetchTenKData = async () => {
      try {
        const response = await getTenK(ticker)
        setCompanyData(response?.data)
      } catch (error) {
        console.error('Error fetching 10-K data:', error)
        setCompanyData([])
      }
    }
    fetchTenKData()
  }, [ticker])
  return (
    <div className="inline-flex rounded-md shadow-sm m-2" role="group">
      {companyData ? (
        companyData?.slice(0, 5).map((tenK) => {
          return <TenKFinderItem tenK={tenK} />
        })
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default TenKFinder