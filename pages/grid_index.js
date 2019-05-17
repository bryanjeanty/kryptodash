import React, { Component, Fragment } from "react";

class GridIndex extends Component {
  render() {
    return (
      <Fragment>
        <div className="index">
          <div className="header">
            <div className="brand">Brand</div>
            <div className="cta-btn">Get Started</div>
          </div>
          <div className="search">
            <div className="search-bar">Search Bar</div>
          </div>
          <div className="coin-list">Coin List</div>
          <div className="pagination">
            <div className="prev">Prev</div>
            <div className="next">Next</div>
          </div>
          <div className="footer">
            <div className="secondary">Secondary</div>
            <div className="primary">Primary</div>
          </div>
        </div>
        <style jsx>{`
          .index {
            background-color: #eee;
            height: 100%;
            width: 85%;
            margin: 0 auto;

            display: grid;
            grid-template-rows: repeat(2, 5.5rem) 32rem 5.5rem 20rem;
            grid-gap: 1.5rem;
          }

          .index > * {
            background-color: teal;
            color: white;
            font-size: 1.1rem;
            padding: 1rem;
          }

          .header {
            display: flex;
            align-items: center;
          }

          .header > * {
            background-color: orange;
          }

          .brand {
            margin: 0 auto 0 0;
            height: 75%;
            width: 40%;
            display: flex;
            align-items: center;
            font-size: 1.5rem;
            padding-left: 0.25rem;
          }

          .cta-btn {
            margin: 0 0 0 auto;
            height: 60%;
            width: 6.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .search {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .search-bar {
            background-color: orange;
            height: 65%;
            width: 80%;
          }

          .pagination {
            display: flex;
            align-items: center;
          }

          .pagination > * {
            padding: 0.1 rem;
            height: 50%;
            width: 4rem;
            background-color: orange;
          }

          .prev {
            margin: 0 auto 0 0;
          }

          .next {
            margin: 0 0 0 auto;
          }

          .footer {
            display: grid;
            grid-template-rows: repeat(4, 1fr);
            grid-gap: 1.5rem;
          }

          .footer > * {
            background-color: orange;
          }

          .secondary {
            grid-row: 1 / 4;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default GridIndex;
