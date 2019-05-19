import React, { Component, Fragment } from "react";

export class Search extends Component {
  render() {
    const { input, handleChange } = this.props;

    return (
      <Fragment>
        <form className="form-inline my-2 my-lg-0">
          <input
            name="input"
            className="input-1 form-control mx-sm-2"
            type="search"
            value={input}
            onChange={handleChange}
            placeholder="Search"
            aria-label="Search"
          />
          <input
            className="input-2 form-control mx-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
        <style jsx>{`
          .input-1 {
            display: ${handleChange ? "block" : "none"};
          }
          .input-2 {
            display: ${handleChange ? "none" : "block"};
            width: 75%;
          }
        `}</style>
      </Fragment>
    );
  }
}
