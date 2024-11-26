import React, { SyntheticEvent } from 'react'
import DeleteStock from '../DeleteStock/DeleteStock' 
import { Link } from 'react-router-dom' 

interface Props {
  stockValue: string
  onStockDelete: (e: SyntheticEvent) => void 
}

const CardStock = ({ stockValue, onStockDelete }: Props) => {
  return (
  <div className="relative text-center text-xl font-semibold text-gray-800 p-6 w-64 md:w-72 rounded-lg bg-yellow-400 shadow-md transform transition-all duration-300 hover:shadow-lg hover:scale-105 group">
    <Link
      to={`/company/${stockValue}/company-profile`}
      className="text-2xl font-bold text-yellow-700 hover:text-yellow-800 transition-colors duration-200"
    >
      {stockValue}
    </Link>
    <div className="absolute top-2 left-2 text-2xl cursor-pointer opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <DeleteStock stockValue={stockValue} onStockDelete={onStockDelete} />
    </div>
  </div>
  )
}

export default CardStock