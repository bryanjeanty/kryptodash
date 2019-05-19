import React, { Component, Fragment } from "react";
import { NavBar } from "../components/bootstrap/NavBar";
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
              brand={{
                name: "KryptoDash",
                url: "/"
              }}
              cta="Get Started"
              actions={[
                { name: "Sign Up", id: "#signup" },
                { name: "Sign In", id: "#signin" }
              ]}
            />
            <Modal
              title="Sign Up"
              modalId="signup"
              action={{ name: "signup", handleClick: this.handleSignup }}
            >
              <Signup />
            </Modal>
            <Modal
              title="Sign In"
              modalId="signin"
              action={{ name: "signin", handleClick: this.handleSignin }}
            >
              <Signin />
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
            background-color: #eee;
            height: 100%;
            width: 85%;
            margin: 0 auto;

            display: grid;
            grid-template-rows: 6rem minmax(30rem, auto) 20rem;
            grid-gap: 1.5rem;
          }

          .layout > * {
            background-color: teal;
            color: white;
            font-size: 1.1rem;
          }

          .header {
            display: flex;
          }

          .footer {
            display: grid;
            grid-template-rows: repeat(4, 1fr);
            grid-gap: 1.25rem;
          }

          .footer > * {
            background-color: #222;
          }

          .secondary {
            grid-row: 1 / span 3;
            padding: 0.5rem;
            display: grid;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 0.25rem;
          }

          .secondary > * {
            background-color: #111;
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
