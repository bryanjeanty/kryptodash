import React, { Component, Fragment } from "react";

class GridIndex extends Component {
  render() {
    return (
      <Fragment>
        <div className="index">
          <div className="header">Header</div>
          <div className="search">Search</div>
          <div className="coin-list">Coin List</div>
          <div className="pagination">Pagination</div>
          <div className="footer">Footer</div>
        </div>
        <style jsx>{`
          .index {
            background-color: #eee;
            height: 100%;
            width: 80%;
            margin: 0 auto;

            display: grid;
            grid-template-rows: repeat(2, 5.5rem) 32rem 5.5rem 20rem;
            grid-gap: 1.5rem;
          }

          .index > * {
            background-color: teal;
            color: white;
            font-size: 1.1rem;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default GridIndex;
