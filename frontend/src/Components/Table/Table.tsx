interface Props {
  config: any
  data: any
}

const Table = ({ config, data }: Props) => {
  const renderedRows = data.map((company: any) => {
    return (
      <tr key={company.cik} className="border-b hover:bg-yellow-100">
        {config.map((val: any) => {
          return (
            <td
              className="p-4 text-sm text-yellow-700"
              key={val.label}
            >
              {val.render(company)}
            </td>
          )
        })}
      </tr>
    )
  })

  const renderedHeaders = config.map((config: any) => {
    return (
      <th
        className="p-4 text-left text-xs font-medium text-yellow-800 uppercase bg-yellow-200"
        key={config.label}
      >
        {config.label}
      </th>
    )
  })

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full mx-auto h-full flex flex-col">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto">
          <thead>
            <tr>{renderedHeaders}</tr>
          </thead>
          <tbody>{renderedRows}</tbody>
        </table>
      </div>
    </div>
  )
}

export default Table