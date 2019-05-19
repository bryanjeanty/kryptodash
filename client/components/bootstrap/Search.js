import React, { Component, Fragment } from "react";

export class Search extends Component {
  render() {
    return (
      <Fragment>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mx-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
        <style jsx>{`
          .form-control {
            width: 75%;
          }
        `}</style>
      </Fragment>
    );
  }
}
