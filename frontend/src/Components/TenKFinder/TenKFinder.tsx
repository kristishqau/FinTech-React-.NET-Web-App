import React, { useEffect, useState } from 'react'
import { CompanyTenK } from '../../company' // Type definition for the company 10-K data
import { getTenK } from '../../api' // API function to fetch 10-K data
import Spinner from '../Spinner/Spinner' // Spinner component to indicate loading state
import TenKFinderItem from './TenKFinderItem/TenKFinderItem' // Component to display individual 10-K data

interface Props {
  ticker: string // The stock ticker symbol for which 10-K data is fetched
}

const TenKFinder = ({ ticker }: Props) => {
  // State to store the fetched 10-K data. Initialized to null to represent uninitialized state.
  const [companyData, setCompanyData] = useState<CompanyTenK[]>()
  // Effect hook to fetch 10-K data whenever the 'ticker' prop changes
  useEffect(() => {
    // Asynchronous function to handle API call
    const fetchTenKData = async () => {
      try {
        // Fetch data using the API function
        const response = await getTenK(ticker)
        // Update state with fetched data or an empty array if no data is returned
        setCompanyData(response?.data)
      } catch (error) {
        // Log errors to the console for debugging
        console.error('Error fetching 10-K data:', error)
        // Set state to an empty array to avoid breaking the UI in case of errors
        setCompanyData([])
      }
    }
    // Call the function to fetch data
    fetchTenKData()
  }, [ticker]) // Dependency array ensures this effect runs only when 'ticker' changes
  return (
    <div className="inline-flex rounded-md shadow-sm m-4" role="group">
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