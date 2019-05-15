import React, { Component, Fragment } from "react";
import Link from "next/link";
import UserProfile from "../client/components/dashboard/UserProfile";
import CoinList from "../client/components/dashboard/CoinList";
import { checkSession } from "../client/functions/pages";

class Dashboard extends Component {
  static getInitialProps(ctx) {
    const session = checkSession(ctx);
    return { session };
  }

  render() {
    return (
      <Fragment>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/settings">
          <a>Settings</a>
        </Link>
        <UserProfile />
        <CoinList />
      </Fragment>
    );
  }
}

export default Dashboard;
