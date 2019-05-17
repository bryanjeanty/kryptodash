import React, { Component } from "react";
import UserEditForm from "../client/components/settings/UserEditForm";
import { checkSession } from "../client/functions/pages";

class Settings extends Component {
  static getInitialProps(ctx) {
    const session = checkSession(ctx);
    return { session };
  }

  render() {
    return <UserEditForm session={this.props.session} />;
  }
}

export default Settings;
