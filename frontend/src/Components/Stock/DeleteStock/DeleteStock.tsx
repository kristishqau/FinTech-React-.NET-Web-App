import React, { SyntheticEvent } from 'react'

// Props interface for type safety
interface Props {
  onStockDelete: (e: SyntheticEvent) => void // Callback triggered on form submission
  stockValue: string // The stock value to be deleted
}

const DeleteStock = ({ onStockDelete, stockValue }: Props) => {
  return (
    <div className="flex justify-center">
      <form onSubmit={onStockDelete} className="w-full max-w-sm">
        {/* Hidden input to store stock value */}
        <input type="hidden" name="stockValue" value={stockValue} />
        {/* Delete button with improved focus styling */}
        <button 
            type="submit"
            className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500 focus:outline-none focus:ring-2 focus:ring-red-300">
            Delete
        </button>
      </form>
    </div>
  )
}

export default DeleteStock