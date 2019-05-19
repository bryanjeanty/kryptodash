import React, { Component, Fragment } from "react";

export class Toast extends Component {
  state = {
    show: true
  };

  componentDidMount() {
    this.setState({ show: this.props.show });
  }

  closeToast = () => {
    this.setState({ show: false });
  };

  render() {
    const { title, message } = this.props;
    const { show } = this.state;

    return (
      <Fragment>
        <div className="toast-container">
          <div
            className={`toast ${show ? "show" : "hide"}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            autohide={`${!show}`}
          >
            <div className="toast-header">
              <strong className="mr-auto">{title}</strong>
              <button
                type="button"
                className="ml-2 mb-1 close"
                data-dismiss="toast"
                aria-label="Close"
              >
                <span aria-hidden="true" onClick={this.closeToast}>
                  &times;
                </span>
              </button>
            </div>
            <div className="toast-body">{message}</div>
          </div>
        </div>
        <style jsx>{`
          .toast-container {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            background-color: #222;
            height: 12rem;
          }
        `}</style>
      </Fragment>
    );
  }
}
