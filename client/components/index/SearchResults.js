import React, { Component } from "react";
import { connect } from "react-redux";
import { typing, performSearch } from "../../redux/actions/search";
import Results from "./Results";

class SearchResults extends Component {
  handleChange = async event => {
    await this.props.typing(event);
    this.search(event);
  };

  search = event => {
    event.preventDefault();
    const { search, coin, performSearch } = this.props;
    performSearch(search, coin);
  };

  render() {
    const { search } = this.props;

    return (
      <div>
        <form>
          <input
            name="input"
            type="text"
            placeholder="Search cryptos..."
            value={search.input}
            onChange={this.handleChange}
          />
        </form>
        <Results matches={search.matches} />
      </div>
    );
  }
}

export default connect(
  ({ coin, search }) => ({ coin, search }),
  { typing, performSearch }
)(SearchResults);
