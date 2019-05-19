import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { requestCMCCoins, addUserCoin } from "../../redux/actions/coin";

class Results extends Component {
  componentDidMount() {
    this.props.requestCMCCoins(this.props.page.offset);
  }

  render() {
    const { coin, search, page } = this.props;

    return (
      <Fragment>
        {coin.coinsLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="results">
            <table>
              <thead className="dark-head">
                <tr>
                  <th scope="col">Item #</th>
                  <th scope="col">Name</th>
                  <th scope="col">Market Cap</th>
                  <th scope="col">Price</th>
                  <th scope="col">Percent Change</th>
                  <th scope="col">Circulating Supply</th>
                  <th scope="col">Volume</th>
                  <th scope="col" />
                </tr>
              </thead>
              {search.matches.length !== 0 ? (
                <tbody>
                  {search.matches.map(match => {
                    return (
                      <tr key={match.id}>
                        <th className="item" scope="row">
                          {search.matches.indexOf(match) + page.offset}
                        </th>
                        <td>{match.name}</td>
                        <td>
                          {String(Math.floor(match.quote.USD.market_cap))
                            .length > 9
                            ? "$" +
                              String(match.quote.USD.market_cap).slice(
                                0,
                                String(Math.floor(match.quote.USD.market_cap))
                                  .length - 9
                              ) +
                              "." +
                              String(match.quote.USD.market_cap).slice(
                                String(Math.floor(match.quote.USD.market_cap))
                                  .length -
                                  9 +
                                  1,
                                String(Math.floor(match.quote.USD.market_cap))
                                  .length -
                                  9 +
                                  3
                              ) +
                              " B"
                            : String(Math.floor(match.quote.USD.market_cap))
                                .length > 6
                            ? "$" +
                              String(match.quote.USD.market_cap).slice(
                                0,
                                String(Math.floor(match.quote.USD.market_cap))
                                  .length - 6
                              ) +
                              "." +
                              String(match.quote.USD.market_cap).slice(
                                String(Math.floor(match.quote.USD.market_cap))
                                  .length -
                                  6 +
                                  1,
                                String(Math.floor(match.quote.USD.market_cap))
                                  .length -
                                  6 +
                                  3
                              ) +
                              " M"
                            : "$" +
                              String(Math.floor(match.quote.USD.market_cap))}
                        </td>
                        <td>{`$${match.quote.USD.price.toFixed(2)}`}</td>
                        <td>{`${match.quote.USD.percent_change_1h.toFixed(
                          2
                        )} %`}</td>
                        <td>
                          {String(Math.floor(match.circulating_supply)).length >
                          9
                            ? String(match.circulating_supply).slice(
                                0,
                                String(Math.floor(match.circulating_supply))
                                  .length - 9
                              ) +
                              "." +
                              String(match.circulating_supply).slice(
                                String(Math.floor(match.circulating_supply))
                                  .length -
                                  9 +
                                  1,
                                String(Math.floor(match.circulating_supply))
                                  .length -
                                  9 +
                                  3
                              ) +
                              " B " +
                              match.symbol
                            : String(Math.floor(match.circulating_supply))
                                .length > 6
                            ? String(match.circulating_supply).slice(
                                0,
                                String(Math.floor(match.circulating_supply))
                                  .length - 6
                              ) +
                              "." +
                              String(match.circulating_supply).slice(
                                String(Math.floor(match.circulating_supply))
                                  .length -
                                  6 +
                                  1,
                                String(Math.floor(match.circulating_supply))
                                  .length -
                                  6 +
                                  3
                              ) +
                              " M " +
                              match.symbol
                            : String(Math.floor(match.circulating_supply)) +
                              " " +
                              match.symbol}
                        </td>
                        <td>
                          {String(Math.floor(match.quote.USD.volume_24h))
                            .length > 9
                            ? "$" +
                              String(match.quote.USD.volume_24h).slice(
                                0,
                                String(Math.floor(match.quote.USD.volume_24h))
                                  .length - 9
                              ) +
                              "." +
                              String(match.quote.USD.volume_24h).slice(
                                String(Math.floor(match.quote.USD.volume_24h))
                                  .length -
                                  9 +
                                  1,
                                String(Math.floor(match.quote.USD.volume_24h))
                                  .length -
                                  9 +
                                  3
                              ) +
                              " B"
                            : String(Math.floor(match.quote.USD.volume_24h))
                                .length > 6
                            ? "$" +
                              String(match.quote.USD.volume_24h).slice(
                                0,
                                String(Math.floor(match.quote.USD.volume_24h))
                                  .length - 6
                              ) +
                              "." +
                              String(match.quote.USD.volume_24h).slice(
                                String(Math.floor(match.quote.USD.volume_24h))
                                  .length -
                                  6 +
                                  1,
                                String(Math.floor(match.quote.USD.volume_24h))
                                  .length -
                                  6 +
                                  3
                              ) +
                              " M"
                            : "$" +
                              String(Math.floor(match.quote.USD.volume_24h))}
                        </td>
                        <td>
                          <input
                            className="btn btn-success"
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
                        <th className="item" scope="row">
                          {coin.cmcCoins.indexOf(cmcCoin) + page.offset}
                        </th>
                        <td>{cmcCoin.name}</td>
                        <td>
                          {String(Math.floor(cmcCoin.quote.USD.market_cap))
                            .length > 9
                            ? "$" +
                              String(cmcCoin.quote.USD.market_cap).slice(
                                0,
                                String(Math.floor(cmcCoin.quote.USD.market_cap))
                                  .length - 9
                              ) +
                              "." +
                              String(cmcCoin.quote.USD.market_cap).slice(
                                String(Math.floor(cmcCoin.quote.USD.market_cap))
                                  .length -
                                  9 +
                                  1,
                                String(Math.floor(cmcCoin.quote.USD.market_cap))
                                  .length -
                                  9 +
                                  3
                              ) +
                              " B"
                            : String(Math.floor(cmcCoin.quote.USD.market_cap))
                                .length > 6
                            ? "$" +
                              String(cmcCoin.quote.USD.market_cap).slice(
                                0,
                                String(Math.floor(cmcCoin.quote.USD.market_cap))
                                  .length - 6
                              ) +
                              "." +
                              String(cmcCoin.quote.USD.market_cap).slice(
                                String(Math.floor(cmcCoin.quote.USD.market_cap))
                                  .length -
                                  6 +
                                  1,
                                String(Math.floor(cmcCoin.quote.USD.market_cap))
                                  .length -
                                  6 +
                                  3
                              ) +
                              " M"
                            : "$" +
                              String(Math.floor(cmcCoin.quote.USD.market_cap))}
                        </td>
                        <td>{`$${cmcCoin.quote.USD.price.toFixed(2)}`}</td>
                        <td>{`${cmcCoin.quote.USD.percent_change_1h.toFixed(
                          2
                        )} %`}</td>
                        <td>
                          {String(Math.floor(cmcCoin.circulating_supply))
                            .length > 9
                            ? String(cmcCoin.circulating_supply).slice(
                                0,
                                String(Math.floor(cmcCoin.circulating_supply))
                                  .length - 9
                              ) +
                              "." +
                              String(cmcCoin.circulating_supply).slice(
                                String(Math.floor(cmcCoin.circulating_supply))
                                  .length -
                                  9 +
                                  1,
                                String(Math.floor(cmcCoin.circulating_supply))
                                  .length -
                                  9 +
                                  3
                              ) +
                              " B " +
                              cmcCoin.symbol
                            : String(Math.floor(cmcCoin.circulating_supply))
                                .length > 6
                            ? String(cmcCoin.circulating_supply).slice(
                                0,
                                String(Math.floor(cmcCoin.circulating_supply))
                                  .length - 6
                              ) +
                              "." +
                              String(cmcCoin.circulating_supply).slice(
                                String(Math.floor(cmcCoin.circulating_supply))
                                  .length -
                                  6 +
                                  1,
                                String(Math.floor(cmcCoin.circulating_supply))
                                  .length -
                                  6 +
                                  3
                              ) +
                              " M " +
                              cmcCoin.symbol
                            : String(Math.floor(cmcCoin.circulating_supply)) +
                              " " +
                              cmcCoin.symbol}
                        </td>
                        <td>
                          {String(Math.floor(cmcCoin.quote.USD.volume_24h))
                            .length > 9
                            ? "$" +
                              String(cmcCoin.quote.USD.volume_24h).slice(
                                0,
                                String(Math.floor(cmcCoin.quote.USD.volume_24h))
                                  .length - 9
                              ) +
                              "." +
                              String(cmcCoin.quote.USD.volume_24h).slice(
                                String(Math.floor(cmcCoin.quote.USD.volume_24h))
                                  .length -
                                  9 +
                                  1,
                                String(Math.floor(cmcCoin.quote.USD.volume_24h))
                                  .length -
                                  9 +
                                  3
                              ) +
                              " B"
                            : String(Math.floor(cmcCoin.quote.USD.volume_24h))
                                .length > 6
                            ? "$" +
                              String(cmcCoin.quote.USD.volume_24h).slice(
                                0,
                                String(Math.floor(cmcCoin.quote.USD.volume_24h))
                                  .length - 6
                              ) +
                              "." +
                              String(cmcCoin.quote.USD.volume_24h).slice(
                                String(Math.floor(cmcCoin.quote.USD.volume_24h))
                                  .length -
                                  6 +
                                  1,
                                String(Math.floor(cmcCoin.quote.USD.volume_24h))
                                  .length -
                                  6 +
                                  3
                              ) +
                              " M"
                            : "$" +
                              String(Math.floor(cmcCoin.quote.USD.volume_24h))}
                        </td>
                        <td>
                          <input
                            className="btn btn-success"
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
                  <tr />
                </tbody>
              )}
            </table>
          </div>
        )}
        <style jsx>{`
          .results {
            height: 100%;
            width: 100%;
          }
          table {
            height: 100%;
            width: 100%;
          }
          .dark-head {
            background-color: #111;
          }
          tr {
            border-bottom: 0.75px solid #eee;
          }
          tr:last-child {
            border-bottom: none;
          }
          th,
          td {
            padding: 0.2rem;
          }
          .item {
            text-align: center;
          }
          .btn-success {
            border-radius: 0;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default connect(
  ({ coin, page, search }) => ({ coin, page, search }),
  { requestCMCCoins, addUserCoin }
)(Results);
