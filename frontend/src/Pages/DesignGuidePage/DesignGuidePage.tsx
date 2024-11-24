import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { TestDataCompany } from "../../Components/Table/testData"

interface Props {}

const data = TestDataCompany

const tableConfig = [
  {
    label: "symbol",
    render: (company: any) => company.symbol,
  }
]

const DesignGuidePage = (props: Props) => {
  return (
    <div className="bg-white text-gray-800 py-8 px-6 md:px-12">
      {/* Title Section */}
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-6">
        Design Guide
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        This is the design guide for Fin Shark. These are reusable components of the app with brief instructions on how to use them.
      </p>

      {/* RatioList Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Ratio List
        </h3>
        <RatioList data={data} config={tableConfig} />
      </section>

      {/* Table Section */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Table
        </h3>
        <p className="text-lg text-gray-500 mb-6">
          Table takes in a configuration object and company data as parameters. Use the config to style your table.
        </p>
        <Table data={data} config={tableConfig} />
      </section>
    </div>
  )
}

export default DesignGuidePage