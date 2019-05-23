import React, { Component } from "react";
import Layout from "../client/components/Layout";
import { checkSession } from "../client/functions/pages";
import UserEditForm from "../client/components/settings/UserEditForm";

class GridSettings extends Component {
  static getInitialProps(ctx) {
    const session = checkSession(ctx);
    return { session };
  }

  render() {
    return (
      <Layout>
        <div className="form-container">
          <UserEditForm session={this.props.session} />
        </div>
        <style jsx>{`
          .form-container {
            background-color: #222;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </Layout>
    );
  }
}

export default GridSettings;
