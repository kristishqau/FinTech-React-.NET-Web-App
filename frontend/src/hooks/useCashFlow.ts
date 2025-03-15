import { useState, useEffect, useCallback } from "react"
import { CompanyCashFlow } from "../company"
import { getCashFlow } from "../api"

const useCashFlow = (ticker: string) => {
  const [data, setData] = useState<CompanyCashFlow[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCashFlow = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await getCashFlow(ticker)
      setData(response?.data || [])
    } catch (err) {
      console.error("Error fetching cash flow data:", err)
      setError("Failed to load cash flow data.")
    } finally {
      setLoading(false)
    }
  }, [ticker])

  useEffect(() => {
    fetchCashFlow()
  }, [fetchCashFlow])

  return { data, loading, error }
}

export default useCashFlow