import React, { Component } from "react";
import { connect } from "react-redux";
import { requestUser } from "../../redux/actions/user";
// IMPORT ENCRYPTION/DECRYPTION LIBRARY

class UserProfile extends Component {
  componentDidMount() {
    this.props.requestUser(this.props.session);
  }

  render() {
    const { name, email, avatar, bio } = this.props.user;

    return (
      <div>
        <h3>{name}</h3>
        <img src={avatar} alt={`${name}.png`} />
        <p>{email}</p>
        <p>{bio}</p>
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { requestUser }
)(UserProfile);
