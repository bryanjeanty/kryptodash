import App, { Container } from "next/app";
import React, { Fragment } from "react";
import withReduxStore from "../client/redux/store";
import { Provider } from "react-redux";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Fragment>
        <Container>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </Container>
        <style global jsx>{`
          * {
            margin: 0;
            padding: 0;
            text-decoration: 0;
            list-style: 0;
          }

          html,
          body,
          #_next {
            height: 100%;
            width: 100%;
          }
          body {
            background-color: #ddd;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default withReduxStore(MyApp);
