import { ClipLoader } from 'react-spinners'
import "./Spinner.css"

interface Props {
  isLoading?: boolean
}

const Spinner = ({ isLoading = true }: Props) => {
  return isLoading ? (
    <div id="loading-spinner">
      <ClipLoader
        color="yellow"
        loading={isLoading}
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : null
}

export default Spinner