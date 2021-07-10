import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
  'Distance': 'distance'
}

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term:'',
      location:'',
      sortBy:'best_match'
    }
    this.sortByOptionsKeys = Object.keys(sortByOptions);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? 'active' : '';
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy:sortByOption})
  }

  handleTermChange(event) {
    this.setState({term:event.target.value})
  }

  handleLocationChange(event) {
    this.setState({location:event.target.value})
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
  }

  renderSortByOptions(object, arr) {
    let listItems = arr.map(key => {
      let value = object[key];
      return <li key={key} className={this.getSortByClass(value)} onClick={this.handleSortByChange.bind(this, value)}>{key}</li>;
    })
    return listItems;
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions(sortByOptions, this.sortByOptionsKeys)}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearch}>Let's Go!</button>
        </div>
      </div>
    )
  }
}