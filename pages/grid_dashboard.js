import React, { Component, Fragment } from "react";
import Layout from "../client/components/Layout";
import { checkSession } from "../client/functions/pages";
import UserChart from "../client/components/dashboard/UserChart";

class GridDashboard extends Component {
  static getInitialProps(ctx) {
    const session = checkSession(ctx);
    return { session };
  }

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
              <UserChart session={this.props.session} />
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
            position: relative;
            width: 100%;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default GridDashboard;
