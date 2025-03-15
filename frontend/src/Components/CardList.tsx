import React, { SyntheticEvent } from 'react'
import Card from './Card/Card'
import { CompanySearch } from '../company'

interface Props {
  searchResults: CompanySearch[]
  onStockCreate: (e: SyntheticEvent) => void
}

const CardList: React.FC<Props> = ({ searchResults, onStockCreate }) => {
  if (searchResults.length === 0) {
    return (
      <p className="mt-8 text-2xl font-semibold text-center text-yellow-500 p-4 rounded-lg transition-transform duration-300 ease-in-out">
        No results!
      </p>
    )
  }

  return (
    <div>
      {searchResults.map((result) => (
        <Card
          id={result.symbol}
          key={result.symbol} 
          searchResult={result}
          onStockCreate={onStockCreate}
        />
      ))}
    </div>
  )
}

export default CardList