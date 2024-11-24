import { createBrowserRouter, Navigate } from "react-router-dom" // Import router creation and redirection utilities
import App from "../App" // Root-level component for the app
import HomePage from "../Pages/HomePage/HomePage"
import SearchPage from "../Pages/SearchPage/SearchPage"
import CompanyPage from "../Pages/CompanyPage/CompanyPage"
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile"
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement"
import DesignGuidePage from "../Pages/DesignGuidePage/DesignGuidePage"
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet"
import CashFlowStatement from "../Components/CashFlowStatement/CashFlowStatement"
import HistoricalDividend from "../Components/HistoricalDividend/HistoricalDividend"

// Create a browser router to define app routes
export const router = createBrowserRouter([
    {
        path: "/", // Matches the root URL ("/")
        element: <App />, // Renders the App component
        children: [
            {
                path: "", // Default subroute (empty path)
                element: <HomePage /> // Renders HomePage when at "/"
            },
            {
                path: "search", // Matches "/search"
                element: <SearchPage /> // Renders SearchPage
            },
            {
                path: "design-guide", // Matches "/design-guide"
                element: <DesignGuidePage /> // Renders DesignGuidePage
            },
            {
                // Dynamic route for company details
                path: "company/:ticker", // Matches "/company/{ticker}" (e.g., "/company/AAPL")
                element: <CompanyPage />, // Renders CompanyPage for the given ticker
                children: [
                    {
                        path: "company-profile", // Matches "/company/{ticker}/company-profile"
                        element: <CompanyProfile /> // Renders CompanyProfile
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