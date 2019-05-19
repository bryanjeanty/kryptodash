import React, { Component } from "react";
import { connect } from "react-redux";
import { typing, performSearch } from "../../redux/actions/search";
import { Search } from "../bootstrap/Search";

class SearchResults extends Component {
  handleChange = async event => {
    await this.props.typing(event);
    this.search(event);
  };

  search = event => {
    const { search, coin, performSearch } = this.props;
    performSearch(search.input, coin.cmcCoins);
  };

  render() {
    const { search } = this.props;

    return <Search input={search.input} handleChange={this.handleChange} />;
  }
}

export default connect(
  ({ coin, search }) => ({ coin, search }),
  { typing, performSearch }
)(SearchResults);
