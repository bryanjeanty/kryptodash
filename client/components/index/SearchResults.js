import React, { Component } from "react";
import { connect } from "react-redux";
import fuzzy from "fuzzy";
import Results from "./Results";

class SearchResults extends Component {
  state = {
    search: "",
    matches: []
  };

  handleChange = async event => {
    await this.setState({ search: event.target.value });
    this.searchCryptos(event);
  };

  searchCryptos = event => {
    event.preventDefault();
    const { search } = this.state;
    const { cmcCoins } = this.props.coin;
    const options = { extract: coin => coin.name };
    const results = fuzzy.filter(search, cmcCoins, options);
    const matches = results.map(result => result.original);
    this.setState({ matches });
  };

  render() {
    const { matches, search } = this.state;

    return (
      <div>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search cryptos..."
            value={search}
            onChange={this.handleChange}
          />
        </form>
        <Results matches={matches} />
      </div>
    );
  }
}

export default connect(({ coin }) => ({ coin }))(SearchResults);
