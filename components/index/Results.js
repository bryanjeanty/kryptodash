import React, { Component } from "react";
import { axiosCMC } from "../api/axios";
import fuzzy from "fuzzy";

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      cryptoList: [],
      page: 1,
      results: 15,
      offset: 1,
      search: "",
      matches: []
    };
  }

  componentDidMount() {
    this.getCryptos(this.state.offset);
  }

  decrement = async event => {
    event.preventDefault();
    await this.setState({
      page: this.state.page - 1,
      offset: this.state.offset - 15
    });
    await this.getCryptos(this.state.offset);
    this.searchCryptos(event);
  };

  increment = async event => {
    event.preventDefault();
    await this.setState({
      page: this.state.page + 1,
      offset: this.state.offset + 15
    });
    await this.getCryptos(this.state.offset);
    this.searchCryptos(event);
  };

  getCryptos = async offset => {
    this.setState({ isLoading: true });
    const endpoint = "/v1/cryptocurrency/listings/latest";
    let query = `?start=${offset}&limit=${this.state.results}`;
    console.log(query);
    try {
      const response = await axiosCMC(endpoint, query);
      this.setState({
        cryptoList: response.data,
        isLoading: false
      });
    } catch (error) {
      console.error("CMC Fetch Error", error);
      this.setState({ isLoading: false });
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  searchCryptos = event => {
    event.preventDefault();
    const { cryptoList, search } = this.state;
    const options = { extract: crypto => crypto.name };
    const results = fuzzy.filter(search, cryptoList, options);
    const matches = results.map(result => result.original);
    this.setState({ matches });
  };

  render() {
    const { cryptoList, isLoading, page, offset, search, matches } = this.state;
    const isDisabled = page === 1;

    return isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search cryptos..."
            value={search}
            onChange={this.handleChange}
          />
          <input
            name="searchButton"
            type="submit"
            value="Search"
            onClick={this.searchCryptos}
          />
        </form>
        <input
          type="button"
          disabled={isDisabled}
          onClick={this.decrement}
          value="Prev"
        />
        <input type="button" onClick={this.increment} value="Next" />
        <div>Page #: {page}</div>
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
            </tr>
          </thead>
          {matches.length !== 0 ? (
            <tbody>
              {matches.map(match => {
                return (
                  <tr key={match.id}>
                    <td>{matches.indexOf(match) + offset}</td>
                    <td>{match.name}</td>
                    <td>{match.symbol}</td>
                    <td>{match.quote.USD.market_cap}</td>
                    <td>{match.quote.USD.price}</td>
                    <td>{match.quote.USD.percent_change_1h}</td>
                    <td>{match.circulating_supply}</td>
                    <td>{match.quote.USD.volume_24h}</td>
                  </tr>
                );
              })}
            </tbody>
          ) : cryptoList.length !== 0 ? (
            <tbody>
              {cryptoList.map(crypto => {
                return (
                  <tr key={crypto.id}>
                    <td>{cryptoList.indexOf(crypto) + offset}</td>
                    <td>{crypto.name}</td>
                    <td>{crypto.symbol}</td>
                    <td>{crypto.quote.USD.market_cap}</td>
                    <td>{crypto.quote.USD.price}</td>
                    <td>{crypto.quote.USD.percent_change_1h}</td>
                    <td>{crypto.circulating_supply}</td>
                    <td>{crypto.quote.USD.volume_24h}</td>
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
