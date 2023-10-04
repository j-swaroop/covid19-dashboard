import Loader from 'react-loader-spinner'

const LoaderView = () => (
  <div className="loader-container">
    <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
  </div>
)

export default LoaderView
