import React, { Component, Fragment } from "react";
import { withRouter } from "next/router";
import { Brand } from "../components/index/Brand";
import { Signup } from "../components/index/Signup";
import { Signin } from "../components/index/Signin";
import { Greeting } from "../components/index/Greeting";
import { Signout } from "../components/index/Signout";
import { Results } from "../components/index/Results";

class Index extends Component {
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
    const { session } = this.state;

    return (
      <Fragment>
        <Brand />
        <Greeting session={session} />
        {session ? (
          <div>
            <Signout />
          </div>
        ) : (
          <div>
            <Signup />
            <Signin />
          </div>
        )}
        <Results />
      </Fragment>
    );
  }
}

export default withRouter(Index);
