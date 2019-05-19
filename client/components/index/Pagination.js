import React, { Component } from "react";
import { connect } from "react-redux";
import { requestCMCCoins } from "../../redux/actions/coin";
import { setPage } from "../../redux/actions/page";
import { performSearch } from "../../redux/actions/search";
import { BootPagination } from "../bootstrap/BootPagination";

class Pagination extends Component {
  setPageNum = async num => {
    const {
      page,
      search,
      coin,
      setPage,
      requestCMCCoins,
      performSearch
    } = this.props;
    await setPage(num);
    await requestCMCCoins(page.offset);
    performSearch(search.input, coin.cmcCoins);
  };

  render() {
    const { page } = this.props.page;

    return <BootPagination page={page} setPageNum={this.setPageNum} />;
  }
}

export default connect(
  ({ page, search, coin }) => ({ page, search, coin }),
  { requestCMCCoins, setPage, performSearch }
)(Pagination);
