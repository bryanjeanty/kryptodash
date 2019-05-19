import React, { Component, Fragment } from "react";
import Layout from "../client/components/Layout";
import SearchResults from "../client/components/index/SearchResults";
import Results from "../client/components/index/Results";
import Pagination from "../client/components/index/Pagination";

class GridIndex extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <div className="index">
            <div className="search">
              <div className="search-bar">
                <SearchResults />
              </div>
            </div>
            <div className="coin-table">
              <Results />
            </div>
            <div className="pagination">
              <Pagination />
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

          .coin-table {
            height: 100%;
            width: 100%;
            font-size: 0.95rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .pagination {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .pagination > * {
            background-color: purple;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default GridIndex;
