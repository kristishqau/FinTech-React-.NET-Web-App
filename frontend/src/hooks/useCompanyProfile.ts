import { useState, useEffect } from 'react'
import { fetchCompanyProfile } from '../Helpers/apiHelpers'
import { CompanyProfile } from '../company'

const useCompanyProfile = (ticker: string | undefined) => {
  const [company, setCompany] = useState<CompanyProfile | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getCompanyData = async () => {
      if (ticker) {
        setLoading(true)
        const companyData = await fetchCompanyProfile(ticker)
        if (companyData) {
          setCompany(companyData)
        } else {
          setError('Company profile not found')
        }
        setLoading(false)
      }
    }

    getCompanyData()
  }, [ticker])

  return { company, loading, error }
}

export default useCompanyProfile