// imports
import React, { Component } from "react";
import { axiosCMC } from "../api/axios";

// cmc api
const cryptosEndpoint = "/v1/cryptocurrency/listings/latest";
const cryptosQuery = "?limit=20";

class Index extends Component {
  state = {
    cryptoList: []
  };

  getCryptos = async () => {
    try {
      const response = await axiosCMC(cryptosEndpoint, cryptosQuery);
      this.setState({ cryptoList: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { cryptoList } = this.state;

    return (
      <div>
        <button onClick={this.getCryptos}>Get Cryptos</button>
        {cryptoList ? (
          <ul>
            {cryptoList.map(crypto => (
              <li key={crypto.id}>{crypto.name}</li>
            ))}
          </ul>
        ) : (
          <ul>No Data</ul>
        )}
      </div>
    );
  }
}

export default Index;
