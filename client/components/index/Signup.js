import React, { Component } from "react";
import { connect } from "react-redux";
import { signup, signin } from "../../redux/actions/user";
import Router, { withRouter } from "next/router";

class Signup extends Component {
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

  handleSubmit = async event => {
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    const user = { firstName, lastName, email, password };
    await this.props.signup(user);
    if (this.props.user.message !== "Error") {
      this.setState({ message: this.props.message });
      await this.props.signin(user);
      if (this.props.user.message !== "Error") {
        this.setState({ message: this.props.user.message });
        setTimeout(() => {
          Router.replace("/dashboard");
        }, 200);
      }
    } else {
      this.setState({ message: this.props.user.message });
    }
  };

  render() {
    const { firstName, lastName, email, password, message } = this.state;

    return (
      <div>
        <p>{message}</p>
        <form method="post" onSubmit={this.handleSubmit}>
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
          <input name="signup" type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { signup, signin }
)(withRouter(Signup));
