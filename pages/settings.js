import React, { Component, Fragment } from "react";
import { withRouter } from "next/router";
import { UserEditForm } from "../components/settings/UserEditForm";

class Settings extends Component {
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

  state = {
    session: this.props.userData
  };

  render() {
    const { session } = this.state;

    return <UserEditForm session={session} />;
  }
}

export default withRouter(Settings);
