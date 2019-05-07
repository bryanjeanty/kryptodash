import React, { Component } from "react";

export class Greeting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { session } = this.props;

    let sessionName;
    if (typeof session === "object") {
      const name = session.firstName || session.userDataString.split("%")[1];
      sessionName = name.charAt(0).toUpperCase() + name.slice(1);
    } else {
      sessionName = "";
    }

    return sessionName ? (
      <h4>Hello, {sessionName}!</h4>
    ) : (
      <h4>Hello, Guest!</h4>
    );
  }
}
