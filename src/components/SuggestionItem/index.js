import './index.css'

const SuggestionItem = props => {
  const {suggestion, id, onArrow} = props
  const onClickArrow = () => {
    onArrow(id)
  }
  return (
    <li className="item-container">
      <p className="suggestion">{suggestion}</p>
      <img
        onClick={onClickArrow}
        className="arrow-icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
