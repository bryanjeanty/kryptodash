import React, { Component, Fragment } from "react";
import { UserProfile } from "../components/dashboard/UserProfile";
import { CoinList } from "../components/dashboard/CoinList";

class Dashboard extends Component {
  static getInitialProps(ctx) {
    let userData;
    if (typeof window !== "undefined") {
      userData = { userDataString: localStorage.getItem("userData") };
    } else {
      if (ctx.req) {
        userData = ctx.req.user;
      }
    }
    return { userData };
  }

  state = {
    session: this.props.userData || ""
  };

  render() {
    return (
      <Fragment>
        <UserProfile session={session} />
        <CoinList />
      </Fragment>
    );
  }
}

export default Dashboard;
