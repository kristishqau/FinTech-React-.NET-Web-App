import React, { SyntheticEvent } from 'react'
import CardStock from '../CardStock/CardStock'
import './ListStock.css'

// Props interface to ensure type safety for the component's props
interface Props {
  stockValues: string[] // An array of stock values to render
  onStockDelete: (e: SyntheticEvent) => void // Callback function triggered when a stock is deleted
}

// The ListStock component definition
const ListStock = ({ stockValues, onStockDelete }: Props) => {
  return (
    <section id="stock" className="stock-section bg-gradient-to-r from-yellow-100 to-yellow-200">
    {/* Title */}
    <h2 className="stock-title">My Stock</h2>
    {/* Container for the stock items */}
    <div className="relative flex flex-wrap items-center justify-center max-w-7xl mx-auto p-6 gap-8 md:p-4 md:gap-6">
      {/* Conditionally render stock items or an empty message */}
      {stockValues.length > 0 ? (
        // Map over stockValues to render individual CardStock components
        stockValues.map((stockValue, index) => (
          <CardStock
            key={index} // Provide a key for each item in the list
            stockValue={stockValue} // Pass the stock value to CardStock
            onStockDelete={onStockDelete} // Pass the delete handler
          />
        ))
      ) : (
        // Message displayed if stockValues array is empty
        <h3 className="stock-empty-message">Your stock is empty.</h3>
      )}
    </div>
  </section>
  )
}

export default ListStock