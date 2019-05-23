import React, { Component, Fragment } from "react";
import NavBar from "../components/bootstrap/NavBar";
import { Modal } from "../components/bootstrap/Modal";
import { Search } from "../components/bootstrap/Search";
import { Social } from "../components/bootstrap/Social";
import { Footer } from "../components/bootstrap/Footer";
import { Links } from "../components/bootstrap/Links";
import Signup from "../components/index/Signup";
import Signin from "../components/index/Signin";
import { connect } from "react-redux";
import { signup, signin } from "../redux/actions/user";
import Router, { withRouter } from "next/router";

class Layout extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    message: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignup = async event => {
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    const user = { firstName, lastName, email, password };
    await this.props.signup(user);
    if (this.props.user.message !== "Error") {
      this.setState({ message: this.props.message });
      await this.props.signin(user);
      if (this.props.user.message !== "Error") {
        this.setState({ message: this.props.user.message });
        setTimeout(() => {
          Router.replace("/dashboard");
        }, 200);
      }
    } else {
      this.setState({ message: this.props.user.message });
    }
  };

  handleSignin = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const user = { email, password };
    console.log(user);
    await this.props.signin(user);
    if (this.props.user.message !== "Error") {
      this.setState({ message: this.props.user.message });
      setTimeout(() => {
        Router.replace("/dashboard");
      }, 200);
    }
  };

  render() {
    return (
      <Fragment>
        <div className="layout">
          <div className="header">
            <NavBar
              session={this.props.session}
              brand={{
                name: "KryptoDash",
                url: "/"
              }}
              cta="Get Started"
              actions={[
                { name: "Sign Up", id: "signup" },
                { name: "Sign In", id: "signin" }
              ]}
            />
            <Modal
              title="Sign Up"
              modalId="signup"
              action={{ name: "signup", handleClick: this.handleSignup }}
            >
              <Signup
                handleChange={this.handleChange}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                password={this.state.password}
                message={this.state.message}
              />
            </Modal>
            <Modal
              title="Sign In"
              modalId="signin"
              action={{ name: "signin", handleClick: this.handleSignin }}
            >
              <Signin
                handleChange={this.handleChange}
                email={this.state.email}
                password={this.state.password}
                message={this.state.message}
              />
            </Modal>
          </div>
          {this.props.children}
          <div className="footer">
            <div className="secondary">
              <div className="links">
                <Links />
              </div>
              <div className="footer-search">
                <Search />
              </div>
              <div className="social">
                <Social />
              </div>
            </div>
            <div className="primary">
              <Footer />
            </div>
          </div>
        </div>
        <style global jsx>{`
          .layout {
            background-color: #444;
            height: 100%;
            width: 90%;
            margin: 0 auto;

            display: grid;
            grid-template-rows: 6rem minmax(30rem, auto) 20rem;
            grid-gap: 0.75rem;
          }

          .layout > * {
            background-color: #444;
            color: white;
            font-size: 1.1rem;
          }

          .header {
            display: flex;
          }

          .footer {
            display: grid;
            grid-template-rows: repeat(4, 1fr);
            grid-gap: 0.75rem;
          }

          .footer > * {
            background-color: #444;
          }

          .secondary {
            grid-row: 1 / span 3;
            display: grid;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1rem;
          }

          .secondary > * {
            background-color: #222;
          }

          .links {
            grid-row: 1 / 3;
            grid-column: 1 / 2;
          }

          .footer-search {
            grid-row: 1 / 2;
            grid-column: 2 / 3;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .social {
            grid-row: 2 / 3;
            grid-column: 2 / 3;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
          }

          .primary {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #222;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { signup, signin }
)(withRouter(Layout));
