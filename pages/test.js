import React, { Component, Fragment } from "react";
import UserChart from "../client/components/dashboard/UserChart";
import { checkSession } from "../client/functions/pages";

class Test extends Component {
  static getInitialProps(ctx) {
    const session = checkSession(ctx);
    return { session };
  }

  render() {
    return (
      <Fragment>
        <UserChart session={this.props.session} />
      </Fragment>
    );
  }
}

export default Test;
