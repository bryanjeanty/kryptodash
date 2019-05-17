import React, { Component } from "react";
import { connect } from "react-redux";
import { signin } from "../../redux/actions/user";
import Router, { withRouter } from "next/router";

class Signin extends Component {
  state = {
    email: "",
    password: "",
    message: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const user = { email, password };
    await this.props.signin(user);
    if (this.props.user.message !== "Error") {
      this.setState({ message: this.props.user.message });
      setTimeout(() => {
        Router.replace("/dashboard");
      }, 200);
    }
  };

  render() {
    const { email, password, message } = this.state;

    return (
      <div>
        <p>{message}</p>
        <form onSubmit={this.handleSubmit}>
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
          <input name="signin" type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { signin }
)(withRouter(Signin));
