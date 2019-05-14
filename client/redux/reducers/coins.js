import { coinTypes } from "../actions/types/coins";
import { coinState } from "../state/coins";

export const coinReducer = (state = coinState, action) => {
  switch (action.type) {
    case coinTypes.FETCHING:
      return {
        ...state,
        isLoading: true
      };
    case coinTypes.GET_CMC_COINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.message,
        cmcCoins: action.payload
      };
    case coinTypes.GET_CMC_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.message
      };
    case coinTypes.GET_USER_COINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.message,
        userCoins: action.payload
      };
    case coinTypes.GET_USER_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.message
      };
    case coinTypes.UPDATE_USER_COINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.message,
        userCoins: action.payload
      };
    case coinTypes.UPDATE_USER_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.message
      };
    default:
      return state;
  }
};
