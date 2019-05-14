import React, { Component } from "react";
import { withRouter } from "next/router";
import { UserEditForm } from "../client/components/settings/UserEditForm";

class Settings extends Component {
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

  // REMOVE ME
  state = {
    session: this.props.userData
  };

  render() {
    // REMOVE ME
    const { session } = this.state;

    // REMOVE SESSION PROP/VARIABLE
    return <UserEditForm session={session} />;
  }
}

export default withRouter(Settings);
