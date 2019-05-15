import { pageTypes } from "../actions/types/page";
import { pageState } from "../state/page";

export const pageReducer = (state = pageState, action) => {
  switch (action.type) {
    case pageTypes.DECREMENT_PAGE_SUCCESS:
      return {
        ...state,
        page: this.state.page - 1,
        offset: this.state.offset - 15,
        message: action.message
      };
    case pageTypes.DECREMENT_PAGE_ERROR:
      return {
        ...state,
        message: action.message
      };
    case pageTypes.INCREMENT_PAGE_SUCCESS:
      return {
        ...state,
        page: this.state.page + 1,
        offset: this.state.offset + 15,
        message: action.message
      };
    case pageTypes.INCREMENT_PAGE_ERROR:
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
};
