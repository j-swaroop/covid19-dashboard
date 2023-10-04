import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import {Component} from 'react'
import IndianStateTable from '../IndianStateTable'

import './index.css'

class Table extends Component {
  state = {
    filteredCovidData: [],
  }

  onClickSortingAsc = () => {
    const {covidData} = this.props
    const filteredCovidData = covidData.sort((a, b) =>
      a.stateName.toUpperCase() > b.stateName.toUpperCase() ? 1 : -1,
    )

    this.setState({filteredCovidData})
  }

  onClickSortingDesc = () => {
    const {covidData} = this.props
    const filteredCovidData = covidData.sort((a, b) =>
      a.stateName.toUpperCase() > b.stateName.toUpperCase() ? -1 : 1,
    )

    this.setState({filteredCovidData})
  }

  render() {
    const {covidData} = this.props

    const {filteredCovidData} = this.state

    const finalData =
      filteredCovidData.length === 0 ? covidData : filteredCovidData

    return (
      <div className="stats-table" data-testid="stateWiseCovidDataTable">
        <div className="table-header">
          <div className="states-name-column">
            <p className="table-header-title">States/UT</p>
            <div className="icons-container">
              <button
                data-testid="ascendingSort"
                type="button"
                className="sorting-icon sorting-icon-hover"
                onClick={this.onClickSortingAsc}
              >
                <FcGenericSortingAsc size="20" />
              </button>
              <button
                data-testid="descendingSort"
                type="button"
                className="sorting-icon sorting-icon-hover"
                onClick={this.onClickSortingDesc}
              >
                <FcGenericSortingDesc size="20" />
              </button>
            </div>
          </div>
          <div className="table-column">
            <p className="table-header-title">Confirmed</p>
          </div>
          <div className="table-column">
            <p className="table-header-title">Active</p>
          </div>
          <div className="table-column">
            <p className="table-header-title">Recovered</p>
          </div>
          <div className="table-column">
            <p className="table-header-title">Deceased</p>
          </div>
          <div className="table-column">
            <p className="table-header-title">Population</p>
          </div>
        </div>
        <hr className="line" />
        <ul className="state-stats-container">
          {finalData.map(state => (
            <IndianStateTable key={state.stateCode} state={state} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Table
