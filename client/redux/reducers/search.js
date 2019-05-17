import { searchTypes } from "../actions/types/search";
import { searchState } from "../state/search";

export const searchReducer = (state = searchState, action) => {
  switch (action.type) {
    case searchTypes.TYPING_SUCCESS:
      return {
        ...state,
        message: action.message,
        input: action.payload
      };
    case searchTypes.TYPING_ERROR:
      return {
        ...state,
        message: action.message
      };
    case searchTypes.FOUND_MATCHES_SUCCESS:
      return {
        ...state,
        message: action.message,
        matches: action.payload
      };
    case searchTypes.FOUND_MATCHES_ERROR:
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
};
