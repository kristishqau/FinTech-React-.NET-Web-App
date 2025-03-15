import { useState } from 'react'
import { searchCompanies } from '../api'
import { CompanySearch } from '../company'
import { AxiosResponse } from 'axios'

const useSearch = () => {
  const [search, setSearch] = useState<string>("")
  const [stockValues, setStockValues] = useState<string[]>([])
  const [response, setResponse] = useState<{ data: CompanySearch[] | null, error: string | null }>({ data: null, error: null })

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  const addStock = (symbol: string) => {
    if (!stockValues.includes(symbol)) {
      setStockValues((prev) => [...prev, symbol])
    }
  }

  const removeStock = (symbol: string) => {
    setStockValues((prev) => prev.filter((value) => value !== symbol))
  }

  const searchCompaniesData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const result = await searchCompanies(search)

      // Handle successful response
      if ((result as AxiosResponse).data) {
        const axiosResult = result as AxiosResponse
        setResponse({ data: axiosResult.data, error: null })
      } else {
        // Handle error case
        setResponse({ data: null, error: result as string })
      }
    } catch (error) {
      setResponse({ data: null, error: "An unexpected error occurred during the company search." })
    }
  }

  return { search, stockValues, response, handleSearchChange, addStock, removeStock, searchCompaniesData }
}

export default useSearch