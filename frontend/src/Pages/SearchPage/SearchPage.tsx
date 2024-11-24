import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { searchCompanies } from '../../api'
import Search from '../../Components/Search/Search'
import ListStock from '../../Components/Stock/ListStock/ListStock'
import CardList from '../../Components/CardList/CardList'
import { CompanySearch } from '../../company'

interface Props {}

const SearchPage = (props: Props) => {
  // useState is a React Hook for managing local component state.
  // `search` holds the value of the input field.
  const [search, setSearch] = useState<string>("")
  // `stockValues` stores an array of stock symbols added by the user.
  const [stockValues, setStockValues] = useState<string[]>([])
  // `searchResult` holds the result of a search query from the API.
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  // `serverError` holds any error message returned from the API.
  const [serverError, setServerError] = useState<string>("")
  // Handles changes to the search input field.
  // `ChangeEvent<HTMLInputElement>` provides type safety for input events.
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value) // Update the `search` state with the new input value.
  }
  // Adds a stock symbol to the list, ensuring no duplicates.
  const onStockCreate = (e: any) => {
    e.preventDefault() // Prevents the default form submission behavior.
    const exists = stockValues.find((value) => value === e.target[0].value)
    if(exists) return // checks if the value already exists in the array.
    const updatedStock = [...stockValues, e.target[0].value] // Create a new array using spread syntax and update the state.
    setStockValues(updatedStock) 
  }
  // Removes a stock symbol from `stockValues`.
  const onStockDelete = (e: any) => {
    e.preventDefault()
    const removed = stockValues.filter((value) => { // `filter` returns a new array containing all items except the one to be removed.
      return value !== e.target[0].value
    })
    setStockValues(removed)
  }
  // Submits the search query and handles the API response.
  const onSearchSubmit = async (e:SyntheticEvent) => {
    e.preventDefault() // Prevent the default form submission behavior.
    const result = await searchCompanies(search) // Calls an asynchronous function to fetch company data.
    if(typeof result === "string"){
      // If the API returns a string, treat it as an error message.
      setServerError(result)
    }else if(Array.isArray(result.data)){
      // If the API returns an array, set it as the search result.
      setSearchResult(result.data)
    }
  }
  return (
    <div>
      {/* 
        The Search component renders a form with an input field and a submit button.
        Props:
          - onSearchSubmit: Callback for handling form submission.
          - search: The current value of the input field.
          - handleSearchChange: Callback for handling input field changes.
      */}
      <Search  
        onSearchSubmit={onSearchSubmit} 
        search={search} 
        handleSearchChange={handleSearchChange}
      />
      {/* 
        The ListStock component displays a list of stocks added by the user.
        Props:
          - stockValues: Array of stock symbols.
          - onStockDelete: Callback for removing a stock from the list.
      */}
      <ListStock 
        stockValues={stockValues} 
        onStockDelete={onStockDelete}
      />
      {/* 
        The CardList component displays the search results returned by the API.
        Props:
          - searchResults: Array of company search results.
          - onStockCreate: Callback for adding a stock to the list.
      */}
      <CardList 
        searchResults={searchResult} 
        onStockCreate={onStockCreate}
      />
      {/* Display a server error message if one exists. */}
      {serverError && 
      <h1 className="text-center text-2xl font-semibold text-red-600 mt-4 mb-4 p-4 border-2 border-red-600 rounded-lg bg-red-50">
        Unable to connect to API
      </h1>
      }
    </div>
  )
}

export default SearchPage