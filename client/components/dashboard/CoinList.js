import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  requestCMCCoins,
  requestUserCoins,
  deleteUserCoin
} from "../../redux/actions/coin";

class CoinList extends Component {
  async componentDidMount() {
    await this.props.requestCMCCoins();
    this.props.requestUserCoins(this.props.session);
  }

  render() {
    let username;
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("userData");
      if (userData) {
        username = userData.split("%")[1];
        username = username.charAt(0).toUpperCase() + username.slice(1);
      }
    }

    const { userCoins, cmcCoins, coinsLoading } = this.props.coin;

    return (
      <Fragment>
        {coinsLoading ? (
          <div>Loading</div>
        ) : (
          <table className="user-coin-table">
            <thead className="dark-head">
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Coin</th>
                <th className="remove" scope="col">
                  Remove
                </th>
              </tr>
            </thead>
            {userCoins ? (
              <tbody>
                {cmcCoins.map(coin => {
                  if (userCoins.includes(coin.symbol.toUpperCase())) {
                    return (
                      <tr key={coin.id}>
                        <th className="item" scope="row">
                          {userCoins.indexOf(coin.symbol) + 1}
                        </th>
                        <td className="user-coin">{`${coin.name} ${
                          coin.symbol
                        }`}</td>
                        <td className="remove">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() =>
                              this.props.deleteUserCoin(
                                coin.symbol.toUpperCase()
                              )
                            }
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            ) : (
              <tbody />
            )}
            <tfoot />
          </table>
        )}
        <style jsx>{`
          table {
            position: absolute;
            /*height: 100%;*/
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
          th {
            padding: 0 0.75rem;
          }
          td {
            padding: 0.75rem;
          }
          .user-coin {
            width: 70%;
          }
          .item {
            text-align: center;
          }
          .remove {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .btn-danger {
            border-radius: 0;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default connect(
  ({ coin }) => ({ coin }),
  { requestCMCCoins, requestUserCoins, deleteUserCoin }
)(CoinList);
