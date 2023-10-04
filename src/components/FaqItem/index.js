import './index.css'

const FaqItem = props => {
  const {details} = props

  return (
    <li className="faq-item">
      <p className="question"> {details.question} </p>
      <p className="answer"> {details.answer} </p>
    </li>
  )
}

export default FaqItem
