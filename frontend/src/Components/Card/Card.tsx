import React, { SyntheticEvent } from 'react'
import "./Card.css"
import { CompanySearch } from '../../company'
import AddStock from '../Stock/AddStock/AddStock'
import { Link } from 'react-router-dom' // Importing Link component for navigation

// Defining the props type for the Card component
interface Props {
  id: string // Unique identifier for the card
  searchResult: CompanySearch // Company search result, containing details about the company
  onStockCreate: (e: SyntheticEvent) => void // Callback function when stock is created
}

// Functional component that takes in Props and returns JSX
const Card: React.FC<Props> = ({ id, searchResult, onStockCreate }: Props): JSX.Element => {
  // Destructure the searchResult to make it easier to work with in JSX
  const { name, symbol, currency, exchangeShortName, stockExchange } = searchResult
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-yellow-50 rounded-lg shadow-md transform transition-all duration-300 hover:scale-102 hover:shadow-lg hover:bg-yellow-100 md:flex-row md:space-x-6 overflow-hidden"
      key={id} // Key for React's reconciliation process, helps with performance
      id={id} // Unique identifier for this card
    >
      {/* Link component from react-router-dom for navigating to the company page */}
      <Link 
        to={`/company/${symbol}/company-profile`} 
        className="font-bold text-center text-yellow-700 hover:text-yellow-800 md:text-left"
      >
        {name} ({symbol}) {/* Displaying company name and symbol */}
      </Link>
      <p className="text-gray-700">{currency}</p> {/* Displaying the company's currency with gray text for contrast */}
      <p className="font-bold text-gray-700">
        {exchangeShortName} - {stockExchange} {/* Displaying exchange details with gray text */}
      </p>
      {/* AddStock component for adding the stock to user's portfolio */}
      <AddStock
        onStockCreate={onStockCreate} // Passing down onStockCreate callback to AddStock component
        symbol={symbol} // Passing down company symbol to AddStock component
      />
    </div>
  )
}

export default Card // Exporting the Card component for use in other parts of the app