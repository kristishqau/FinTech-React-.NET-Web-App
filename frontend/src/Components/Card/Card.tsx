import React, { SyntheticEvent } from 'react'
import "./Card.css"
import { CompanySearch } from '../../company'
import AddStock from '../Stock/AddStock'
import { Link } from 'react-router-dom'

interface Props {
  id: string 
  searchResult: CompanySearch 
  onStockCreate: (e: SyntheticEvent) => void 
}

const Card: React.FC<Props> = ({ id, searchResult, onStockCreate }: Props): JSX.Element => {
  const { name, symbol, currency, exchangeShortName, stockExchange } = searchResult

  if (!searchResult) {
    return <div className="text-center text-red-500">Company data not found</div>;
  }

  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-yellow-50 rounded-lg shadow-md transform transition-all duration-300 hover:scale-102 hover:shadow-lg hover:bg-yellow-100 md:flex-row md:space-x-6 overflow-hidden"
      key={id}
      id={id}
    >
      <Link 
        to={`/company/${symbol}/company-profile`} 
        className="font-bold text-center text-yellow-700 hover:text-yellow-800 md:text-left"
        aria-label={`Go to ${name} company profile`}
      >
        {name} ({symbol})
      </Link>
      <p className="text-gray-700">{currency}</p>
      <p className="font-bold text-gray-700">
        {exchangeShortName} - {stockExchange}
      </p>
      
      {onStockCreate && <AddStock onStockCreate={onStockCreate} symbol={symbol} />}
    </div>
  )
}

export default Card