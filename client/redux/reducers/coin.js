import { coinTypes } from "../actions/types/coin";
import { coinState } from "../state/coin";

export const coinReducer = (state = coinState, action) => {
  switch (action.type) {
    case coinTypes.FETCHING_COINS:
      return {
        ...state,
        coinsLoading: true
      };
    case coinTypes.GET_CMC_COINS_SUCCESS:
      return {
        ...state,
        coinsLoading: false,
        message: action.message,
        cmcCoins: action.payload
      };
    case coinTypes.GET_CMC_COINS_ERROR:
      return {
        ...state,
        coinsLoading: false,
        message: action.message
      };
    case coinTypes.GET_USER_COINS_SUCCESS:
      return {
        ...state,
        coinsLoading: false,
        message: action.message,
        userCoins: action.payload
      };
    case coinTypes.GET_USER_COINS_ERROR:
      return {
        ...state,
        coinsLoading: false,
        message: action.message
      };
    case coinTypes.UPDATE_USER_COINS_SUCCESS:
      return {
        ...state,
        coinsLoading: false,
        message: action.message,
        userCoins: action.payload
      };
    case coinTypes.UPDATE_USER_COINS_ERROR:
      return {
        ...state,
        coinsLoading: false,
        message: action.message
      };
    default:
      return state;
  }
};
