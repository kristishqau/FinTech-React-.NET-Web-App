import React, { SyntheticEvent } from 'react'

interface Props {
  onStockCreate: (e: SyntheticEvent) => void
  symbol: string
}

const AddStock = ({ onStockCreate, symbol }: Props) => {
  return (
    <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
      <form onSubmit={onStockCreate}>
        <input 
            readOnly={true}
            hidden={true} 
            value={symbol} 
        />
        <button
            type="submit"
            className="p-3 px-10 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 transition duration-300"
        >
            Add
        </button>
      </form>
    </div>
  )
}

export default AddStock