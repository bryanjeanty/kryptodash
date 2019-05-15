import React, { Component } from "react";
import { connect } from "react-redux";
import { requestCMCCoins, addUserCoin } from "../../redux/actions/coin";

class Results extends Component {
  componentDidMount() {
    this.props.requestCMCCoins(this.props.page.offset);
  }

  render() {
    const { coin, matches, page } = this.props;

    return isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan="8">Cryptocurrency Data</th>
            </tr>
            <tr>
              <th>Item #</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>Percent Change 1hr</th>
              <th>Circulating Supply</th>
              <th>Volume 24hr</th>
              <th>Add</th>
            </tr>
          </thead>
          {matches.length !== 0 ? (
            <tbody>
              {matches.map(match => {
                return (
                  <tr key={match.id}>
                    <td>{matches.indexOf(match) + page.offset}</td>
                    <td>{match.name}</td>
                    <td>{match.symbol}</td>
                    <td>{match.quote.USD.market_cap}</td>
                    <td>{match.quote.USD.price}</td>
                    <td>{match.quote.USD.percent_change_1h}</td>
                    <td>{match.circulating_supply}</td>
                    <td>{match.quote.USD.volume_24h}</td>
                    <td>
                      <input
                        type="button"
                        name="add"
                        value="Add"
                        onClick={() => this.props.addUserCoin(match.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : coin.cmcCoins.length !== 0 ? (
            <tbody>
              {coin.cmcCoins.map(cmcCoin => {
                return (
                  <tr key={cmcCoin.id}>
                    <td>{coin.cmcCoins.indexOf(cmcCoin) + page.offset}</td>
                    <td>{cmcCoin.name}</td>
                    <td>{cmcCoin.symbol}</td>
                    <td>{cmcCoin.quote.USD.market_cap}</td>
                    <td>{cmcCoin.quote.USD.price}</td>
                    <td>{cmcCoin.quote.USD.percent_change_1h}</td>
                    <td>{cmcCoin.circulating_supply}</td>
                    <td>{cmcCoin.quote.USD.volume_24h}</td>
                    <td>
                      <input
                        type="button"
                        name="add"
                        value="Add"
                        onClick={() => this.props.addUserCoin(crypto.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <th>---</th>
                <th>---</th>
                <th>---</th>
                <th>---</th>
                <th>---</th>
                <th>---</th>
                <th>---</th>
                <th>---</th>
              </tr>
            </tbody>
          )}
          <tfoot>
            <tr>
              <td colSpan="8">KryptoDash &copy; 2019</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default connect(
  ({ coin, page }) => ({ coin, page }),
  { requestCMCCoins, addUserCoin }
)(Results);
