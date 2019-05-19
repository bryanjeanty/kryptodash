import React, { Component, Fragment } from "react";
import Link from "next/link";

export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer-wrapper">
          © 2019 Copyright:
          <Link href="/">
            <a> KryptoDash.com</a>
          </Link>
        </div>
        <style jsx>{`
          .footer-wrapper {
            padding: 3px 0;
            color: rgba(256, 256, 256, 0.75);
            font-weight: 300;
          }
          a {
            color: #fff;
            text-decoration: none;
          }
        `}</style>
      </Fragment>
    );
  }
}
