import React, { Component, Fragment } from "react";

class GridSettings extends Component {
  render() {
    return (
      <Fragment>
        <div className="settings">
          <div className="header">
            <div className="brand">Brand</div>
            <div className="cta-btn">Get Started</div>
          </div>
          <div className="form-container">Form Container</div>
          <div className="footer">
            <div className="secondary">Secondary</div>
            <div className="primary">Primary</div>
          </div>
        </div>
        <style jsx>{`
          .settings {
            background-color: #eee;
            height: 100%;
            width: 85%;
            margin: 0 auto;

            display: grid;
            grid-template-rows: 6rem 32rem 20rem;
            grid-gap: 1.5rem;
          }

          .settings > * {
            background-color: teal;
            color: white;
            font-size: 1.1rem;
            padding: 1rem;
          }

          .header {
            display: flex;
            align-items: center;
          }

          .header > * {
            background-color: orange;
          }

          .brand {
            height: 75%;
            width: 40%;
            margin: 0 auto 0 0;
            padding-left: 0.25rem;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
          }

          .cta-btn {
            height: 60%;
            width: 6.5rem;
            margin: 0 0 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .footer {
            display: grid;
            grid-template-rows: repeat(4, 1fr);
            grid-gap: 1.25rem;
          }

          .footer > * {
            background-color: orange;
          }

          .secondary {
            grid-row: 1 / span 3;
            padding: 0.5rem;
          }

          .primary {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default GridSettings;
