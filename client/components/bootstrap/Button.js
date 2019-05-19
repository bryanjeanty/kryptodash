import React, { Component } from "react";

export class Button extends Component {
  handleClick = event => {
    event.preventDefault();
  };

  render() {
    const { color, value, datatoggle, datatarget } = this.props;

    return (
      <div>
        <button
          type="button"
          className={`btn btn-${color}`}
          data-toggle={datatoggle}
          data-target={datatarget}
          onClick={this.handleClick}
        >
          {value}
        </button>
        <style jsx>{`
          button {
            border-radius: 0;
          }
        `}</style>
      </div>
    );
  }
}
