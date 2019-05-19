import React, { Component } from "react";
// import { connect } from "react-redux";
// import { signup, signin } from "../../redux/actions/user";
// import Router, { withRouter } from "next/router";

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

  // handleClick = async event => {
  //   event.preventDefault();
  //   const { firstName, lastName, email, password } = this.state;
  //   const user = { firstName, lastName, email, password };
  //   await this.props.signup(user);
  //   if (this.props.user.message !== "Error") {
  //     this.setState({ message: this.props.message });
  //     await this.props.signin(user);
  //     if (this.props.user.message !== "Error") {
  //       this.setState({ message: this.props.user.message });
  //       setTimeout(() => {
  //         Router.replace("/dashboard");
  //       }, 200);
  //     }
  //   } else {
  //     this.setState({ message: this.props.user.message });
  //   }
  // };

  render() {
    const { firstName, lastName, email, password, message } = this.state;

    return (
      <div className="signup-form">
        <p>{message}</p>
        <form>
          <div className="form-group-inline">
            <div className="form-group">
              <label>First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter first name..."
                onChange={this.handleChange}
                value={firstName}
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter last name..."
                onChange={this.handleChange}
                value={lastName}
                className="form-control"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter an email..."
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
              placeholder="Enter a password..."
              onChange={this.handleChange}
              value={password}
              className="form-control"
              autoComplete="off"
            />
          </div>
          {/* <input name="signup" type="submit" value="Signup" onClick={this.handleClick} /> */}
        </form>
        <style jsx>{`
          .form-group-inline {
            display: flex;
            align-items: center;
          }
          .form-group-inline > * {
            width: 45%;
            margin-right: auto;
          }
          label {
            color: #333;
          }
        `}</style>
      </div>
    );
  }
}

export default Signup;

// export default connect(
//   ({ user }) => ({ user }),
//   { signup, signin }
// )(withRouter(Signup));
