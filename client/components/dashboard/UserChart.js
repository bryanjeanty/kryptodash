import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import HistoricalChart from "../nivo/HistoricalChart";
import { requestCMCCoins, requestUserCoins } from "../../redux/actions/coin";

class UserChart extends Component {
  async componentDidMount() {
    await this.props.requestCMCCoins();
    this.props.requestUserCoins(this.props.session);
  }

  render() {
    return (
      <Fragment>
        {this.props.coin.userCoins &&
          this.props.coin.userCoins.map(usercoin => (
            <HistoricalChart
              key={this.props.coin.userCoins.indexOf(usercoin)}
              symbol={usercoin}
            />
          ))}
      </Fragment>
    );
  }
}

export default connect(
  ({ coin }) => ({ coin }),
  { requestCMCCoins, requestUserCoins }
)(UserChart);
