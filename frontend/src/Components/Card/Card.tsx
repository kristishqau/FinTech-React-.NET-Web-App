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
      className="group card hover:scale-[1.02] cursor-pointer bg-white/50 backdrop-blur-sm"
      key={id}
      id={id}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-grow space-y-2">
          <Link 
            to={`/company/${symbol}/company-profile`} 
            className="block group-hover:text-primary transition-colors duration-200"
            aria-label={`Go to ${name} company profile`}
          >
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-600 font-medium">{symbol}</p>
          </Link>
          
          <div className="flex flex-wrap gap-3 mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {currency}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {exchangeShortName}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {stockExchange}
            </span>
          </div>
        </div>
        
        {onStockCreate && (
          <div className="flex-shrink-0">
            <AddStock onStockCreate={onStockCreate} symbol={symbol} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Card