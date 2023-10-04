import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import LoaderView from '../LoaderView'
import FaqItem from '../FaqItem'
import './index.css'

class About extends Component {
  state = {
    aboutData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getAboutData()
  }

  getAboutData = async () => {
    const url = 'https://apis.ccbp.in/covid19-faqs'

    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      console.log(data)
      const fetchedData = data.faq
      this.setState({aboutData: fetchedData, isLoading: false})
    }
  }

  renderAbout = () => {
    const {aboutData} = this.state

    return (
      <>
        <h1 className="about-heading"> About </h1>
        <p className="about-text"> Last updated on march 28th 2021</p>
        <p className="vaccines-text">
          {' '}
          COVID-19 vaccines be ready for distribution{' '}
        </p>
        <ul className="faqs-unordered-list" data-testid="faqsUnorderedList">
          {aboutData.map(item => (
            <FaqItem key={item.qno} details={item} />
          ))}
        </ul>
        <Footer />
      </>
    )
  }

  renderAboutLoader = () => (
    <div className="loader" data-testid="aboutRouteLoader">
      <LoaderView />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        <div className="about-container">
          <div className="about-responsive-container">
            {isLoading ? this.renderAboutLoader() : this.renderAbout()}
          </div>
        </div>
      </>
    )
  }
}

export default About
