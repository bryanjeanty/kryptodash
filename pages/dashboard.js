import React, { Component, Fragment } from "react";
import Layout from "../client/components/Layout";
import { checkSession } from "../client/functions/pages";
import UserChart from "../client/components/dashboard/UserChart";
import CoinList from "../client/components/dashboard/CoinList";
import UserProfile from "../client/components/dashboard/UserProfile";
import UserBio from "../client/components/dashboard/UserBio";
import { connect } from "react-redux";
import { requestUser } from "../client/redux/actions/user";

class GridDashboard extends Component {
  static getInitialProps(ctx) {
    const session = checkSession(ctx);
    return { session };
  }

  componentDidMount() {
    this.props.requestUser(this.props.session);
  }

  render() {
    return (
      <Fragment>
        <Layout>
          <div className="dashboard">
            {/* <div className="wallet-item-1">Wallet Item 1</div>
            <div className="wallet-item-2">Wallet Item 2</div>
            <div className="wallet-item-3">Wallet Item 3</div> */}
            <div className="avatar">
              <UserProfile session={this.props.session} />
            </div>
            <div className="bio">
              <UserBio />
            </div>
            <div className="coin-list">
              <CoinList session={this.props.session} />
            </div>
            <div className="coin-chart">
              <UserChart session={this.props.session} />
            </div>
          </div>
        </Layout>
        <style jsx>{`
          .dashboard {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: 11rem 8rem 21rem;
            grid-gap: 1rem;
          }

          .dashboard > * {
            background-color: #222;
          }

           {
            /* .wallet-item-1 {
            grid-column: 1 / span 2;
            grid-row: 1 / 2;
          }

          .wallet-item-2 {
            grid-column: 3 / span 2;
            grid-row: 1 / 2;
          }

          .wallet-item-3 {
            grid-column: 5 / span 2;
            grid-row: 1 / 2;
          } */
          }

          .avatar {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            position: relative;
          }

          .bio {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            position: relative;
            font-size: 0.75rem;
          }

          .coin-list {
            grid-column: 2 / -1;
            grid-row: 1 / span 2;
            position: relative;
            overflow-y: scroll;
          }

          @media only screen and (max-width: 700px) {
            .avatar {
              grid-column: 1 / span 2;
            }

            .bio {
              grid-column: 1 / span 2;
            }

            .coin-list {
              grid-column: 3 / -1;
            }
          }

          .coin-chart {
            grid-column: 1 / -1;
            display: grid;
            position: relative;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { requestUser }
)(GridDashboard);
