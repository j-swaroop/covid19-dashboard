import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = props => {
  const {match} = props
  const path = match

  const classNameForhome =
    path.path === '/' ? 'link-item-header' : 'link-item-header-active'
  const classNameForAbout =
    path.path === '/about' ? 'link-item-header' : 'link-item-header-active'
  return (
    <nav className="nav-bg-container">
      <div className="nav-container">
        <Link to="/" className="link-item-heading">
          <h1 className="covid19-heading">
            {' '}
            COVID19<span>INDIA</span>{' '}
          </h1>
        </Link>
        <ul className="nav-items-desktop">
          <li>
            <Link to="/" className={classNameForhome}>
              {' '}
              Home{' '}
            </Link>
          </li>
          <li>
            <Link to="/about" className={classNameForAbout}>
              {' '}
              About{' '}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
