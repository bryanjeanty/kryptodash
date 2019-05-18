import React, { Component, Fragment } from "react";
import Link from "next/link";

export class Card extends Component {
  render() {
    const { src, alt, title, info, lg, url } = this.props;

    return (
      <Fragment>
        <div className="card">
          <img src={src} className="card-img-top" alt={alt} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{info}</p>
            <Link href={url}>
              <a className="card-link">Edit Profile</a>
            </Link>
          </div>
        </div>
        <style jsx>{`
          .card {
            width: 18rem;
            border-radius: 0;
          }
          .card-img-top {
            display: ${src ? "block" : "none"};
          }
          .card-text {
            font-size: ${lg ? "1.5rem" : "1rem"};
          }
          .card-link {
            display: ${url ? "block" : "none"};
          }
          .card-title {
            display: ${title ? "block" : "none"};
          }
        `}</style>
      </Fragment>
    );
  }
}
