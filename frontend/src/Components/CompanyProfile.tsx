import { useOutletContext } from "react-router"
import RatioList from "./RatioList"
import Spinner from "./Spinner/Spinner"
import useKeyMetrics from "../hooks/useKeyMetrics"
import { formatLargeNonMonetaryNumber, formatRatio } from "../Helpers/NumberFormatting"
import { CompanyKeyMetrics } from "../company"

interface Props {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.marketCapTTM),
    subTitle: "Total value of all a company's shares of stock",
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.currentRatioTTM),
    subTitle: "Measures the company's ability to pay short-term debt obligations",
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.roeTTM),
    subTitle:
      "Return on equity is the measure of a company's net income divided by its shareholder's equity",
  },
  {
    label: "Return On Assets",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.returnOnTangibleAssetsTTM),
    subTitle:
      "Return on assets is the measure of how effective a company is using its assets",
  },
  {
    label: "Free Cashflow Per Share",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.freeCashFlowPerShareTTM),
    subTitle:
      "Free cash flow per share shows how much cash is available to shareholders on a per-share basis",
  },
  {
    label: "Book Value Per Share TTM",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.bookValuePerShareTTM),
    subTitle:
      "Book value per share indicates a firm's net asset value (total assets - total liabilities) on a per-share basis",
  },
  {
    label: "Dividend Yield TTM",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.dividendYieldTTM),
    subTitle: "Shows how much a company pays each year relative to stock price",
  },
  {
    label: "Capex Per Share TTM",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.capexPerShareTTM),
    subTitle:
      "Capex is used by a company to acquire, upgrade, and maintain physical assets",
  },
  {
    label: "Graham Number",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.grahamNumberTTM),
    subTitle:
      "This is the upper bound of the price range that a defensive investor should pay for a stock",
  },
  {
    label: "PE Ratio",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.peRatioTTM),
    subTitle:
      "PE ratio shows how much investors are willing to pay for each dollar of earnings",
  }
]

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>() 
  const { data: companyData, loading, error } = useKeyMetrics(ticker)

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <div className="error-message">{error}</div>
  }

  if (!companyData) {
    return <div>No company data available.</div>
  }

  return <RatioList data={companyData} config={tableConfig} />
}

export default CompanyProfile