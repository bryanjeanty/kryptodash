import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";

export class Signout extends Component {
  state = {
    message: ""
  };

  handleClick = async event => {
    event.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/session/signout"
      );
      if (data) {
        console.log(data);
        this.setState({ message: data.message });
        localStorage.clear();
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    } catch (error) {
      if (error) {
        console.error("signout error", error);
        this.setState({ message: error.message });
      }
    }
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Signout</button>
        <p>{message}</p>
      </div>
    );
  }
}
