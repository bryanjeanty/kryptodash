import { pageTypes } from "./types/page";

export const setPage = num => dispatch => {
  if (num) {
    dispatch({
      type: pageTypes.SET_PAGE_SUCCESS,
      message: "Page successfully set!",
      payload: num
    });
  } else {
    dispatch({
      type: pageTypes.SET_PAGE_ERROR,
      message: "Page failed to be set!"
    });
  }
};
