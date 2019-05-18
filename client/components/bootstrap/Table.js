import React, { Component, Fragment } from "react";

export class Table extends Component {
  render() {
    const { list } = this.props;

    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Item</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {list ? (
            list.map(item => (
              <tr key={list.indexOf(item)}>
                <th scope="row">{list.indexOf(item)}</th>
                <td>{item.first}</td>
                <td>{item.last}</td>
                <td>{item.handle}</td>
              </tr>
            ))
          ) : (
            <tr>
              <th scope="row">1</th>
              <td colSpan="3">No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
