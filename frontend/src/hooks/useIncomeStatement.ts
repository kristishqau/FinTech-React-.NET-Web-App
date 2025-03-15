import { useState, useEffect, useCallback } from 'react'
import { CompanyIncomeStatement } from '../company'
import { getIncomeStatement } from '../api'

const useIncomeStatement = (ticker: string) => {
  const [data, setData] = useState<CompanyIncomeStatement[] | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const result = await getIncomeStatement(ticker)
      setData(result!.data)
    } catch (err) {
      console.error(err)
      setError("Failed to load income statement data. Please try again later.")
    } finally {
      setLoading(false)
    }
  }, [ticker])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error }
}

export default useIncomeStatement