import React, { Component } from "react";
import { connect } from "react-redux";
import { requestCMCCoins } from "../../redux/actions/coin";
import { decrementPage, incrementPage } from "../../redux/actions/page";
import { performSearch } from "../../redux/actions/search";

class Pagination extends Component {
  decrement = async event => {
    event.preventDefault();
    const {
      page,
      search,
      coin,
      decrementPage,
      requestCMCCoins,
      performSearch
    } = this.props;
    await decrementPage(event);
    await requestCMCCoins(page.offset);
    performSearch(search.input, coin.cmcCoins);
  };

  increment = async event => {
    event.preventDefault();
    const {
      page,
      search,
      coin,
      incrementPage,
      requestCMCCoins,
      performSearch
    } = this.props;
    await incrementPage(event);
    await requestCMCCoins(page.offset);
    performSearch(search.input, coin.cmcCoins);
  };

  render() {
    const { page } = this.props.page;
    const isDisabled = page === 1;

    return (
      <div>
        <input
          type="button"
          disabled={isDisabled}
          onClick={this.decrement}
          value="Prev"
        />
        <input type="button" onClick={this.increment} value="Next" />
        <div>Page #: {page}</div>
      </div>
    );
  }
}

export default connect(
  ({ page, search, coin }) => ({ page, search, coin }),
  { requestCMCCoins, decrementPage, incrementPage, performSearch }
)(Pagination);
