import React, { SyntheticEvent } from 'react' // Importing React and necessary hooks
import Card from '../Card/Card' // Importing the Card component for displaying individual company info
import { CompanySearch } from '../../company' // Importing the CompanySearch type to define prop structure
import { v4 as uuidv4 } from 'uuid' // Importing uuidv4 to generate unique IDs for each card

// Define the Props type that the component accepts
interface Props {
  searchResults: CompanySearch[] // Array of company search results
  onStockCreate: (e: SyntheticEvent) => void // Function to handle stock creation
}

const CardList: React.FC<Props> = ({ searchResults, onStockCreate }: Props): JSX.Element => {
  return (
    <>
      {/* Conditionally render the "No results!" message */}
      {searchResults.length === 0 ? (
        <p className="mt-8 text-2xl font-semibold text-center text-yellow-500 p-4 border-2 border-yellow-500 rounded-lg transition-transform duration-300 ease-in-out">
          No results!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
          {/* Loop through searchResults and render a Card component for each */}
          {searchResults.map((result) => (
            <Card 
              id={result.symbol} // Using the company's symbol as a stable identifier for the Card component
              key={uuidv4()} // Generates a unique key using uuidv4 for each Card component
              searchResult={result} 
              onStockCreate={onStockCreate} 
            />
          ))}
        </div>
      )}
    </>
  )
}

export default CardList

//uuidv4() generates a universally unique identifier (UUID). 
//It’s commonly used to create unique keys, particularly when no inherent unique value exists (like an ID).
//In this case, we're using it to ensure each Card has a unique key prop, which helps React efficiently manage and update the DOM when items in a list change.
//Each time the map() function runs, uuidv4() generates a new unique identifier for each Card component.
//React uses this key to track the list of Card components and detect changes, additions, or removals efficiently.