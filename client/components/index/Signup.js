import React, { Component } from "react";
import axios from "axios";

export class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    message: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = async event => {
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    const user = { firstName, lastName, email, password };
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/users/signup",
        user
      );
      if (data) {
        console.log(data);
        this.setState({
          message: data.message,
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        });
      }
    } catch (error) {
      if (error) {
        console.log(error);
        this.setState({ message: error.message, password: "" });
      }
    }
  };

  render() {
    const { firstName, lastName, email, password, message } = this.state;

    return (
      <div>
        <form>
          <input
            name="firstName"
            type="text"
            placeholder="Enter first name..."
            onChange={this.handleChange}
            value={firstName}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Enter last name..."
            onChange={this.handleChange}
            value={lastName}
          />
          <input
            name="email"
            type="email"
            placeholder="Enter an email..."
            onChange={this.handleChange}
            value={email}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter a password..."
            onChange={this.handleChange}
            value={password}
          />
          <input
            name="signup"
            type="submit"
            value="Signup"
            onClick={this.handleClick}
          />
        </form>
        <p>{message}</p>
      </div>
    );
  }
}
