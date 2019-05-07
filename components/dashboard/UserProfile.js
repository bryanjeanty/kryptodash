import React, { Component } from "react";

export class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { session } = this.props;

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
