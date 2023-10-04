import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <h1 className="covid19-heading">
      {' '}
      COVID19<span>INDIA</span>{' '}
    </h1>
    <p className="description">
      {' '}
      we stand with everyone fighting on the front lines{' '}
    </p>
    <div className="icons-container">
      <VscGithubAlt color="#CBD5E1" className="icon" />
      <FiInstagram color="#CBD5E1" className="icon" />
      <FaTwitter color="#CBD5E1" className="icon" />
    </div>
  </div>
)

export default Footer
