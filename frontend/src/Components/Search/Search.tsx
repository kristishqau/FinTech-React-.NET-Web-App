import React, { ChangeEvent , SyntheticEvent} from 'react'
import './Search.css'

// Define the types for the component's props
interface Props {
  // onSearchSubmit is a function that will be triggered when the search form is submitted
  onSearchSubmit: (e: SyntheticEvent) => void
  // search is the current search value (query entered by the user), could be undefined
  search: string | undefined
  // handleSearchChange updates the search state when the user types in the input field
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
}

// Functional component that receives props of type Props
const Search: React.FC<Props> = ({ onSearchSubmit, search, handleSearchChange }: Props) : JSX.Element => {
  return (
    <section className="search-section bg-gradient-to-r from-yellow-100 to-yellow-200">
      <div className="search-wrapper">
        <form
          className="search-form"
          // When the form is submitted (enter key or submit button), trigger the onSearchSubmit function
          onSubmit={onSearchSubmit}
        >
          <input
            className="search-input"
            id="search-input" // Unique identifier for the input field, useful for testing and accessibility
            placeholder="Search companies" // Placeholder text shown when the input is empty
            value={search} // Controlled component: value is tied to the component's state (search)
            onChange={handleSearchChange} // Handle input changes by calling handleSearchChange function
          />
          <button type="submit" className='search-button'>Search</button>
        </form>
      </div>
    </section>
  )
}

// Export the Search component so it can be used elsewhere in the app
export default Search