import React, { Component, Fragment } from "react";
import Layout from "../client/components/Layout";

class GridIndex extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <div className="index">
            <div className="search">
              <div className="search-bar">Search Bar</div>
            </div>
            <div className="coin-list">Coin List</div>
            <div className="pagination">
              <div className="prev">Prev</div>
              <div className="next">Next</div>
            </div>
          </div>
        </Layout>
        <style jsx>{`
          .index {
            display: grid;
            grid-template-rows: 6rem 32rem 6rem;
            grid-gap: 1.25rem;
          }

          .index > * {
            background-color: orange;
            padding: 0.5rem;
          }

          .search {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .search-bar {
            background-color: purple;
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
            background-color: purple;
          }

          .prev {
            margin: 0 auto 0 0;
          }

          .next {
            margin: 0 0 0 auto;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default GridIndex;
