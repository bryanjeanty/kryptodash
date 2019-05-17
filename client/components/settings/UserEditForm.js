import React, { Component } from "react";
import { connect } from "react-redux";
import { update, destroyUser, requestUser } from "../../redux/actions/user";
import Router, { withRouter } from "next/router";

class UserEditForm extends Component {
  state = {
    name: "",
    email: "",
    bio: "",
    message: ""
  };

  componentWillMount() {
    this.props.requestUser();
    const { name, email, bio } = this.props.user;
    this.setState({ name, email, bio });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateUser = async event => {
    event.preventDefault();
    const { name, email, bio } = this.state;
    const user = { name, email, bio };
    await this.props.update(user);
    if (this.props.user.message !== "Error") {
      const { message, name, email, bio } = this.props.user;
      await this.setState({ message, name, email, bio });
      Router.replace("/dashboard");
    }
  };

  deleteUser = async () => {
    const destroy = confirm("Are you sure?");
    if (destroy) {
      await this.props.destroyUser();
      if (this.props.user.message !== "Error") {
        await this.setState({ message: this.props.user.message });
        setTimeout(() => {
          Router.replace("/");
        }, 300);
      }
    } else {
      this.setState({ message: "Woah! That was a close one!" });
    }
  };

  render() {
    const { name, email, bio, message } = this.state;

    return (
      <div>
        <p>{message}</p>
        <form>
          <input
            name="name"
            type="text"
            placeholder="Update first name..."
            value={name}
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
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { update, destroyUser, requestUser }
)(withRouter(UserEditForm));
