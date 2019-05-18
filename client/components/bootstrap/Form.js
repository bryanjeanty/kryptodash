import React, { Component, Fragment } from "react";

export class Form extends Component {
  render() {
    const { fields } = this.props;

    return (
      <Fragment>
        <div className="card">
          <form>
            {fields ? (
              fields.map(field => (
                <div key={fields.indexOf(field)} className="form-group">
                  <label>{`${field.charAt(0).toUpperCase() +
                    field.slice(1)}`}</label>
                  <input
                    type={
                      field !== "email" || field !== "password"
                        ? "text"
                        : `${field}`
                    }
                    className="form-control"
                    id={`input${field}1`}
                    aria-describedby={`${field}Help`}
                    placeholder={`Enter ${field}`}
                    autoComplete="off"
                  />
                </div>
              ))
            ) : (
              <div className="form-group">
                <label>Generic Field</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter some text..."
                />
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <style jsx>{`
          .card {
            border-radius: 0;
            padding: 1rem;
          }
        `}</style>
      </Fragment>
    );
  }
}
