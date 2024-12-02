import React, { SyntheticEvent } from 'react'

interface Props {
  onStockDelete: (e: SyntheticEvent) => void
  stockValue: string 
}

const DeleteStock = ({ onStockDelete, stockValue }: Props) => {
  return (
    <div className="flex justify-center">
      <form onSubmit={onStockDelete} className="w-full max-w-xs">
        <input type="hidden" name="stockValue" value={stockValue} />
        <button 
          type="submit">
          ❌
        </button>
      </form>
    </div>
  )
}

export default DeleteStock