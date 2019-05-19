import { pageTypes } from "../actions/types/page";
import { pageState } from "../state/page";

export const pageReducer = (state = pageState, action) => {
  switch (action.type) {
    case pageTypes.SET_PAGE_SUCCESS:
      return {
        ...state,
        message: action.message,
        page: state.page + action.payload,
        offset: state.offset + action.payload * 10
      };
    case pageTypes.SET_PAGE_ERROR:
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
};
