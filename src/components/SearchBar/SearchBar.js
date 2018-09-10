import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }// end of constructor

  renderSortByOptions() { /*The purpose of renderSortByOptions() is to dynamically create the list items needed to display the sort options (Best Match, Highest Rated, Most Reviewed). This is to help future proof against potential changes to the Yelp API.*/

    return Object.keys(sortByOptions).map(sortByOption => { /*To iterate through the object, you'll need to start by accessing the keys of the sortByOptions object. Call the keys() method on the JavaScript Object library. Pass in sortByOptions as the argument.*/

      let sortByOptionValue = sortByOptions[sortByOption]; /*access the sortByOptions values using the sortByOption parameter of the callback function*/

      return <li className={this.getSortByClass(sortByOptionValue)}
      key={sortByOptionValue}
      onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
      {sortByOption}
      </li>;
      }
    );
  }; //end of renderSortByOptions()

  getSortByClass(sortByOption){
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }//end of getSortByClass

  handleSortByChange(sortByOption){
    this.setState({sortBy: sortByOption});
  }//end of handleSortByChange

  handleTermChange(event){
    this.setState({term: event.target.value});
  }//end of handleTermChange

  handleLocationChange(event){
    this.setState({location: event.target.value});
  }//end of handleLocationChange

  handleSearch(event){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }//end of handleSearch

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Lets Go</a>
        </div>
      </div>
    )
  }; //end of render
}; //end of SearchBar class

export default SearchBar;
