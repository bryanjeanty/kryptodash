import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { requestUser } from "../../redux/actions/user";
// IMPORT ENCRYPT/DECRYPT LIBRARY

class Greeting extends Component {
  async componentDidMount() {
    await this.props.requestUser();
  }

  render() {
    const { name } = this.props.user;

    return name ? (
      <h4>
        Hello,{" "}
        <Link href="/dashboard">
          <a>{name}!</a>
        </Link>
      </h4>
    ) : (
      <h4>Hello, Guest!</h4>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { requestUser }
)(Greeting);
