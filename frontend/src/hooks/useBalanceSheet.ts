import { useState, useEffect, useCallback } from "react"
import { CompanyBalanceSheet } from "../company"
import { getBalanceSheet } from "../api"

const useBalanceSheet = (ticker: string) => {
  const [data, setData] = useState<CompanyBalanceSheet | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchBalanceSheet = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const value = await getBalanceSheet(ticker)
      setData(value?.data[0])
    } catch (err) {
      console.error("Error fetching balance sheet:", err)
      setError("Failed to fetch balance sheet data.")
    } finally {
      setLoading(false)
    }
  }, [ticker])

  useEffect(() => {
    fetchBalanceSheet()
  }, [fetchBalanceSheet])

  return { data, loading, error }
}

export default useBalanceSheet