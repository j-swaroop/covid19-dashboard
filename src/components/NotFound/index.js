import {Link} from 'react-router-dom'
import './index.css'

const text = "we're sorry the page you are requested could not be found"

const NotFound = () => (
  <div className="not-found-container">
    <div className="notfound-responsive">
      <img
        src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1652011250/Covid19%20Dashboard/PageNotFound_jyng5w.png"
        alt="not-found-pic"
        className="not-found-image"
      />
      <h1 className="notfound-heading"> PAGE NOT FOUND</h1>
      <p className="notfound-text">
        {' '}
        {text}
        <br />
        Please go back to the homepage
      </p>
      <Link to="/" className="btn-link">
        <button type="button" className="home-btn">
          {' '}
          Home
        </button>
      </Link>
    </div>
  </div>
)

export default NotFound
