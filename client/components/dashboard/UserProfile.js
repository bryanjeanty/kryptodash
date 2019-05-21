import React, { Component } from "react";
import { connect } from "react-redux";
// IMPORT ENCRYPTION/DECRYPTION LIBRARY

class UserProfile extends Component {
  render() {
    const { name, avatar } = this.props.user;

    return (
      <div className="user-avatar">
        <img src={avatar} alt={`${name}.png`} />
        <style jsx>{`
          .user-avatar {
            height: 100%;
            width: 100%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          img {
            height: 100%;
            width: 100%;
            object-fit: fill;
          }
        `}</style>
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  null
)(UserProfile);
