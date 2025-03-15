import React, { ChangeEvent, SyntheticEvent } from 'react'
import './Search.css'

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void
  search: string
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<Props> = ({ onSearchSubmit, search, handleSearchChange }) => {
  return (
    <section className="search-section bg-gradient-to-r from-yellow-100 to-yellow-200">
      <div className="search-wrapper">
        <form className="search-form" onSubmit={onSearchSubmit}>
          {/* Search Input */}
          <input
            className="search-input"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
            aria-label="Search for companies"
          />
          
          {/* Search Button */}
          <button 
            type="submit" 
            className='search-button' 
            disabled={!search.trim()}
          >
            Search
          </button>
        </form>
      </div>
    </section>
  )
}

export default Search