import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ChartCarousel } from "../nivo/ChartCarousel";
import { requestCMCCoins, requestUserCoins } from "../../redux/actions/coin";

class UserChart extends Component {
  async componentDidMount() {
    await this.props.requestCMCCoins();
    this.props.requestUserCoins(this.props.session);
  }

  render() {
    return (
      <Fragment>
        <ChartCarousel coins={this.props.coin.userCoins} />
      </Fragment>
    );
  }
}

export default connect(
  ({ coin }) => ({ coin }),
  { requestCMCCoins, requestUserCoins }
)(UserChart);
