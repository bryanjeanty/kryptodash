import React, { Component, Fragment } from "react";

class GridDashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className="dashboard">
          <div className="header">
            <div className="brand">Brand</div>
            <div className="cta-btn">Get Started</div>
          </div>
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
          <div className="footer">
            <div className="secondary">Secondary</div>
            <div className="primary">Primary</div>
          </div>
        </div>
        <style jsx>{`
          .dashboard {
            background-color: #eee;
            height: 100%;
            width: 85%;
            margin: 0 auto;

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 6rem) 8rem 6rem repeat(2, 20rem);
            grid-gap: 1.5rem;
          }

          .dashboard > * {
            background-color: teal;
            color: white;
            font-size: 1.1rem;
            padding: 1rem;
          }

          .header,
          .coin-chart,
          .footer {
            grid-column: 1 / -1;
          }

          .wallet-item-1 {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
          }

          .wallet-item-2 {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
          }

          .wallet-item-3 {
            grid-column: 3 / 4;
            grid-row: 2 / 3;
          }

          .avatar {
            grid-column: 1 / 2;
            grid-row: 3 / 4;
          }

          .bio {
            grid-column: 1 / 2;
            grid-row: 4 / 5;
          }

          .coin-list {
            grid-column: 2 / span 2;
            grid-row: 3 / span 2;
          }

          .header {
            display: flex;
            align-items: center;
          }

          .header > * {
            background-color: orange;
          }

          .brand {
            height: 75%;
            width: 40%;
            margin: 0 auto 0 0;
            padding-left: 0.25rem;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
          }

          .cta-btn {
            height: 60%;
            width: 6.5rem;
            margin: 0 0 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .coin-chart {
            display: grid;
            grid-template-rows: repeat(5, 1fr);
            grid-template-columns: 1fr 2fr 6fr 1fr;
            grid-gap: 1.25rem;
          }

          .coin-chart > * {
            background-color: orange;
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

          .footer {
            display: grid;
            grid-template-rows: repeat(4, 1fr);
            grid-gap: 1.25rem;
          }

          .footer > * {
            background-color: orange;
          }

          .secondary {
            grid-row: 1 / span 3;
            padding: 0.5rem;
          }

          .primary {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default GridDashboard;
