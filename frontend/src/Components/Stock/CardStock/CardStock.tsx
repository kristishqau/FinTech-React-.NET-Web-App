import React, { SyntheticEvent } from 'react'
import DeleteStock from '../DeleteStock/DeleteStock' // Component for delete functionality
import { Link } from 'react-router-dom' // Link for navigation

// Props interface to ensure proper type checking
interface Props {
  stockValue: string // Represents the stock name or identifier
  onStockDelete: (e: SyntheticEvent) => void // Function to handle stock deletion
}

const CardStock = ({ stockValue, onStockDelete }: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      {/* Link to company details using the stockValue */}
      <Link to={`/company/${stockValue}/company-profile`} className="pt-6 text-xl font-bold">
        {stockValue}
      </Link>
      {/* Delete functionality via DeleteStock component */}
      <DeleteStock 
        stockValue={stockValue} 
        onStockDelete={onStockDelete} 
      />
    </div>
  )
}

export default CardStock