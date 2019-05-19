import React, { Component, Fragment } from "react";

export class ListGroup extends Component {
  render() {
    const { url, title, items } = this.props;

    return (
      <Fragment>
        <div className="listgroup-container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href={url}>
                {title}
              </a>
            </li>
          </ul>
          <div className="card">
            <ul className="list-group list-group-flush">
              {items ? (
                items.map(item => (
                  <li key={items.indexOf(item)} className="list-group-item">
                    {item}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No Items</li>
              )}
            </ul>
          </div>
        </div>
        <style jsx>{`
          .nav-tabs {
            margin-bottom: -1px;
            width: 100%;
          }
          .nav-link {
            border-radius: 0;
          }
          .card {
            width: 100%;
            border-radius: 0;
          }
        `}</style>
      </Fragment>
    );
  }
}
