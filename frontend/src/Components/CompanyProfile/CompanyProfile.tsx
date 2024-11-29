import { useOutletContext } from "react-router"
import { CompanyKeyMetrics } from "../../company"
import { formatLargeNonMonetaryNumber, formatRatio } from "../../Helpers/NumberFormatting"
import { useEffect, useState } from "react"
import { getKeyMetrics } from "../../api"
import RatioList from "../RatioList/RatioList"
import Spinner from "../Spinner/Spinner"

interface Props {}

const tableConfig = [
  {
    label: "Market Cap", // Label for the metric
    render: (company: CompanyKeyMetrics) => 
      formatLargeNonMonetaryNumber(company.marketCapTTM), // Format the company's market cap
    subTitle: "Total value of all a company's shares of stock", // Description of the metric
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => 
      formatRatio(company.currentRatioTTM),
    subTitle: "Measures the company's ability to pay short-term debt obligations",
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => formatRatio(company.roeTTM),
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
    render: (company: CompanyKeyMetrics) => formatRatio(company.peRatioTTM),
    subTitle:
      "PE ratio shows how much investors are willing to pay for each dollar of earnings",
  }
]

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>() // Get the ticker symbol from React Router context.
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>() // State to store the fetched company data.
  // Fetch the company metrics when the component mounts
  useEffect(() => {
    const getCompanyKeyMetrics = async () => {
      const value = await getKeyMetrics(ticker)
      setCompanyData(value?.data[0])
    }
    getCompanyKeyMetrics()
  }, []) // Empty dependency array ensures this runs only once, on component mount.
  return companyData ? (
      <RatioList data={companyData} config={tableConfig} />
  ) : ( 
    <Spinner />
  )
}

export default CompanyProfile