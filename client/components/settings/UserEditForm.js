import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { update, destroyUser, requestUser } from "../../redux/actions/user";
import Router, { withRouter } from "next/router";

class UserEditForm extends Component {
  state = {
    name: "",
    email: "",
    bio: ""
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
      Router.replace("/dashboard");
    }
  };

  deleteUser = async () => {
    event.preventDefault();
    const destroy = confirm("Are you sure?");
    if (destroy) {
      await this.props.destroyUser(this.props.session);
    } else {
      alert("Woah! That was a close one!");
    }
  };

  render() {
    const { name, email, bio } = this.state;

    return (
      <Fragment>
        <div className="user-edit-form">
          <form>
            <div className="form-group-inline">
              <div className="form-group">
                <label>First Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Update first name..."
                  value={name}
                  onChange={this.handleChange}
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Update email..."
                  value={email}
                  onChange={this.handleChange}
                  className="form-control"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Biography</label>
              <textarea
                className="form-control"
                name="bio"
                rows="3"
                placeholder="Update bio..."
                value={bio}
                onChange={this.handleChange}
              />
            </div>
            <div className="btn-group">
              <div className="delete-btn">
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={this.deleteUser}
                >
                  Delete
                </button>
              </div>
              <div className="update-btn">
                <button
                  className="btn btn-success"
                  type="submit"
                  onClick={this.updateUser}
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
        <style jsx>{`
          .user-edit-form {
            padding: 0.5rem;
            width: 75%;
            height: 75%;
          }
          .form-group-inline {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .form-group-inline > * {
            width: 45%;
          }
          .btn-group {
            display: flex;
            justify-content: space-between;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { update, destroyUser, requestUser }
)(withRouter(UserEditForm));
