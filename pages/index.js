import React, { Component, Fragment } from "react";
import Brand from "../client/components/index/Brand";
import Signup from "../client/components/index/Signup";
import Signin from "../client/components/index/Signin";
import Greeting from "../client/components/index/Greeting";
import Signout from "../client/components/index/Signout";
import SearchResults from "../client/components/index/SearchResults";
import Pagination from "../client/components/index/Pagination";
import { checkSession } from "../client/functions/pages";

class Index extends Component {
  static getInitialProps(ctx) {
    const session = checkSession(ctx);
    return { session };
  }

  render() {
    const { session } = this.props;

    return (
      <Fragment>
        <Brand />
        <Greeting />
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
        <SearchResults />
        <Pagination />
      </Fragment>
    );
  }
}

export default Index;
