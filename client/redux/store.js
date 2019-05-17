// import npm packages
import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// import reducer and state
import rootReducer from "./reducers/index";
import rootState from "./state/index";

// create function to initialize store
const initializeStore = (initialState = rootState) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

// create boolean to test whether we're on the server
const onServer = typeof window === "undefined";
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

const createReduxStore = initialState => {
  // if we're on server re-initialize store
  if (onServer) {
    return initializeStore(initialState);
  }
  // if redux store isn't on window object, put it there
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
};

export default App => {
  return class AppWithRedux extends Component {
    static async getInitialProps(appContext) {
      // create redux store on the server and set on to props on all pages
      appContext.ctx.reduxStore = createReduxStore();

      // create variable to hold redux store
      const reduxStore = appContext.ctx.reduxStore;

      // take all the props from the app input and put them on the new app_with_redux component
      let appProps = {};
      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      // return all the props from the app input component as props on the app_with_redux component
      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = createReduxStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
