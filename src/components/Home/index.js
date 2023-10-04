import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import LoaderView from '../LoaderView'
import IndiaStats from '../IndiaStats'
import SearchResults from '../SearchResults'
import Table from '../Table'
import Footer from '../Footer'
import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class Home extends Component {
  state = {
    isLoading: true,
    covidData: [],
    searchInput: '',
    searchResults: [],
    totalConfirmed: 0,
    totalRecovered: 0,
    totalDecesed: 0,
    totalActive: 0,
  }

  componentDidMount() {
    this.getStateWiseData()
  }

  getStateWiseData = async () => {
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'

    const response = await fetch(url)
    const data = await response.json()
    if (response.ok === true) {
      let confirmedCases = 0
      let recoveredCases = 0
      let deceasedCases = 0
      let activeCases = 0

      statesList.forEach(stateCode => {
        if (data[stateCode.state_code]) {
          const {total} = data[stateCode.state_code]
          confirmedCases += total.confirmed ? total.confirmed : 0
          recoveredCases += total.recovered ? total.recovered : 0
          deceasedCases += total.deceased ? total.deceased : 0
        }
      })
      activeCases += confirmedCases - (recoveredCases + deceasedCases)

      const listOfStates = statesList.map(eachItem => ({
        stateName: eachItem.state_name,
        stateCode: eachItem.state_code,
        listOfConfirmed: Object.keys(data)
          .filter(stateItem => stateItem === eachItem.state_code)
          .map(each => data[each].total.confirmed),
        listOfRecovered: Object.keys(data)
          .filter(stateItem => stateItem === eachItem.state_code)
          .map(each => data[each].total.recovered),
        listOfDeceased: Object.keys(data)
          .filter(stateItem => stateItem === eachItem.state_code)
          .map(each => data[each].total.deceased),
        listOfOther: Object.keys(data)
          .filter(stateItem => stateItem === eachItem.state_code)
          .map(each => data[each].total.other),
        listOfPopulation: Object.keys(data)
          .filter(stateItem => stateItem === eachItem.state_code)
          .map(each => data[each].meta.population),
      }))

      this.setState({
        totalConfirmed: confirmedCases,
        totalRecovered: recoveredCases,
        totalDecesed: deceasedCases,
        totalActive: activeCases,
        isLoading: false,
        covidData: listOfStates,
      })
    }
  }

  onChangeSearchInput = event => {
    const search = event.target.value
    const searchItems = statesList.filter(item =>
      item.state_name.toLowerCase().includes(search.toLowerCase()),
    )

    this.setState({searchInput: search, searchResults: searchItems})
  }

  renderSearchBar = () => {
    const {searchInput} = this.state

    return (
      <div className="search-bar-container">
        <BsSearch color="#94A3B8" size={15} />
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          className="input"
          placeholder="Enter the State"
          value={searchInput}
        />
      </div>
    )
  }

  renderSearchSuggestions = () => {
    const {searchResults} = this.state

    return (
      <ul
        className="search-results-container"
        data-testid="searchResultsUnorderedList"
      >
        {searchResults.map(item => (
          <SearchResults
            testid="searchResultsUnorderedList"
            stateName={item.state_name}
            stateCode={item.state_code}
            key={item.state_code}
            id={item.state_code}
          />
        ))}
      </ul>
    )
  }

  // main
  renderHomeContainer = () => {
    const {
      covidData,
      searchInput,
      totalActive,
      totalConfirmed,
      totalDecesed,
      totalRecovered,
    } = this.state

    return (
      <>
        {this.renderSearchBar()}
        {searchInput.length === 0 ? '' : this.renderSearchSuggestions()}
        <IndiaStats
          totalConfirmed={totalConfirmed}
          totalActive={totalActive}
          totalDecesed={totalDecesed}
          totalRecovered={totalRecovered}
        />
        <Table covidData={covidData} />
        <Footer />
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-responsive-container">
            {isLoading ? (
              <div data-testid="homeRouteLoader" className="loader">
                <LoaderView />
              </div>
            ) : (
              this.renderHomeContainer()
            )}
          </div>
        </div>
      </>
    )
  }
}

export default Home
