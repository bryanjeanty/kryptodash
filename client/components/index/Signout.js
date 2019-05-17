import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "../../redux/actions/user";

class Signout extends Component {
  state = {
    message: ""
  };

  handleClick = async event => {
    event.preventDefault();
    await this.props.signout();
    if (this.props.user.message != "Error") {
      this.setState({ message: this.props.user.message });
      setTimeout(() => {
        location.reload();
      }, 200);
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

export default connect(
  ({ user }) => ({ user }),
  { signout }
)(Signout);
