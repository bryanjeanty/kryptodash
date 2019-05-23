import React, { Component } from "react";

class Signin extends Component {
  render() {
    const { handleChange, email, password } = this.props;

    return (
      <div className="signin-form">
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email..."
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
              placeholder="Enter your password..."
              onChange={handleChange}
              value={password}
              className="form-control"
              autoComplete="off"
            />
          </div>
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
