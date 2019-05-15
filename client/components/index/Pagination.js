import React, { Component } from "react";
import { connect } from "react-redux";
import { requestCMCCoins } from "../../redux/actions/coin";
import { decrementPage, incrementPage } from "../../redux/actions/page";

class Pagination extends Component {
  decrement = async event => {
    event.preventDefault();
    await this.props.decrementPage();
    await this.props.requestCMCCoins(this.props.page.offset);
    this.searchCryptos(event);
  };

  increment = async event => {
    event.preventDefault();
    await this.props.incrementPage();
    await this.props.requestCMCCoins(this.props.page.offset);
    this.searchCryptos(event);
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
  ({ page }) => ({ page }),
  { requestCMCCoins, decrementPage, incrementPage }
)(Pagination);
