interface Props {
  title: string // Title to display in the tile (e.g., category or label)
  info: string  // Main information or value to display in the tile
}

const Tile = ({title, info}: Props) => {
  return (
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4"> {/* Responsive width and padding */}
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg"> {/* Background, shadow, and rounded corners */}
        <div className="flex-auto p-4"> {/* Padding around content */}
          <div className="flex flex-wrap"> {/* Flexbox for layout */}
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1"> {/* Flexbox for title and info */}
              <h5 className="text-blueGray-400 uppercase font-bold text-xs"> {/* Title style */}
                {title}
              </h5>
              <span className="font-bold text-xl"> {/* Info style */}
                {info}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tile