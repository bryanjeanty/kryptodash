import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";

export class UserEditForm extends Component {
  constructor(props) {
    super(props);
    const { session } = this.props;
    let sessionId, sessionName, sessionEmail, sessionBio;
    if (typeof session === "object") {
      sessionId = session._id || session.userDataString.split("%")[0];
      sessionName = session.firstName || session.userDataString.split("%")[1];
      sessionEmail = session.email || session.userDataString.split("%")[2];
      sessionBio = session.bio || session.userDataString.split("%")[5];
    }
    this.state = {
      id: sessionId,
      firstName: sessionName,
      email: sessionEmail,
      bio: sessionBio,
      message: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateUser = async event => {
    event.preventDefault();
    try {
      const { id, firstName, email, bio } = this.state;
      const updatedUser = { firstName, email, bio };
      console.log(updatedUser);
      const { data } = await axios.put(
        `http://localhost:3000/api/users/${id}`,
        updatedUser
      );

      if (data) {
        console.log(data);
        const { user } = data;
        this.setState({
          message: data.message,
          firstName: user.firstName,
          email: user.email,
          bio: user.bio
        });
        localStorage.clear();
        const userDataString = `${user._id}%${user.firstName}%${user.email}%${
          user.avatar
        }%${user.coins}%${user.bio}`;
        localStorage.setItem("userData", userDataString);
        Router.replace("/dashboard");
      }
    } catch (error) {
      console.error("Update User Error", error);
      this.setState({ message: error.message });
    }
  };

  deleteUser = async () => {
    const destroy = confirm("Are you sure?");
    if (destroy) {
      try {
        const { id } = this.state;
        const { message } = await axios.delete(
          `http://localhost:3000/api/users/${id}`
        );
        if (message) {
          this.setState({ message });
          localStorage.clear();
          Router.replace("/");
        }
      } catch (error) {
        if (error) {
          console.error("Delete User Error", error);
          this.setState({ message: error.message });
        }
      }
    } else {
      this.setState({ message: "Woah! That was a close one!" });
    }
  };

  render() {
    const { firstName, email, bio, message } = this.state;

    return (
      <div>
        <form>
          <input
            name="firstName"
            type="text"
            placeholder="Update first name..."
            value={firstName}
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Update email..."
            value={email}
            onChange={this.handleChange}
          />
          <textarea
            name="bio"
            rows="5"
            cols="50"
            placeholder="Update bio..."
            value={bio}
            onChange={this.handleChange}
          />
          <input
            name="update"
            type="submit"
            value="Update"
            onClick={this.updateUser}
          />
        </form>
        <button onClick={this.deleteUser}>Delete</button>
        <p>{message}</p>
      </div>
    );
  }
}
