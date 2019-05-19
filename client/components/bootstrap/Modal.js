import React, { Component, Fragment } from "react";

export class Modal extends Component {
  render() {
    const { modalId, title, children, action } = this.props;

    return (
      <Fragment>
        <div className="my-modal">
          <div
            className="modal fade"
            id={modalId}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalScrollableTitle">
                    {title}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                  <input
                    className="btn btn-primary action-btn"
                    name={action.name}
                    type="submit"
                    value={
                      action.name.charAt(0).toUpperCase() + action.name.slice(1)
                    }
                    onClick={action.handleClick}
                  />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .modal-title {
            color: #333;
          }

          .action-btn {
            display: ${action ? "block" : "none"};
          }
        `}</style>
      </Fragment>
    );
  }
}
