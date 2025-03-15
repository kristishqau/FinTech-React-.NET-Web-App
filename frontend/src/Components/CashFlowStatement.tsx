import React from "react"
import { useOutletContext } from "react-router-dom"
import Table from "./Table"
import Spinner from "./Spinner/Spinner"
import useCashFlow from "../hooks/useCashFlow"
import { CompanyCashFlow } from "../company"
import { formatLargeMonetaryNumber } from "../Helpers/NumberFormatting"

type Props = {}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(
        company.netCashUsedProvidedByFinancingActivities
      ),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.freeCashFlow),
  },
]

const CashflowStatement: React.FC<Props> = () => {
  const ticker = useOutletContext<string>()
  const { data: cashFlowData, loading, error } = useCashFlow(ticker)

  if (loading) {
    return <Spinner />
  }
  if (error) {
    return <div className="error-message">{error}</div>
  }

  return cashFlowData.length > 0 ? (
    <Table config={config} data={cashFlowData} />
  ) : (
    <div>No cash flow data available.</div>
  )
}

export default CashflowStatement