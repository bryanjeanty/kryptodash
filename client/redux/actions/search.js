import { searchTypes } from "./types/search";
import { findMatches } from "../../functions/index";

export const typing = event => dispatch => {
  if (event) {
    return dispatch({
      type: searchTypes.TYPING_SUCCESS,
      message: "Success",
      payload: event.target.value
    });
  } else {
    return dispatch({
      type: searchTypes.TYPING_ERROR,
      message: "Error"
    });
  }
};

export const performSearch = (input, coins) => dispatch => {
  const matches = findMatches(input, coins);
  if (matches.length !== 0) {
    return dispatch({
      type: searchTypes.FOUND_MATCHES_SUCCESS,
      message: "Found matches",
      payload: matches
    });
  } else {
    return dispatch({
      type: searchTypes.FOUND_MATCHES_ERROR,
      message: "Error"
    });
  }
};
