import React, { Component } from "react";

export class CoinList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinIds: []
    };
  }

  componentDidMount() {
    this.getCoins();
  }

  getCoins = () => {
    const { session } = this.props;
    if (typeof session === "object") {
      this.setState({
        coinIds: session.coins || session.userDataString.split("%")[5]
      });
    }
  };

  render() {
    const { coinIds } = this.state;

    return (
      <ul>
        {coinIds ? coinIds.map(coin => <li key={coin}>{coin}</li>) : <li />}
      </ul>
    );
  }
}
