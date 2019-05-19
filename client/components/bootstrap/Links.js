import React, { Component, Fragment } from "react";
import Link from "next/link";

export class Links extends Component {
  render() {
    return (
      <Fragment>
        <h5 className="font-weight-bold text-uppercase text-center my-4">
          Links
        </h5>
        <ul className="list-unstyled text-center">
          <li>
            <Link href="#">
              <a>Link</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Link</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Link</a>
            </Link>
          </li>
        </ul>
        <style jsx>{`
          a {
            color: #fff;
          }
        `}</style>
      </Fragment>
    );
  }
}
