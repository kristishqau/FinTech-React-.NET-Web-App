import { useState, useEffect, useCallback } from "react"
import { CompanyKeyMetrics } from "../company"
import { getKeyMetrics } from "../api"

const useKeyMetrics = (ticker: string) => {
  const [data, setData] = useState<CompanyKeyMetrics | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchKeyMetrics = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await getKeyMetrics(ticker)
      setData(response?.data[0])
    } catch (err) {
      console.error("Error fetching key metrics:", err)
      setError("Failed to fetch company key metrics.")
    } finally {
      setLoading(false)
    }
  }, [ticker])

  useEffect(() => {
    fetchKeyMetrics()
  }, [fetchKeyMetrics])

  return { data, loading, error }
}

export default useKeyMetrics