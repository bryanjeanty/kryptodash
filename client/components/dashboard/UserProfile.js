import React, { Component } from "react";
// IMPORT ENCRYPTION/DECRYPTION LIBRARY

export class UserProfile extends Component {
  // REMOVE ME
  constructor(props) {
    super(props);
  }

  render() {
    // REMOVE ME
    const { session } = this.props;

    // UPDATE TO GET SESSION DIRECTLY FROM ENCRYPTED LOCAL STORAGE USER DATA STRING
    let name, email, avatar, bio;
    if (typeof session === "object") {
      name = session.firstName || session.userDataString.split("%")[1];
      email = session.email || session.userDataString.split("%")[2];
      avatar = session.avatar || session.userDataString.split("%")[3];
      bio = session.bio || session.userDataString.split("%")[5];
    }

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
