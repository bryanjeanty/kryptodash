import React, { Component } from "react";
// import { connect } from "react-redux";
// import { signin } from "../../redux/actions/user";
// import Router, { withRouter } from "next/router";

class Signin extends Component {
  state = {
    email: "",
    password: "",
    message: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleClick = async event => {
  //   event.preventDefault();
  //   const { email, password } = this.state;
  //   const user = { email, password };
  //   console.log(user);
  //   await this.props.signin(user);
  //   if (this.props.user.message !== "Error") {
  //     this.setState({ message: this.props.user.message });
  //     setTimeout(() => {
  //       Router.replace("/dashboard");
  //     }, 200);
  //   }
  // };

  render() {
    const { email, password, message } = this.state;

    return (
      <div className="signin-form">
        <p>{message}</p>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email..."
              onChange={this.handleChange}
              value={email}
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password..."
              onChange={this.handleChange}
              value={password}
              className="form-control"
              autoComplete="off"
            />
          </div>
          {/* <input name="signin" type="submit" value="Sign In" onClick={this.handleClick} /> */}
        </form>
        <style jsx>{`
          label {
            color: #333;
          }
        `}</style>
      </div>
    );
  }
}

export default Signin;
// export default connect(
//   ({ user }) => ({ user }),
//   { signin }
// )(withRouter(Signin));
