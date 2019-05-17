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

  async componentDidMount() {
    await this.props.requestUser(this.props.session);
    const { name, email, bio } = this.props.user;
    this.setState({ name, email, bio });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateUser = async event => {
    event.preventDefault();
    const { name, email, bio } = this.state;
    const user = { firstName: name, email, bio };
    await this.props.update(user);
    if (this.props.user.message !== "Error") {
      this.setState({ message: this.props.user.message });
      setTimeout(() => {
        Router.replace("/dashboard");
      }, 200);
    }
  };

  deleteUser = async () => {
    event.preventDefault();
    const destroy = confirm("Are you sure?");
    if (destroy) {
      await this.props.destroyUser(this.props.session);
      if (this.props.user.message !== "Error") {
        this.setState({ message: this.props.user.message });
        setTimeout(() => {
          location.reload();
        }, 200);
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
