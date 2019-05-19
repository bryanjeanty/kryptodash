import React, { Component, Fragment } from "react";
import Link from "next/link";
import { Button } from "./Button";

export class NavBar extends Component {
  render() {
    const { brand, cta, actions } = this.props;

    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link href={brand.url}>
            <a className="navbar-brand">{brand.name}</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li key="item-1" className="nav-item active dropdown">
                <a
                  className="btn btn-outline-light nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {cta}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {actions ? (
                    actions.map(action => (
                      <Button
                        key={actions.indexOf(action)}
                        value={action.name}
                        color="link dropdown-item"
                        datatoggle="modal"
                        datatarget={action.id}
                      />
                    ))
                  ) : (
                    <a />
                  )}
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <style jsx>{`
          .navbar {
            width: 100%;
            height: 100%;
          }
          .btn {
            border-radius: 0;
          }
          .btn:hover {
            cursor: pointer;
            background: none;
          }
        `}</style>
      </Fragment>
    );
  }
}
