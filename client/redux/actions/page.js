import { pageTypes } from "./types/page";

export const decrementPage = event => dispatch => {
  if (event) {
    dispatch({
      type: pageTypes.DECREMENT_PAGE_SUCCESS,
      message: "Page successfully decremented!",
      name: event.target.name
    });
  } else {
    dispatch({
      type: pageTypes.DECREMENT_PAGE_ERROR,
      message: "Page failed to decrement!"
    });
  }
};

export const incrementPage = event => dispatch => {
  if (event) {
    dispatch({
      type: searchTypes.INCREMENT_PAGE_SUCCESS,
      message: "Page successfully incremented!",
      name: event.target.name
    });
  } else {
    dispatch({
      type: searchTypes.INCREMENT_PAGE_ERROR,
      message: "Page failed to increment!"
    });
  }
};
