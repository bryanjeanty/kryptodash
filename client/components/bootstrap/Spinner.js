import React, { Component, Fragment } from "react";

export class Spinner extends Component {
  render() {
    return (
      <Fragment>
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-primary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <style jsx>{`
          .spinner-grow {
            font-size: 1.25rem;
          }
        `}</style>
      </Fragment>
    );
  }
}
