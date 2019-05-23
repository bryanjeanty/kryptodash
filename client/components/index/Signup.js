import React, { Component } from "react";

class Signup extends Component {
  render() {
    const { handleChange, firstName, lastName, email, password } = this.props;

    return (
      <div className="signup-form">
        <form>
          <div className="form-group-inline">
            <div className="form-group">
              <label>First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter first name..."
                onChange={handleChange}
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
                onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              value={password}
              className="form-control"
              autoComplete="off"
            />
          </div>
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
