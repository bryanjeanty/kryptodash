import React, { Component, Fragment } from "react";
import { Header } from "../components/index/Header";
import { Signup } from "../components/index/Signup";
import { Signin } from "../components/index/Signin";
import { Greeting } from "../components/index/Greeting";
import { Signout } from "../components/index/Signout";

class Index extends Component {
  static getInitialProps(ctx) {
    let userData;
    if (typeof window !== "undefined") {
      userData = localStorage.getItem("userData");
    } else {
      if (ctx.req) {
        userData = ctx.req.user;
      }
    }
    return { userData };
  }

  state = {
    session: this.props.userData
  };

  render() {
    const { session } = this.state;

    return (
      <Fragment>
        <Header />
        {session ? (
          <div>
            <Greeting />
            <Signout />
          </div>
        ) : (
          <div>
            <Signup />
            <Signin />
          </div>
        )}
      </Fragment>
    );
  }
}

export default Index;
