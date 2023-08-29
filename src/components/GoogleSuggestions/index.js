import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {input: '', placeHolder: 'Search Google'}

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onArrow = id => {
    const {suggestionsList} = this.props
    const {input, placeHolder} = this.state
    console.log(input, placeHolder)
    console.log(suggestionsList[id - 1].suggestion)
    this.setState({input: suggestionsList[id - 1].suggestion})
  }

  render() {
    const {input, placeHolder} = this.state
    const {suggestionsList} = this.props
    const searchedList = suggestionsList.filter(each => {
      console.log(input)
      return each.suggestion.toLowerCase().includes(input.toLowerCase())
    })
    console.log(placeHolder)
    return (
      <div className="bg-container">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="suggestions-container">
          <div className="search-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              onChange={this.onChangeInput}
              className="search-input"
              type="search"
              placeholder={placeHolder}
              value={input}
            />
          </div>
          <ul className="list-conatiner">
            {searchedList.map(each => {
              console.log(each)
              return (
                <SuggestionItem
                  onArrow={this.onArrow}
                  id={each.id}
                  suggestion={each.suggestion}
                  key={each.id}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
