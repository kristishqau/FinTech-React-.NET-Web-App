interface Props {
    config: any
    data: any
  }
  
  const RatioList = ({ config, data }: Props) => {
    const renderedCells = config.map((row: any, index: number) => {
      return (
        <li key={index} className="py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Label and Info Section */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-yellow-800 truncate">
                {row.label}
              </p>
              {row.info && (
                <p className="text-xs text-gray-500 truncate mt-1">
                  {row.info}
                </p>
              )}
            </div>
            {/* Dynamic Content Section */}
            <div className="inline-flex items-center text-lg font-medium text-yellow-600">
              {row.render(data)}
            </div>
          </div>
        </li>
      )
    })
  
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-4xl mx-auto h-full flex flex-col">
        {/* Render the list of rows */}
        <ul className="flex-1 overflow-y-auto divide-y divide-yellow-200">{renderedCells}</ul>
      </div>
    )
  }
  
  export default RatioList  