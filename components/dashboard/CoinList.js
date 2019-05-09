import React, { Component } from "react";
import { axiosCMC } from "../api/axios";
import axios from "axios";

export class CoinList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinIds: [],
      coinList: [],
      isLoading: false,
      message: ""
    };
  }

  componentDidMount() {
    this.getCryptos();
    this.getUserCoins();
  }

  getCryptos = async () => {
    this.setState({ isLoading: true });
    const endpoint = "/v1/cryptocurrency/listings/latest";
    let query = `?&limit=200`;
    try {
      const { data } = await axiosCMC(endpoint, query);
      if (data) {
        this.setState({ coinList: data, isLoading: false });
      }
    } catch (error) {
      this.setState({ isLoading: false });
      console.error("CMC Fetch Error", error);
    }
  };

  getUserCoins = () => {
    this.setState({ isLoading: true });
    const userData = localStorage.getItem("userData");
    if (userData) {
      let coinIds = userData.split("%")[4];
      if (coinIds.length === 0) {
        coinIds = [];
      } else if (coinIds.length === 1) {
        coinIds = [Number(coinIds)];
      } else {
        coinIds = coinIds.split("#");
        coinIds = coinIds.map(coinId => Number(coinId));
      }
      this.setState({ coinIds, isLoading: false });
    }
  };

  removeUserCoin = async id => {
    const remove = confirm("Are you sure?");
    if (remove) {
      const userData = localStorage.getItem("userData");
      let userId;
      let coinIds;
      if (userData) {
        userId = userData.split("%")[0];
        coinIds = userData.split("%")[4];
      }
      if (coinIds.length === 1) {
        coinIds = [];
      } else {
        coinIds = coinIds.split("#");
        coinIds = coinIds.map(coinId => Number(coinId));
        coinIds.splice(coinIds.indexOf(id), 1);
      }
      console.log(coinIds);
      const coinsObj = { coins: coinIds };
      try {
        const { data } = await axios.put(
          `http://localhost:3000/api/users/${userId}`,
          coinsObj
        );
        if (data) {
          console.log(data);
          const { user } = data;
          localStorage.removeItem("userData");
          let userDataString;
          if (user.coins.length !== 0) {
            const coinString = user.coins.join("#");
            userDataString = `${user._id}%${user.firstName}%${user.email}%${
              user.avatar
            }%${coinString}%${user.bio}`;
          } else {
            userDataString = `${user._id}%${user.firstName}%${user.email}%${
              user.avatar
            }%%${user.bio}`;
          }
          await localStorage.setItem("userData", userDataString);
          this.getUserCoins();
          this.setState({ message: data.message });
        }
      } catch (error) {
        console.error("Delete User Coin Error", error);
        this.setState({ message: error.message });
      }
    } else {
      this.setState({ message: "Good choice! Almost lost a coin ;)" });
    }
  };

  render() {
    const { coinIds, coinList, isLoading, message } = this.state;

    return isLoading ? (
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
                          onClick={() => this.removeUserCoin(coin.id)}
                        />
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="6">KryptoDash &copy; 2019</td>
              </tr>
            </tbody>
          )}
          <tfoot />
        </table>
      </div>
    );
  }
}
