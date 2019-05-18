import React, { Component, Fragment } from "react";

export class Pagination extends Component {
  state = {
    page: 0
  };

  componentDidMount() {
    this.setState({ page: this.props.page });
  }

  updatePage = num => {
    if (this.state.page + num > 0) {
      this.setState({ page: this.state.page + num });
    }
  };

  render() {
    const { page } = this.state;

    const remainder = (page + 2) % 3;
    let start;
    if (page > 0) {
      if (remainder === 0) {
        start = page;
      } else {
        start = page - remainder;
      }
    }

    return (
      <Fragment>
        <ul className="pagination justify-content-center">
          <li
            className={`page-item ${page === 1 ? "disabled" : ""}`}
            onClick={() => this.updatePage(-1)}
          >
            <a className="page-link">Previous</a>
          </li>
          <li
            className={`page-item ${start === page ? "active" : ""}`}
            onClick={() => this.updatePage(start - page)}
          >
            <a className="page-link">{start}</a>
          </li>
          <li
            className={`page-item ${start + 1 === page ? "active" : ""}`}
            onClick={() => this.updatePage(start - page + 1)}
          >
            <a className="page-link">{start + 1}</a>
          </li>
          <li
            className={`page-item ${start + 2 === page ? "active" : ""}`}
            onClick={() => this.updatePage(start - page + 2)}
          >
            <a className="page-link">{start + 2}</a>
          </li>
          <li className="page-item">
            <a className="page-link">...</a>
          </li>
          <li className="page-item" onClick={() => this.updatePage(1)}>
            <a className="page-link">Next</a>
          </li>
        </ul>
        <style jsx>{`
          ul > * {
            cursor: pointer;
          }
          .disabled {
            cursor: initial;
          }
          .active:hover {
            color: #fff;
          }
        `}</style>
      </Fragment>
    );
  }
}
