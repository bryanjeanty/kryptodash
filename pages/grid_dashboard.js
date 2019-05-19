import React, { Component, Fragment } from "react";
import Layout from "../client/components/Layout";

class GridDashboard extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <div className="dashboard">
            <div className="wallet-item-1">Wallet Item 1</div>
            <div className="wallet-item-2">Wallet Item 2</div>
            <div className="wallet-item-3">Wallet Item 3</div>
            <div className="avatar">Avatar</div>
            <div className="bio">Bio</div>
            <div className="coin-list">Coin List</div>
            <div className="coin-chart">
              <div className="prev">Prev</div>
              <div className="coin-logo">Coin Logo</div>
              <div className="coin-title">Coin Title</div>
              <div className="graph">Graph</div>
              <div className="next">Next</div>
            </div>
          </div>
        </Layout>
        <style jsx>{`
          .dashboard {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 6rem 8rem 6rem 20rem;
            grid-gap: 1.25rem;
          }

          .dashboard > * {
            background-color: orange;
            padding: 0.5rem;
          }

          .wallet-item-1 {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
          }

          .wallet-item-2 {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
          }

          .wallet-item-3 {
            grid-column: 3 / 4;
            grid-row: 1 / 2;
          }

          .avatar {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
          }

          .bio {
            grid-column: 1 / 2;
            grid-row: 3 / 4;
          }

          .coin-list {
            grid-column: 2 / span 2;
            grid-row: 2 / span 2;
          }

          .coin-chart {
            grid-column: 1 / -1;
            display: grid;
            grid-template-rows: repeat(5, 1fr);
            grid-template-columns: 1fr 2fr 6fr 1fr;
            grid-gap: 1.25rem;
          }

          .coin-chart > * {
            background-color: purple;
            padding: 0.5rem;
          }

          .prev {
            grid-column: 1 / 2;
            grid-row: 1 / -1;
          }

          .coin-logo {
            grid-column: 2 / 3;
            grid-row: 1 / span 3;
          }

          .coin-title {
            grid-column: 2 / 3;
            grid-row: 4 / -1;
          }

          .graph {
            grid-column: 3 / 4;
            grid-row: 1 / -1;
          }

          .next {
            grid-column: 4 / 5;
            grid-row: 1 / -1;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default GridDashboard;
