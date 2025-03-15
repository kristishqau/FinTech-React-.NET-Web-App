import { useState, useEffect } from "react"
import { Dividend } from "../company"
import { getHistoricalDividend } from "../api"

const useHistoricalDividend = (ticker: string) => {
  const [dividends, setDividends] = useState<Dividend[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchHistoricalDividend = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await getHistoricalDividend(ticker)
        const sortedDividends =
          response?.data.historical
            .slice(0, 18)
            .sort(
              (a: Dividend, b: Dividend) =>
                new Date(a.date).getTime() - new Date(b.date).getTime()
            ) || []
        setDividends(sortedDividends)
      } catch (err) {
        console.error("Error fetching historical dividends:", err)
        setError("Failed to fetch historical dividend data.")
      } finally {
        setLoading(false)
      }
    }

    fetchHistoricalDividend()
  }, [ticker])

  return { dividends, loading, error }
}

export default useHistoricalDividend