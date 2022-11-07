// Write your code here

import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInputText: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInputText: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInputText} = this.state

    const searchResult = destinationsList.filter(eachDest =>
      eachDest.name.toLowerCase().includes(searchInputText.toLowerCase()),
    )
    return (
      <div className="app-container">
        <h1 className="search-heading">Destination Search</h1>
        <div className="search-card">
          <input
            type="search"
            placeholder="Search"
            value={searchInputText}
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-bar"
            alt="search icon"
          />
        </div>
        <ul className="destination-list-container">
          {searchResult.map(eachItem => (
            <DestinationItem destinationDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
