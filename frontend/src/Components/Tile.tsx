interface Props {
  title: string 
  info: string
}

const Tile = ({ title, info }: Props) => {
  return (
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-yellow-300 rounded-lg mb-6 xl:mb-0 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1"> 
              <h5 className="text-yellow-600 uppercase font-bold text-xs">
                {title}
              </h5>
              <span className="font-bold text-2xl text-yellow-800">
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