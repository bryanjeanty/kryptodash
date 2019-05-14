import React, { Component } from "react";
import Link from "next/link";
// IMPORT ENCRYPT/DECRYPT LIBRARY

export class Greeting extends Component {
  // REMOVE ME
  constructor(props) {
    super(props);
  }

  render() {
    // REMOVE ME
    const { session } = this.props;

    // UPDATE TO GET SESSION FROM ENCRYPTED USER DATA STRING
    let sessionName;
    if (typeof session === "object") {
      const name = session.firstName || session.userDataString.split("%")[1];
      sessionName = name.charAt(0).toUpperCase() + name.slice(1);
    } else {
      sessionName = "";
    }

    return sessionName ? (
      <h4>
        Hello,{" "}
        <Link href="/dashboard">
          <a>{sessionName}!</a>
        </Link>
      </h4>
    ) : (
      <h4>Hello, Guest!</h4>
    );
  }
}
