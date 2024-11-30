interface Props {
  config: any
  data: any
}

const Table = ({ config, data }: Props) => {
  const renderedRows = data.map((company: any) => (
    <tr key={company.cik} className="border-b hover:bg-yellow-100">
      {config.map((val: any) => (
        <td
          className="p-4 text-sm text-yellow-700"
          key={val.label}
        >
          {val.render(company)}
        </td>
      ))}
    </tr>
  ))
  const renderedHeaders = config.map((config: any) => (
    <th
      className="p-4 text-left text-xs font-medium text-yellow-900 uppercase bg-yellow-400"
      key={config.label}
    >
      {config.label}
    </th>
  ))
  return (
    <div className="bg-white shadow-lg rounded-lg w-full mx-auto h-full flex flex-col">
      <div className="overflow-x-auto w-full">
        <table className="table-auto min-w-full">
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