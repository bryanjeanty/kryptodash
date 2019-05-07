import React, { Component } from "react";

export class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { session } = this.props;

    let name, avatar;
    if (typeof session === "object") {
      name = session.firstName || session.userDataString.split("%")[1];
      avatar = session.avatar || session.userDataString.split("%")[3];
    }

    return (
      <div>
        <h3>{name}</h3>
        <img src={avatar} alt={`${name}.png`} />
      </div>
    );
  }
}
