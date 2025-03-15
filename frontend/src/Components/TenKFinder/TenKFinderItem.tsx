import { Link } from "react-router-dom"
import { CompanyTenK } from "../../company"

type Props = {
  tenK: CompanyTenK
}

const TenKFinderItem = ({ tenK }: Props) => {
  const fillingDate = new Date(tenK.fillingDate).getFullYear()

  return (
    <Link
      reloadDocument
      to={tenK.finalLink || "#"}
      type="button"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-yellow-900 bg-yellow-400 border border-yellow-300 rounded-l-lg hover:bg-yellow-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-yellow-500 focus:text-white transition duration-200"
    >
      10K - {tenK.symbol} - {fillingDate}
    </Link>
  )
}

export default TenKFinderItem