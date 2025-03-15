import { useOutletContext } from "react-router-dom"
import LineChart from "./LineChart"
import Spinner from "./Spinner/Spinner"
import useHistoricalDividend from "../hooks/useHistoricalDividend"

type Props = {}

const HistoricalDividend = (props: Props) => {
  const ticker = useOutletContext<string>()
  const { dividends, loading, error } = useHistoricalDividend(ticker)

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <div className="error-message">{error}</div>
  }

  return dividends.length > 0 ? (
    <LineChart data={dividends} xAxis="label" dataKey="dividend" />
  ) : (
    <div>No dividend data available.</div>
  )
}

export default HistoricalDividend