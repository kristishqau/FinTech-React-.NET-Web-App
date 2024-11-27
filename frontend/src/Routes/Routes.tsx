import { createBrowserRouter, Navigate } from "react-router-dom"
import App from "../App"
import HomePage from "../Pages/HomePage/HomePage"
import SearchPage from "../Pages/SearchPage/SearchPage"
import CompanyPage from "../Pages/CompanyPage/CompanyPage"
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile"
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement"
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet"
import CashFlowStatement from "../Components/CashFlowStatement/CashFlowStatement"
import HistoricalDividend from "../Components/HistoricalDividend/HistoricalDividend"

export const router = createBrowserRouter([
    {
        path: "/", // Matches the root URL ("/")
        element: <App />,
        children: [
            {
                path: "", // Default subroute (empty path)
                element: <HomePage /> // Renders HomePage when at "/"
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path: "company/:ticker", // Matches "/company/{ticker}" (e.g., "/company/AAPL")
                element: <CompanyPage />, // Renders CompanyPage for the given ticker
                children: [
                    {
                        path: "company-profile",
                        element: <CompanyProfile />
                    },
                    {
                        path: "income-statement",
                        element: <IncomeStatement />
                    },
                    {
                        path: "balance-sheet",
                        element: <BalanceSheet />
                    },
                    {
                        path: "cashflow-statement",
                        element: <CashFlowStatement />
                    },
                    { 
                        path: "historical-dividend", 
                        element: <HistoricalDividend /> 
                    }
                ]
            },
            {
                // Catch-all route for undefined paths
                path: "*", // Matches any unmatched route
                element: <Navigate to="/" /> // Redirects to the home page ("/")
            }
        ]
    }
])