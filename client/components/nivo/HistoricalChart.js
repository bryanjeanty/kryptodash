import React, { Component } from "react";
import { ResponsiveLine } from "@nivo/line";
import axios from "axios";
import moment from "moment";
import { CRYPTO_KEY } from "../../api/env";
import { proxyEndpoint } from "../../api/url";

const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 4 * WEEK;

class HistoricalChart extends Component {
  state = {
    data: [
      {
        id: this.props.symbol,
        color: "#000",
        data: []
      }
    ]
  };

  async componentDidMount() {
    let historical = [];
    let response;
    let ts;
    let data;
    for (let i = 9; i >= 0; i--) {
      ts = moment().unix() - i * WEEK;
      response = await axios.get(
        `${proxyEndpoint}https://min-api.cryptocompare.com/data/pricehistorical?fsym=${
          this.props.symbol
        }&tsyms=USD&ts=${ts}&api_key=${CRYPTO_KEY}`,
        { withCredentials: false }
      );

      historical[9 - i] = {
        x: `${moment.unix(ts).format("MM/DD/YYYY")}`,
        y: response.data[this.props.symbol].USD
      };

      data = { ...this.state.data };
      data[0].data = historical;
    }
    if (data) {
      this.setState({ data });
    }
  }

  render() {
    console.log(this.state.data);
    return this.state.data[0].data ? (
      <div className="my-chart">
        <ResponsiveLine
          data={Object.values(this.state.data)}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear", stacked: true, min: "auto", max: "auto" }}
          axisTop={{
            orient: "top",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: `${this.props.symbol} Historical Price Data`,
            legendOffset: -37,
            legendPosition: "middle"
          }}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Dates",
            legendOffset: 36,
            legendPosition: "middle"
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Price",
            legendOffset: -40,
            legendPosition: "middle"
          }}
        />
        <style jsx>{`
          .my-chart {
            height: 20rem;
            width: 100%;
            background: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
          }
          .my-chart:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          }
        `}</style>
      </div>
    ) : (
      <div />
    );
  }
}

export default HistoricalChart;
