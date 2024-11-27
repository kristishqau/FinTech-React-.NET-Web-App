import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { searchCompanies } from '../../api'
import Search from '../../Components/Search/Search'
import ListStock from '../../Components/Stock/ListStock/ListStock'
import CardList from '../../Components/CardList/CardList'
import { CompanySearch } from '../../company'

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("")
  const [stockValues, setStockValues] = useState<string[]>([])
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<string>("")
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {}
  const onStockCreate = (e: any) => {
    e.preventDefault()
    const exists = stockValues.find((value) => value === e.target[0].value)
    if(exists) return
    const updatedStock = [...stockValues, e.target[0].value]
    setStockValues(updatedStock) 
  }
  const onStockDelete = (e: any) => {
    e.preventDefault()
    const removed = stockValues.filter((value) => {
      return value !== e.target[0].value
    })
    setStockValues(removed)
  }
  const onSearchSubmit = async (e:SyntheticEvent) => {
    e.preventDefault()
    const result = await searchCompanies(search)
    if(typeof result === "string"){
      setServerError(result)
    }else if(Array.isArray(result.data)){
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