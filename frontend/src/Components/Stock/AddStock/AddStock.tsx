import React, { SyntheticEvent } from 'react'

// Props interface for type safety
interface Props {
  onStockCreate: (e: SyntheticEvent) => void // Callback triggered on form submission
  symbol: string // The stock symbol to be added
}

// AddStock component
const AddStock = ({ onStockCreate, symbol }: Props) => {
  return (
    <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
      {/* Form to handle stock addition */}
      <form onSubmit={onStockCreate}>
        {/* Hidden input to pass the stock symbol */}
        <input 
            readOnly={true} // Prevent manual editing
            hidden={true}  // Visually hide the input
            value={symbol} 
        />
        {/* Add button */}
        <button
            type="submit"
            className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none">
            Add
        </button>
      </form>
    </div>
  )
}

export default AddStock