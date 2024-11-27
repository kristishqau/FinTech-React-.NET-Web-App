import React, { SyntheticEvent } from 'react'
import CardStock from '../CardStock/CardStock'
import './ListStock.css'

interface Props {
  stockValues: string[]
  onStockDelete: (e: SyntheticEvent) => void
}

const ListStock = ({ stockValues, onStockDelete }: Props) => {
  return (
    <section id="stock" className="stock-section bg-gradient-to-r from-yellow-100 to-yellow-200">
    <h2 className="stock-title">My Stock</h2>
    <div className="relative flex flex-wrap items-center justify-center max-w-7xl mx-auto p-6 gap-8 md:p-4 md:gap-6">
      {stockValues.length > 0 ? (
        stockValues.map((stockValue, index) => (
          <CardStock
            key={index}
            stockValue={stockValue}
            onStockDelete={onStockDelete} 
          />
        ))
      ) : (
        <h3 className="stock-empty-message">Your stock is empty.</h3>
      )}
    </div>
  </section>
  )
}

export default ListStock