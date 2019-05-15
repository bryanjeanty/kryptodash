import { pageTypes } from "./types/page";

export const decrementPage = event => dispatch => {
  if (event) {
    event.preventDefault();
    dispatch({
      type: pageTypes.DECREMENT_PAGE_SUCCESS,
      message: "Page successfully decremented!"
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
    event.preventDefault();
    dispatch({
      type: searchTypes.INCREMENT_PAGE_SUCCESS,
      message: "Page successfully incremented!"
    });
  } else {
    dispatch({
      type: searchTypes.INCREMENT_PAGE_ERROR,
      message: "Page failed to increment!"
    });
  }
};
