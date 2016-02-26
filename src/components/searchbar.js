import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }
  render() {
    return (
    <div className="form-main">  

      <input 
      className="form-group"
      placeholder="Search Videos"
      value = {this.state.term}
      onChange={(event) => this.onInputChange(event.target.value)} />
    </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;