import React, { Component, Fragment } from "react";

export class Links extends Component {
  render() {
    return (
      <Fragment>
        <h4 className="font-weight-bold text-uppercase text-center my-4">
          Contact Us
        </h4>
        <ul className="list-unstyled text-center">
          <li>90 John Street</li>
          <li>Suite 404</li>
          <li>New York, NY 10038</li>
          <li />
          <li>P: 844-322-2633</li>
          <li>F: 844-322-2751</li>
        </ul>
        <style jsx>{`
          a {
            color: rgba(256, 256, 256, 0.8);
            font-weight: 350;
          }
        `}</style>
      </Fragment>
    );
  }
}
