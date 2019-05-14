import React, { Component } from "react";
// IMPORT AXIOS SESSION FUNCTION
// IMPORT URLS
// REMOVE ME
import axios from "axios";

export class Signout extends Component {
  state = {
    message: ""
  };

  // PUT ME IN FUNCTIONS
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
