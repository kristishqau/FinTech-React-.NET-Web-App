import React from 'react'
import Search from '../Components/Search/Search'
import ListStock from '../Components/Stock/ListStock/ListStock'
import CardList from '../Components/CardList'
import useSearch from '../hooks/useSearch'

const SearchPage = () => {
  const {
    search,
    stockValues,
    response,
    handleSearchChange,
    addStock,
    removeStock,
    searchCompaniesData
  } = useSearch()

  return (
    <div>
      <Search 
        onSearchSubmit={searchCompaniesData}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      
      <ListStock 
        stockValues={stockValues}
        onStockDelete={(e) => {
          e.preventDefault()
          const target = e.target as HTMLFormElement
          const input = target[0] as HTMLInputElement
          removeStock(input.value)
        }}
      />
      
      <CardList 
        searchResults={response.data || []}
        onStockCreate={(e) => {
          e.preventDefault()
          const target = e.target as HTMLFormElement 
          const input = target[0] as HTMLInputElement
          addStock(input.value)
        }}
      />
      
      {response.error && (
        <h1 className="text-center text-2xl font-semibold text-red-600 mt-4 mb-4 p-4 border-2 border-red-600 rounded-lg bg-red-50">
          {response.error}
        </h1>
      )}
    </div>
  )
}

export default SearchPage