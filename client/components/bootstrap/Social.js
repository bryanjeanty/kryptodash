import React, { Component, Fragment } from "react";

export class Social extends Component {
  render() {
    return (
      <Fragment>
        <a href="#">
          <i className="fab fa-facebook-f mr-md-5 mr-3"> </i>
        </a>
        <a href="#">
          <i className="fab fa-twitter mr-md-5 mr-3"> </i>
        </a>
        <a href="#">
          <i className="fab fa-google-plus-g mr-md-5 mr-3"> </i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin-in mr-md-5 mr-3"> </i>
        </a>
        <a href="#">
          <i className="fab fa-instagram mr-md-5 mr-3"> </i>
        </a>
        <a href="#">
          <i className="fab fa-pinterest"> </i>
        </a>
        <style jsx>{`
          .fab {
            color: #fff;
          }
        `}</style>
      </Fragment>
    );
  }
}
