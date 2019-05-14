import React, { Component, Fragment } from "react";
import Router from "next/router";
import Link from "next/link";
import { withRouter } from "next/router";
import { UserProfile } from "../client/components/dashboard/UserProfile";
import { CoinList } from "../client/components/dashboard/CoinList";

class Dashboard extends Component {
  // PUT BODY IN FUNCTIONS
  static getInitialProps(ctx) {
    let userData;
    if (typeof window !== "undefined") {
      userData = { userDataString: localStorage.getItem("userData") };
      if (Object.keys(userData).length === 0) {
        Router.replace("/");
      }
    } else {
      if (ctx.req) {
        userData = ctx.req.user;
        if (
          typeof userData === "undefined" ||
          Object.keys(userData).length === 0
        ) {
          ctx.res.redirect("/");
        }
      }
    }
    return { userData };
  }

  // REMOVE -- NO LONGER USEFUL
  state = {
    session: this.props.userData || ""
  };

  render() {
    // REMOVE -- NO LONGER USEFUL
    const { session } = this.state;
    return (
      <Fragment>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/settings">
          <a>Settings</a>
        </Link>
        {/* REMOVE SESSION PROP/VARIABLE */}
        <UserProfile session={session} />
        <CoinList session={session} />
      </Fragment>
    );
  }
}

export default withRouter(Dashboard);
