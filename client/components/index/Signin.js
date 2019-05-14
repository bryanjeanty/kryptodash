import React, { Component } from "react";
import axios from "axios";

export class Signin extends Component {
  state = {
    email: "",
    password: "",
    message: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = async event => {
    event.preventDefault();
    try {
      const { email, password } = this.state;
      const user = { email, password };
      const { data } = await axios.post(
        "http://localhost:3000/api/session/signin",
        user
      );
      if (data) {
        console.log(data);
        const { user } = data;
        this.setState({ message: data.message, email: "", password: "" });
        let userDataString;
        if (user.coins.length !== 0) {
          const coinString = user.coins.join("#");
          userDataString = `${user._id}%${user.firstName}%${user.email}%${
            user.avatar
          }%${coinString}%${user.bio}`;
        } else {
          userDataString = `${user._id}%${user.firstName}%${user.email}%${
            user.avatar
          }%%${user.bio}`;
        }
        localStorage.setItem("userData", userDataString);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    } catch (error) {
      if (error) {
        console.error("signin error", error);
        this.setState({ message: error.message, password: "" });
      }
    }
  };

  render() {
    const { email, password, message } = this.state;

    return (
      <div>
        <form>
          <input
            name="email"
            type="email"
            placeholder="Enter your email..."
            onChange={this.handleChange}
            value={email}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter your password..."
            onChange={this.handleChange}
            value={password}
          />
          <input
            name="signin"
            type="submit"
            value="Signin"
            onClick={this.handleClick}
          />
        </form>
        <p>{message}</p>
      </div>
    );
  }
}
