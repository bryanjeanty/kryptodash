import React, { Component, Fragment } from "react";
import Layout from "../client/components/Layout";
import SearchResults from "../client/components/index/SearchResults";
import Results from "../client/components/index/Results";
import Pagination from "../client/components/index/Pagination";
import { checkSession } from "../client/functions/pages";

class GridIndex extends Component {
  static getInitialProps(ctx) {
    const session = checkSession(ctx);
    return { session };
  }

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
            grid-gap: 0.75rem;
          }

          .index > * {
            background-color: #222;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.35);
          }

          .search {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .search-bar {
            height: 65%;
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .coin-table {
            height: 100%;
            width: 100%;
            font-size: 0.95rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          @media only screen and (max-width: 700px) {
            .coin-table {
              font-size: 0.75rem;
            }
          }

          .pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0;
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
