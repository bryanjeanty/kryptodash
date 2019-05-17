import React, { Component } from "react";
import { connect } from "react-redux";
import {
  requestCMCCoins,
  requestUserCoins,
  deleteUserCoin
} from "../../redux/actions/coin";

class CoinList extends Component {
  async componentDidMount() {
    await this.props.requestCMCCoins();
    this.props.requestUserCoins();
  }

  render() {
    const { coinIds, coinList, coinsLoading, message } = this.props.coin;

    return coinsLoading ? (
      <div>Loading</div>
    ) : (
      <div>
        <p>{message}</p>
        <table>
          <thead>
            <tr>
              <th colSpan="6">Favorite Cryptocurrencies</th>
            </tr>
            <tr>
              <th>Item #</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Performance</th>
              <th>Remove</th>
            </tr>
          </thead>
          {coinIds ? (
            <tbody>
              {coinList.map(coin => {
                if (coinIds.includes(coin.id)) {
                  return (
                    <tr key={coin.id}>
                      <td>{coinIds.indexOf(coin.id) + 1}</td>
                      <td>{coin.name}</td>
                      <td>{coin.symbol}</td>
                      <td>{coin.quote.USD.price}</td>
                      <td />
                      <td>
                        <input
                          type="button"
                          name="remove"
                          value="remove"
                          onClick={() => this.props.deleteUserCoin(coin.id)}
                        />
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          ) : (
            <tbody />
          )}
          <tfoot>
            <tr>
              <td colSpan="6">KryptoDash &copy; 2019</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default connect(
  ({ coin }) => ({ coin }),
  { requestCMCCoins, requestUserCoins, deleteUserCoin }
)(CoinList);
