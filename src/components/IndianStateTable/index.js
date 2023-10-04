import {Link} from 'react-router-dom'

import './index.css'

const IndianStateTable = props => {
  const {state} = props

  const {
    listOfPopulation,
    listOfOther,
    listOfDeceased,
    listOfConfirmed,
    stateName,
    stateCode,
    listOfRecovered,
  } = state

  const active =
    listOfConfirmed - listOfRecovered - listOfDeceased - listOfOther

  return (
    <>
      <li className="state-list" key={stateCode}>
        <div className="states-container">
          <Link to={`/state/${stateCode}`} className="state-name-link">
            <p className="state-name-text state-name-hover">{stateName}</p>
          </Link>
        </div>
        <div className="table-column">
          <p className="confirmed-cases case">{listOfConfirmed}</p>
        </div>
        <div className="table-column">
          <p className="active-cases case">{active}</p>
        </div>
        <div className="table-column">
          <p className="recovered-cases case">{listOfRecovered}</p>
        </div>
        <div className="table-column">
          <p className="deceased-cases case">{listOfDeceased}</p>
        </div>
        <div className="table-column">
          <p className="populations case">{listOfPopulation}</p>
        </div>
      </li>
    </>
  )
}

export default IndianStateTable
