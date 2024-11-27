import React, { SyntheticEvent } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company'
import { v4 as uuidv4 } from 'uuid' // Importing uuidv4 to generate unique IDs for each card

interface Props {
  searchResults: CompanySearch[] // Array of company search results
  onStockCreate: (e: SyntheticEvent) => void // Function to handle stock creation
}

const CardList: React.FC<Props> = ({ searchResults, onStockCreate }: Props): JSX.Element => {
  return (
    <>
      {searchResults.length === 0 ? (
        <p className="mt-8 text-2xl font-semibold text-center text-yellow-500 p-4 rounded-lg transition-transform duration-300 ease-in-out">
          No results!
        </p>
      ) : (
        <div>
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