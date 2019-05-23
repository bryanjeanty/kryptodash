import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card } from "../bootstrap/Card";

class UserBio extends Component {
  render() {
    const { bio, name } = this.props.user;
    return (
      <Fragment>
        <Card title={name} info={bio} url="/settings" />
      </Fragment>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  null
)(UserBio);
