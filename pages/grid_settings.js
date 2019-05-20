import React, { Component } from "react";
import Layout from "../client/components/Layout";
import { checkSession } from "../client/functions/pages";

class GridSettings extends Component {
  static getInitialProps(ctx) {
    const session = checkSession(ctx);
    return { session };
  }

  render() {
    return (
      <Layout>
        <div className="form-container">Form Container</div>
      </Layout>
    );
  }
}

export default GridSettings;
