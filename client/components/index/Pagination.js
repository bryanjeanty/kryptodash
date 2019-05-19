import React, { Component } from "react";
import { connect } from "react-redux";
import { requestCMCCoins } from "../../redux/actions/coin";
import { setPage } from "../../redux/actions/page";
import { performSearch } from "../../redux/actions/search";
import { BootPagination } from "../bootstrap/BootPagination";

class Pagination extends Component {
  setPageNum = num => {
    this.props.setPage(num);
  };

  componentDidUpdate(prevProps) {
    if (this.props.page.offset !== prevProps.page.offset) {
      this.props.requestCMCCoins(this.props.page.offset);
      if (this.props.search.input) {
        this.props.performSearch(
          this.props.search.input,
          this.props.coin.cmcCoins
        );
      }
    }
  }

  render() {
    const { page } = this.props.page;

    return <BootPagination page={page} setPageNum={this.setPageNum} />;
  }
}

export default connect(
  ({ page, search, coin }) => ({ page, search, coin }),
  { requestCMCCoins, setPage, performSearch }
)(Pagination);
